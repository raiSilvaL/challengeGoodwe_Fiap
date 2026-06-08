# **ENTERPRISE CHALLENGE 2026 — GOODWE + FIAP**

## **Contexto do Desafio**

A GoodWe, líder global em inversores e armazenamento de energia, mantém uma parceria estratégica com a FIAP através do Energy Innovation Lab (Unidade Aclimação). Como parte dessa colaboração, um carregador de veículos elétricos (modelo HCA G2) está instalado e operacional no estacionamento L1 da unidade.
O desafio surge no cenário de crescimento acelerado da mobilidade elétrica no Brasil. Embora a infraestrutura de recarga esteja se expandindo, ambientes de uso coletivo — como condomínios residenciais, edifícios corporativos e campus universitários — enfrentam dificuldades críticas para gerir esses recursos de forma eficiente e transparente.

## **Descrição do Problema**
Atualmente, a maioria das infraestruturas de recarga compartilhada carece de mecanismos integrados para:
* Identificação por Usuário: Dificuldade em vincular sessões de recarga a moradores ou colaboradores específicos.
* Cálculo de Consumo Individual: Ausência de medição precisa e automatizada do volume de energia (kWh) entregue por sessão.
* Rateio Justo: Falta de regras claras e automatizadas para distribuir os custos de energia e manutenção entre os usuários.
* Inteligência Operacional: Os dados gerados (duração, picos de uso, ociosidade) não são aproveitados para otimizar a operação ou prever demandas futuras.

O projeto EV ChargeOps propõe solucionar esse gargalo transformando dados brutos de recarga em informações estruturadas e inteligência acionável, utilizando a Inteligência Artificial como motor lógico para garantir uma gestão eficiente e uma experiência digital clara para gestores e usuários.

## Pesquisar e documentar

## **1. O que são infraestruturas de recarga compartilhada e os principais desafios para gestores**

Uma infraestrutura de recarga compartilhada é um conjunto de equipamentos (carregadores, quadros elétricos, cabos, medidores e sistemas de software) instalado em área comum — garagem de condomínio, estacionamento corporativo, campus universitário — e utilizado por múltiplos usuários, seja em vagas rotativas ou em vagas fixas individualmente atribuídas. Difere da recarga residencial individual precisamente porque o ativo é coletivo: a decisão de instalar, o custo da obra, a gestão operacional e o rateio do consumo envolvem mais de um agente.

O mercado brasileiro terminou 2025 com 223.912 unidades de veículos elétricos vendidas, crescimento de 26% sobre o ano anterior, e só nos dois primeiros meses de 2026 foram emplacados 48.591 carros, 90% mais que no mesmo bimestre do ano passado. Esse crescimento torna a questão urgente: o número de licenciamentos acumulados de veículos elétricos passou de 1.900 em 2020 para mais de 215.000 em 2024, aumento de mais de 100 vezes em apenas cinco anos

### **Desafios operacionais dos gestores**

* **Capacidade elétrica da edificação:**

Muitos condomínios têm negado pedidos de moradores para instalar carregadores, alegando riscos de sobrecarga elétrica, incêndio e impacto na coletividade. Em 2024 e 2025, pelo menos sete ações judiciais foram ajuizadas por proprietários de carros elétricos que tiveram seus pedidos negados em assembleias condominiais. Prédios antigos são os mais vulneráveis: para prédios antigos, a viabilidade técnica deve ser avaliada por um especialista em engenharia elétrica, que determinará se é possível adaptar a estrutura para suportar os novos pontos de carregamento.

* **Necessidade de carregadores inteligentes com gestão de carga:**

A energia disponível no condomínio pode não ser suficiente para carregar vários veículos elétricos ao mesmo tempo. A implementação de um sistema de gestão de carga é necessária para garantir que a energia seja distribuída de forma equitativa, evitando problemas com a infraestrutura elétrica do prédio. Muitas pessoas acreditam que qualquer wallbox é inteligente, mas se o carregador não tiver funcionalidades como o protocolo OCPP e a modulação de corrente, ele não poderá atender adequadamente às demandas de um condomínio.

* **Regulação fragmentada e responsabilidade jurídica:**

Em 2025, foi publicada uma diretriz nacional do Corpo de Bombeiros sobre SAVE (Sistemas de Alimentação de Veículos Elétricos), estabelecendo parâmetros gerais para todo o país. Essa diretriz, porém, não é autoaplicável: ela depende de regulamentação específica por cada Estado, já que as Instruções Técnicas e os requisitos para emissão do AVCB são de competência estadual. Isso cria um ambiente de incerteza para síndicos e gestores, que passam a avaliar com maior cautela o risco de responsabilização civil ou criminal caso autorizem instalações que futuramente se revelem inadequadas.

*  **Escalonabilidade**

Os condomínios podem encontrar modelos de compartilhamento e utilizar softwares que distribuem as cargas entre os diversos carregadores, mas isso exige planejamento desde a fase de projeto. A solução mais recomendada por especialistas é pensar em infraestrutura escalável: a recarga veicular não deve ser tratada na base do improviso, pois envolve engenharia aplicada, gestão de carga, conformidade com a IT-41 e responsabilidade técnica do projeto à operação. É preciso contratar uma empresa que entrega soluções seguras, escaláveis e compatíveis com a realidade elétrica de cada edifício.

* **Tomada de decisão coletiva**

Se aprovarem a instalação, todos os moradores do condomínio dividirão o custo da infraestrutura, como ocorre com outras despesas comuns. Por outro lado, os condôminos que utilizarem os carregadores devem arcar individualmente com o custo da recarga de seus veículos. Conciliar o interesse de quem tem carro elétrico com o de quem não tem é um dos principais atritos de governança.

## **2. Como funciona uma sessão de recarga: o percurso técnico do plug ao encerramento**

Uma sessão de recarga envolve três camadas de comunicação simultâneas: entre o veículo e o carregador, entre o carregador e o sistema de gestão na nuvem, e entre o sistema de gestão e o usuário (app ou cartão). Cada camada opera com protocolos próprios.

* **Etapa 1** — Conexão física e handshake elétrico (IEC 61851)

Quando o cabo é inserido, o carregador detecta a presença do veículo por meio de um sinal de piloto de controle (CP, control pilot) definido pela norma IEC 61851. A comunicação entre o EV e o carregador é mínima nessa fase, usando um protocolo básico de modulação por largura de pulso (PWM) que garante que a recarga ocorra sem problemas técnicos. O nível de tensão no fio CP indica o estado da conexão: veículo detectado, pronto para carregar ou em recarga ativa. 

* **Etapa 2** — Autenticação do usuário (OCPP + ISO 15118)

O carregador precisa saber quem está carregando antes de liberar energia. O usuário é validado por cartão RFID, aplicativo, AutoCharge/placa MAC ou cartão EMV. Em sistemas mais avançados com ISO 15118, existe o Plug & Charge: o ISO 15118 é o sucessor pretendido do Mode 3. Ao contrário do Mode 3, é um protocolo extenso para comunicar informações entre carregador e EV, e introduz um mecanismo de autenticação chamado Plug-and-Charge para identificar e autenticar o EV automaticamente.

* **Etapa 3** — Comunicação carregador ↔ sistema central (OCPP)

O Open Charge Point Protocol (OCPP) é um protocolo de comunicação aberto que padroniza a troca de informações entre estações de recarga de veículos elétricos (EVSEs) e sistemas de gerenciamento centralizados (CMS). Criado pela Open Charge Alliance (OCA), o OCPP se tornou referência global na infraestrutura de mobilidade elétrica por garantir interoperabilidade entre diferentes marcas de carregadores e plataformas de gestão.

A comunicação entre o EVSE e o Central System é feita por meio de mensagens OCPP trocadas em tempo real. Essas mensagens contêm informações vitais como o status do carregador, o nível de potência da recarga, o início e término da sessão de carregamento e outras informações relevantes para a gestão da infraestrutura de recarga.

O fluxo típico de uma sessão no OCPP 1.6 é descrito com precisão pela comunidade técnica: o sistema central envia um `RemoteStartTransaction` ao carregador; o carregador verifica a autorização (`Authorize`), libera o conector e confirma com `StartTransaction`; durante a carga, envia `MeterValues` a cada 30 segundos. No OCPP 2.0.1, tudo foi unificado em `TransactionEvent` com fases (`Started/Updated/Ended`), sequência e compactação opcional de WebSocket para reduzir dados.

* **Etapa 4** — Dados gerados durante a sessão

Durante uma sessão ativa, o carregador gera e transmite ao sistema central um conjunto rico de dados:

|Dado|Descrição|
|---|---|
|Energia entregue (kWh)|Leitura do medidor embutido, enviada periodicamente via `MeterValues`|
|Potência instantânea (kW)|Potência ativa em cada intervalo de amostragem|
|Tensão e corrente|Por fase (monofásico ou trifásico)|
|SoC do veículo|Estado de carga da bateria, se o veículo informar via ISO 15118|
|ID da transação|Chave única para rastreabilidade e faturamento|
|Timestamp de início e fim|Para cálculo de duração e cobrança por tempo|
|ID do usuário/token|RFID, identificador de app ou certificado digital|
|Status do conector|`Available`, `Preparing`, `Charging`, `Finishing`, `Faulted`|
|Alertas e falhas|Erros de comunicação, sobretensão, temperatura, etc|

O protocolo define formas de controlar quem pode efetuar um carregamento e também prevê o envio de todos os dados de todas as sessões de carregamento ao sistema central responsável pela rede. 

* **Etapa 5** — Smart charging e gestão de demanda

Em ambientes compartilhados, o sistema central não é passivo. O OCPP possibilita a adoção de práticas de resposta da demanda, onde os carregadores podem ajustar dinamicamente a taxa de carregamento com base nas necessidades da rede elétrica em horários de pico de consumo. Isso ajuda a equilibrar a carga na rede e evitar sobrecargas. Na prática, o CSMS monitora a potência total do condomínio em tempo real e redistribui a corrente disponível entre os carregadores ativos — garantindo que a demanda contratada com a distribuidora não seja ultrapassada.

* **Etapa 6** — Encerramento e geração do registro (CDR)

Ao término da sessão (por desconexão física, comando do usuário ou limite atingido), o carregador envia um `StopTransaction` com o valor final do medidor. O sistema central gera um CDR (Charge Detail Record) — equivalente ao "extrato" da sessão — contendo todos os dados acima consolidados, que serve como base para faturamento, rateio e auditoria.

## **3. Modelos de negócio para recarga compartilhada: Brasil e mundo**

O ecossistema de recarga organiza-se em torno de dois papéis principais: o CPO (Charge Point Operator), que opera o hardware, e o eMSP (e-Mobility Service Provider), que oferece serviços ao usuário final. O eMSP simplifica a experiência do usuário e garante interoperabilidade entre redes diversas, gerando receita por meio de taxas de serviço, modelos de assinatura ou margens sobre sessões de recarga.

Abaixo, os principais modelos de negócio em operação:

* **Modelo 1** — Recarga gratuita como amenidade (free-to-use):

Como funciona: O proprietário do local (shopping, empresa, campus universitário) absorve o custo da energia como parte de sua estratégia de atração de clientes ou de benefício corporativo. Não há cobrança ao usuário.

Onde é usado: Muito comum em varejistas, estacionamentos de hotéis e empresas com programas de sustentabilidade. No modelo de livre acesso, não há cobrança pela recarga e o lucro se dá pela concessão do local de recarga para outros serviços, como lojas, mercados e restaurantes.

Limitações: Sem gestão ativa, gera uso prolongado das vagas (overstaying) e não é escalável quando a demanda cresce. Empresas que adotam esse modelo geralmente o combinam com um limite de tempo ou de kWh por sessão.

* **Modelo 2** — Cobrança por kWh consumido:

Como funciona: O usuário paga exatamente pela energia que transferiu ao veículo, medida pelo medidor do carregador. É o modelo mais transparente e justo do ponto de vista do consumo.

Onde é usado: O carregamento público tipicamente segue um modelo de pagamento por uso determinado pela tarifa de kWh da rede. Na Europa, carregadores DC podem custar até EUR 0,70/kWh enquanto os AC geralmente partem de EUR 0,25/kWh.

No Brasil: Plataformas como WEG (WEMOB®), EZVolt e NeoCharge operam nesse modelo. A WEG disponibiliza ferramentas de monitoramento, permitindo ao proprietário da estação acompanhar em tempo real o desempenho, status e consumo energético, sendo ideais para ambientes como condomínios onde a gestão compartilhada é necessária. 

Limitação regulatória no Brasil: A ANEEL classifica a revenda de energia como atividade regulada, o que historicamente criou incerteza sobre a licitude de cobrar por kWh em locais privados. Esse cenário tem evoluído com regulamentações específicas do setor.

* **Modelo 3** — Cobrança por tempo (por minuto ou por hora):

Como funciona: O usuário paga pela duração da sessão, independentemente de quanta energia transferiu. Bastante usado em locais onde o tempo de ocupação da vaga é mais crítico que o consumo.

Onde é usado: CPOs podem usar tarifas por minuto para locais de alta rotatividade, e taxas de ociosidade (idle fees) que penalizam o carro que permanece conectado após a conclusão da recarga, incentivando o giro das vagas.

Desvantagem: Prejudica veículos com baterias maiores (que carregam mais lentamente em relação ao tempo pago) e não reflete o custo real de energia.

* **Modelo 4** — Assinatura mensal (subscription):

Como funciona: O usuário paga uma mensalidade fixa e obtém acesso a condições preferenciais — kWh com desconto, número de sessões incluídas, acesso a múltiplas redes em roaming.

Tendência global: Mais CPOs estão introduzindo modelos de assinatura. De cinco opções de assinatura HPC testadas, 74% dos futuros motoristas de VE demonstram interesse em uma "mini-assinatura de recarga". Entretanto, os CPOs precisam calibrar cuidadosamente o número de planos, as mensalidades e os preços por kWh para que a oferta tenha sucesso.

No Brasil: O modelo de fidelização por taxa fixa consiste em cobrança mensal em troca da utilização da rede de recarga, oferecendo outros serviços como manutenção e assistência técnica. Empresas como VoltBras e plataformas de gestão de frotas adotam variações desse modelo para clientes corporativos.

* **Modelo 5** — Rateio condominial:

Como funciona: O condomínio instala os carregadores como infraestrutura comum e reparte os custos entre os moradores que os utilizam, com medição individual por sessão.

Modalidades no Brasil:

* Inclusão na taxa condominial: o sistema de gerenciamento emite um relatório mensal ao condomínio informando o consumo individual, e cada usuário recebe um relatório com seu histórico de recargas do período. 

* Cobrança por ciclo de recarga: toda recarga é cobrada por débito automático em cartão de crédito cadastrado no momento em que a recarga é finalizada.

* Cartões pré-pagos: moradores compram créditos para usar os carregadores compartilhados.

Governança: O controle do tempo de uso e consumo de energia de cada veículo pode ser feito por aplicativo, cartão ou sistema de agendamento interno, permitindo uma cobrança proporcional entre os usuários.

* **Modelo 6** — CPO terceirizado com revenue share (sem custo inicial ao condomínio):

Como funciona: Uma empresa especializada (CPO) instala, opera e mantém os carregadores sem custo inicial para o condomínio. A receita das sessões é dividida entre o CPO e o condomínio (ou o condomínio recebe os carregadores gratuitamente em troca de ceder o espaço).

Exemplo no Brasil: A EZVolt propõe implantar a solução de recarga em condomínios sem custos iniciais, ficando a cargo da empresa a manutenção, operação e custo da energia elétrica, enquanto cada morador paga somente pela sua recarga.

Vantagem para o gestor: Elimina o risco financeiro e operacional do condomínio. Desvantagem: menor controle sobre precificação e dependência de um único fornecedor.

Tabela comparativa dos modelos

|Modelo|Quem paga|Vantagem principal|Melhor para|
|---|---|---|---|
|Gratuito|Proprietário do local|Atração de clientes, benefício ESG|Varejo, corporativo, universidades|
|Por kWh|Usuário|Justa, proporcional ao consumo|Condomínios, público geral|
|Por tempo|Usuário|Simples, incentiva rotatividade|Estacionamentos de alta demanda|
|Assinatura|Usuário (mensalidade)|Previsibilidade, fidelidade|Frotas, heavy users|
|Rateio condominial|Usuários do condomínio|Integrado à gestão existente|Condomínios residenciais|
|CPO terceirizado|Usuário (via CPO)|Zero CapEx para o gestor|Condomínios sem capital inicial|


## **4. Análise de mercado: soluções comparáveis ao EV ChargeOps(Opção A)**

### 4.1 **Zaptec Pro**

*   **Origem:** Noruega · Fundada 2012
*   **Classificação:** Internacional

#### **Problema que resolve**
Recarga compartilhada em condomínios e edifícios de múltiplas unidades com limitação de capacidade elétrica instalada.

#### **Funcionalidades principais**
*   Balanceamento de fase dinâmico entre carregadores
*   Até 22 kW por conector, escala para 100 veículos/circuito/dia
*   Instalação single-cable: reduz cabeamento em até 70%
*   Portal de gestão + app Zaptec para monitoramento
*   OCPP nativo (Go 2), V2G ready, suporte solar

#### **Modelo de negócio**
**Venda de hardware** + licença de software de gestão. Receita recorrente via plataforma de monitoramento e atualizações de firmware. Revenda B2B por instaladores certificados.

#### **Limitações conhecidas**
*   Sem presença comercial direta no Brasil
*   Compatibilidade com padrão plug brasileiro (IEC 62196 Tipo 2 vs. padrões locais) exige adaptação
*   Zaptec Go não oferece compatibilidade com tarifas dinâmicas de energia
*   Suporte pós-venda depende de rede de instaladores; reclamações de demora em diagnósticos remotos

### 4.2 **Wallbox Pulsar Plus**

*   **Origem:** Espanha · Fundada 2015 · NYSE: WBX
*   **Classificação:** Internacional com presença BR

#### **Problema que resolve**
Recarga inteligente em residências, condomínios e frotas, com gestão compartilhada de múltiplas unidades e integração solar.

#### **Funcionalidades principais**
*   Power sharing entre até 25 unidades em circuito único
*   App myWallbox: agendamento, histórico, cobrança por usuário
*   Power Boost (gestão de demanda domiciliar) e Eco-Smart (integração solar)
*   Wi-Fi, Bluetooth, RFID, voz (Alexa/Google)
*   Pulsar Pro (versão B2B): 4G, RFID, IP55, IK10

#### **Modelo de negócio**
**Venda de hardware** (Pulsar Plus ~USD 400–650). Software de gestão incluído. Revenue adicional via gateway de pagamento para condomínios cobrarem sessões automaticamente por cartão.

#### **Limitações conhecidas**
*   Cabos falham em temperaturas extremas (abaixo de 0 °C)
*   LED frontal indimível pode ser incômodo em garagens fechadas
*   Mais caro que concorrentes de mesma potência
*   Faturamento direto por usuário ainda em expansão (não disponível em todos mercados)
*   Empresa reportou prejuízo GAAP em 2024; risco de descontinuidade de suporte

### 4.3 **ChargePoint (CPaaS)**

*   **Origem:** EUA · Fundada 2007 · NYSE: CHPT
*   **Classificação:** Internacional

#### **Problema que resolve**
Gestão centralizada de grandes redes de recarga corporativa e pública, eliminando CapEx via modelo de serviço.

#### **Funcionalidades principais**
*   ChargePoint as a Service (CPaaS): hardware + software + instalação + suporte por assinatura anual
*   +352.000 portas gerenciadas globalmente (abril 2025)
*   Plataforma em nuvem com roaming entre redes parceiras
*   Integração com frotas (Amazon, UPS), EMS e Eaton
*   Subscription margin de 63% (Q3 FY2025)

#### **Modelo de negócio**
**SaaS/Hardware-as-a-Service**: planos de 3 e 5 anos. Receita de subscrição cresceu 27% YoY (Q1 FY2025) e já representa 40% da receita total. ChargePoint retém propriedade do hardware.

#### **Limitações conhecidas**
*   Sem operação direta no Brasil / América Latina
*   Prejuízo GAAP acumulado de USD 282,9 M em FY2025; modelo ainda pré-lucrativo
*   Foco em grandes instalações corporativas; pouco adaptado a condomínios menores
*   Lock-in de plataforma: mudança de fornecedor exige substituição de hardware
*   Fim de venda (EoS) de alguns planos CPaaS antigos em agosto 2024

### 4.4 **NeoCharge**

*   **Origem:** Brasil · Fundada ~2016
*   **Classificação:** 100% Nacional

#### **Problema que resolve**
Recarga em condomínios, empresas e comércios no Brasil, com gestão e cobrança individualizadas e conformidade com normas locais (INMETRO, ABNT).

#### **Funcionalidades principais**
*   Plataforma de gestão web + app: status em tempo real, alertas, métricas de uso
*   Relatórios de consumo individual para rateio condominial
*   Solução end-to-end: equipamento + instalação + monitoramento + suporte
*   NeoCharge Partners: financiamento em até 36 meses para comércios
*   Crescimento de 70% em 2025; acima de 480 mil VEs em circulação no Brasil

#### **Modelo de negócio**
**Venda de hardware + software** (software gratuito no plano Partners). No Partners: financiamento em 36x com desconto de até 50%, e NeoCharge retém % sobre o faturamento das sessões. Receita também via manutenção.

#### **Limitações conhecidas**
*   Plataforma menos madura que soluções internacionais em funcionalidades avançadas (V2G, tarifas dinâmicas)
*   Cobertura de suporte técnico concentrada nas capitais
*   Interoperabilidade com outras redes (OCPI/roaming) ainda limitada
*   Ainda sem opção robusta de agendamento de vagas

### 4.5 **Copel (Eletrovia + Tarifa Mobiflex)**

*   **Origem:** Brasil · Concessionária Pública · PR
*   **Classificação:** Nacional / Regulatório

#### **Problema que resolve**
Infraestrutura de recarga rodoviária (corredor BR-277) e incentivo tarifário para deslocar recarga residencial para fora do horário de pico.

#### **Funcionalidades principais**
*   Eletrovia: 12+ postos de recarga rápida em 730 km (BR-277, PR)
*   Tarifa Mobiflex: desconto de até 12% na conta de luz para quem carrega entre 0h–6h
*   Norma técnica NTC 902210: padrão mínimo para conexão de pontos de recarga em condomínios do Paraná
*   Integração com startup Move para gestão unificada de eletropostos via OCPP
*   Sandbox tarifário autorizado pela ANEEL (Resolução 966/2021 + RA 15.400/2024)

#### **Modelo de negócio**
**Concessão regulada**: receita via tarifa de energia + projeto-piloto de tarifa diferenciada (Mobiflex). Não é CPO privado — atua como enabler regulatório.

#### **Limitações conhecidas**
*   Tarifa Mobiflex ainda é piloto com vagas limitadas; não escalonada ainda
*   Cobertura geográfica restrita ao Paraná (e corredor PR/SC)
*   Não oferece solução de software de gestão de condomínio end-to-end
*   Ritmo de inovação limitado pela burocracia regulatória (aprovações ANEEL)

### **Gaps identificados — oportunidade para EV ChargeOps**

*   **Adaptação regulatória BR:** Soluções internacionais ignoram IT-41, NTC 902210 e Lei 18.403/SP; há espaço para uma plataforma nativa.
*   **Gestão de conflito coletivo:** Nenhuma solução resolve a fricção de governança condominial (assembleias, aprovações, auditoria).
*   **Agendamento de vagas:** Ausente ou rudimentar em todas as soluções analisadas para o contexto de vagas compartilhadas.
*   **Rateio automático integrado:** Soluções locais exportam relatórios manuais; integração direta com gestão condominial é inexistente.
*   **Modelo sem CapEx acessível:** CPaaS não chegou ao Brasil; o gap de financiamento zero-upfront para condomínios menores é real.

Abaixo o detalhamento narrativo de cada solução, com contexto estratégico que complementa o comparativo acima.

* **Zaptec Pro**

Problema central: em condomínios e estacionamentos coletivos, adicionar carregadores individuais por vaga rapidamente esgota a capacidade elétrica do transformador. A Zaptec resolve isso com balanceamento dinâmico de carga.

Como funciona tecnicamente: o sistema Pro usa um único cabo de comunicação percorrendo todas as unidades em daisy-chain. Um controlador central redistribui a corrente disponível entre os carregadores ativos em tempo real, sem nunca ultrapassar o limite contratado com a distribuidora. O sistema é especialmente desenhado para cooperativas habitacionais, edificações multifamiliares e grandes estacionamentos, e pode carregar até 100 carros por circuito por dia.

Posicionamento: líder no mercado norueguês — o mais avançado do mundo em adoção de EVs. Opera em 18 dos 20 maiores mercados de EV da Europa. O lançamento do Zaptec Go 2 trouxe suporte nativo a OCPP para operadores de pontos de carga, conectividade 4G LTE integrada de fábrica, e capacidade de V2G bidirecional para AC.

Limitações práticas: o Zaptec Go não oferece compatibilidade com tarifas dinâmicas de energia, o que é uma desvantagem para quem quer reduzir custos aproveitando horários de menor tarifa. Em relação a falhas de hardware, usuários relatam dificuldade em diagnósticos remotos quando o carregador apresenta problemas com a rede elétrica local. O V2G ainda exige sistemas fechados com um único fornecedor de energia e modelo específico de EV — a interoperabilidade ainda não é possível.

Gap para o Brasil: nenhuma presença comercial direta. Os padrões de plug e tensão da rede brasileira (predominantemente 127/220 V com terra flutuante em muitas edificações antigas) exigem adaptações não previstas no produto-padrão europeu.

* **Wallbox Pulsar Plus**

Problema central: recarga inteligente domiciliar e em condomínios, com capacidade de dividir um circuito entre múltiplos usuários e integrar com geração solar.

Diferenciais técnicos: é possível vincular até 25 unidades Pulsar Plus juntas, tornando-o uma solução plausível para condomínios dispostos a investir em infraestrutura elétrica. O app myWallbox permite que múltiplos usuários paguem e acompanhem a recarga individualmente. A função de power sharing permite que múltiplas unidades compartilhem um único circuito de forma inteligente.

Modelo de negócio: venda de hardware com software incluído. A Wallbox reportou receita de USD 163,9 milhões em 2024, crescimento de 14% sobre o ano anterior. O produto tem presença no Brasil via distribuidores, mas sem suporte local robusto.

Limitações: ambos os modelos falharam no teste de cabo em baixa temperatura; não são recomendados para climas frios. O LED frontal brilhante e sem regulagem de intensidade pode ser incômodo em garagens. Ambos os modelos são mais caros do que concorrentes comparáveis de outras marcas.

Oportunidade identificada: a Wallbox planeja introduzir a capacidade de cobrar diretamente usuários que compartilham as unidades, o que seria uma solução perfeita para apartamentos, condomínios e recarga corporativa — mas esse recurso ainda está em implantação nos mercados latinos.

* **ChargePoint (CPaaS)**

Problema central: empresas e municípios que querem oferecer recarga sem imobilizar capital em hardware, assumindo tudo como OpEx previsível.

O modelo CPaaS: a ChargePoint retém a propriedade do hardware e fornece tudo que é necessário — hardware, software, instalação e setup — por uma taxa anual reduzida. O monitoramento proativo das estações garante que nunca fiquem tecnicamente obsoletas. Os acordos CPaaS são estruturados em termos de 3 e 5 anos. A receita de assinatura representou 40% da receita total no terceiro trimestre do FY2025, atingindo USD 42 milhões, com margem de assinatura recorde de 63%.

Escala e rede: a ChargePoint gerencia mais de 352.000 portas globalmente (abril 2025). Frotas corporativas como Amazon e UPS utilizam infraestrutura de depot customizada da empresa.

Limitações estruturais: a ChargePoint não opera no Brasil ou na América Latina. Financeiramente, a receita do quarto trimestre do FY2025 foi de USD 101,9 milhões, queda de 12% sobre o período anterior, com prejuízo GAAP de USD 64,6 milhões no trimestre e prejuízo anual de USD 282,9 milhões. O modelo CPaaS cria forte dependência do fornecedor: sair do contrato implica substituição total do hardware, já que a ChargePoint retém a propriedade dos equipamentos. 

* **NeoCharge**

Problema central: viabilizar a instalação de carregadores em condomínios, empresas e comércios brasileiros com conformidade às normas locais, medição individualizada e cobrança automática.

Posicionamento: principal player nacional focado em soluções integradas. A NeoCharge encerrou 2025 com crescimento de 70%, fornecendo desde o equipamento até a instalação, monitoramento em tempo real, suporte remoto e gestão do consumo de energia.

NeoCharge Partners: o programa oferece condições acessíveis de financiamento, suporte técnico completo e um modelo que transforma o carregador em uma nova fonte de receita. A empresa fornece a infraestrutura com financiamento em até 36 meses, por um valor até 50% menor que o custo de mercado. Em contrapartida, a NeoCharge retém apenas uma pequena porcentagem sobre o faturamento gerado.

Plataforma de gestão: a plataforma permite saber rapidamente se as estações estão disponíveis, em uso ou indisponíveis. Com monitoramento remoto em tempo real, emite avisos quando há problemas. Oferece métricas de recargas totais, taxa de uso, energia consumida, conectores mais usados e clientes totais.

Limitações: a plataforma ainda não oferece funcionalidades avançadas de agendamento de vagas, integração com sistemas de gestão condominial (como Superlógica ou Condomob) ou suporte a tarifas dinâmicas. A interoperabilidade via OCPI (roaming entre redes) ainda é incipiente.

* **Copel (Eletrovia + Tarifa Mobiflex)**

Problema central: diferente das demais, a Copel não é um CPO privado — é uma concessionária de distribuição que atua como habilitadora regulatória e de infraestrutura para o ecossistema de eletromobilidade no Paraná.

Eletrovia: rede de recarga rápida ao longo da BR-277 (730 km), com foco em viagens interurbanas. Um dos principais diferenciais do sistema integrado com a startup Move é que ele fornece um modelo para a futura comercialização de energia na mobilidade elétrica.

Tarifa Mobiflex: projeto-piloto autorizado pela ANEEL que oferece desconto de até 12% na conta de luz para usuários que carregam entre meia-noite e 6h da manhã, realizado em parceria com as empresas Daimon e Essenz. Essa é uma inovação regulatória relevante: ao usar um sandbox tarifário, a Copel testa um mecanismo de demand response para EVs — reduzindo o pico noturno criado pela concentração de recargas.

Norma técnica (NTC 902210): estabelece as exigências mínimas para a conexão de pontos de recarga em estacionamentos e condomínios residenciais e de comércio à rede elétrica, recomendando no mínimo 2% das vagas para veículos elétricos e infraestrutura de eletrodutos para até 25% das vagas totais.

Limitação estratégica: a Copel não resolve o problema de gestão operacional das sessões no condomínio — ela define a infraestrutura elétrica e os incentivos tarifários, mas não entrega o software de gestão de recarga, agendamento de vagas ou cobrança automática por usuário.

Síntese estratégica: onde o EV ChargeOps se encaixa:

As cinco soluções analisadas deixam descobertos pelo menos cinco gaps concretos no contexto brasileiro:

**Gap 1** — Conformidade regulatória nativa: nenhuma solução internacional está calibrada para a IT-41 (SP), NTC 902210 (Copel/PR) e Lei 18.403/2026.

**Gap 2** — Gestão da fricção condominial: o processo de aprovação em assembleia, emissão de laudos, controle de acesso por vaga e transparência no rateio são problemas de workflow, não apenas de hardware. Nenhuma solução os resolve de ponta a ponta.

**Gap 3** — Agendamento inteligente de vagas compartilhadas: em condomínios onde há menos carregadores do que veículos, o agendamento é crítico. Está ausente ou rudimentar em todas as soluções.

**Gap 4** — Integração com gestão condominial: nenhuma solução se integra nativamente com os sistemas de administração de condomínios amplamente usados no Brasil (ex.: Superlógica, Condomob, Grand), o que obriga o síndico a fazer conciliação manual de cobranças.

**Gap 5** — CPaaS localizado para condomínios menores: o modelo ChargePoint sem CapEx existe apenas para o mercado norte-americano e europeu. Condomínios brasileiros com 50–200 unidades não têm acesso a um modelo equivalente com suporte local, preços em reais e conformidade normativa.

---

* Resolução normativa ANEEL nº 1.000/2021: exploração comercial da recarga, comunicação prévia à distribuidora e exigência de protocolos abertos de comunicação para equipamentos não exclusivos de uso privado;
* Carregador GoodWe HCA G2: interfaces RS-485, LAN, Wi-Fi, Bluetooth e RFID — o que cada uma permite fazer e como podem ser utilizadas pela plataforma;
* API GoodWe (SEMS Portal): quais dados ela expõe sobre o carregador, como status, potência, energia entregue e eventos de sessão.

### Opções de aprofundamento (Escolher pelo menos uma)

* **Opção A** — Mapeamento regulatório completo: além da RN 1.000/2021, verifique se existem normas estaduais, municipais ou resoluções complementares da ANEEL que impactem a operação de carregadores compartilhados em São Paulo. Avalie se a solução proposta estaria em conformidade;
* **Opção B** — Exploração da API GoodWe: acesse a documentação pública da API SEMS e documente os endpoints disponíveis, os campos retornados para dados de carregamento, o formato dos dados (JSON) e como eles poderiam alimentar a plataforma EV ChargeOps;
* **Opção C** — Mapeamento de APIs complementares: pesquise e documente ao menos duas APIs externas que poderiam enriquecer a plataforma. Sugestões: Open Charge Map API, Google Places API (campo evChargeOptions), ANEEL Open Data e IBGE.

---

* Quais são as camadas da plataforma EV ChargeOps: física (carregador), conectividade (rede e protocolos), aplicação (back-end, regras de negócio e IA) e apresentação (interfaces do gestor e do usuário);
* Como os dados fluem da sessão de recarga até a fatura do usuário: qual é o caminho completo, quais transformações ocorrem e onde a IA entra nesse fluxo;
* Qual é o modelo de rateio que a equipe propõe: quais variáveis serão usadas, como a fatura individual será calculada e como o modelo lida com casos excepcionais (sessão interrompida, usuário que não carregou no mês ou dois veículos da mesma unidade).

### Opções de aprofundamento (Escolher pelo menos uma)

* **Opção A** — Benchmarking de modelos de rateio: pesquise como condomínios que já implantaram carregadores compartilhados estruturam o rateio de energia. Identifique ao menos dois modelos distintos, compare suas vantagens e limitações e justifique qual a equipe adotará;
* **Opção B** — Definição do papel da IA: pesquise e documente ao menos duas abordagens de IA aplicáveis ao problema. Para cada uma, destaque o problema que resolve, a técnica envolvida, os dados necessários e o impacto esperado. Exemplos: regressão para previsão de consumo, clustering para perfis de uso, NLP para interface conversacional, detecção de anomalias, entre outros;
* **Opção C** — Esquema da base de dados: defina e documente o esquema de dados da plataforma, como entidades (usuário, unidade, sessão e fatura), atributos, relacionamentos e exemplos de registros simulados que serão usados na sprint 02.

`Substituir esse bloco pela documentacao e pesquisa para entrega`

## O documento README deve conter:

| ✅ Feito | ❌ Pendente |

* Nome da equipe e RMs dos integrantes; ✅
* Descrição do problema e do contexto do desafio; ✅
* Resultado das três frentes de pesquisa, com as opções de aprofundamento escolhidas documentadas; ❌
* Diagrama de arquitetura da solução proposta; ❌
* Modelo de rateio definido, com critérios e variáveis; ❌
* Papel da IA na solução; ❌
* Plano para a sprint 02: o que será desenvolvido, em qual ordem e com quais tecnologias. ❌

### Orientações para o README

* Escreva em português claro e direto;
* Use títulos, subtítulos e listas apenas onde é necessário para ajudar a organizar a leitura;
* Evite o uso excessivo de emojis, pois um README técnico não precisa deles;
* Inclua o diagrama de arquitetura como imagem no repositório e referencie-o no README;
* Cite todas as fontes consultadas ao final do documento.

`Excluir esse bloco para entrega`

## Fontes

* [Migalhas — Análise da Lei 18.403/2026 de SP sobre recarga em condomínios](migalhas.com.br)
* [Gazeta do Povo — Rede de recarga e dados de emplacamento ABVE 2025/2026](gazetadopovo.com.br)
* [O Tempo — Dados EPE/MME sobre licenciamentos acumulados](otempo.com.br)
* [Kilowatt Crew — Guia definitivo OCPP (fluxo técnico de sessões)](kilowattcrew.app)
* [TriCharge Blog — Exemplo prático do fluxo OCPP](blog.tricharge.com.br)
* [Canal VE — Protocolo OCPP e interoperabilidade no Brasil](canalve.com.br)
* [CERTI Foundation — Modelos de negócio para mobilidade elétrica](certi.org.br)
* [Simon-Kucher — Pesquisa global sobre assinaturas de recarga](simon-kucher.com)
* [Rabobank — Estrutura CPO/eMSP na Europa 2025](rabobank.com)
* [IEA Global EV Outlook 2025 — Dados globais de infraestrutura](iea.org)
* [Elinta Charge — Estrutura de receita para CPOs](elintacharge.com)
* [WEG Digital — Solução WEMOB® para condomínios](weg.net)
* [EZVolt — Modelo CPO sem custo inicial](ezvolt.com.br)
* [Power2Go — Carregadores inteligentes e gestão de carga em condomínios](power2go.com.br)
* [Arxiv (Segurança IEC 61851 / ISO 15118) — Protocolos técnicos de comunicação veículo-carregador](arxiv.org)
* [Zaptec](zaptec.com) 
* [Business Norway - Zaptec Pro is a smart, flexible charging station for larger parking spaces](businessnorway.com)
* [InfraStructure Newa - Zaptec launches ‘UK first’ V2G charger for domestic and commercial use](evinfrastructurenews.com) 
* [We Power You Car - Zaptec EV Charger Review: Is the Zaptec Go the Way to Go?](wepoweryourcar.com)
* [AutoBlog - Wallbox Pulsar Plus Long-Term Review: Sleek, feature-packed electric car charger](autoblog.com)
* [EnergySage - Wallbox Pulsar Plus review: A fair-weather, smart, and compact EV charger](energysage.com)
* [WallBox - Wallbox Pulsar Plus: Ideal EV Charging for Multi-Unit Communities](wallbox.com)
* [ChargePoint - ChargePoint as a Service](chargepoint.com/cpaas)
* [SEC Filings CHPT FY2025](dcf-model.com)
* [PPIAF - ChargePoint as a Service (CPaaS)](gihub.org)
* [NeoCharge](neocharge.com.br) 
* [Cenário Energia - NeoCharge cresce 70% em 2025 e consolida papel estratégico na expansão da infraestrutura de recarga no Brasil](cenarioenergia.com.br) 
* [Potencia Portal - NeoCharge lança solução que facilita a instalação de carregadores para veículos elétricos em comércios](revistapotencia.com.br) 
* [GOV Paraná - Copel lança projeto que dá desconto para recarga de veículos elétricos na madrugada](parana.pr.gov.br)


## Integrantes

* Rai da Silva Lima (RM572070)
raierai123456789@gmail.com

* Pietra Fanticelli (RM573229)
pf.pietrafanticelli@gmail.com

* Samuel Felipe Furtado Freire (RM572777)
nekolorful@gmail.com

* Marcos Junio Benevenuto Silva (RM570834)
preesgamebenevenuto@gmail.com

* Ellen Kauane Rodrigues Alves (RM570885)
ellenzinha.kauane@gmail.com
