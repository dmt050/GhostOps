// ═══════════════════════════════════════════════════════════════
//  GhostOps: ITACUA — KingSLayer Terminal
//  data.js — Database: POIs, Roles, Missions, Modifiers
// ═══════════════════════════════════════════════════════════════

// ─── POIs ────────────────────────────────────────────────────────
const itacuaPOIs = [
  // Fazendas
  { name:"Mendez Farm",                   type:"Farm",       x:251, y:160 },
  { name:"Atollo Farm",                   type:"Farm",       x:319, y:144 },
  { name:"Colqhe Ranch",                  type:"Farm",       x:338, y:147, hvt:true }, //hvt
  { name:"Bocca Farm",                    type:"Farm",       x:278, y:110 },
  // Checkpoints
  { name:"CP North (Cotani)",             type:"Checkpoint", x:240, y:340 },
  { name:"CP South (Itacua Base)",        type:"Checkpoint", x:358, y:132 },
  // Vilas e POIs
  { name:"Khochi",                        type:"Village",    x:490, y:88,  water:true, prisoners:true },
  { name:"Buena Vida",                    type:"Village",    x:350, y:318, prisoners:true },
  { name:"Cotani",                        type:"Village",    x:273, y:329 },
  { name:"Culta",                         type:"POI",        x:188, y:276 },
  { name:"Pantoja",                       type:"Village",    x:120, y:186 },
  { name:"Santa Maria",                   type:"POI",        x:233, y:286 },
  { name:"Vieja Granja",                  type:"POI",        x:381, y:258 },
  { name:"Campo de Futebol El Yayo",      type:"POI",        x:401, y:155, water:true },
  // Safe points (insertion/extraction only)
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
  { name:"Outpost Sul (Rally Point Charlie)",    type:"Military", x:207, y:127, prisoners:true, hvt:true }, //hvt
  { name:"La Casa del Mexicano",                 type:"Military", x:342, y:100, hvt:true }, //HVT
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
  { name:"Gas Station Via-B 01",          type:"Safe",         x:339, y:35 },
  { name:"Gas Station Via-B 02",          type:"POI",         x:379, y:147 },
  { name:"Moko",                          type:"POI",         x:215,  y:138  },
  { name:"Santa Rosa",                    type:"POI",         x:369, y:46 },
  { name:"Los Mosquitos",                 type:"POI",         x:327, y:275, water:true },
  { name:"Pachama Scars",                 type:"POI",         x:298, y:66  },
  { name:"Ocoro Dispensary",              type:"Safe",         x:330, y:89 },
  { name:"Nenma Freight Yard",            type:"POI",         x:279, y:164 },
  // Safe points (insertion/extraction only)
  { name:"Oroco Alpha",               type:"Safe",       x:297, y:110 },
  { name:"Oroco Bravo",               type:"Safe",       x:390, y:167 },
  { name:"Oroco Charlie",             type:"Safe",       x:199, y:270 },
  { name:"Oroco Delta",               type:"Safe",       x:201, y:144 },
  { name:"A Fisherman's House",       type:"Safe",       x:179,  y:307, water:true },
  // Santa Blanca — Military
  { name:"Outpost 01 (SB-SouthWest)", type:"Military", x:200, y:63, prisoners:true, hvt:true }, //here we have alarm, pannels, generator, HVT, mortar, Minigun
  { name:"Outpost 02 (SB-Central)",   type:"Military", x:364, y:131 },
  { name:"Outpost 03 (SB-Pujio South Sector)",    type:"Military", x:427, y:196 },
  { name:"Outpost 04 (SB-Pujio East Sector)",     type:"Military", x:472, y:219, prisoners:true },
  { name:"Outpost 05 (SB-Pujio West Sector)",     type:"Military", x:424, y:233, hvt:true },
  { name:"Outpost 06 (SB-Chem Storage)",          type:"Military", x:328, y:362  },
  { name:"Outpost 07 (SB- Prison Camp)",          type:"Military", x:267,  y:305, prisoners:true },
  { name:"Outpost 08 (SB- West)",                 type:"Military", x:166,  y:254, prisoners:true },
  { name:"Oroco Base (SB)",                       type:"Military", x:315, y:240,}, //SAAM
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
  // Safe points (insertion/extraction only)
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

// ─── OPERATOR ROLES ──────────────────────────────────────────────
const ROLES = {
  Sniper: {
    icon: "◎",
    weapons: [
      "HTI","L115A3","MSR","SRSA1","SR-1","Stampede","M40A5",
      "M1891","Lanza Sagrada","The Warhawk","SR-25","Dragunov (SVD)","G28","MK14"
    ],
    desc: "Long-range engagement. Includes bolt-action rifles and semi-automatic DMRs."
  },
  Support: {
    icon: "▣",
    weapons: ["M249","MK48","Stoner LMG","PKM","MG121","M60","M60E4"],
    desc: "Area suppression. Covers withdrawal and maneuver."
  },
  Assault: {
    icon: "◆",
    weapons: [
      "M4A1","M4A1 Tactical","MK17","MK16","AK-12","AK-47","ACR",
      "AUG A3","G36C","L85A2","P416","TAR-21","556xi","805 Bren A2",
      "FAL","MDR","R5 RGP","SR3M","SIG556","G2"
    ],
    desc: "CQB to medium-range combat. Direct-action entry role."
  },
  Ghost: {
    icon: "●",
    weapons: ["MP5","MP7","P90","Vector .45","MPX","PP19 Bizon","Scorpion EVO 3","UMP45"],
    desc: "Silent infiltration. Suppressed SMGs. Zero contact preferred."
  },
  CQB: {
    icon: "◉",
    weapons: ["SPAS-12","SASG-12","Super Shorty","M4 Super 90","AA-12"],
    desc: "Extreme close-quarters combat. Breach-and-clear specialist."
  }
};

// ─── MISSION TYPES ───────────────────────────────────────────────
const MISSION_TYPES = {
  Assassination:{
    label:"ASSASSINATION",
    validTypes:["Military","Checkpoint","Village","Farm","POI"],
    requiresHVT: true,
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER
OP: HIGH-VALUE TARGET NEUTRALIZATION

PRIMARY OBJECTIVE: Locate and eliminate the designated HVT operating out of ${obj.name}.
The HVT must be neutralized with biometric kill confirmation.

INSERTION: ${water?'WATERBORNE by rebel boat from':'Overland via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Destroy communications equipment at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Window: ${Math.floor(Math.random()*8+12)} minutes.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
ROE: Engage armed combatants only.
`.trim()
  },
  HVTKidnap:{
    label:"HVT ABDUCTION",
    validTypes:["Military","Checkpoint","Village","Farm","POI"],
    requiresHVT: true,
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER // PRIORITY ALPHA
OP: HIGH-VALUE TARGET ABDUCTION

PRIMARY OBJECTIVE: Infiltrate ${obj.name}, locate the confirmed HVT, and capture the target ALIVE.
The package must be restrained, identified, and moved to extraction for interrogation.

PHASE 1 - ISOLATION: Cut escape routes and neutralize the immediate security detail.
PHASE 2 - CAPTURE: Use non-lethal force when possible. Lethal force is authorized only to protect the team.
PHASE 3 - EXFILTRATION: Move the HVT out before QRF arrival.

INSERTION: ${water?'WATERBORNE by discreet approach from':'Stealth overland via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Execute opportunity tasking at ${sec.name} without compromising the package.` : 'SECONDARY OBJ.: No secondary tasking. Absolute priority: HVT alive.'}
EXTRACTION: ${ex.name}. Window: ${Math.floor(Math.random()*5+7)} minutes after capture.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
ROE: HVT MUST NOT BE KILLED. Confirm identity before extraction.
`.trim()
  },
  Sabotage:{
    label:"C4 SABOTAGE",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER
OP: SABOTAGE - CHARLIE-4 AUTHORIZATION

PRIMARY OBJECTIVE: Infiltrate ${obj.name} and plant C4 charges on critical infrastructure.
Detonate remotely after reaching minimum safe distance (300m).

INSERTION: ${water?'WATERBORNE by river infiltration from':'Concealed vehicle approach via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Eliminate the local Security Commander at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Exfil before QRF arrival (${Math.floor(Math.random()*5+8)} min after detonation).

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
ROE: Civilian casualties are UNACCEPTABLE. Clear the area before detonation.
`.trim()
  },
  Assault:{
    label:"ASSAULT (CLEARANCE)",
    validTypes:["Military","Checkpoint","Farm","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER
OP: ASSAULT - TACTICAL CLEARANCE

PRIMARY OBJECTIVE: Neutralize ALL hostile presence at ${obj.name}.
Confirm elimination of every combatant. Area must be declared clear.

INSERTION: ${water?'WATERBORNE with amphibious cover via':'Concealed infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Capture the lead sicario for interrogation at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Heliborne or overland as available.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
ROE: Maximum force authorized. No combatant escapes the perimeter.
`.trim()
  },
  AssaultSab:{
    label:"ASSAULT + SABOTAGE",
    validTypes:["Military","Farm","Checkpoint","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER
OP: COMBINED ASSAULT + INFRASTRUCTURE DESTRUCTION

PHASE 1 - ASSAULT: Eliminate the garrison at ${obj.name}. Secure the perimeter.
PHASE 2 - SABOTAGE: Plant C4 on critical nodes and detonate on exit.

INSERTION: ${water?'WATERBORNE via river infiltration point at':'Night infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Neutralize the Security Commander at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name} before daybreak.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
NOTE: Two-phase operation. Do not initiate Phase 2 while hostiles remain inside the perimeter.
`.trim()
  },
  Recon:{
    label:"RECON (STEALTH)",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER
OP: RECONNAISSANCE - SILENT PROTOCOL

PRIMARY OBJECTIVE: Establish an observation position overlooking ${obj.name}.
Document hostile strength, patrol rotation, and hardware. NO ENGAGEMENT.

INSERTION: ${water?'WATERBORNE stealth approach (pre-dawn) via':'Pre-dawn infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Eliminate the identified hostile patrol near ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Do not be detected before or during extraction.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
ROE: ZERO engagements. Any contact cancels the Op and activates evasion protocol.
`.trim()
  },
  Rescue:{
    label:"PRISONER RESCUE",
    validTypes:["Military","Checkpoint","Village"],
    requiresPrisoners: true,
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER // PRIORITY ALPHA
PRISONER LIBERATION - REBEL CAPTIVES CONFIRMED

Intel confirms rebel prisoners held captive at ${obj.name}.
Rescue window: CRITICAL. Executions are expected within hours.

PHASE 1 - NEUTRALIZATION: Eliminate the hostile guard force and secure the perimeter.
PHASE 2 - LOCATION: Find and confirm all prisoners alive.
PHASE 3 - EXTRACTION: Evacuate prisoners through the designated exfil point.

INSERTION: ${water?'WATERBORNE silent approach by boat from':'Stealth infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Eliminate the Commander responsible for the prison site at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the rescue.'}
EXTRACTION: ${ex.name}. Medical helicopter on standby. Code: NOVA-LIMA BRAVO.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
RULES OF ENGAGEMENT: Restricted ROE. Zero civilian casualties. Prisoners have ABSOLUTE PRIORITY.
NOTE: Any prisoner left behind is considered mission failure.
`.trim()
  },
  UW:{
    label:"UNCONVENTIONAL WARFARE",
    validTypes:["Military","Checkpoint","Farm","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water,hasPrisoners)=>hasPrisoners?`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER // UW DOCTRINE
UNCONVENTIONAL WARFARE - INSURGENCY PROTOCOL

Intel CONFIRMED: rebel prisoners are held at ${obj.name}.
UW authorization active. Objective: turn the site into a war-of-attrition zone.

PHASE 1 - INFILTRATION: Enter the perimeter of ${obj.name} undetected.
PHASE 2 - LIBERATION: Locate and free the prisoners BEFORE any engagement.
  -> Once freed, prisoners become an internal attrition force.
  -> Do not interfere with their engagement. Let the chaos take hold.
PHASE 3 - FINAL CLEARANCE: After rebels suppress the defense, eliminate survivors.
PHASE 4 - EXTRACTION: Exit the perimeter before QRF arrival.

INSERTION: ${water?'WATERBORNE stealth approach via':'Silent infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Eliminate the Intelligence Officer responsible for captures at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the UW sequence.'}
EXTRACTION: ${ex.name}. Post-engagement window: ${Math.floor(Math.random()*4+5)} minutes.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
TACTICAL WARNING: Freeing the prisoners FIRST is mandatory.
Engaging before liberation cancels the attrition advantage and compromises the Op.
`.trim():`
LOCAL TIME: ${time} // CLASSIFICATION: KINGSLAYER // UW DOCTRINE
UNCONVENTIONAL WARFARE - REBEL DISTRACTION PROTOCOL

${obj.name} is a UW target of opportunity. No prisoners confirmed on-site.
Mission requires activation of the REBEL DISTRACTION ability to conduct attrition warfare.

PHASE 1 - COVERT INSERTION: Infiltrate the area of influence around ${obj.name} without contact.
PHASE 2 - ACTIVATION: Call REBEL DISTRACTION -> rebel group moves on the site.
  -> Wait for rebel arrival confirmation before any direct action.
  -> Rebels initiate attrition. Use the chaos as cover.
PHASE 3 - EXPLOITATION: Under rebel firefight cover, advance on the objective.
PHASE 4 - CLEARANCE: Eliminate remaining hostiles the rebels did not neutralize.
PHASE 5 - EXTRACTION: Leave before QRF can distinguish Ghosts from insurgents.

INSERTION: ${water?'WATERBORNE stealth approach via':'Silent infiltration via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Destroy the communications center that could coordinate response to the rebel attack at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on UW coordination.'}
EXTRACTION: ${ex.name}. Post-distraction window: ${Math.floor(Math.random()*4+6)} minutes.

OPERATOR: ${role.desc}
${mod?'ACTIVE MODIFIER: '+mod:''}
MANDATORY ABILITY: REBEL DISTRACTION. Without it, the Op cannot begin.
TACTICAL WARNING: Engaging BEFORE rebel arrival exposes the Ghosts without cover.
`.trim()
  },
  Cleanup:{
    label:"CLEANUP OPERATION",
    validTypes:["Military","Farm","Checkpoint","Village","POI"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: RED // FAILURE-LINKED OP
BURN NOTICE - CLEAN-TRACE PROTOCOL

Previous Op failed at ${obj.name}. The cartel has evidence.
PHASE 1: Return to ${obj.name} and eliminate ALL witnesses.
PHASE 2: Destroy any equipment/documentation linking the Ghosts to the Op.

INSERTION: ${water?'WATERBORNE emergency route via':'Emergency route via'} ${ins.name}.
${sec ? `SECONDARY OBJ.: Eliminate the Local Commander who received the report at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Window: ${Math.floor(Math.random()*5+6)} minutes. CRITICAL.

OPERATOR: ${role.desc}
${mod?'MODIFIER: '+mod:''}
NOTE: High-risk mission. Cartel on maximum alert. No survivors accepted.
`.trim()
  },
  BloodPrison:{
    label:"BLOOD PRISON",
    validTypes:["Military","Checkpoint"],
    briefFn:(obj,sec,ins,ex,role,mod,time,water)=>`
LOCAL TIME: ${time} // CLASSIFICATION: URGENT // CRITICAL RESCUE
BLOOD PRISON - OPERATOR CAPTURED

Operator captured during previous Op at ${obj.name}.
Execution scheduled for daybreak. Rescue window: NOW.

INSERTION: ${water?'WATERBORNE rapid approach via':'Direct assault via'} ${ins.name}.
PRIMARY OBJECTIVE: Locate and extract the operator alive from ${obj.name}.
${sec ? `SECONDARY OBJ.: Neutralize the Commander responsible for the prison site at ${sec.name}.` : 'SECONDARY OBJ.: No secondary tasking. Full focus on the primary objective.'}
EXTRACTION: ${ex.name}. Helicopter on standby. Code: NOVA-LIMA.

OPERATOR: ${role.desc}
${mod?'MODIFIER: '+mod:''}
NOTE: Zero options. The operator cannot be left behind.
`.trim()
  }
};

// ─── MODIFIERS ───────────────────────────────────────────────────
const MODIFIERS = [
  null, null, null, // 3x chance of no modifier
  "DRONE OFFLINE - No aerial ISR support",
  "NO NVG - Operation under reduced visibility",
  "ZERO CIVILIAN CASUALTIES - Absolute restricted ROE",
];

// ─── OPERATION NAMES ─────────────────────────────────────────────
const OP_NAMES = [
  "SILENT CONDOR","IRON QUINOA","RED ALTIPLANO","GHOST LLAMA",
  "BLACK SALT","DEAD NARCISSUS","HOLLOW MOUNTAIN","VIPER RUN",
  "GHOST CARTEL","NIGHT FALCON","GRAY POPPY","CRIMSON BASIN",
  "LOST SIGNAL","COLD HARVEST","DARK TRIBUTARY","STEEL QUINOA",
  "BURIED FLAG","SERPENT PASSAGE","WHITE SUMMIT","BROKEN REASON"
];
