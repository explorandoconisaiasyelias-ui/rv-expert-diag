// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// ARQUITECTURA DE DESCARTE SECUENCIAL PARA DIAGNÓSTICO PRÁCTICO EN TALLER
// CERO OMISIONES - EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES DE SERVICIO OFICIALES
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con el Badge superior dinámico de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // FILTRO TÉCNICO DE ADMISIÓN 1: SELECCIÓN DE LÍNEA GASOLINA / LP
    inicio: {
        pregunta_es: "FILTRO DE INICIO DE DIAGNÓSTICO: ¿El generador instalado en la unidad motorhome que va a revisar pertenece a la línea CUMMINS ONAN QG (Quiet Gas / Gas LP de los Modelos 2800, 4000, 5500 o 7000)?",
        pregunta_en: "INITIAL DIAGNOSTIC FILTER: Does the generator installed in the RV unit belong to the CUMMINS ONAN QG line (Quiet Gas / LP Gas Models 2800, 4000, 5500, or 7000)?",
        si: "onan_qg_banco_fallas", // Si es Onan QG, lo mete directo a su diagnóstico de campo
        no: "filtro_onan_qd_diesel"  // Si no, salta al filtro del motor diésel
    },

    // FILTRO TÉCNICO DE ADMISIÓN 2: SELECCIÓN DE LÍNEA DIÉSEL
    filtro_onan_qd_diesel: {
        pregunta_es: "FILTRO DE INICIO DE DIAGNÓSTICO: ¿La planta instalada en el vehículo es de la línea pesada CUMMINS ONAN QD (Quiet Diesel de los Modelos 6000, 7500, 8000, 10000 o 12500 para unidades Clase A)?",
        pregunta_en: "INITIAL DIAGNOSTIC FILTER: Is the power unit a heavy CUMMINS ONAN QD (Quiet Diesel Models 6000, 7500, 8000, 10000, or 12500 for Class A motorhomes)?",
        si: "onan_qd_banco_fallas", // Si es Diésel, abre su enciclopedia específica
        no: "filtro_generac_rv"       // Si no, pasa a revisar si es Generac
    },

    // BANCO DE DIAGNÓSTICO FORENSE 1: CUMMINS ONAN QG (GASOLINA / GAS LP)
    onan_qg_banco_fallas: {
        pregunta_es: "CUMMINS ONAN QG (2800/4000/5500/7000): ¿El motor auxiliar da marcha con fuerza (Crank) pero NO enciende al soltar el interruptor, presenta ahogamiento por combustible crudo con petardeos violentos (Backfiring) por el escape, o el switch remoto de la cabina destella indicando los códigos 'Fault Code 36' (Stopped Without Command), 'Fault Code 14' (Overfrequency) o 'Fault Code 13' (Undervoltage)?",
        pregunta_en: "CUMMINS ONAN QG (2800/4000/5500/7000): Does the auxiliary engine crank with high torque but fail to catch upon switch release, flood with raw fuel causing violent exhaust backfires, or flash microprocessor system codes 'Fault Code 36' (Stopped Without Command), 'Fault Code 14' (Overfrequency), or 'Fault Code 13' (Undervoltage)?",
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC AUTOMATIC VOLTAGE REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC AUTOMATIC VOLTAGE REGULATION MODULE (ONAN QG)",
        norma_es: "Incumplimiento severo de la norma de seguridad federal ANSI / RVIA EGS-1 para plantas auxiliares y violación de las directrices de suministro de fluidos y tuberías de gas LP exigidas por la NFPA 1192.",
        norma_en: "Severe non-compliance with federal ANSI / RVIA EGS-1 auxiliary engine generator regulations and violation of liquid/gaseous fuel system routing mandates under NFPA 1192.",
        aislamiento_es: "DESCARTE EN TALLER: 1. Prueba hidrostática con manómetro digital revela presión por debajo de 2 PSI por obstrucción extrema de barniz en espreas del carburador. 2. En gas LP, el solenoide de corte presenta congelamiento estructural interno. 3. Monitoreo óhmico con multímetro Fluke certificado en los anillos colectores del rotor (Slip Rings) registra resistencia infinita, confirmando devanados fundidos o escobillas de carbón falladas. 4. Medición de frecuencia muestra fluctuaciones asimétricas fuera de 60Hz.",
        aislamiento_en: "SHOP DIAGNOSTICS: 1. Hydrostatic digital pressure tracking reveals a critical drop below 2 PSI induced by fuel varnish layers inside carburetor jets. 2. On LP models, the lock-off solenoid exhibits mechanical freeze. 3. Ohmic metering across rotor slip rings via certified Fluke multi-metering registers infinite resistance, confirming open circuit field windings or carbon brush sub-assembly structural collapse. 4. AC tracking yields drifting outside 60Hz.",
        si: "filtro_onan_qd_diesel", // Al responder, continúa el flujo de descarte de forma infinita
        no: "filtro_onan_qd_diesel"
    },
    // FILTRO TÉCNICO DE ADMISIÓN 3: SELECCIÓN DE LÍNEA GENERAC RV FIXED
    filtro_generac_rv: {
        pregunta_es: "FILTRO DE INICIO DE DIAGNÓSTICO: ¿El generador montado de fábrica de forma fija en el compartimento del chasis pertenece a la línea GENERAC RV SERIES (Modelos Quietpact o Primepact 40G, 55G, 50D, o 75D de gasolina o diésel auxiliar)?",
        pregunta_en: "INITIAL DIAGNOSTIC FILTER: Does the factory chassis-mounted power unit belong to the GENERAC RV SERIES (Quietpact or Primepact Models 40G, 55G, 50D, or 75D gasoline or auxiliary diesel variants)?",
        si: "generac_rv_banco_fallas", // Si es Generac, lo enruta a su enciclopedia masiva
        no: "onan_honda_inverter_master" // Si no, por descarte final, es una planta Inverter Honda/Champion
    },

    // BANCO DE DIAGNÓSTICO FORENSE 2: CUMMINS ONAN QD (QUIET DIESEL COBERTURA TOTAL DE CLASE A)
    onan_qd_banco_fallas: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta pesada diésel presenta paros inesperados bajo demanda, fallas de inyección o colapsos en caliente?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO EN EL TALLER:\n" +
            "- El motor arranca de forma normal pero la computadora de a bordo aborta la marcha a los pocos segundos (3 a 5 segundos).\n" +
            "- Despide una densa cortina de humo blanco por el escape acompañada de ruidos mecánicos de golpeteo por burbujas de aire (Cavitación).\n" +
            "- El sistema corta el suministro de corriente el milisegundo exacto en que se acoplan los compresores de los aires acondicionados de la unidad.\n" +
            "- Registra en la interfaz de destellos digitales 'Fault Code 32' (Low Oil pressure switch), 'Fault Code 45' (Speed Sense Lost / Pérdida de pulsos del sensor magnético) o 'Fault Code 27' (Voltage Sense Lost / Pérdida absoluta de retroalimentación AC).",
            
        pregunta_en: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the heavy diesel power plant present unexpected uncommanded shutdowns, injection failures, or thermal saturation colapses?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST INSIDE THE SERVICE BAY:\n" +
            "- Engine catches properly but the control board microprocessor aborts cranking operations within a tight 3 to 5-second safety window.\n" +
            "- Emits a heavy continuous shroud of white smoke through exhaust shroud paired with loud fuel system cavitation knocking noise.\n" +
            "- High voltage output drops completely offline the exact millisecond the RV roof air conditioner heavy compressors engage under load.\n" +
            "- Microprocessor diagnostic panel permanently registers 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost / Total loss of frequency feedback), or 'Fault Code 27' (Voltage Sense Lost / AC feedback interruption).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD MAGNETICA DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos de integridad mecánica, control rígido de sobrecorriente y distribución eléctrica estipulados por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and RV electrical power distribution architecture governed by National Electrical Code (NEC) Article 551.",
        
        aislamiento_es: "PROTOCOLO DE LABORATORIO EN EL VEHÍCULO:\n" +
            "1. Monitoreo pericial del sensor magnético de velocidad (Quadrature Speed Sensor) confirma pérdida total de pulsos de frecuencia digitales hacia el inversor interno por agrietamiento de la carcasa plástica por fatiga térmica severa.\n" +
            "2. Prueba hidrostática del switch de presión de aceite revela cortocircuito franco a tierra con el motor completamente apagado, indicando el colapso irreversible del diafragma interno por calor extremo.\n" +
            "3. Inspección óhmica del devanado auxiliar de captura muestra caídas de voltaje de excitación por debajo de parámetros nominales de fábrica.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Field technical analysis on the magnetic quadrature speed sensor confirms total loss of digital frequency feedback pulses to the internal inverter controller due to thermal casing micro-fissures and aggregate heat fatigue.\n" +
            "2. Hydrostatic oil pressure switch engineering test reveals a continuous direct short circuit to chassis ground with engine stationary, indicating structural collapse of the internal rubber diaphragm under extreme heat load.\n" +
            "3. Aux AC sense winding tracking isolates critical excitation signal decay underneath operational parameters mandated by manufacturer spec.",
            
        si: "filtro_generac_rv", // Continúa limpiamente el flujo secuencial hacia el filtro de Generac
        no: "filtro_generac_rv"
    },
    // BANCO DE DIAGNÓSTICO FORENSE 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT COBERTURA ENCYCLOPEDIC DE GAS / LP)
    generac_rv_banco_fallas: {
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
            "1. Descarte forense con multímetro Fluke certificado: Medición óhmica directa en los devanados del estator principal (Main Stator Winding D) registra un cortocircuito franco entre espiras, anulando por completo la retroalimentación de voltaje hacia el módulo regulador automático (AVR).\n" +
            "2. El sensor bimetálico de corte térmico interrumpe la inyección de control lógico por sobrecalentamiento crítico del bloque motor, provocado por acumulación masiva de hollín en las aletas de enfriamiento y obstrucción de aire asistido por el fenómeno Exhaust Air Reflux.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Certified Fluke multimeter tracking executed across main stator winding D loops isolates a direct internal inter-turn short circuit, permanently neutralizing the required residual self-excitation voltage feedback path to the electronic AVR board.\n" +
            "2. Bimetallic high-temperature safety switch cuts control board operating logic due to cylinder head thermal saturation and core block overheating induced by intensive shroud dirt fouling and cooling airflow restriction through Exhaust Air Reflux paths.",
            
        si: "onan_honda_inverter_master", // Avanza limpiamente y de forma corrida al siguiente eslabón (Inverter)
        no: "onan_honda_inverter_master"
    },
    // BANCO DE DIAGNÓSTICO FORENSE 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU / CHAMPION PORTÁTIL INTEGRADA)
    onan_honda_inverter_master: {
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
            "2. The control microprocessor permanently blocks operations under load due to an infinite resistance parameters tracking on core AC current-sensing feedback loops, rendering the alternative high-frequency current switching phases completely inoperable.",
            
        es_final: true // <--- CANDADO MAESTRO NATIVO ASENTADO: Abre tu panel de evidencias y tu reporte corporativo bilingüe
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
        nodoActual = "inicio"; // Fuerza a la app a pararse en el Filtro Secuencial Técnico Inicial
        
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
        
        console.log("Módulo 11 de Generadores operando con sincronización de identidad, filtro secuencial y título.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloGeneradores no está definido en la memoria.");
    }
}
