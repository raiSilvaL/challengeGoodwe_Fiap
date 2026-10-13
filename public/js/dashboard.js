const $ = (selector) => document.querySelector(selector);

const formatMoney = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

const formatNumber = (value, decimals = 2) =>
  Number(value).toLocaleString("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function updatePageMetadata(sessionCount, semsStatus, totalKwh) {
  const now = new Date();
  const currentTime = now.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  $("#date").textContent = now.toLocaleDateString("pt-BR");
  $("#sync-time").textContent = `Atualizado ${currentTime}`;
  $("#footer-sync").textContent = `última leitura ${currentTime}`;
  $("#sems-status").textContent = semsStatus.connected
    ? "SEMS sandbox conectado"
    : "SEMS desconectado";
  $("#mix-total").innerHTML = `${formatNumber(totalKwh, 1)}<br>kWh`;
  $("#session-count").textContent = `${sessionCount} registros`;
}

function renderKpis(summary) {
  $("#kpis").innerHTML = `
    <div class="card">
      <div class="label">Energia hoje</div>
      <div class="value">${summary.today_kwh} <small>kWh</small></div>
      <div class="detail"><span class="up">+8,2%</span> contra ontem</div>
    </div>
    <div class="card red">
      <div class="label">Potência instantânea</div>
      <div class="value">${summary.current_power_kw} <small>kW</small></div>
      <div class="detail">1 carregador em uso</div>
    </div>
    <div class="card amber">
      <div class="label">Faturamento estimado</div>
      <div class="value">${formatMoney(summary.total_cost)}</div>
      <div class="detail">${summary.sessions} sessões no período</div>
    </div>
    <div class="card">
      <div class="label">CO₂ evitado</div>
      <div class="value">${summary.co2_avoided_kg} <small>kg</small></div>
      <div class="detail"><span class="up">Energia mais limpa</span></div>
    </div>
  `;
}

function renderOperationalMetrics(summary, operations) {
  $("#metrics").innerHTML = `
    <div class="metric">
      <b>${operations.chargers.length}</b>
      <span>carregadores</span>
    </div>
    <div class="metric">
      <b>${summary.availability}%</b>
      <span>disponibilidade</span>
    </div>
    <div class="metric">
      <b>${operations.network.latency_ms} ms</b>
      <span>latência SEMS</span>
    </div>
  `;
}

function renderPowerChart(telemetry) {
  const maxPower = Math.max(...telemetry.points.map((point) => point.power_kw));

  $("#chart").innerHTML = telemetry.points
    .map((point) => {
      const height = Math.max(12, (point.power_kw / maxPower) * 100);
      return `
        <div class="barwrap">
          <div class="bar" style="height:${height}%" title="${point.power_kw} kW"></div>
          <span>${point.time}</span>
        </div>
      `;
    })
    .join("");
}

function renderEnergyMix(telemetry) {
  const sources = [
    ["Solar", telemetry.energy_mix.solar, "baixo custo"],
    ["Rede", telemetry.energy_mix.grid, "tarifa variável"],
    ["Bateria", telemetry.energy_mix.battery, "reserva"],
  ];

  $("#mix").innerHTML = sources
    .map(
      ([name, energy, description]) => `
        <div class="mixrow">
          <span>${name} <small class="sub">(${description})</small></span>
          <b>${energy} kWh</b>
        </div>
      `,
    )
    .join("");
}

function renderChargers(chargers) {
  $("#chargers").innerHTML = chargers
    .map(
      (charger) => `
        <div class="charger">
          <div class="charger-head">
            <div>
              <div class="charger-title">${escapeHtml(charger.model)}</div>
              <div class="charger-id">${escapeHtml(charger.id)}</div>
            </div>
            <span class="tag ${charger.status === "charging" ? "" : "gray"}">
              ${charger.status === "charging" ? "Em uso" : "Disponível"}
            </span>
          </div>
          <div class="telemetry">
            <div><b>${charger.power_kw}</b><span>kW potência</span></div>
            <div><b>${charger.voltage_v}</b><span>V tensão</span></div>
            <div><b>${charger.temperature_c}°</b><span>temperatura</span></div>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderForecast(forecast) {
  $("#forecast").innerHTML = forecast
    .map((day, index) => {
      const label = index === 0 ? "Hoje" : `D+${index}`;
      const width = Math.min(100, (day.kwh / day.limit) * 100);

      return `
        <div class="forecast-row">
          <label>${label}</label>
          <div class="track"><i style="width:${width}%"></i></div>
          <b>${day.kwh} kWh</b>
        </div>
      `;
    })
    .join("");
}

function renderInsights(ai) {
  const recommendations = ai.recommendations.map(
    (recommendation) =>
      `<div class="insight">${escapeHtml(recommendation)}</div>`,
  );
  const anomalies = ai.anomalies.map(
    (anomaly) =>
      `<div class="insight alert">Sessão #${anomaly.session_id}: ${escapeHtml(anomaly.reasons.join(", "))}.</div>`,
  );

  $("#insights").innerHTML = [...recommendations, ...anomalies].join("");
}

function renderAnalytics(analytics) {
  $("#analytics").innerHTML = `
    <div class="metric"><b>${analytics.renewable_percent}%</b><span>energia renovável</span></div>
    <div class="metric"><b>${analytics.utilization_percent}%</b><span>utilização</span></div>
    <div class="metric"><b>R$ ${analytics.estimated_savings_brl.toFixed(2).replace(".", ",")}</b><span>economia estimada</span></div>
  `;

  $("#sources").innerHTML = `
    <div class="chart-legend">
      <span><i></i>Solar + bateria: ${analytics.renewable_percent}%</span>
      <span><i class="amber"></i>Rede: ${analytics.cost_by_source.grid.toFixed(2).replace(".", ",")} BRL</span>
    </div>
  `;
}

function renderAlerts(alerts) {
  $("#alert-count").textContent = `${alerts.open} abertos`;
  $("#alerts").innerHTML = alerts.items
    .map(
      (alert) => `
        <div class="insight ${alert.severity === "high" ? "alert" : ""}">
          <b>${escapeHtml(alert.title)}</b><br />
          ${escapeHtml(alert.detail)}
        </div>
      `,
    )
    .join("");
}

function renderSchedule(schedule) {
  $("#schedule-peak").textContent =
    `Pico ${schedule.planned_peak_kw} / ${schedule.load_limit_kw} kW`;
  $("#schedule").innerHTML = schedule.slots
    .map(
      (slot) => `
        <tr>
          <td><b>${slot.time}</b></td>
          <td>${escapeHtml(slot.user)}<br /><span class="sub">${escapeHtml(slot.apartment)}</span></td>
          <td>${escapeHtml(slot.charger_id)}</td>
          <td>${slot.target_kwh} kWh</td>
          <td>${escapeHtml(slot.priority)}</td>
          <td>${escapeHtml(slot.status)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderSessions(sessions) {
  $("#sessions").innerHTML = sessions
    .map(
      (session) => `
        <tr>
          <td><b>#${session.id}</b></td>
          <td>${escapeHtml(session.user.name)}<br /><span class="sub">${escapeHtml(session.user.apartment)}</span></td>
          <td>${escapeHtml(session.charger_id)}</td>
          <td>${session.energy_kwh} kWh</td>
          <td>${session.duration_minutes} min</td>
          <td class="${session.status === "normal" ? "" : "danger"}">
            ${session.status === "normal" ? "Normal" : "Interrupção abrupta"}
          </td>
          <td class="amount">${formatMoney(session.cost)}</td>
        </tr>
      `,
    )
    .join("");
}

async function loadDashboard() {
  const [
    summary,
    operations,
    telemetry,
    ai,
    sessions,
    sems,
    analytics,
    alerts,
    schedule,
  ] = await Promise.all([
    api("summary"),
    api("operations"),
    api("telemetry"),
    api("ai/insights"),
    api("sessions"),
    api("sems/test/status"),
    api("analytics"),
    api("alerts"),
    api("schedule"),
  ]);

  updatePageMetadata(sessions.length, sems, summary.total_kwh);
  renderKpis(summary);
  renderOperationalMetrics(summary, operations);
  renderPowerChart(telemetry);
  renderEnergyMix(telemetry);
  renderChargers(operations.chargers);
  renderForecast(ai.forecast);
  renderInsights(ai);
  renderAnalytics(analytics);
  renderAlerts(alerts);
  renderSchedule(schedule);
  renderSessions(sessions);
}

loadDashboard();
