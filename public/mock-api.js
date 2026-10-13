const mockUsers = [
  { id: 101, name: 'Ana Souza', apartment: 'A-101' },
  { id: 102, name: 'Bruno Lima', apartment: 'B-204' },
  { id: 103, name: 'Carla Mendes', apartment: 'C-302' },
];

const sessionRows = [
  [1001, 101, 7.4, 1.5, 4, 1.9, 52, 'normal'],
  [1002, 102, 11.1, 1.1, 7.8, 2.2, 70, 'normal'],
  [1003, 103, 1.9, 0.2, 1.2, 0.5, 18, 'abrupt_interruption'],
  [1004, 101, 8.6, 2.4, 4.8, 1.4, 61, 'normal'],
  [1005, 102, 9.8, 0.8, 6.7, 2.3, 64, 'normal'],
  [1006, 103, 6.2, 2.1, 2.9, 1.2, 47, 'normal'],
  [1007, 101, 12.4, 2.6, 7.3, 2.5, 78, 'normal'],
  [1008, 102, 4.7, 0.6, 3.2, 0.9, 31, 'normal'],
  [1009, 103, 10.3, 1.8, 6.5, 2, 68, 'normal'],
  [1010, 101, 5.5, 1.7, 2.8, 1, 39, 'normal'],
  [1011, 102, 13.2, 1.5, 9, 2.7, 84, 'normal'],
  [1012, 103, 3.8, 1, 2.1, 0.7, 28, 'normal'],
];

const tariffs = {
  solar: 0.1,
  grid: 1.5,
  battery: 0.8,
  infrastructure: 2,
};

const round = (value, decimals = 2) => Number(value.toFixed(decimals));

function calculateSessionCost(solarKwh, gridKwh, batteryKwh) {
  return round(
    solarKwh * tariffs.solar
      + gridKwh * tariffs.grid
      + batteryKwh * tariffs.battery
      + tariffs.infrastructure,
  );
}

const mockSessions = sessionRows.map(
  ([id, userId, energyKwh, solarKwh, gridKwh, batteryKwh, durationMinutes, status], index) => ({
    id,
    user_id: userId,
    charger_id: index % 4 === 0 ? 'GW_EV_987654322' : 'GW_EV_987654321',
    energy_kwh: energyKwh,
    solar_kwh: solarKwh,
    grid_kwh: gridKwh,
    battery_kwh: batteryKwh,
    duration_minutes: durationMinutes,
    status,
    cost: calculateSessionCost(solarKwh, gridKwh, batteryKwh),
    user: mockUsers.find((user) => user.id === userId),
  }),
);

const sum = (items, selector) => items.reduce((total, item) => total + selector(item), 0);

const costBySource = {
  solar: round(sum(mockSessions, (session) => session.solar_kwh * tariffs.solar)),
  grid: round(sum(mockSessions, (session) => session.grid_kwh * tariffs.grid)),
  battery: round(sum(mockSessions, (session) => session.battery_kwh * tariffs.battery)),
};

const totalKwh = round(sum(mockSessions, (session) => session.energy_kwh));
const totalCost = round(sum(mockSessions, (session) => session.cost));
const forecast = Array.from({ length: 7 }, (_, index) => ({
  day: index + 1,
  kwh: round((totalKwh / 7) * (1 + ((index % 3) - 1) * 0.04)),
  limit: 160,
}));

const mockData = {
  summary: {
    sessions: mockSessions.length,
    total_kwh: totalKwh,
    total_cost: totalCost,
    active_charger: 'GW_EV_987654321',
    charger_status: 'Em uso',
    contracted_kwh_day: 160,
    today_forecast: forecast[0].kwh,
    current_power_kw: 6.8,
    today_kwh: 18.7,
    availability: 99.4,
    co2_avoided_kg: round(totalKwh * 0.42, 1),
  },

  operations: {
    station: {
      name: 'FIAP · Energy Innovation Lab',
      location: 'Aclimação · Estacionamento L1',
      source: 'SEMS / demonstração',
    },
    chargers: [
      {
        id: 'GW_EV_987654321',
        model: 'GoodWe HCA G2',
        status: 'charging',
        power_kw: 6.8,
        voltage_v: 220,
        current_a: 30.9,
        temperature_c: 31.4,
        session_id: 1002,
      },
      {
        id: 'GW_EV_987654322',
        model: 'GoodWe HCA G2',
        status: 'available',
        power_kw: 0,
        voltage_v: 220,
        current_a: 0,
        temperature_c: 27.8,
        session_id: null,
      },
    ],
    network: { connected: true, latency_ms: 42, protocol: 'OCPP 1.6J' },
  },

  telemetry: {
    unit: 'kW',
    points: [8, 10, 12, 14, 16, 18].map((hour, index) => ({
      time: `${hour}:00`,
      power_kw: [3.5, 4.4, 2.8, 3.8, 4.5, 3.2][index],
      energy_kwh: 4.1 + hour * 0.42,
    })),
    energy_mix: {
      solar: round(sum(mockSessions, (session) => session.solar_kwh), 1),
      grid: round(sum(mockSessions, (session) => session.grid_kwh), 1),
      battery: round(sum(mockSessions, (session) => session.battery_kwh), 1),
    },
  },

  users: mockUsers.map((user) => ({
    ...user,
    profile: { label: 'Tipo C — Ocasional' },
  })),
  sessions: mockSessions,

  ai: {
    profiles: mockUsers.map((user) => ({ user, label: 'Tipo C — Ocasional' })),
    forecast,
    anomalies: [{ session_id: 1003, reasons: ['interrupção abrupta'] }],
    recommendations: [
      'Deslocar sessões de pico para 22h–6h',
      'Monitorar a sessão #1003: interrupção abrupta',
      'Usar a tarifa média ponderada quando houver múltiplas origens',
    ],
  },

  sems: {
    connected: true,
    mode: 'sandbox',
    provider: 'GoodWe SEMS (simulado)',
    latency_ms: 42,
  },

  analytics: {
    period: 'últimos 7 dias',
    total_kwh: totalKwh,
    average_session_kwh: round(totalKwh / mockSessions.length),
    peak_power_kw: 7.4,
    utilization_percent: 46.8,
    renewable_percent: round(
      (sum(mockSessions, (session) => session.solar_kwh + session.battery_kwh) / totalKwh) * 100,
      1,
    ),
    estimated_savings_brl: round(sum(mockSessions, (session) => session.grid_kwh) * 0.32),
    co2_avoided_kg: round(totalKwh * 0.42, 1),
    cost_by_source: costBySource,
  },

  alerts: {
    open: 3,
    items: [
      {
        severity: 'high',
        title: 'Interrupção abrupta',
        detail: 'Sessão #1003 encerrou antes do mínimo esperado.',
      },
      {
        severity: 'medium',
        title: 'Demanda próxima do limite',
        detail: 'A previsão de 7 dias atingiu 82% do contrato diário.',
      },
      {
        severity: 'low',
        title: 'Temperatura em observação',
        detail: 'Sensor reportou 31,4 °C; faixa operacional normal.',
      },
    ],
  },

  schedule: {
    slots: [
      {
        time: '08:30',
        user: 'Ana Souza',
        apartment: 'A-101',
        charger_id: 'GW_EV_987654322',
        target_kwh: 7.5,
        priority: 'normal',
        status: 'confirmed',
      },
      {
        time: '12:00',
        user: 'Bruno Lima',
        apartment: 'B-204',
        charger_id: 'GW_EV_987654321',
        target_kwh: 10,
        priority: 'high',
        status: 'queued',
      },
      {
        time: '22:00',
        user: 'Carla Mendes',
        apartment: 'C-302',
        charger_id: 'GW_EV_987654322',
        target_kwh: 5.2,
        priority: 'eco',
        status: 'recommended',
      },
    ],
    load_limit_kw: 11,
    planned_peak_kw: 9.2,
  },
};

const routes = {
  summary: 'summary',
  operations: 'operations',
  telemetry: 'telemetry',
  'ai/insights': 'ai',
  sessions: 'sessions',
  users: 'users',
  'sems/test/status': 'sems',
  analytics: 'analytics',
  alerts: 'alerts',
  schedule: 'schedule',
};

function api(path) {
  const key = path.replace(/^api\//, '').split('?')[0];
  return Promise.resolve(mockData[routes[key]] || {});
}
