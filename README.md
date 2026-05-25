# ENTERPRISE CHALLENGE 2026 — GOODWE + FIAP

## Contexto do Desafio

A GoodWe, líder global em inversores e armazenamento de energia, mantém uma parceria estratégica com a FIAP através do Energy Innovation Lab (Unidade Aclimação). Como parte dessa colaboração, um carregador de veículos elétricos (modelo HCA G2) está instalado e operacional no estacionamento L1 da unidade.
O desafio surge no cenário de crescimento acelerado da mobilidade elétrica no Brasil. Embora a infraestrutura de recarga esteja se expandindo, ambientes de uso coletivo — como condomínios residenciais, edifícios corporativos e campus universitários — enfrentam dificuldades críticas para gerir esses recursos de forma eficiente e transparente.

## Descrição do Problema
Atualmente, a maioria das infraestruturas de recarga compartilhada carece de mecanismos integrados para:
* Identificação por Usuário: Dificuldade em vincular sessões de recarga a moradores ou colaboradores específicos.
* Cálculo de Consumo Individual: Ausência de medição precisa e automatizada do volume de energia (kWh) entregue por sessão.
* Rateio Justo: Falta de regras claras e automatizadas para distribuir os custos de energia e manutenção entre os usuários.
* Inteligência Operacional: Os dados gerados (duração, picos de uso, ociosidade) não são aproveitados para otimizar a operação ou prever demandas futuras.

O projeto EV ChargeOps propõe solucionar esse gargalo transformando dados brutos de recarga em informações estruturadas e inteligência acionável, utilizando a Inteligência Artificial como motor lógico para garantir uma gestão eficiente e uma experiência digital clara para gestores e usuários.

## Pesquisar e documentar

* O que são infraestruturas de recarga compartilhada e quais são os principais desafios operacionais enfrentados por gestores de condomínios, edifícios corporativos ou campus universitários;
* Como funciona uma sessão de recarga do ponto de vista técnico: o que acontece entre o momento em que o veículo é conectado e o encerramento da sessão, quais dados são gerados e como podem ser capturados;
* Quais modelos de negócio existem para recarga compartilhada no Brasil e no mundo: recarga gratuita, cobrança por kWh, cobrança por tempo, assinatura mensal ou rateio condominial.

### Opções de aprofundamento (Escolher pelo menos uma)

* **Opção A** — Análise de mercado: mapeie ao menos 3 soluções existentes que resolvem problemas similares ao EV ChargeOps. Para cada uma, destaque: o problema que resolve, as funcionalidades principais, o modelo de negócio e as limitações conhecidas. Referências: Zaptec, Wallbox Pulsar Plus, ChargePoint, Neocharge e Copel Telecom EV;
* **Opção B** — Pesquisa com usuários: elabore um roteiro de perguntas e aplique com ao menos 3 pessoas que sejam ou possam ser usuárias da solução (moradores de condomínio, gestores de estacionamento ou motoristas de EV). Documente as respostas e extraia ao menos 5 insights que influenciem o design da solução;
* **Opção C** — Análise de dados públicos: pesquise e analise dados sobre o crescimento da frota de veículos elétricos no Brasil, distribuição de pontos de recarga e perfis de uso.

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

## Fontes

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