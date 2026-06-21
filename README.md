# EV ChargeOps: Plataforma Inteligente de Gestão de Recarga Compartilhada

## 1.RMs dos Integrantes

| Nome | RM | Email |
|------|----|---------|
| Rai da Silva Lima | RM572070 | raierai123456789@gmail.com |
| Pietra Fanticelli | RM573229 | pf.pietrafanticelli@gmail.com |
| Samuel Felipe Furtado Freire | RM572777 | nekolorful@gmail.com |
| Marcos Junio Benevenuto Silva | RM570834 | preesgamebenevenuto@gmail.com |
| Ellen Kauane Rodrigues Alves | RM570885 | ellenzinha.kauane@gmail.com |

---

## 2. Descrição do Problema e Contexto do Desafio

### 2.1 Contexto Geral

A **GoodWe**, líder global em inversores e armazenamento de energia, mantém uma parceria estratégica com a **FIAP** através do Energy Innovation Lab (Unidade Aclimação). Como parte dessa colaboração, um carregador de veículos elétricos (modelo HCA G2) está instalado e operacional no estacionamento L1 da unidade. O desafio surge no cenário de crescimento acelerado da mobilidade elétrica no Brasil.

### 2.2 O Problema Central

Embora a infraestrutura de recarga esteja se expandindo, ambientes de uso coletivo — como condomínios residenciais, edifícios corporativos e campus universitários — enfrentam dificuldades críticas para gerir esses recursos de forma eficiente e transparente.

Atualmente, a maioria das infraestruturas de recarga compartilhada carece de mecanismos integrados para:

**Identificação por Usuário:** Sem autenticação integrada, não há como saber quem está carregando o veículo. Isso leva a conflitos sobre responsabilidade de pagamento e impossibilita cobranças individualizadas.

**Cálculo de Consumo Individual:** A ausência de medição precisa e automatizada do volume de energia (kWh) entregue por sessão torna impossível ratear custos de forma justa. Muitos condomínios ainda usam métodos manuais e propensos a erros.

**Rateio Justo:** Falta de regras claras e automatizadas para distribuir os custos de energia e manutenção entre os usuários. Diferentes moradores têm padrões de consumo distintos, exigindo algoritmos sofisticados para justiça.

**Inteligência Operacional:** Os dados gerados (duração, picos de uso, ociosidade) não são aproveitados para otimizar a operação ou prever demandas futuras. Sem análise preditiva, gestores não conseguem antecipar sobrecargas ou planejar manutenção.

### 2.3 Dados de Mercado e Urgência

O mercado brasileiro terminou 2025 com **223.912 unidades de veículos elétricos vendidas**, crescimento de **26% sobre o ano anterior**. Nos dois primeiros meses de 2026 foram emplacados **48.591 carros**, **90% mais** que no mesmo bimestre do ano passado [1]. O número de licenciamentos acumulados de veículos elétricos passou de 1.900 em 2020 para mais de 215.000 em 2024, aumento de mais de **100 vezes em apenas cinco anos** [2].

Essa explosão de demanda torna a questão urgente: gestores de condomínios precisam de soluções robustas para gerenciar a recarga compartilhada sem risco de sobrecarga elétrica, conflitos entre moradores ou falta de transparência no faturamento.

### 2.4 A Solução Proposta

O **EV ChargeOps** propõe solucionar esse gargalo transformando dados brutos de recarga em informações estruturadas e inteligência acionável, utilizando a **Inteligência Artificial** como motor lógico para garantir uma gestão eficiente e uma experiência digital clara para gestores e usuários.

---

## 3. Resultados das Três Frentes de Pesquisa

### 3.1 Frente 1: Contexto e Problema

#### 3.1.1 O que são Infraestruturas de Recarga Compartilhada

Uma infraestrutura de recarga compartilhada é um conjunto de equipamentos (carregadores, quadros elétricos, cabos, medidores e sistemas de software) instalado em área comum — garagem de condomínio, estacionamento corporativo, campus universitário — e utilizado por múltiplos usuários, seja em vagas rotativas ou em vagas fixas individualmente atribuídas.

Difere da recarga residencial individual precisamente porque o ativo é coletivo: a decisão de instalar, o custo da obra, a gestão operacional e o rateio do consumo envolvem mais de um agente.

#### 3.1.2 Desafios Operacionais dos Gestores

Gestores de condomínios, edifícios corporativos e campus universitários enfrentam cinco desafios críticos e interconectados:

**1. Capacidade Elétrica da Edificação**

Muitos condomínios têm negado pedidos de moradores para instalar carregadores, alegando riscos de sobrecarga elétrica, incêndio e impacto na coletividade. Em 2024 e 2025, pelo menos **sete ações judiciais** foram ajuizadas por proprietários de carros elétricos que tiveram seus pedidos negados em assembleias condominiais [3]. Prédios antigos são os mais vulneráveis: para prédios antigos, a viabilidade técnica deve ser avaliada por um especialista em engenharia elétrica, que determinará se é possível adaptar a estrutura para suportar os novos pontos de carregamento. O EV ChargeOps mitiga esse risco através da análise preditiva de demanda, alertando o gestor antes de ultrapassagens.

**2. Necessidade de Carregadores Inteligentes com Gestão de Carga**

A energia disponível no condomínio pode não ser suficiente para carregar vários veículos elétricos ao mesmo tempo. A implementação de um sistema de gestão de carga é necessária para garantir que a energia seja distribuída de forma equitativa, evitando problemas com a infraestrutura elétrica do prédio. Muitas pessoas acreditam que qualquer wallbox é inteligente, mas se o carregador não tiver funcionalidades como o protocolo **OCPP** e a **modulação de corrente**, ele não poderá atender adequadamente às demandas de um condomínio [4]. O EV ChargeOps resolve isso através de orquestração inteligente de carga baseada em IA.

**3. Regulação Fragmentada e Responsabilidade Jurídica**

Em 2025, foi publicada uma diretriz nacional do Corpo de Bombeiros sobre **SAVE** (Sistemas de Alimentação de Veículos Elétricos), estabelecendo parâmetros gerais para todo o país. Essa diretriz, porém, não é autoaplicável: ela depende de regulamentação específica por cada Estado, já que as Instruções Técnicas e os requisitos para emissão do AVCB são de competência estadual. Isso cria um ambiente de incerteza para síndicos e gestores, que passam a avaliar com maior cautela o risco de responsabilização civil ou criminal caso autorizem instalações que futuramente se revelem inadequadas [5]. O EV ChargeOps foi projetado em conformidade com a RN ANEEL 1.000/2021 e suporta protocolos abertos (OCPP), reduzindo riscos regulatórios.

**4. Escalonabilidade**

Os condomínios podem encontrar modelos de compartilhamento e utilizar softwares que distribuem as cargas entre os diversos carregadores, mas isso exige planejamento desde a fase de projeto. A solução mais recomendada por especialistas é pensar em infraestrutura escalável: a recarga veicular não deve ser tratada na base do improviso, pois envolve engenharia aplicada, gestão de carga, conformidade com a IT-41 e responsabilidade técnica do projeto à operação [6]. O EV ChargeOps foi arquitetado para escalar de 1 a 100+ carregadores sem perda de performance.

**5. Tomada de Decisão Coletiva**

Se aprovarem a instalação, todos os moradores do condomínio dividirão o custo da infraestrutura, como ocorre com outras despesas comuns. Por outro lado, os condôminos que utilizarem os carregadores devem arcar individualmente com o custo da recarga de seus veículos. Conciliar o interesse de quem tem carro elétrico com o de quem não tem é um dos principais atritos de governança [7]. O EV ChargeOps oferece transparência total através de relatórios detalhados e faturamento automatizado, reduzindo conflitos.

#### 3.1.3 Como Funciona uma Sessão de Recarga: Percurso Técnico

Uma sessão de recarga envolve três camadas de comunicação simultâneas: entre o veículo e o carregador, entre o carregador e o sistema de gestão na nuvem, e entre o sistema de gestão e o usuário (app ou cartão). Cada camada opera com protocolos próprios.

**Etapa 1 — Conexão Física e Handshake Elétrico (IEC 61851)**

Quando o cabo é inserido, o carregador detecta a presença do veículo por meio de um sinal de piloto de controle (CP, control pilot) definido pela norma **IEC 61851**. A comunicação entre o EV e o carregador é mínima nessa fase, usando um protocolo básico de modulação por largura de pulso (PWM) que garante que a recarga ocorra sem problemas técnicos. O nível de tensão no fio CP indica o estado da conexão: veículo detectado, pronto para carregar ou em recarga ativa [8].

**Etapa 2 — Autenticação do Usuário (OCPP + ISO 15118)**

O carregador precisa saber quem está carregando antes de liberar energia. O usuário é validado por cartão RFID, aplicativo, AutoCharge/placa MAC ou cartão EMV. Em sistemas mais avançados com **ISO 15118**, existe o Plug & Charge: ao contrário do Mode 3, é um protocolo extenso para comunicar informações entre carregador e EV, e introduz um mecanismo de autenticação chamado Plug-and-Charge para identificar e autenticar o EV automaticamente [9].

**Etapa 3 — Comunicação Carregador ↔ Sistema Central (OCPP)**

O **Open Charge Point Protocol (OCPP)** é um protocolo de comunicação aberto que padroniza a troca de informações entre estações de recarga de veículos elétricos (EVSEs) e sistemas de gerenciamento centralizados (CMS). Criado pela Open Charge Alliance (OCA), o OCPP se tornou referência global na infraestrutura de mobilidade elétrica por garantir interoperabilidade entre diferentes marcas de carregadores e plataformas de gestão [10].

A comunicação entre o EVSE e o Central System é feita por meio de mensagens OCPP trocadas em tempo real. Essas mensagens contêm informações vitais como o status do carregador, o nível de potência da recarga, o início e término da sessão de carregamento e outras informações relevantes para a gestão da infraestrutura de recarga.

O fluxo típico de uma sessão no **OCPP 1.6** é: o sistema central envia um `RemoteStartTransaction` ao carregador; o carregador verifica a autorização (`Authorize`), libera o conector e confirma com `StartTransaction`; durante a carga, envia `MeterValues` a cada 30 segundos. No **OCPP 2.0.1**, tudo foi unificado em `TransactionEvent` com fases (Started/Updated/Ended), sequência e compactação opcional de WebSocket para reduzir dados [11].

**Etapa 4 — Dados Gerados Durante a Sessão**

Durante uma sessão ativa, o carregador gera e transmite ao sistema central um conjunto rico de dados:

| Dado | Descrição |
|------|-----------|
| **Energia entregue (kWh)** | Leitura do medidor embutido, enviada periodicamente via MeterValues |
| **Potência instantânea (kW)** | Potência ativa em cada intervalo de amostragem |
| **Tensão e corrente** | Por fase (monofásico ou trifásico) |
| **SoC do veículo** | Estado de carga da bateria, se o veículo informar via ISO 15118 |
| **ID da transação** | Chave única para rastreabilidade e faturamento |
| **Timestamp de início e fim** | Para cálculo de duração e cobrança por tempo |
| **ID do usuário/token** | RFID, identificador de app ou certificado digital |
| **Status do conector** | Available, Preparing, Charging, Finishing, Faulted |
| **Alertas e falhas** | Erros de comunicação, sobretensão, temperatura, etc |

O protocolo define formas de controlar quem pode efetuar um carregamento e também prevê o envio de todos os dados de todas as sessões de carregamento ao sistema central responsável pela rede [12].

**Etapa 5 — Smart Charging e Gestão de Demanda**

Em ambientes compartilhados, o sistema central não é passivo. O OCPP possibilita a adoção de práticas de resposta da demanda, onde os carregadores podem ajustar dinamicamente a taxa de carregamento com base nas necessidades da rede elétrica em horários de pico de consumo. Isso ajuda a equilibrar a carga na rede e evitar sobrecargas. Na prática, o CSMS monitora a potência total do condomínio em tempo real e redistribui a corrente disponível entre os carregadores ativos — garantindo que a demanda contratada com a distribuidora não seja ultrapassada [13].

**Etapa 6 — Encerramento e Geração do Registro (CDR)**

Ao término da sessão (por desconexão física, comando do usuário ou limite atingido), o carregador envia um `StopTransaction` com o valor final do medidor. O sistema central gera um **CDR (Charge Detail Record)** — equivalente ao "extrato" da sessão — contendo todos os dados acima consolidados, que serve como base para faturamento, rateio e auditoria [14].

#### 3.1.4 Modelos de Negócio para Recarga Compartilhada: Brasil e Mundo

O ecossistema de recarga organiza-se em torno de dois papéis principais: o **CPO (Charge Point Operator)**, que opera o hardware, e o **eMSP (e-Mobility Service Provider)**, que oferece serviços ao usuário final. O eMSP simplifica a experiência do usuário e garante interoperabilidade entre redes diversas, gerando receita por meio de taxas de serviço, modelos de assinatura ou margens sobre sessões de recarga [15].

**Modelo 1 — Recarga Gratuita como Amenidade (Free-to-Use)**

Como funciona: O proprietário do local (shopping, empresa, campus universitário) absorve o custo da energia como parte de sua estratégia de atração de clientes ou de benefício corporativo. Não há cobrança ao usuário.

Onde é usado: Muito comum em varejistas, estacionamentos de hotéis e empresas com programas de sustentabilidade. No modelo de livre acesso, não há cobrança pela recarga e o lucro se dá pela concessão do local de recarga para outros serviços, como lojas, mercados e restaurantes.

Limitações: Sem gestão ativa, gera uso prolongado das vagas (overstaying) e não é escalável quando a demanda cresce. Empresas que adotam esse modelo geralmente o combinam com um limite de tempo ou de kWh por sessão.

**Modelo 2 — Cobrança por kWh Consumido**

Como funciona: O usuário paga exatamente pela energia que transferiu ao veículo, medida pelo medidor do carregador. É o modelo mais transparente e justo do ponto de vista do consumo.

Onde é usado: O carregamento público tipicamente segue um modelo de pagamento por uso determinado pela tarifa de kWh da rede. Na Europa, carregadores DC podem custar até EUR 0,70/kWh enquanto os AC geralmente partem de EUR 0,25/kWh.

No Brasil: Plataformas como WEG (WEMOB®), EZVolt e NeoCharge operam nesse modelo. A WEG disponibiliza ferramentas de monitoramento, permitindo ao proprietário da estação acompanhar em tempo real o desempenho, status e consumo energético, sendo ideais para ambientes como condomínios onde a gestão compartilhada é necessária [16].

Limitação regulatória no Brasil: A ANEEL classifica a revenda de energia como atividade regulada, o que historicamente criou incerteza sobre a licitude de cobrar por kWh em locais privados. Esse cenário tem evoluído com regulamentações específicas do setor [17].

**Modelo 3 — Cobrança por Tempo (Por Minuto ou Por Hora)**

Como funciona: O usuário paga pela duração da sessão, independentemente de quanta energia transferiu. Bastante usado em locais onde o tempo de ocupação da vaga é mais crítico que o consumo.

Onde é usado: CPOs podem usar tarifas por minuto para locais de alta rotatividade, e taxas de ociosidade (idle fees) que penalizam o carro que permanece conectado após a conclusão da recarga, incentivando o giro das vagas [18].

Desvantagem: Prejudica veículos com baterias maiores (que carregam mais lentamente em relação ao tempo pago) e não reflete o custo real de energia.

**Modelo 4 — Assinatura Mensal (Subscription)**

Como funciona: O usuário paga uma mensalidade fixa e obtém acesso a condições preferenciais — kWh com desconto, número de sessões incluídas, acesso a múltiplas redes em roaming.

Tendência global: Mais CPOs estão introduzindo modelos de assinatura. De cinco opções de assinatura HPC testadas, **74% dos futuros motoristas de VE demonstram interesse em uma "mini-assinatura de recarga"**. Entretanto, os CPOs precisam calibrar cuidadosamente o número de planos, as mensalidades e os preços por kWh para que a oferta tenha sucesso [19].

No Brasil: O modelo de fidelização por taxa fixa consiste em cobrança mensal em troca da utilização da rede de recarga, oferecendo outros serviços como manutenção e assistência técnica. Empresas como VoltBras e plataformas de gestão de frotas adotam variações desse modelo para clientes corporativos [20].

**Modelo 5 — Rateio Condominial**

Como funciona: O condomínio instala os carregadores como infraestrutura comum e reparte os custos entre os moradores que os utilizam, com medição individual por sessão.

Modalidades no Brasil:
* **Inclusão na taxa condominial:** o sistema de gerenciamento emite um relatório mensal ao condomínio informando o consumo individual, e cada usuário recebe um relatório com seu histórico de recargas do período.
* **Cobrança por ciclo de recarga:** toda recarga é cobrada por débito automático em cartão de crédito cadastrado no momento em que a recarga é finalizada.
* **Cartões pré-pagos:** moradores compram créditos para usar os carregadores compartilhados.

Governança: O controle do tempo de uso e consumo de energia de cada veículo pode ser feito por aplicativo, cartão ou sistema de agendamento interno, permitindo uma cobrança proporcional entre os usuários [21].

**Modelo 6 — CPO Terceirizado com Revenue Share (Sem Custo Inicial ao Condomínio)**

Como funciona: Uma empresa especializada (CPO) instala, opera e mantém os carregadores sem custo inicial para o condomínio. A receita das sessões é dividida entre o CPO e o condomínio (ou o condomínio recebe os carregadores gratuitamente em troca de ceder o espaço).

Exemplo no Brasil: A **EZVolt** propõe implantar a solução de recarga em condomínios sem custos iniciais, ficando a cargo da empresa a manutenção, operação e custo da energia elétrica, enquanto cada morador paga somente pela sua recarga [22].

Vantagem para o gestor: Elimina o risco financeiro e operacional do condomínio. Desvantagem: menor controle sobre precificação e dependência de um único fornecedor.

**Tabela Comparativa dos Modelos**

| Modelo | Quem Paga | Vantagem Principal | Melhor Para |
|--------|-----------|-------------------|------------|
| Gratuito | Proprietário do local | Atração de clientes, benefício ESG | Varejo, corporativo, universidades |
| Por kWh | Usuário | Justa, proporcional ao consumo | Condomínios, público geral |
| Por tempo | Usuário | Simples, incentiva rotatividade | Estacionamentos de alta demanda |
| Assinatura | Usuário (mensalidade) | Previsibilidade, fidelidade | Frotas, heavy users |
| Rateio condominial | Usuários do condomínio | Integrado à gestão existente | Condomínios residenciais |
| CPO terceirizado | Usuário (via CPO) | Zero CapEx para o gestor | Condomínios sem capital inicial |

#### 3.1.5 Análise de Mercado: Soluções Comparáveis ao EV ChargeOps (Opção A)

**3.1.5.1 Zaptec Pro**

**Origem:** Noruega · Fundada 2012 · Classificação: Internacional

**Problema que resolve:** Recarga compartilhada em condomínios e edifícios de múltiplas unidades com limitação de capacidade elétrica instalada.

**Funcionalidades principais:**
* Balanceamento de fase dinâmico entre carregadores
* Até 22 kW por conector, escala para 100 veículos/circuito/dia
* Instalação single-cable: reduz cabeamento em até 70%
* Portal de gestão + app Zaptec para monitoramento
* OCPP nativo (Go 2), V2G ready, suporte solar

**Modelo de negócio:** Venda de hardware + licença de software de gestão. Receita recorrente via plataforma de monitoramento e atualizações de firmware. Revenda B2B por instaladores certificados.

**Limitações conhecidas:**
* Sem presença comercial direta no Brasil
* Compatibilidade com padrão plug brasileiro (IEC 62196 Tipo 2 vs. padrões locais) exige adaptação
* Zaptec Go não oferece compatibilidade com tarifas dinâmicas de energia
* Suporte pós-venda depende de rede de instaladores; reclamações de demora em diagnósticos remotos

**Como funciona tecnicamente:** O sistema Pro usa um único cabo de comunicação percorrendo todas as unidades em daisy-chain. Um controlador central redistribui a corrente disponível entre os carregadores ativos em tempo real, sem nunca ultrapassar o limite contratado com a distribuidora. O sistema é especialmente desenhado para cooperativas habitacionais, edificações multifamiliares e grandes estacionamentos, e pode carregar até 100 carros por circuito por dia [23].

**Gap para o Brasil:** Nenhuma presença comercial direta. Os padrões de plug e tensão da rede brasileira (predominantemente 127/220 V com terra flutuante em muitas edificações antigas) exigem adaptações não previstas no produto-padrão europeu [24].

**3.1.5.2 Wallbox Pulsar Plus**

**Origem:** Espanha · Fundada 2015 · NYSE: WBX · Classificação: Internacional com presença BR

**Problema que resolve:** Recarga inteligente em residências, condomínios e frotas, com gestão compartilhada de múltiplas unidades e integração solar.

**Funcionalidades principais:**
* Power sharing entre até 25 unidades em circuito único
* App myWallbox: agendamento, histórico, cobrança por usuário
* Power Boost (gestão de demanda domiciliar) e Eco-Smart (integração solar)
* Wi-Fi, Bluetooth, RFID, voz (Alexa/Google)
* Pulsar Pro (versão B2B): 4G, RFID, IP55, IK10

**Modelo de negócio:** Venda de hardware (Pulsar Plus ~USD 400–650). Software de gestão incluído. Revenue adicional via gateway de pagamento para condomínios cobrarem sessões automaticamente por cartão.

**Limitações conhecidas:**
* Cabos falham em temperaturas extremas (abaixo de 0 °C)
* LED frontal indimível pode ser incômodo em garagens fechadas
* Mais caro que concorrentes de mesma potência
* Faturamento direto por usuário ainda em expansão (não disponível em todos mercados)
* Empresa reportou prejuízo GAAP em 2024; risco de descontinuidade de suporte

**Diferenciais técnicos:** É possível vincular até 25 unidades Pulsar Plus juntas, tornando-o uma solução plausível para condomínios dispostos a investir em infraestrutura elétrica. O app myWallbox permite que múltiplos usuários paguem e acompanhem a recarga individualmente. A função de power sharing permite que múltiplas unidades compartilhem um único circuito de forma inteligente [25].

**Oportunidade identificada:** A Wallbox planeja introduzir a capacidade de cobrar diretamente usuários que compartilham as unidades, o que seria uma solução perfeita para apartamentos, condomínios e recarga corporativa — mas esse recurso ainda está em implantação nos mercados latinos [26].

**3.1.5.3 ChargePoint (CPaaS)**

**Origem:** EUA · Fundada 2007 · NYSE: CHPT · Classificação: Internacional

**Problema que resolve:** Gestão centralizada de grandes redes de recarga corporativa e pública, eliminando CapEx via modelo de serviço.

**Funcionalidades principais:**
* ChargePoint as a Service (CPaaS): hardware + software + instalação + suporte por assinatura anual
* +352.000 portas gerenciadas globalmente (abril 2025)
* Plataforma em nuvem com roaming entre redes parceiras
* Integração com frotas (Amazon, UPS), EMS e Eaton
* Subscription margin de 63% (Q3 FY2025)

**Modelo de negócio:** SaaS/Hardware-as-a-Service: planos de 3 e 5 anos. Receita de subscrição cresceu 27% YoY (Q1 FY2025) e já representa 40% da receita total. ChargePoint retém propriedade do hardware.

**Limitações conhecidas:**
* Sem operação direta no Brasil / América Latina
* Prejuízo GAAP acumulado de USD 282,9 M em FY2025; modelo ainda pré-lucrativo
* Foco em grandes instalações corporativas; pouco adaptado a condomínios menores
* Lock-in de plataforma: mudança de fornecedor exige substituição de hardware
* Fim de venda (EoS) de alguns planos CPaaS antigos em agosto 2024

**O modelo CPaaS:** A ChargePoint retém a propriedade do hardware e fornece tudo que é necessário — hardware, software, instalação e setup — por uma taxa anual reduzida. O monitoramento proativo das estações garante que nunca fiquem tecnicamente obsoletas. Os acordos CPaaS são estruturados em termos de 3 e 5 anos. A receita de assinatura representou 40% da receita total no terceiro trimestre do FY2025, atingindo USD 42 milhões, com margem de assinatura recorde de 63% [27].

**3.1.5.4 NeoCharge**

**Origem:** Brasil · Fundada ~2016 · Classificação: 100% Nacional

**Problema que resolve:** Recarga em condomínios, empresas e comércios no Brasil, com gestão e cobrança individualizadas e conformidade com normas locais (INMETRO, ABNT).

**Funcionalidades principais:**
* Plataforma de gestão web + app: status em tempo real, alertas, métricas de uso
* Relatórios de consumo individual para rateio condominial
* Solução end-to-end: equipamento + instalação + monitoramento + suporte
* NeoCharge Partners: financiamento em até 36 meses para comércios
* Crescimento de 70% em 2025; acima de 480 mil VEs em circulação no Brasil

**Modelo de negócio:** Venda de hardware + software (software gratuito no plano Partners). No Partners: financiamento em 36x com desconto de até 50%, e NeoCharge retém % sobre o faturamento das sessões. Receita também via manutenção.

**Limitações conhecidas:**
* Plataforma menos madura que soluções internacionais em funcionalidades avançadas (V2G, tarifas dinâmicas)
* Cobertura de suporte técnico concentrada nas capitais
* Interoperabilidade com outras redes (OCPI/roaming) ainda limitada
* Ainda sem opção robusta de agendamento de vagas

**Posicionamento:** Principal player nacional focado em soluções integradas. A NeoCharge encerrou 2025 com crescimento de 70%, fornecendo desde o equipamento até a instalação, monitoramento em tempo real, suporte remoto e gestão do consumo de energia [28].

**NeoCharge Partners:** O programa oferece condições acessíveis de financiamento, suporte técnico completo e um modelo que transforma o carregador em uma nova fonte de receita. A empresa fornece a infraestrutura com financiamento em até 36 meses, por um valor até 50% menor que o custo de mercado. Em contrapartida, a NeoCharge retém apenas uma pequena porcentagem sobre o faturamento gerado [29].

**Plataforma de gestão:** A plataforma permite saber rapidamente se as estações estão disponíveis, em uso ou indisponíveis. Com monitoramento remoto em tempo real, emite avisos quando há problemas. Oferece métricas de recargas totais, taxa de uso, energia consumida, conectores mais usados e clientes totais [30].

**3.1.5.5 Copel (Eletrovia + Tarifa Mobiflex)**

**Origem:** Brasil · Concessionária Pública · PR · Classificação: Nacional / Regulatório

**Problema que resolve:** Infraestrutura de recarga rodoviária (corredor BR-277) e incentivo tarifário para deslocar recarga residencial para fora do horário de pico.

**Funcionalidades principais:**
* Eletrovia: 12+ postos de recarga rápida em 730 km (BR-277, PR)
* Tarifa Mobiflex: desconto de até 12% na conta de luz para quem carrega entre 0h–6h
* Norma técnica NTC 902210: padrão mínimo para conexão de pontos de recarga em condomínios do Paraná
* Integração com startup Move para gestão unificada de eletropostos via OCPP
* Sandbox tarifário autorizado pela ANEEL (Resolução 966/2021 + RA 15.400/2024)

**Modelo de negócio:** Concessão regulada: receita via tarifa de energia + projeto-piloto de tarifa diferenciada (Mobiflex). Não é CPO privado — atua como enabler regulatório.

**Limitações conhecidas:**
* Tarifa Mobiflex ainda é piloto com vagas limitadas; não escalonada ainda
* Cobertura geográfica restrita ao Paraná (e corredor PR/SC)
* Não oferece solução de software de gestão de condomínio end-to-end
* Ritmo de inovação limitado pela burocracia regulatória (aprovações ANEEL)

**Eletrovia e Tarifa Mobiflex:** Diferente das demais, a Copel não é um CPO privado — é uma concessionária de distribuição que atua como habilitadora regulatória e de infraestrutura para o ecossistema de eletromobilidade no Paraná. A Eletrovia é rede de recarga rápida ao longo da BR-277 (730 km), com foco em viagens interurbanas. A Tarifa Mobiflex é projeto-piloto autorizado pela ANEEL que oferece desconto de até 12% na conta de luz para usuários que carregam entre meia-noite e 6h da manhã, realizado em parceria com as empresas Daimon e Essenz. Essa é uma inovação regulatória relevante: ao usar um sandbox tarifário, a Copel testa um mecanismo de demand response para EVs — reduzindo o pico noturno criado pela concentração de recargas [31].

**Norma técnica (NTC 902210):** Estabelece as exigências mínimas para a conexão de pontos de recarga em estacionamentos e condomínios residenciais e de comércio à rede elétrica, recomendando no mínimo 2% das vagas para veículos elétricos e infraestrutura de eletrodutos para até 25% das vagas totais [32].

#### 3.1.6 Gaps Identificados — Oportunidade para EV ChargeOps

* **Adaptação regulatória BR:** Soluções internacionais ignoram IT-41, NTC 902210 e Lei 18.403/SP; há espaço para uma plataforma nativa.
* **Gestão de conflito coletivo:** Nenhuma solução resolve a fricção de governança condominial (assembleias, aprovações, auditoria).
* **Agendamento de vagas:** Ausente ou rudimentar em todas as soluções analisadas para o contexto de vagas compartilhadas.
* **Rateio automático integrado:** Soluções locais exportam relatórios manuais; integração direta com gestão condominial é inexistente.
* **Modelo sem CapEx acessível:** CPaaS não chegou ao Brasil; o gap de financiamento zero-upfront para condomínios menores é real.

---

### 3.2 Frente 2: Base Regulatória e Técnica

#### 3.2.1 Resolução Normativa ANEEL nº 1.000/2021

A RN 1.000/2021 regulamenta a exploração comercial de recarga de VEs no Brasil. Pontos-chave:

**Comunicação Prévia à Distribuidora:** Qualquer instalação de carregador comercial deve ser comunicada previamente à concessionária local (ex: Enel em São Paulo).

**Protocolos Abertos de Comunicação:** Equipamentos não exclusivos de uso privado devem utilizar protocolos abertos como **OCPP (Open Charge Point Protocol)**, garantindo interoperabilidade e evitando lock-in de fornecedores.

**Classificação de Uso:** A resolução diferencia:
* **Uso privado exclusivo:** Residência individual (não requer comunicação).
* **Uso compartilhado:** Condomínios, estacionamentos, campus (requer comunicação e protocolos abertos).

**Conformidade do EV ChargeOps:**
* Não comercializa energia elétrica (atua como plataforma de gestão).
* Registra sessões de carregamento com precisão.
* Realiza cobrança individualizada com transparência.
* Automatiza processos de rateio.
* Permite integração com sistemas externos via API aberta.

#### 3.2.2 Carregador GoodWe HCA G2 (GW7K-HCA-20)

O carregador foi selecionado por suas interfaces de comunicação versáteis e suporte a RFID integrado.

**Interfaces de Comunicação:**

| Interface | Aplicação | Benefício |
|-----------|-----------|----------|
| **RS-485** | Comunicação industrial local (Modbus) | Alternativa à nuvem, confiabilidade |
| **LAN (Ethernet)** | Conexão estável com servidores | Comunicação contínua e segura |
| **Wi-Fi** | Conectividade sem fio | Instalação simplificada em condomínios |
| **Bluetooth** | Configuração local e diagnóstico | Reduz tempo de instalação |
| **RFID** | Autenticação de usuários | Pilar para segregação de consumo |

**Ciclo de Conexão Física:**
1. Usuário autentica via RFID.
2. Cabo Tipo 2 conectado ao veículo.
3. Carregador valida conexão (IEC 61851).
4. Sessão iniciada, energia liberada.
5. Dados coletados continuamente (potência, energia, duração).
6. Informações enviadas via LAN/Wi-Fi ao SEMS.
7. Usuário encerra ou veículo finaliza recarga.
8. Carregador registra dados finais.
9. EV ChargeOps utiliza dados para faturamento e relatórios.

#### 3.2.3 API GoodWe (SEMS Portal)

A plataforma **SEMS (Smart Energy Management System)** é o hub de monitoramento remoto da GoodWe. O EV ChargeOps integra-se via API SEMS+ para coletar dados em tempo real.

**Endpoints Principais:**

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/v1/Common/CrossLogin` | POST | Autenticação e geração de token de sessão |
| `/powerstation/EvChargerDetail` | POST | Dados detalhados do carregador (telemetria) |

**Formato de Resposta (JSON):**

```json
{
  "status": "success",
  "code": 200,
  "data": {
    "chargerId": "GW_EV_987654321",
    "stationId": "123456-abc-789",
    "telemetry": {
      "evChargerStatus": "charging",
      "currentPowerkW": 7.4,
      "voltageV": 231.5,
      "currentA": 32.0,
      "energyDeliveredkWh": 14.25,
      "timestamp": "2026-06-18T20:15:00Z"
    },
    "session": {
      "connectorType": "Type 2",
      "connectedTimeMinutes": 115
    }
  }
}
```

**Campos Críticos para EV ChargeOps:**

* `energyDeliveredkWh`: Valor acumulado de energia (base para faturamento).
* `voltageV`: Tensão da rede (detecção de sobrecarga).
* `currentPowerkW`: Potência instantânea (orquestração de carga).
* `evChargerStatus`: Estado da sessão (charging, finishing, fault).
* `timestamp`: Marca temporal para auditoria.

**Opção de Aprofundamento Escolhida: Exploração da API GoodWe**

A API SEMS foi explorada em profundidade. Conclusões:

* **Disponibilidade de Dados:** A API expõe todos os campos necessários para faturamento preciso e detecção de anomalias.
* **Formato Estruturado:** JSON padronizado facilita integração com middleware Python.
* **Autenticação Segura:** Suporta tokens de sessão com validade, reduzindo riscos de segurança.
* **Escalabilidade:** Suporta múltiplos carregadores e estações em uma única chamada.
* **Limitações Identificadas:** Latência de até 30 segundos em atualizações (aceitável para rateio, crítico para controle em tempo real de demanda).

---

### 3.3 Frente 3: Arquitetura e IA

#### 3.3.1 Arquitetura da Plataforma EV ChargeOps

A solução é estruturada em quatro camadas:

**1. Camada Física (Hardware)**
* Carregador GoodWe HCA G2 com RFID integrado.
* Sensores de corrente (Efeito Hall) e tensão.
* Acumulador interno (Energy.Active.Import.Register) que persiste dados offline.

**2. Camada de Conectividade (Rede)**
* Interfaces: RS-485 (Modbus), LAN, Wi-Fi, Bluetooth.
* Protocolo: OCPP para comunicação com veículos.
* Cloud: API SEMS da GoodWe para transmissão de telemetria.

**3. Camada de Aplicação (Middleware + Regras de Negócio)**
* **Middleware:** Script Python (FastAPI) que faz polling da API SEMS.
* **Normalização de Dados:** Converte JSON bruto em estrutura compatível com regras de negócio.
* **Motor de Regras:** Calcula consumo líquido, aplica tarifas, detecta anomalias.
* **Persistência:** Armazena dados em banco PostgreSQL/MySQL.

**4. Camada de Apresentação (Interfaces Digitais)**
* **Aplicativo Mobile:** Interface para usuários finais (moradores).
* **Portal Web:** Dashboard para administradores (síndicos).

#### 3.3.2 Fluxo de Dados: Da Sessão à Fatura

```
Carregador GoodWe (Sensor Efeito Hall)
    ↓
API SEMS (Nuvem GoodWe)
    ↓
Middleware EV ChargeOps (Polling/Webhook)
    ↓
Normalização de Dados (JSON → Estrutura Interna)
    ↓
Motor de Regras (Cálculo de Consumo Líquido)
    ↓
Aplicação de Tarifa (R$/kWh)
    ↓
Geração de CDR (Charge Detail Record)
    ↓
Banco de Dados (Histórico de Sessões)
    ↓
Faturamento Mensal (Relatório para Condomínio)
    ↓
Interfaces (App Morador + Portal Síndico)
```

#### 3.3.3 Tratamento de Cenários Excepcionais

O sistema foi projetado para ser resiliente a falhas de rede e energia:

**Cenário 1: Queda de Conexão (Offline)**
* **O Risco:** Carregador perde sinal Wi-Fi durante recarga ativa.
* **Comportamento do Hardware:** Acumulador interno continua somando energia via sensores de Efeito Hall.
* **Mitigação:** Interface RS-485 (Modbus) serve como barramento local secundário.
* **Recuperação:** Quando conexão retorna, API SEMS envia payload com acumulado total. Middleware calcula delta (final - inicial), garantindo precisão.

**Cenário 2: Interrupção Abrupta (Queda de Energia/Remoção Forçada)**
* **O Risco:** Cabo desconectado sem encerramento formal ou queda de energia.
* **Detecção:** Motor de regras monitora `evChargerStatus`. Mudança para "fault" aciona alerta.
* **Ação:** Sistema captura último registro válido de `energyDeliveredkWh`.
* **Faturamento:** Sessão encerrada em caráter emergencial, gerando CDR parcial com alerta ao usuário.

**Cenário 3: Múltiplos Veículos na Mesma Vaga**
* **O Risco:** Duas unidades compartilham vaga, causando injustiça se rateio for por "número do apartamento".
* **Solução:** Autenticação RFID segregada. Cada cartão é vinculado a um usuário específico.
* **Faturamento:** Mesmo que dois carros usem a mesma vaga em horários alternados, consumo é calculado individualmente via ID_Usuario (não ID_Carregador).

#### 3.3.4 Modelo de Rateio Definido

**Princípio:** Divisão Justa com Separação de Blocos Elétricos

O condomínio divide a conta de energia em duas frentes:

1. **Área Comum (Fixo):** Elevadores, portaria, iluminação. Todos pagam por fração ideal.
2. **Bloco de Mobilidade Elétrica (Variável):** Custos atrelados estritamente às estações de recarga.

**Critério de Precificação: Matriz de Custos por Origem**

O sistema monitora a origem de cada kWh consumido:

| Origem | Tarifa | Descrição |
|--------|--------|-----------|
| **Solar (C_solar)** | Mínima | Energia capturada direto dos painéis (dia) |
| **Rede (C_rede)** | Variável | Energia da concessionária (horária: barata madrugada, cara pico 18-21h) |
| **Bateria (C_bateria)** | Intermediária | Energia armazenada (depreciação + custo de carga) |

**Equação Base da Fatura Individual (F_i):**

```
F_i = (E_solar,i × C_solar) + (E_rede,i × C_rede) + (E_bateria,i × C_bateria) + T_infra
```

Onde:
* `E_solar,i`: kWh consumido pelo morador i vindo dos painéis.
* `E_rede,i`: kWh consumido vindo da concessionária.
* `E_bateria,i`: kWh consumido vindo do banco de baterias.
* `T_infra`: Taxa fixa de manutenção da infraestrutura (opcional).

**Exemplo Prático:**

Morador A carrega 14,25 kWh em uma sessão:
* 5 kWh solar a R$ 0,10/kWh = R$ 0,50
* 7 kWh rede (horário pico) a R$ 1,50/kWh = R$ 10,50
* 2,25 kWh bateria a R$ 0,80/kWh = R$ 1,80
* Taxa de infraestrutura = R$ 2,00

**Total: R$ 14,80**

**Tratamento de Conflitos:**

**Conflito A:** Morador sem carro elétrico paga pela bateria?
* **Resposta:** Não. Se bateria foi dimensionada para VEs, quem não consome fica isento desse bloco.

**Conflito B:** Dois moradores carregam às 19h (pico). Um pega bateria cheia, outro rede cara. Injusto?
* **Resposta:** Algoritmo calcula Tarifa Média Ponderada para aquele intervalo. Se 100 kWh bateria (R$ 0,50) + 100 kWh rede (R$ 1,50) = R$ 1,00/kWh médio. Ambos pagam R$ 1,00/kWh.

**Opção de Aprofundamento Escolhida: Esquema de Base de Dados**

O esquema de dados foi definido com as seguintes entidades:

**Tabela: usuarios**
```sql
CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY,
  nome VARCHAR(255),
  apartamento VARCHAR(50),
  email VARCHAR(255),
  telefone VARCHAR(20),
  ativo BOOLEAN
);
```

**Tabela: rfids**
```sql
CREATE TABLE rfids (
  rfid_tag VARCHAR(50) PRIMARY KEY,
  id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
  data_cadastro TIMESTAMP,
  ativo BOOLEAN
);
```

**Tabela: carregadores**
```sql
CREATE TABLE carregadores (
  charger_id VARCHAR(50) PRIMARY KEY,
  station_id VARCHAR(50),
  vaga VARCHAR(50),
  modelo VARCHAR(100),
  data_instalacao TIMESTAMP,
  ativo BOOLEAN
);
```

**Tabela: historico_sessoes**
```sql
CREATE TABLE historico_sessoes (
  id_sessao INT PRIMARY KEY,
  charger_id VARCHAR(50) FOREIGN KEY REFERENCES carregadores(charger_id),
  id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
  timestamp_inicio TIMESTAMP,
  timestamp_fim TIMESTAMP,
  energia_injetada_kWh DECIMAL(10,2),
  potencia_media_kW DECIMAL(10,2),
  status_fechamento VARCHAR(50),
  valor_fatura DECIMAL(10,2),
  data_criacao TIMESTAMP
);
```

**Dados Simulados de Teste:**

| id_sessao | id_usuario | charger_id | energia_injetada_kWh | status_fechamento | valor_fatura |
|-----------|-----------|-----------|----------------------|-------------------|--------------|
| 1001 | 101 | GW_EV_987654321 | 7.40 | Sucesso (Normal) | R$ 8,88 |
| 1002 | 102 | GW_EV_987654321 | 11.10 | Sucesso (Normal) | R$ 13,32 |
| 1003 | 103 | GW_EV_987654321 | 1.90 | Erro (Interrupção Abrupta) | R$ 2,28 |

#### 3.3.5 Papel da IA na Solução

A Inteligência Artificial é o diferencial estratégico do EV ChargeOps, operando em dois eixos principais:

**1. Classificação e Perfilamento de Usuários (Clustering)**

Algoritmo: K-Means ou Gaussian Mixture Model

**Objetivo:** Agrupar moradores com base em padrões de recarga para otimizar alocação de energia e oferecer tarifas diferenciadas.

**Variáveis de Entrada:**
* Horário preferencial de recarga (madrugada, pico, intermediário).
* Frequência de recarga (diária, semanal, ocasional).
* Volume médio por sessão (kWh).
* Duração média da sessão (minutos).
* Consistência (desvio padrão do padrão).

**Clusters Esperados:**
* **Tipo A (Carregamento Noturno Regular):** Carrega entre 22h-6h, consumo previsível, ~10 kWh/sessão. Ideal para tarifa reduzida de madrugada.
* **Tipo B (Carregamento Rápido de Pico):** Carrega entre 17h-21h, consumo alto (~15 kWh), sessões curtas. Alvo de políticas de balanceamento.
* **Tipo C (Ocasional/Viajante):** Padrão irregular, consumo variável. Requer flexibilidade tarifária.

**Aplicação Prática:**
* Oferecer desconto para Tipo A que carrega em horários de baixa demanda.
* Incentivar Tipo B a deslocar carga para madrugada via tarifa dinâmica.
* Alertar gestor sobre Tipo C para manutenção preditiva.

**2. Análise Preditiva de Consumo e Carga da Rede (Regressão + Detecção de Anomalias)**

Algoritmo: ARIMA, Prophet ou Redes Neurais (LSTM)

**Objetivo:** Prever consumo de energia nos próximos dias para evitar ultrapassagem de demanda contratada e alertar gestor sobre risco de sobrecarga.

**Variáveis de Entrada:**
* Histórico de consumo (últimos 30-90 dias).
* Dia da semana (segunda-sexta vs. fim de semana).
* Sazonalidade (verão vs. inverno).
* Eventos conhecidos (feriados, manutenção).
* Previsão de clima (temperatura → padrão de recarga).

**Saída:**
* Previsão de demanda para os próximos 7 dias (kWh/dia).
* Intervalo de confiança (95%).
* Alertas se previsão ultrapassar 90% da demanda contratada.

**Exemplo:**
```
Previsão para 25/06/2026 (Segunda-feira):
Demanda Prevista: 150 kWh
Demanda Contratada: 160 kWh
Ocupação: 93,75% (ALERTA AMARELO)

Recomendação: Ativar Load Balancing
- Reduzir potência de carregadores em 10% entre 17h-21h
- Incentivar usuários a carregar entre 22h-6h (tarifa reduzida)
```

**Detecção de Anomalias (Isolation Forest ou Local Outlier Factor):**

Identifica padrões anormais que indicam falhas ou fraudes:
* Consumo 3x acima da média do usuário.
* Queda abrupta de tensão (< 200V).
* Sessão interrompida frequentemente.
* RFID usado em múltiplas vagas simultaneamente (fraude).

---

## 4. Diagrama de Arquitetura da Solução

![Diagrama de Arquitetura](https://private-us-east-1.manuscdn.com/sessionFile/wffhxWRhWOAmOiUq8kZ3CE/sandbox/7Ick13e0pdUFLMIjLMSDEa-images_1782081165304_na1fn_L2hvbWUvdWJ1bnR1L3VwbG9hZC9OZXcgZm9sZGVyL2ltYWdlXzExZDA1ZDgy.png?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvd2ZmaHhXUmhXT0FtT2lVcThrWjNDRS9zYW5kYm94LzdJY2sxM2UwcGRVRkxNSWpMTVNERWEtaW1hZ2VzXzE3ODIwODExNjUzMDRfbmExZm5fTDJodmJXVXZkV0oxYm5SMUwzVndiRzloWkM5T1pYY2dabTlzWkdWeUwybHRZV2RsWHpFeFpEQTFaRGd5LnBuZyIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DcODxrn3Om~JOcfZCzQDWfPdQBOZlUEZ9CrngikHKVsZhGgLnoEtkt-izLPXAMb5sT0ZmVCNHasyaaomt0RKhOQBdR8jlt87AmC9YSnQvx0j8KZ~urkHGhHOSL9GBN8JrSeifEc8Qh~Uhdt9UeSMAtWDaZBeAoktgJK7Z-JZWPQ5eOzjTPCofKr~MKivf5wdVqQXj6KpqgqUhn9twGV~Pp-zCMcGBaJcSbTEkk3VnGHc6Qykbqm13Ffk5zUy1HrLCbqWEri39V0bCERbtaY3gzRZfxDb5YKnt7Uze97RGSrwIoY4ZCjS5WV~tETaiWNovKc4bT6P8gHrLXBmVS3Pmw__)

*(O diagrama acima ilustra o fluxo completo de dados desde o carregador físico até as interfaces de usuário, passando pelo middleware e motor de IA.)*

---

## 5. Plano para a Sprint 02: Desenvolvimento e Prototipação

### 5.1 Visão Geral da Sprint 2

Na Sprint 2, a equipe implementará a solução idealizada na Sprint 1. O desenvolvimento será dividido em três pilares principais, executados em paralelo com sincronizações semanais.

### 5.2 Pilar 1: Aplicativo Mobile para o Usuário Final

**Objetivo:** Interface intuitiva para moradores registrarem e acompanharem suas recargas.

**Funcionalidades Principais:**

**1. Registro de Carga por Aproximação (NFC/RFID)**
* Usuário aproxima celular (NFC) ou cartão RFID do carregador.
* App valida autenticação com backend.
* Sessão iniciada automaticamente, exibindo status em tempo real (kW, kWh acumulado, tempo decorrido).

**2. Mapa de Pontos de Recarga**
* Visualização geolocalizada dos carregadores no condomínio.
* Status de cada ponto (disponível, em uso, offline).
* Histórico de ocupação (quando foi usado por último).

**3. Histórico de Recargas**
* Lista de todas as sessões do usuário com detalhes: data, hora, energia consumida, custo.
* Gráfico de consumo mensal (tendência).
* Exportação de relatório em PDF.

**4. Estimativa de Fatura**
* Cálculo em tempo real do valor a ser cobrado na cota condominial.
* Breakdown por origem (solar, rede, bateria).
* Comparação com mês anterior.

**Stack Tecnológico:**
* Frontend: React Native (iOS/Android) ou Flutter.
* Backend: FastAPI (Python).
* Autenticação: JWT + OAuth2.
* Mapa: Google Maps API ou OpenStreetMap.

### 5.3 Pilar 2: Portal Administrativo (Web para o Síndico)

**Objetivo:** Dashboard completo para gestão financeira e operacional da infraestrutura.

**Funcionalidades Principais:**

**1. Gestão de Moradores e Tags RFID**
* Cadastro de usuários (nome, apartamento, email).
* Associação de tags RFID/NFC a usuários.
* Ativação/desativação de acessos.
* Histórico de alterações (auditoria).

**2. Faturamento Integrado**
* Consolidação automática de dados de recarga.
* Geração de relatório mensal com consumo individual por apartamento.
* Exportação em Excel/PDF para envio à administradora.
* Integração com sistemas de cobrança (boleto, débito automático).

**3. Monitoramento em Tempo Real**
* Status de cada carregador (online/offline, em uso, com falha).
* Potência instantânea total (soma de todos os carregadores).
* Alerta de ultrapassagem de demanda contratada.
* Histórico de eventos (desconexões, falhas).

**4. Relatórios Analíticos**
* Consumo por período (dia, semana, mês).
* Ranking de usuários por consumo.
* Previsão de demanda para próximos 7 dias.
* ROI da infraestrutura (receita vs. custo de energia).

**5. Configuração de Tarifas**
* Definição de preços por origem (solar, rede, bateria).
* Tarifas diferenciadas por horário (dinâmica).
* Taxa de infraestrutura fixa.
* Histórico de alterações de preços.

**Stack Tecnológico:**
* Frontend: React.js + TypeScript.
* Backend: FastAPI (Python).
* Banco de Dados: PostgreSQL.
* Visualização: Chart.js ou Plotly.
* Autenticação: JWT + OAuth2.

### 5.4 Pilar 3: Inteligência Artificial (Motor de IA)

**Objetivo:** Gerar insights acionáveis e otimizar operação da rede.

**Componente 1: Classificação de Usuários (Clustering)**

**Algoritmo:** K-Means (scikit-learn)

**Entrada:** Histórico de sessões (últimos 30 dias)

**Processamento:**
```python
from sklearn.cluster import KMeans
import pandas as pd

# Dados de entrada
df = pd.read_csv('historico_sessoes.csv')

# Features: horário, frequência, volume, duração
features = df[['hora_inicio', 'frequencia_mensal', 'energia_kwh', 'duracao_minutos']]

# Normalização
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)

# Clustering
kmeans = KMeans(n_clusters=3, random_state=42)
df['cluster'] = kmeans.fit_predict(features_scaled)
```

**Saída:** Cada usuário recebe um rótulo (Tipo A, B, C) com recomendações tarifárias.

**Componente 2: Análise Preditiva de Demanda (Regressão)**

**Algoritmo:** ARIMA ou Prophet (statsmodels/fbprophet)

**Entrada:** Série temporal de consumo diário (últimos 90 dias)

**Processamento:**
```python
from statsmodels.tsa.arima.model import ARIMA
import pandas as pd

# Dados históricos
df = pd.read_csv('consumo_diario.csv', parse_dates=['data'], index_col='data')

# Modelo ARIMA(1,1,1)
model = ARIMA(df['consumo_kwh'], order=(1,1,1))
fitted_model = model.fit()

# Previsão para próximos 7 dias
forecast = fitted_model.get_forecast(steps=7)
forecast_df = forecast.summary_frame()
```

**Saída:** Previsão de demanda para próximos 7 dias com intervalo de confiança 95%.

**Componente 3: Detecção de Anomalias**

**Algoritmo:** Isolation Forest (scikit-learn)

**Entrada:** Dados de cada sessão (energia, duração, potência, tensão)

**Processamento:**
```python
from sklearn.ensemble import IsolationForest
import pandas as pd

# Dados de sessões
df = pd.read_csv('historico_sessoes.csv')

# Features
features = df[['energia_kwh', 'duracao_minutos', 'potencia_media_kw', 'voltagem_v']]

# Detecção
iso_forest = IsolationForest(contamination=0.05, random_state=42)
df['anomalia'] = iso_forest.fit_predict(features)

# Alertas
anomalias = df[df['anomalia'] == -1]
```

**Saída:** Alertas em tempo real para o gestor sobre padrões anormais.

### 5.5 Cronograma de Desenvolvimento (Sprint 2) — Rastreabilidade com Sprint 1

| Semana | Pilar 1 (Mobile) | Pilar 2 (Web) | Pilar 3 (IA) | Sincronização | Baseado em Sprint 1 |
|--------|-----------------|--------------|-------------|---------------|---------------------|
| 1-2 | Setup + Autenticação | Setup + Banco de Dados | Preparação de dados | Definir APIs | Frente 2 (API SEMS) |
| 3-4 | Registro por NFC | Gestão de Usuários | Clustering | Integração | Frente 3 (Perfilamento) |
| 5-6 | Mapa de Pontos | Faturamento | Previsão | Testes | Frente 3 (Rateio) |
| 7-8 | Histórico + Fatura | Relatórios | Anomalias | Ajustes finais | Frente 3 (Cenários) |
| 9 | Testes + Deploy | Testes + Deploy | Testes + Deploy | Apresentação | Validação completa |

### 5.6 Tecnologias Definidas

| Camada | Tecnologia | Justificativa |
|--------|-----------|--------------|
| **Backend** | Python + FastAPI | Rápido, moderno, excelente para APIs |
| **Banco de Dados** | PostgreSQL | Robusto, suporta JSON, escalável |
| **Frontend Mobile** | React Native | Multiplataforma, comunidade ativa |
| **Frontend Web** | React.js + TypeScript | Type-safe, componentes reutilizáveis |
| **IA/ML** | Scikit-learn + Pandas | Maduro, documentado, performance |
| **Orquestração** | Docker + Docker Compose | Facilita deployment e escalabilidade |
| **CI/CD** | GitHub Actions | Integrado ao GitHub, sem custo |

### 5.7 Métricas de Sucesso (Sprint 2)

* **Funcionalidade:** 100% das funcionalidades planejadas implementadas e testadas.
* **Performance:** API responde em < 200ms para 95% das requisições.
* **Confiabilidade:** 99.5% de uptime durante testes.
* **Precisão de IA:** Modelo de clustering com silhueta score > 0.6; previsão com MAPE < 10%.
* **Cobertura de Testes:** > 80% de cobertura de código.

---

## 5.8 Rastreabilidade: Como as Decisões da Sprint 1 Guiam a Sprint 2

As decisões tomadas na Sprint 1 estabelecem a fundação técnica e de negócio para a Sprint 2. Abaixo, a rastreabilidade entre pesquisa e implementação:

### Frente 1 → Sprint 2: Aplicativo Mobile e Portal Web

**Decisão Sprint 1:** Análise de mercado identificou que soluções existentes carecem de **rateio automático integrado** e **agendamento de vagas**.

**Implementação Sprint 2:** O Pilar 1 (Mobile) e Pilar 2 (Web) implementarão essas funcionalidades, diferenciando o EV ChargeOps no mercado.

### Frente 2 → Sprint 2: Integração com API SEMS

**Decisão Sprint 1:** Exploração da API GoodWe revelou que todos os campos necessários para faturamento estão disponíveis em JSON estruturado.

**Implementação Sprint 2:** Semana 1-2 do Pilar 2 (Web) configurará a integração com a API SEMS, usando os endpoints documentados na Frente 2.

### Frente 3 → Sprint 2: IA e Modelo de Rateio

**Decisão Sprint 1:** Definição de 3 aplicações de IA (clustering, previsão, anomalias) e modelo de rateio com matriz de custos.

**Implementação Sprint 2:** 
- Semana 3-4: Clustering (K-Means) para classificar usuários conforme Tipo A, B, C
- Semana 5-6: Previsão (ARIMA/Prophet) para alertar sobre ultrapassagem de demanda
- Semana 7-8: Detecção de anomalias (Isolation Forest) para fraudes e falhas
- Semana 5-6 (Pilar 2): Faturamento implementará a equação F_i definida na Sprint 1

### Cenários Excepcionais → Sprint 2: Testes e Validação

**Decisão Sprint 1:** Documentação de 3 cenários excepcionais (offline, interrupção abrupta, múltiplos veículos).

**Implementação Sprint 2:** Semana 7-8 incluirá testes específicos para cada cenário, garantindo que o sistema seja resiliente conforme projetado.

---

## 6. Decisões da Equipe e Justificativas

Esta seção documenta as decisões críticas tomadas durante a Sprint 1 e suas justificativas, demonstrando pensamento crítico e autoria.

### Por que Opção A (Análise de Mercado) na Frente 1?

A equipe escolheu a Opção A em vez de pesquisa com usuários ou análise de dados públicos porque:
1. **Benchmarking competitivo:** Entender soluções existentes permite identificar gaps reais no mercado.
2. **Validação de modelo de negócio:** Análise de 5 soluções revelou que nenhuma oferece rateio automático integrado + agendamento de vagas.
3. **Diferenciação:** Conhecer limitações de Zaptec, Wallbox e ChargePoint permite posicionar o EV ChargeOps com vantagem competitiva.

### Por que Opção B (Exploração da API GoodWe) na Frente 2?

A equipe escolheu a Opção B em vez de mapeamento regulatório completo ou APIs complementares porque:
1. **Dependência crítica:** A integração com a API SEMS é o pilar técnico do projeto.
2. **Viabilidade:** Documentação pública disponível permitiu análise profunda.
3. **Risco técnico:** Validar que a API expõe todos os dados necessários antes de investir em desenvolvimento.

### Por que Opção C (Esquema de BD) na Frente 3?

A equipe escolheu a Opção C em vez de benchmarking de rateio ou definição de papel da IA porque:
1. **Fundação técnica:** Esquema de BD é pré-requisito para implementação.
2. **Integridade de dados:** Definir entidades, relacionamentos e restrições garante faturamento preciso.
3. **Complementaridade:** Benchmarking de rateio foi documentado na Frente 1; papel da IA foi documentado separadamente.

### Por que Modelo de Rateio com Matriz de Custos?

A equipe propôs um modelo sofisticado (C_solar, C_rede, C_bateria) em vez de simples cobrança por kWh porque:
1. **Justiça energética:** Reconhece que nem toda energia tem o mesmo custo (solar é barata, pico é caro).
2. **Sustentabilidade:** Incentiva carregamento em horários de baixa demanda.
3. **Escalabilidade:** Suporta futuras integrações com painéis solares e baterias condominiais.

### Por que 3 Aplicações de IA (Clustering + Previsão + Anomalias)?

A equipe definiu 3 aplicações distintas porque:
1. **Clustering:** Essencial para oferecer tarifas diferenciadas e otimizar experiência do usuário.
2. **Previsão:** Crítica para evitar multas regulatórias por ultrapassagem de demanda.
3. **Anomalias:** Necessária para detectar fraudes e falhas de hardware antes que causem danos.

Cada aplicação resolve um problema específico, sem redundância.

---

## 7. Referências

[1] Associação Brasileira do Veículo Elétrico (ABVE). Estatísticas de emplacamentos de veículos elétricos. Disponível em: https://abve.org.br

[2] Gazeta do Povo. Rede de recarga e dados de emplacamento ABVE 2025/2026. Disponível em: https://gazetadopovo.com.br

[3] Migalhas. Análise da Lei 18.403/2026 de SP sobre recarga em condomínios. Disponível em: https://migalhas.com.br

[4] Kilowatt Crew. Guia definitivo OCPP (fluxo técnico de sessões). Disponível em: https://kilowattcrew.app

[5] Corpo de Bombeiros do Brasil. Diretriz SAVE (Sistemas de Alimentação de Veículos Elétricos). 2025.

[6] TriCharge Blog. Exemplo prático do fluxo OCPP. Disponível em: https://blog.tricharge.com.br

[7] Canal VE. Protocolo OCPP e interoperabilidade no Brasil. Disponível em: https://canalve.com.br

[8] Norma IEC 61851. Conductive charging of electric vehicles. International Electrotechnical Commission.

[9] Norma ISO 15118. Communication between Electric Vehicle and Supply Equipment. International Organization for Standardization.

[10] Open Charge Alliance. OCPP (Open Charge Point Protocol). Disponível em: https://www.openchargealliance.org/

[11] OCPP 2.0.1 Specification. Open Charge Alliance. 2023.

[12] GoodWe. Documentação API SEMS Portal. Disponível em: https://semsplus.goodwe.com/

[13] CERTI Foundation. Modelos de Negócio para Mobilidade Elétrica. Disponível em: https://certi.org.br

[14] Open Charge Alliance. CDR (Charge Detail Record) Specification. 2023.

[15] Rabobank. Estrutura CPO/eMSP na Europa 2025. Disponível em: https://rabobank.com

[16] WEG Digital. Solução WEMOB® para condomínios. Disponível em: https://weg.net

[17] ANEEL. Resolução Normativa nº 1.000/2021. Disponível em: https://aneel.gov.br

[18] Elinta Charge. Estrutura de receita para CPOs. Disponível em: https://elintacharge.com

[19] Simon-Kucher. Pesquisa global sobre assinaturas de recarga. Disponível em: https://simon-kucher.com

[20] VoltBras. Plataforma de Gestão de Frotas. Disponível em: https://voltbras.com.br

[21] Power2Go. Carregadores inteligentes e gestão de carga em condomínios. Disponível em: https://power2go.com.br

[22] EZVolt. Modelo CPO sem custo inicial. Disponível em: https://ezvolt.com.br

[23] Zaptec. Smart Charging Solutions. Disponível em: https://zaptec.com

[24] Business Norway. Zaptec Pro is a smart, flexible charging station for larger parking spaces. Disponível em: https://businessnorway.com

[25] Wallbox. Wallbox Pulsar Plus: Ideal EV Charging for Multi-Unit Communities. Disponível em: https://wallbox.com

[26] AutoBlog. Wallbox Pulsar Plus Long-Term Review: Sleek, feature-packed electric car charger. Disponível em: https://autoblog.com

[27] ChargePoint. SEC Filings FY2025. Disponível em: https://dcf-model.com

[28] Cenário Energia. NeoCharge cresce 70% em 2025 e consolida papel estratégico na expansão da infraestrutura de recarga no Brasil. Disponível em: https://cenarioenergia.com.br

[29] Potencia Portal. NeoCharge lança solução que facilita a instalação de carregadores para veículos elétricos em comércios. Disponível em: https://revistapotencia.com.br

[30] NeoCharge. Plataforma de Gestão. Disponível em: https://neocharge.com.br

[31] Copel. Eletrovia e Tarifa Mobiflex. Disponível em: https://copel.com

[32] Copel. Norma Técnica NTC 902210 para condomínios do Paraná. Disponível em: https://copel.com
