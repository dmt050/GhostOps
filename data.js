// ═══════════════════════════════════════════════════════════════
//  GhostOps: ITACUA — KingSLayer Terminal
//  data.js — Base de dados: POIs, Roles, Missões, Modificadores
// ═══════════════════════════════════════════════════════════════

// ─── POIs ────────────────────────────────────────────────────────
const itacuaPOIs = [
  // Fazendas
  { name:"Mendez Farm",                   type:"Farm",       x:251, y:160 },
  { name:"Atollo Farm",                   type:"Farm",       x:319, y:144 },
  { name:"Colqhe Ranch",                  type:"Farm",       x:338, y:147 },
  { name:"Bocca Farm",                    type:"Farm",       x:278, y:110 },
  // Checkpoints
  { name:"CP North (Cotani)",             type:"Checkpoint", x:240, y:340 },
  { name:"CP South (Itacua Base)",        type:"Checkpoint", x:358, y:132 },
  // Vilas e POIs
  { name:"Khochi",                        type:"Village",    x:490, y:88,  water:true, prisoners:true },
  { name:"Buena Vida",                    type:"Village",    x:350, y:318 },
  { name:"Cotani",                        type:"Village",    x:273, y:329 },
  { name:"Culta",                         type:"POI",        x:188, y:276 },
  { name:"Pantoja",                       type:"Village",    x:120, y:186 },
  { name:"Santa Maria",                   type:"POI",        x:233, y:286 },
  { name:"Vieja Granja",                  type:"POI",        x:381, y:258 },
  { name:"Campo de Futebol El Yayo",      type:"POI",        x:401, y:155, water:true },
  // Seguros (inserção/extração apenas)
  { name:"Yopil",                         type:"Safe",       x:227, y:312 },
  { name:"Hunt Lodge",                    type:"Safe",       x:156, y:244 },
  { name:"Santa Catalina Chapel",         type:"Safe",       x:267, y:252 },
  { name:"Baurecito Ruins",               type:"Safe",       x:378, y:202 },
  { name:"Itacua Alpha (Rally Point)",    type:"Safe",       x:312, y:204 },
  { name:"Itacua Bravo (Rally Point)",    type:"Safe",       x:140, y:213 },
  { name:"Itacua Charlie (Rally Point)",  type:"Safe",       x:195, y:90  },
  { name:"Itacua Delta (Rally Point)",    type:"Safe",       x:375, y:110 },
  { name:"Itacua Echo (Rally Point)",     type:"Safe",       x:238, y:310 },
  // Santa Blanca — Military
  { name:"Outpost Central (Catalina)",           type:"Military", x:350, y:262 },
  { name:"Outpost Sul (Rally Point Charlie)",    type:"Military", x:207, y:127, prisoners:true },
  { name:"La Casa del Mexicano",                 type:"Military", x:342, y:100 },
  { name:"Sicario House",                        type:"Military", x:184, y:178 },
  { name:"Itacua Base (Santa Blanca)",           type:"Military", x:338, y:82,  prisoners:true },
  // Unidad — Military
  { name:"F.O.B. Armadillo",                    type:"Military", x:415, y:212, water:true, prisoners:true },
  { name:"Observation Outpost (Unidad)",         type:"Military", x:95,  y:172 },
];

const ocoroPOIS = [
  // Fazendas
  { name:"El Altiplano Verde",            type:"Safe",       x:425, y:103 },
  // Checkpoints
  { name:"CP 01 (South Ocoro)",           type:"Checkpoint",  x:353, y:91 },
  { name:"CP 02 (Central Ocoro)",         type:"Checkpoint",  x:368, y:168 },
  { name:"CP 03 (East Ocoro)",            type:"Checkpoint",   x:475, y:225, water:true },
  // Vilas e POIs
  { name:"Campo Ana",                     type:"Village",     x:159, y:51, water:true },
  { name:"Pujio",                         type:"Village",     x:446, y:225, water:true },
  { name:"Puerto Grande",                 type:"Village",     x:190, y:291 , water:true },
  { name:"Puerto Nuevo",                  type:"Village",     x:202, y:161, water:true },
  { name:"Gas Station Via-B 01",          type:"POI",         x:339, y:35 },
  { name:"Gas Station Via-B 02",          type:"POI",         x:379, y:147 },
  { name:"Moko",                          type:"POI",         x:215,  y:138  },
  { name:"Santa Rosa",                    type:"POI",         x:369, y:46 },
  { name:"Los Mosquitos",                 type:"POI",         x:327, y:275, water:true },
  { name:"Pachama Scars",                 type:"POI",         x:298, y:66  },
  { name:"Ocoro Dispensary",              type:"POI",         x:330, y:89 },
  { name:"Nenma Freight Yard",            type:"POI",         x:279, y:164 },
  // Seguros (inserção/extração apenas)
  { name:"Oroco Alpha",               type:"Safe",       x:297, y:110 },
  { name:"Oroco Bravo",               type:"Safe",       x:390, y:167 },
  { name:"Oroco Charlie",             type:"Safe",       x:199, y:270 },
  { name:"Oroco Delta",               type:"Safe",       x:201, y:144 },
  { name:"A Fisherman's House",       type:"Safe",       x:179,  y:307, water:true },
  // Santa Blanca — Military
  { name:"Outpost 01 (SB-SouthWest)", type:"Military", x:200, y:63, prisoners:true },
  { name:"Outpost 02 (SB-Central)",   type:"Military", x:364, y:131 },
  { name:"Outpost 03 (SB-Pujio South Sector)",    type:"Military", x:427, y:196 },
  { name:"Outpost 04 (SB-Pujio East Sector)",     type:"Military", x:472, y:219, prisoners:true },
  { name:"Outpost 05 (SB-Pujio West Sector)",     type:"Military", x:424, y:233 },
  { name:"Outpost 06 (SB-Chem Storage)",          type:"Military", x:328, y:362  },
  { name:"Outpost 07 (SB- Prison Camp)",          type:"Military", x:267,  y:305, prisoners:true },
  { name:"Outpost 08 (SB- West)",                 type:"Military", x:166,  y:254, prisoners:true },
  { name:"Oroco Base (SB)",                       type:"Military", x:315, y:240, prisoners:true },
  { name:"Coca Paste Factory (SB)",             type:"Military", x:248, y:372, prisoners:true },
  { name:"Buchon House",                        type:"Military", x:249, y:343 },
  { name:"Zona Narco Prohibida 01 (SB - Southwest)",   type:"Military", x:189, y:83, water:true },
  { name:"Zona Narco Prohibida 02 (SB - Southwest)",   type:"Military", x:197, y:114, water:true },
  { name:"Zona Narco Prohibida 03 (SB - West)",        type:"Military", x:167, y:168, water:true },
  { name:"Zona Narco Prohibida 04 (SB - Northwest)",   type:"Military", x:158, y:211, water:true },
  { name:"Zona Narco Prohibida 05 (SB - Northwest)",   type:"Military", x:143, y:254, water:true },
  // Unidad — Military
  { name:"Combat Outpost (Unidad)",                    type:"Military", x:224, y:240, water:true, prisoners:true },
  
];

  const aguaverdePOIs = [
    // Checkpoints
  { name:"CP 01 (West Aguaverde)",           type:"Checkpoint", x:158, y:141 },
  { name:"CP 02 (Riverine)",        type:"Checkpoint", x:325, y:200, water:true },
  // Vilas e POIs
  { name:"Goyo",                    type:"Village",    x:310, y:182, water:true },
  { name:"Alicia Town",             type:"Village",    x:144, y:200, water:true },
  { name:"Arroyo Baya",             type:"Village",    x:471, y:194, water:true },
  { name:"Paraiso Casino",          type:"POI",        x:278, y:109 },
  { name:"Paraíso Agua Verde",      type:"POI",        x:196, y:155 },
  { name:"Playa Sirena",            type:"POI",        x:435, y:210, water:true },
  { name:"La Nube Blanca",          type:"POI",        x:447, y:203, water:true },
  { name:"Secret Cocaine Hideout",  type:"POI",        x:334, y:234, water:true },
  { name:"Patuja Mansion",          type:"POI",        x:296, y:256, water:true },
  { name:"Ajuga Mansion",           type:"POI",        x:287, y:281, water:true },
  { name:"Kantuta Mansion",         type:"POI",        x:235, y:308, water:true },
  { name:"Tajibo Mansion",          type:"POI",        x:216, y:308, water:true },
  { name:"Playa Tajibo",            type:"POI",        x:154, y:270, water:true },
  { name:"Rio del Jaguar",          type:"POI",        x:127, y:272, water:true },
  // Seguros (inserção/extração apenas)
  { name:"Agua Verde Alpha",            type:"Safe",       x:179, y:238, water:true },
  { name:"Agua Verde Bravo",            type:"Safe",       x:451, y:240 },
  { name:"Agua Verde Charlie",          type:"Safe",       x:292, y:178, water:true },
  { name:"Agua Verde Delta",            type:"Safe",       x:212, y:86 },
  { name:"La Torre de Arroyo Baya",     type:"Safe",       x:497, y:221 },
  { name:"Siren Island",                type:"Safe",       x:223, y:270, water:true },
  //Santa Blanca — Military
  { name:"Outpost 01 (SB - South)",       type:"Military", x:249, y:68 },
  { name:"Outpost 02 (SB - Central)",     type:"Military", x:346, y:225 },
  { name:"Outpost 03 (SB - Northeast)",       type:"Military", x:494, y:267 },
  { name:"Buchon House",       type:"Military", x:253, y:226, water:true },
];  

const PROVINCES = [
  {
    id: "itacua",
    name: "Itacua",
    mapImage: "maps/itacua_map.jpg",
    bounds: [[0, 0], [400, 620]],
    pois: itacuaPOIs
  },
  {
    id: "ocoro",
    name: "Ocoro",
    mapImage: "maps/ocoro_map.jpg",
    bounds: [[0, 0], [400, 620]],
    pois: ocoroPOIS
  },
  {
    id: "aguaverde",
    name: "Agua Verde",
    mapImage: "maps/aguaverde_map.jpg",
    bounds: [[0, 0], [400, 620]],
    pois: aguaverdePOIs
  }

];

// ─── OPERADOR ROLES ──────────────────────────────────────────────
const ROLES = {
  Sniper: {
    icon: "◎",
    weapons: [
      "HTI","L115A3","MSR","SRSA1","SR-1","Stampede","M40A5",
      "M1891","Lanza Sagrada","The Warhawk","SR-25","Dragunov (SVD)","G28","MK14"
    ],
    desc: "Engajamento de longa distância. Inclui bolt-action e semi-automáticos (DMR)."
  },
  Support: {
    icon: "▣",
    weapons: ["M249","MK48","Stoner LMG","PKM","MG121","M60","M60E4"],
    desc: "Supressão de área. Cobertura de retirada."
  },
  Assault: {
    icon: "◆",
    weapons: [
      "M4A1","M4A1 Tactical","MK17","MK16","AK-12","AK-47","ACR",
      "AUG A3","G36C","L85A2","P416","TAR-21","556xi","805 Bren A2",
      "FAL","MDR","R5 RGP","SR3M","SIG556","G2"
    ],
    desc: "Combate CQB/médio range. Entrada de força."
  },
  Ghost: {
    icon: "◈",
    weapons: ["MP5","MP7","P90","Vector .45","MPX","PP19 Bizon","Scorpion EVO 3","UMP45"],
    desc: "Infiltração silenciosa. SMGs suprimidas. Zero contato."
  },
  CQB: {
    icon: "◉",
    weapons: ["SPAS-12","SASG-12","Super Shorty","M4 Super 90","AA-12"],
    desc: "Combate extremamente próximo."
  }
};

// ─── MISSION TYPES ───────────────────────────────────────────────
const MISSION_TYPES = {
  Assassination:{
    label:"ASSASSINATO",
    validTypes:["Military","Checkpoint","Village","Farm","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER
OP: NEUTRALIZAÇÃO DE ALVO DE ALTO VALOR

OBJETIVO PRIMÁRIO: Localizar e eliminar alvo designado operando em ${obj.name}.
O HVT deve ser neutralizado com confirmação de eliminação (biometria).

INSERÇÃO: ${water?'AQUÁTICA via lancha rebelde a partir de':'Terrestre via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Destruir equipamento de comunicações em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Janela de ${Math.floor(Math.random()*8+12)} minutos.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
ROE: Engajamento apenas de combatentes armados.
`.trim()
  },
  Sabotage:{
    label:"SABOTAGEM C4",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER
OP: SABOTAGEM — AUTORIZAÇÃO CHARLIE-4

OBJETIVO PRIMÁRIO: Infiltrar ${obj.name} e plantar cargas C4 na infraestrutura.
Detonar remotamente após atingir distância de segurança mínima (300m).

INSERÇÃO: ${water?'AQUÁTICA via infiltração fluvial a partir de':'Veicular oculto via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Eliminar o Comandante de Segurança local em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Exfil antes da chegada do QRF (${Math.floor(Math.random()*5+8)} min após detonação).

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
ROE: Baixas civis são INACEITÁVEIS. Verifique área antes da detonação.
`.trim()
  },
  Assault:{
    label:"ASSALTO (LIMPEZA)",
    validTypes:["Military","Checkpoint","Farm","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER
OP: ASSALTO — LIMPEZA TÁTICA

OBJETIVO PRIMÁRIO: Neutralizar TODA a presença inimiga em ${obj.name}.
Confirmar eliminação de todos os combatentes. Área deve ser declarada limpa.

INSERÇÃO: ${water?'AQUÁTICA com cobertura anfíbia via':'Infiltração oculta via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Capturar Sicario Líder para interrogação em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Heliborne ou terrestre conforme disponibilidade.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
ROE: Máxima força autorizada. Nenhum combatente deve escapar do perímetro.
`.trim()
  },
  AssaultSab:{
    label:"ASSALTO + SABOTAGEM",
    validTypes:["Military","Farm","Checkpoint","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER
OP: ASSALTO COMBINADO + DESTRUIÇÃO DE INFRAESTRUTURA

FASE 1 — ASSALTO: Eliminar guarnição de ${obj.name}. Garantir perímetro seguro.
FASE 2 — SABOTAGEM: Plantar C4 nos pontos críticos e detonar na saída.

INSERÇÃO: ${water?'AQUÁTICA via ponto de infiltração fluvial em':'Infiltração noturna via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Neutralizar o Comandante de Segurança em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name} antes do amanhecer.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
NOTA: Op de duas fases. Não ative a Fase 2 com hostis vivos no perímetro.
`.trim()
  },
  Recon:{
    label:"RECON (FURTIVO)",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER
OP: RECONHECIMENTO — PROTOCOLO SILENCIOSO

OBJETIVO PRIMÁRIO: Estabelecer posição de observação em ${obj.name}.
Documentar força inimiga, rotação de patrulhas e hardware. SEM ENGAJAMENTO.

INSERÇÃO: ${water?'AQUÁTICA furtiva (pré-amanhecer) via':'Infiltração pré-amanhecer via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Eliminar patrulha inimiga identificada próxima a ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Não pode ser detectado antes nem durante a extração.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
ROE: ZERO engajamentos. Qualquer contato cancela a Op e ativa protocolo de evasão.
`.trim()
  },
  Rescue:{
    label:"RESGATE DE PRISIONEIROS",
    validTypes:["Military","Checkpoint","Village"],
    requiresPrisoners: true,
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER // PRIORIDADE ALFA
⛓ LIBERTAÇÃO — PRISIONEIROS REBELDES CONFIRMADOS

Intel indica presença de prisioneiros rebeldes mantidos em cativeiro em ${obj.name}.
Janela de resgate: CRÍTICA. Execuções programadas para as próximas horas.

FASE 1 — NEUTRALIZAÇÃO: Eliminar a guarda inimiga e garantir o perímetro.
FASE 2 — LOCALIZAÇÃO: Localizar e confirmar todos os prisioneiros com vida.
FASE 3 — EXTRAÇÃO: Evacuar prisioneiros via ponto de exfiltração designado.

INSERÇÃO: ${water?'AQUÁTICA silenciosa via lancha a partir de':'Infiltração furtiva via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Eliminar o Comandante responsável pelo cativeiro em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no resgate.'}
EXTRAÇÃO: ${ex.name}. Helicóptero médico em standby. Código: NOVA-LIMA BRAVO.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
REGRAS DE ENGAJAMENTO: ROE restrito. Zero baixas civis. Prisioneiros têm PRIORIDADE ABSOLUTA.
NOTA: Qualquer prisioneiro deixado para trás é considerado falha de missão.
`.trim()
  },
  UW:{
    label:"GUERRA NÃO CONVENCIONAL",
    validTypes:["Military","Checkpoint","Farm","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water,hasPrisoners)=>hasPrisoners?`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER // DOUTRINA GNC
⚔ GUERRA NÃO CONVENCIONAL — PROTOCOLO INSURGÊNCIA

Intel CONFIRMADA: prisioneiros rebeldes mantidos em ${obj.name}.
Autorização GNC ativada. Objetivo: transformar o local em zona de guerra de atrito.

FASE 1 — INFILTRAÇÃO: Penetrar o perímetro de ${obj.name} sem ser detectado.
FASE 2 — LIBERTAÇÃO: Localizar e libertar os prisioneiros ANTES de qualquer engajamento.
  ↳ Os prisioneiros, uma vez livres, assumem o combate como força de atrito interna.
  ↳ Não interferir no engajamento deles — deixar o caos se instalar.
FASE 3 — LIMPEZA FINAL: Após os rebeldes suprimirem a defesa, eliminar os sobreviventes.
FASE 4 — EXTRAÇÃO: Sair do perímetro antes da chegada do QRF.

INSERÇÃO: ${water?'AQUÁTICA furtiva via':'Infiltração silenciosa via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Eliminar o Oficial de Inteligência responsável pelas capturas em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total na sequência GNC.'}
EXTRAÇÃO: ${ex.name}. Janela pós-engajamento: ${Math.floor(Math.random()*4+5)} minutos.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
AVISO TÁTICO: Libertar os prisioneiros PRIMEIRO é condição obrigatória.
Engajar antes da libertação cancela a vantagem de atrito e compromete a Op.
`.trim():`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: KINGSLAYER // DOUTRINA GNC
⚔ GUERRA NÃO CONVENCIONAL — PROTOCOLO DISTRAÇÃO REBELDE

${obj.name} é alvo de oportunidade GNC. Sem prisioneiros confirmados no local.
Missão exige ativação da habilidade DISTRAÇÃO para conduzir guerra de atrito.

FASE 1 — INSERÇÃO OCULTA: Infiltrar área de influência de ${obj.name} sem contato.
FASE 2 — ATIVAÇÃO: Invocar DISTRAÇÃO → Grupo rebelde se direciona ao local.
  ↳ Aguardar confirmação de chegada dos rebeldes antes de qualquer ação direta.
  ↳ Os rebeldes iniciam o atrito. Usar o caos como cobertura.
FASE 3 — EXPLORAÇÃO: Sob cobertura do tiroteio rebelde, avançar para o objetivo.
FASE 4 — LIMPEZA: Eliminar remanescentes que os rebeldes não neutralizaram.
FASE 5 — EXTRAÇÃO: Sair antes que o QRF consiga diferenciar Ghosts dos insurgentes.

INSERÇÃO: ${water?'AQUÁTICA furtiva via':'Infiltração silenciosa via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Destruir o centro de comunicações que poderia coordenar resposta ao ataque rebelde em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total na coordenação GNC.'}
EXTRAÇÃO: ${ex.name}. Janela pós-distração: ${Math.floor(Math.random()*4+6)} minutos.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR ATIVO: '+mod:''}
HABILIDADE OBRIGATÓRIA: DISTRAÇÃO (Rebeldes) — Sem ela, a Op não pode ser iniciada.
AVISO TÁTICO: Engajar ANTES da chegada dos rebeldes expõe os Ghosts sem cobertura.
`.trim()
  },
  Cleanup:{
    label:"OPERAÇÃO DE LIMPEZA",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: VERMELHO // OP VINCULADA À FALHA
⚠ QUEIMA DE ARQUIVO — PROTOCOLO LIMPA-RASTRO

Op anterior falhou em ${obj.name}. O cartel tem evidências.
FASE 1: Retornar a ${obj.name} e eliminar TODAS as testemunhas.
FASE 2: Destruir qualquer equipamento/documento que vincule os Ghosts à Op.

INSERÇÃO: ${water?'AQUÁTICA emergência via':'Emergência via '} ${ins.name}.
${sec ? `OBJETIVO SEC.: Eliminar Comandante Local que recebeu o relato em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Janela de ${Math.floor(Math.random()*5+6)} minutos. CRÍTICO.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR: '+mod:''}
NOTA: Missão de alto risco. Cartel em alerta máximo. Nenhum sobrevivente aceito.
`.trim()
  },
  BloodPrison:{
    label:"CÁRCERE DE SANGUE",
    validTypes:["Military","Checkpoint"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
HORA LOCAL: ${time} // CLASSIFICAÇÃO: URGENTE // RESGATE CRÍTICO
🩸 CÁRCERE DE SANGUE — OPERADOR CAPTURADO

Operador capturado durante Op anterior em ${obj.name}.
Execução programada para o amanhecer. Janela de resgate: AGORA.

INSERÇÃO: ${water?'AQUÁTICA rápida via':'Assalto direto via '} ${ins.name}.
OBJETIVO PRIMÁRIO: Localizar e extrair operador vivo de ${obj.name}.
${sec ? `OBJETIVO SEC.: Neutralizar Comandante responsável pelo cativeiro em ${sec.name}.` : 'OBJETIVO SEC.: Sem missão secundária. Foco total no primário.'}
EXTRAÇÃO: ${ex.name}. Helicóptero em standby. Código: NOVA-LIMA.

OPERADOR: ${role.desc}
${mod?'⚠ MODIFICADOR: '+mod:''}
NOTA: Zero opções. O operador não pode ser deixado para trás.
`.trim()
  }
};

// ─── MODIFICADORES ───────────────────────────────────────────────
const MODIFIERS = [
  null, null, null, // 3x chance de sem modificador
  "DRONE OFFLINE — Sem suporte aéreo ISR",
  "SEM NVG — Operação em visibilidade reduzida",
  "ZERO BAIXAS CIVIS — ROE restrito absoluto",
];

// ─── NOMES DE OPERAÇÃO ───────────────────────────────────────────
const OP_NAMES = [
  "CONDOR SILENCIOSO","QUINOA DE FERRO","ALTIPLANO VERMELHO","FANTASMA LHAMA",
  "SAL NEGRO","NARCISO MORTO","MONTANHA OCA","CORRIDA DA VÍBORA",
  "CARTEL FANTASMA","FALCÃO NOTURNO","PAPOULA CINZA","BACIA CARMESIM",
  "SINAL PERDIDO","COLHEITA FRIA","TRIBUTÁRIO ESCURO","QUINUA DE AÇO",
  "BANDEIRA ENTERRADA","PASSAGEM DA SERPENTE","CUME BRANCO","RAZÃO QUEBRADA"
];
