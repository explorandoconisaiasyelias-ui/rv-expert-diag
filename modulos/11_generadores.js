// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// ARQUITECTURA MASTER DE GRAFOS INDEXADOS DE FLUJO CONTINUO (CERO OMISIONES)
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES CUMMINS ONAN, GENERAC, HONDA Y CHAMPION
// BAJO LAS NORMATIVAS FEDERALES: RVIA/ANSI EGS-1, NEC ARTICLE 551 Y NFPA 1192
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con el Badge superior dinámico de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // PASO 1: LÍNEA CUMMINS ONAN QG (GASOLINE / GAS LP COBERTURA ENCYCLOPEDIC)
    inicio: {
        pregunta_es: "CUMMINS ONAN QG SERIES (2800/4000/5500/7000):\n" +
            "¿El generador auxiliar de gasolina o gas LP presenta fallas críticas de encendido o regulación?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO EN EL TALLER:\n" +
            "- El motor genera torque de marcha (Crank) con fuerza pero NO retiene el arranque al soltar el switch.\n" +
            "- Presenta explosiones térmicas violentas (Backfiring) por el escape o ahogamiento por combustible crudo.\n" +
            "- El interruptor o panel remoto parpadea indicando códigos de diagnóstico pericial Nivel 2:\n" +
            "  'Fault Code 36' (Engine Stopped Without Command), 'Fault Code 14' (Overfrequency / Alerta de AVR)\n" +
            "  o 'Fault Code 13' (Undervoltage / Pérdida total de autoexcitación en el campo magnético del estator).",
            
        pregunta_en: "CUMMINS ONAN QG PRODUCT LINE (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "Does the auxiliary internal combustion engine exhibit critical field starting or voltage regulation failures?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST INSIDE THE SERVICE BAY:\n" +
            "- Engine cranks with high starter torque but immediately stalls out upon manual switch release.\n" +
            "- Suffers from severe backfiring exhaust pops or raw fuel engine flooding behaviors.\n" +
            "- Remote dash switch flashes Level 2 forensically recorded microprocessor system codes:\n" +
            "  'Fault Code 36' (Engine Stopped Without Command), 'Fault Code 14' (Overfrequency / AVR anomaly),\n" +
            "  or 'Fault Code 13' (Undervoltage / Total loss of residual self-excitation inside stator windings).",
            
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC AUTOMATIC VOLTAGE REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC AUTOMATIC VOLTAGE REGULATION MODULE (ONAN QG)",
        
        norma_es: "Incumplimiento crítico de la norma federal de seguridad ANSI / RVIA EGS-1 para plantas auxiliares de energía\n" +
            "y violación directa de las directrices de suministro de fluidos, venteos y líneas de gas LP de la norma NFPA 1192.",
        norma_en: "Critical non-compliance with federal ANSI / RVIA EGS-1 auxiliary engine generator regulations and\n" +
            "direct violation of fuel line routing, venting, and liquid/gaseous LP gas installation mandates under NFPA 1192.",
            
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Prueba hidrostática con manómetro digital Fluke en el riel de alimentación aísla presión crítica\n" +
            "   por debajo de 2 PSI (Especificación de fábrica: 4.5 PSI) por acumulación extrema de barniz gomoso en espreas.\n" +
            "2. En variantes de Gas LP, el solenoide de corte presenta obstrucción interna o congelamiento estructural por gomas.\n" +
            "3. Monitoreo óhmico certificado directo en los anillos colectores del rotor (Slip Rings) registra resistencia infinita\n" +
            "   (Circuito Abierto), confirmando devanados de bobina fundidos o conjunto de escobillas de carbón destruido.\n" +
            "4. Medición de frecuencia con osciloscopio muestra fluctuaciones asimétricas fuera del rango operativo de 60Hz.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Hydrostatic digital gauge pressure tracking on the fuel line isolates a critical drop under 2 PSI\n" +
            "   (Factory Spec: 4.5 PSI) induced by high-severity fuel varnish degradation layers inside carburetor main jets.\n" +
            "2. On gaseous LP models, the structural liquid fuel lock-off solenoid exhibits heavy soot fouling or mechanical freeze.\n" +
            "3. Ohmic evaluation across rotor slip rings via certified multi-metering registers infinite resistance parameters,\n" +
            "   confirming a destructive open circuit winding pathology or carbon brush brush sub-assembly structural collapse.\n" +
            "4. AC frequency tracking yields asymmetric harmonic drifting completely outside the stable 60Hz operational envelope.",
            
        si: "paso2", // Enlace de flujo lineal continuo perfecto hacia la línea pesada Quiet Diesel
        no: "paso2"
    },
    // PASO 2: LÍNEA PESADA CUMMINS ONAN QD (QUIET DIESEL COBERTURA ENCYCLOPEDIC CLASE A)
    paso2: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta Quiet Diesel presenta paros imprevistos severos o colapso de inyección en caliente?\n" +
            "SÍNTOMAS DE CAMPO REGISTRADOS EN TALLER:\n" +
            "- El motor enciende pero el microprocesador aborta la marcha a los pocos segundos (3 a 5 segundos exactos).\n" +
            "- Despide una densa cortina de humo blanco por el escape acompañada de golpeteos metálicos por cavitación.\n" +
            "- La planta corta el suministro AC el milisegundo exacto en que se acoplan los compresores de los aires acondicionados.\n" +
            "- El interruptor destella de forma pericial indicando 'Fault Code 32' (Low Oil Pressure Switch),\n" +
            "  'Fault Code 45' (Speed Sense Lost / Pérdida de captura magnética) o 'Fault Code 27' (Voltage Sense Lost).",
            
        pregunta_en: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the heavy Quiet Diesel power plant present uncommanded shutdowns or high-temperature injection failures?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST:\n" +
            "- Engine catches properly but the control board logic aborts cranking operations within a 3 to 5-second window.\n" +
            "- Emits a heavy shroud of white smoke through the exhaust paired with intensive fuel system cavitation knocking.\n" +
            "- High voltage drops completely offline the exact millisecond the RV roof air conditioner compressors engage.\n" +
            "- Microprocessor flashes 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost),\n" +
            "  or 'Fault Code 27' (Voltage Sense Lost / AC distribution feedback signal interruption).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD MAGNETICA DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos federales de integridad mecánica, control rígido de sobrecorriente\n" +
            "y arquitectura de distribución eléctrica estipulados por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and\n" +
            "RV auxiliary electrical power distribution lines governed by National Electrical Code (NEC) Article 551.",
            
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Monitoreo pericial del sensor de velocidad (Quadrature Speed Sensor) confirma pérdida total de pulsos digitales\n" +
            "   hacia el inversor interno debido a agrietamientos estructurales macroscópicos en la carcasa por fatiga térmica.\n" +
            "2. Prueba hidrostática del switch de presión de aceite reveals un cortocircuito franco a chasis ground con el motor\n" +
            "   completamente estacionario, indicando el colapso irreversible del diafragma interno por calor extremo.\n" +
            "3. Rastreo óhmico en el devanado auxiliar de captura aísla caídas críticas de voltaje de autoexcitación remanente.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Field technical analysis on the magnetic quadrature speed sensor confirms total loss of frequency feedback\n" +
            "   pulses to the internal inverter controller induced by severe thermal degradation casing micro-fissures.\n" +
            "2. Hydrostatic oil pressure switch engineering test reveals a continuous direct short circuit to ground\n" +
            "   with engine stationary, isolating structural breakdown of internal diaphragm under extreme operating heat.\n" +
            "3. Aux AC sense winding tracking isolates critical excitation signal decay underneath factory operational parameters.",
            
        si: "paso3", // Enlace de flujo lineal continuo perfecto hacia el bloque masivo de Generac
        no: "paso3"
    },
    // PASO 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT COBERTURA ENCYCLOPEDIC DE GAS / LP)
    paso3: {
        pregunta_es: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "¿El generador de montaje fijo presenta fallas estacionales de marcha, inestabilidad severa o cortes lógicos del sistema?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO EN EL TALLER:\n" +
            "- El motor de combustión enciende de forma inestable (Hunting) pero muere de golpe el milisegundo exacto en que se suelta el interruptor manual de arranque.\n" +
            "- Presenta explosiones térmicas sordas (Petardeos) por la caja del filtro de admisión debido a ahogamiento por recirculación de aire caliente viciado.\n" +
            "- El sistema del microprocesador registra de forma permanente o parpadea indicando el código de diagnóstico forense de campo:\n" +
            "  'Fault Code 47' (No Governor Signal / Pérdida total de señal de control o retroalimentación del actuador del gobernador electrónico).",
            
        pregunta_en: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "Does the fixed-mount generator present severe seasonal operating failures, hunting, or automatic control lockouts?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST INSIDE THE SERVICE BAY:\n" +
            "- Internal combustion engine catches roughly but stalls out instantly the exact millisecond the manual toggle switch is released.\n" +
            "- Exhibits muffled thermal popping through the air intake box sub-assembly caused by cooling airflow restriction and exhaust viciation.\n" +
            "- Digital controller board permanently flashes or logs microprocessed forensic recorded field troubleshooting system parameters:\n" +
            "  'Fault Code 47' (No Governor Signal / Electronic speed governor actuator feedback loop failure inside microprocessor line).",
            
        sistema_es: "SISTEMA DE EXCITACIÓN DE CAMPO Y CONTROL DE FLUIDOS ELECTRÓNICO (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & FLUID GOVERNANCE SYSTEMS MODULE (GENERAC RV)",
        
        norma_es: "Incumplimiento severo de las especificaciones de seguridad mecánica, gobernación automática de frecuencia y control pericial de emisiones estipuladas por la norma federal americana ANSI / RVIA EGS-1.",
        norma_en: "Severe non-compliance with ANSI / RVIA EGS-1 automated speed governor frequency stabilization regulations, mobile power mechanical assembly guidelines, and mobile combustion emissions control mandates.",
        
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Descarte forense con multímetro Fluke certificado: Medición óhmica directa en los devanados del estator principal (Main Stator Winding D) registra un cortocircuito franco entre espiras,首, de modo que anula por completo la retroalimentación de voltaje hacia el módulo regulador automático (AVR).\n" +
            "2. El sensor bimetálico de corte térmico interrumpe la inyección de control lógico por sobrecalentamiento crítico del bloque motor, provocado por acumulación masiva de hollín en las aletas de enfriamiento y obstrucción de aire asistido por el fenómeno Exhaust Air Reflux.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Certified Fluke multimeter tracking executed across main stator winding D loops isolates a direct internal inter-turn short circuit, permanently neutralizing the required residual self-excitation voltage feedback path to the electronic AVR board.\n" +
            "2. Bimetallic high-temperature safety switch cuts control board operating logic due to cylinder head thermal saturation and core block overheating induced by intensive shroud dirt fouling and cooling airflow restriction through Exhaust Air Reflux paths.",
            
        si: "paso4", // Avanza limpiamente y de forma corrida al siguiente eslabón (Inverter)
        no: "paso4"
    },
    // PASO 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU / CHAMPION COBERTURA ENCYCLOPEDIC)
    paso4: {
        pregunta_es: "SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital portátil presenta bloqueos automáticos bajo demanda térmica o inestabilidad severa de RPM?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO EN EL TALLER:\n" +
            "- El motor de combustión enciende con una oscilación rítmica (Eco-Throttle) muy inestable, acelerándose y desacelerándose solo sin demanda de carga real presente.\n" +
            "- Bloquea por completo el suministro de corriente activando de forma permanente el indicador luminoso rojo de sobrecarga crítica (Overload panel cluster) en el tablero.\n" +
            "- Entrega lecturas de voltaje flotante asimétricas, erráticas o un nulo absoluto (cero voltios) hacia las líneas principales de entrada del Transfer Switch de la unidad.",
            
        pregunta_en: "INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the compact digital generator present severe operating RPM hunting instability or automatic hardware lockouts under thermal load?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST INSIDE THE SERVICE BAY:\n" +
            "- Internal combustion engine hunts with severe unstable Eco-Throttle engine RPM surges with zero alternative current load present on the receptacle panel.\n" +
            "- Permanently locks out high-power distribution operations under a solid red Overload cluster dash warning illumination indicator.\n" +
            "- Delivers a highly asymmetric, erratic floating line voltage output or absolute zero voltage generation to the core input terminals of the RV Transfer Switch.",
            
        sistema_es: "SISTEMA INVERTER DIGITAL DE ESTADO SÓLIDO (HONDA / CHAMPION)",
        sistema_en: "SOLID STATE DIGITAL INVERTER MODULE (HONDA / CHAMPION)",
        
        norma_es: "Violación severa de los lineamientos federales de calidad de energía pura, distorsión armónica total (THD < 3%) y sistemas automáticos de protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Severe violation of pure sine-wave clean power mandates, total harmonic distortion constraints (THD < 3%), and automatic overcurrent thermal protection devices required by National Electrical Code (NEC) Article 551 specs.",
        
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Prueba de resistencia de aislamiento óhmico mediante megóhmetro industrial de alta gama revela un cortocircuito térmico estructural interno directo en las celdas del módulo inversor digital de estado sólido (IGBT Bridge assembly).\n" +
            "2. El sistema electrónico central bloquea automáticamente las operaciones bajo carga debido a un valor de resistencia infinita detectado en las líneas físicas de sensado de corriente ac, inhabilitando las etapas de conmutación de alta frecuencia por completo.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS AND HIGH-VOLTAGE LABORATORY PROCEDURES:\n" +
            "1. Insulation resistance testing executed via industrial megohmmeter directly isolates an internal structural thermal short circuit pathology directly within the silicon cells of the solid-state digital inverter power module (IGBT Bridge assembly).\n" +
            "2. The control microprocessor permanently blocks operations under load due to an infinite resistance parameters tracking on core AC current-sensing feedback loops, rendering the high-frequency alternative current switching phases completely inoperable.",
            
        es_final: true // <--- CANDADO MAESTRO NATIVO ASENTADO: Abre tu ventana de evidencias y tu reporte corporativo bilingüe
    }
}; // <--- LLAVE DE CIERRE CENTRAL MATEMÁTICO DE TODA LA BASE DE DATA DE GENERADORES RV
// =================================================================================
// FUNCIÓN MÁSTER DE ACCIÓN COMERCIAL (CONEXIÓN Y SINCRO DE IDENTIDAD CON INDEX.HTML)
// =================================================================================
function cargarPreguntasGeneradores() {
    console.log("Iniciando carga del Grafo Modular de Generadores (Módulo 11).");
    
    if (typeof moduloGeneradores !== 'undefined') {
        // 1. Candado de Sincronización Máster: Avisa al esqueleto el objeto real que debe leer al avanzar
        arbolDiagnostico = moduloGeneradores;
        nodoActual = "inicio"; // Fuerza a la app a pararse en el Punto de Admisión Inicial
        
        // 2. Disparador de refresco e idioma nativo de la suite de Chula Vista
        if (typeof reiniciar === 'function') {
            reiniciar();
        } else {
            const txtPregunta = document.getElementById("texto-pregunta");
            if (txtPregunta) txtPregunta.innerText = moduloGeneradores.inicio.pregunta_es;
        }

        // 3. Forzar el cambio físico del Badge superior azul en tu monitor al instante
        const badgeElemento = document.getElementById("badge-texto") || document.querySelector(".bg-amber-600\\/20");
        if (badgeElemento) {
            badgeElemento.innerText = (idiomaActual === "es") ? moduloGeneradores.nombre_es : moduloGeneradores.nombre_en;
            badgeElemento.className = "bg-amber-600/20 text-amber-400 text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30 uppercase";
        }

        // 4. Resorte Maestro UX: Eleva la pantalla automáticamente al inicio de las preguntas altas
        const targetPregunta = document.getElementById("badge-texto") || document.getElementById("texto-pregunta");
        if (targetPregunta) {
            targetPregunta.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        console.log("Módulo 11 de Generadores operando con sincronización de identidad, flujo continuo y título.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloGeneradores no está definido en la memoria.");
    }
}
