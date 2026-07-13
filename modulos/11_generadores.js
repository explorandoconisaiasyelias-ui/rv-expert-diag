// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES CUMMINS ONAN, GENERAC, HONDA Y CHAMPION
// BAJO LAS NORMATIVAS FEDERALES: RVIA/ANSI EGS-1, NEC ARTICLE 551 Y NFPA 1192
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con la lectura dinámica de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // PANTALLA INICIAL DE ADMISIÓN EXIGIDA POR TU REGLA DE INGENIERÍA DE CAMPO
    inicio: {
        pregunta_es: "MENÚ DE SELECCIÓN DE PLANTA: Seleccione la marca, tipo de combustible\n" +
            "y línea de modelo del generador instalado en la unidad para activar\n" +
            "el árbol forense específico de diagnóstico minuciosamente estructurado:",
        pregunta_en: "POWER PLANT SELECTION MENU: Select the brand, fuel type,\n" +
            "and model line of the generator installed in the RV unit to engage\n" +
            "the specific detailed forensic troubleshooting branch:",
        opciones_menu: true, // Avisa al index.html que dibuje los botones de marcas abajo
        
        // Enrutamiento milimétrico según el modelo que elija el mecánico en el taller
        opciones: [
            { texto_es: "1. Cummins Onan QG (Quiet Gas / LP - 2800 / 4000 / 5500 / 7000)", salto: "onan_qg_gas_lp" },
            { texto_es: "2. Cummins Onan QD (Quiet Diesel - 6000 / 7500 / 8000 / 10000 / 12500)", salto: "onan_qd_diesel" },
            { texto_es: "3. Generac RV Series (Primepact / Quietpact - 40G / 55G / 50D / 75D)", salto: "generac_prim_quiet" },
            { texto_es: "4. Plantas Inverter Digitales de Estado Sólido (Honda EU / Champion)", salto: "honda_inverter_master" }
        ],
        si: "onan_qg_gas_lp",
        no: "onan_qd_diesel"
    },
    // RAMIFICACIÓN ENTRADA 1: CUMMINS ONAN QG SERIES (GASOLINE / GAS LP COBERTURA ENCYCLOPEDIC)
    onan_qg_gas_lp: {
        pregunta_es: "LÍNEA CUMMINS ONAN QG (2800/4000/5500/7000 GASOLINA / LP):\n" +
            "¿El motor auxiliar de combustión presenta fallas críticas operativas en el taller?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO:\n" +
            "- El motor genera torque de marcha (Crank) con fuerza pero NO retiene el arranque al soltar el switch.\n" +
            "- Presenta explosiones térmicas violentas (Backfiring) por el escape o ahogamiento por combustible crudo.\n" +
            "- El interruptor o panel remoto parpadea indicando códigos de diagnóstico pericial Nivel 2:\n" +
            "  'Fault Code 36' (Engine Stopped Without Command), 'Fault Code 14' (Overfrequency / Alerta de AVR)\n" +
            "  o 'Fault Code 13' (Undervoltage / Pérdida total de autoexcitación en el campo magnético del estator).",
            
        pregunta_en: "CUMMINS ONAN QG PRODUCT LINE (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "Does the auxiliary internal combustion engine exhibit critical field failures within the service shop?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST:\n" +
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
            
        si: "onan_qd_diesel", // Engancha de forma indexada con el siguiente bloque diésel masivo
        no: "onan_qd_diesel"
    },
    // RAMIFICACIÓN ENTRADA 2: LÍNEA PESADA CUMMINS ONAN QD (QUIET DIESEL COBERTURA ENCYCLOPEDIC CLASE A)
    onan_qd_diesel: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta presenta paros inesperados bajo demanda o fallas de inyección?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO:\n" +
            "- El motor arranca pero el microprocesador aborta la marcha a los pocos segundos (3 a 5 segundos).\n" +
            "- Despide humo blanco espeso por el escape con ruidos de golpeteo por burbujas de aire (Cavitación).\n" +
            "- El sistema corta la corriente el milisegundo exacto en que entran los aires acondicionados bajo carga.\n" +
            "- Registra en el panel de control 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost)\n" +
            "  o 'Fault Code 27' (Voltage Sense Lost / Pérdida absoluta de retroalimentación de voltaje AC).",
            
        pregunta_en: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the diesel power plant present unexpected shutdowns under heavy load or injection failure?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST:\n" +
            "- Engine catches but the control board aborts cranking operations within a 3 to 5-second safety window.\n" +
            "- Emits dense white smoke through exhaust shroud paired with heavy fuel cavitation knocking noise.\n" +
            "- Power drops completely offline the exact millisecond the RV roof air conditioners engage under load.\n" +
            "- Diagnostic panel permanently registers 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45'\n" +
            "  (Speed Sense Lost), or 'Fault Code 27' (Voltage Sense Lost / AC feedback signal interruption).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD MAGNETICA DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos de integridad mecánica, control rígido de sobrecorriente\n" +
            "y distribución eléctrica estipulados por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and\n" +
            "RV electrical power distribution architecture governed by National Electrical Code (NEC) Article 551.",
            
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Monitoreo pericial del sensor magnético de velocidad (Quadrature Speed Sensor) confirma pérdida\n" +
            "   total de pulsos de frecuencia digitales hacia el inversor interno por agrietamiento de carcasa por calor.\n" +
            "2. Prueba hidrostática del switch de presión de aceite revela cortocircuito franco a tierra con\n" +
            "   el motor apagado, indicando colapso irreversible del diafragma interno por fatiga térmica severa.\n" +
            "3. Inspección del devanado auxiliar de captura muestra caídas de voltaje de excitación por debajo de parámetros.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Field technical analysis on the magnetic quadrature speed sensor confirms total loss of digital\n" +
            "   frequency feedback pulses to the internal inverter controller due to thermal casing micro-fissures.\n" +
            "2. Hydrostatic oil pressure switch engineering test reveals a continuous short circuit to chassis ground\n" +
            "   with engine stationary, indicating structural collapse of the internal rubber diaphragm under extreme heat.\n" +
            "3. Aux AC sense winding tracking isolates critical excitation signal decay underneath operational parameters.",
            
        si: "generac_prim_quiet", // Siguiente eslabón de la red indexada hacia la línea Generac
        no: "generac_prim_quiet"
    },
    // RAMIFICACIÓN ENTRADA 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT COBERTURA ENCYCLOPEDIC DE GAS / LP)
    generac_prim_quiet: {
        pregunta_es: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "¿El generador presenta fallas estacionales de marcha o cortes lógicos?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO:\n" +
            "- El motor enciende de forma inestable pero muere de golpe al soltar el interruptor de arranque manual.\n" +
            "- Presenta explosiones térmicas sordas por la caja del filtro debido a ahogamiento de aire de reflujo.\n" +
            "- El sistema registra o parpadea indicando el código de diagnóstico microprocesado:\n" +
            "  'Fault Code 47' (No Governor Signal / Pérdida total de señal de control del gobernador electrónico).",
            
        pregunta_en: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "Does the generator present severe seasonal operating failures or automatic control lockouts?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST:\n" +
            "- Engine catches roughly but stalls out instantly the exact millisecond the manual switch is released.\n" +
            "- Exhibits muffled thermal popping through the air intake system caused by cooling airflow restriction.\n" +
            "- System flashes or logs 'Fault Code 47' (No Governor Signal / Governor actuator feedback failure).",
            
        sistema_es: "SISTEMA DE EXCITACIÓN DE CAMPO Y CONTROL DE FLUIDOS ELECTRÓNICO (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & FLUID GOVERNANCE SYSTEMS MODULE (GENERAC RV)",
        
        norma_es: "Incumplimiento de las especificaciones de seguridad mecánica, gobernación automática de frecuencia\n" +
            "y control pericial de emisiones estipuladas de forma estricta por la norma federal americana ANSI / RVIA EGS-1.",
        norma_en: "Non-compliance with ANSI / RVIA EGS-1 automated speed governor frequency stabilization regulations,\n" +
            "mechanical assembly guidelines, and mobile power combustion emissions control mandates.",
            
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Descarte forense con multímetro Fluke: Medición en los devanados del estator principal (Main Stator Winding D)\n" +
            "   registra cortocircuito franco entre espiras, anulando la retroalimentación hacia el módulo AVR.\n" +
            "2. El sensor bimetálico de corte térmico interrumpe la inyección lógica por sobrecalentamiento del bloque\n" +
            "   causado por acumulación masiva de hollín y obstrucción de aire asistido por el fenómeno Exhaust Air Reflux.",
            
        aislamiento_en: "FORENSIC ENGINEERING ANALYSIS AND FIELD DIAGNOSTIC PROCEDURES:\n" +
            "1. Certified Fluke multimeter tracking across main stator winding D loops isolates a direct inter-turn short\n" +
            "   circuit, permanently neutralizing the required residual self-excitation voltage feedback to the electronic AVR.\n" +
            "2. Bimetallic high-temperature safety switch cuts control board operating logic due to cylinder head thermal saturation\n" +
            "   induced by intensive dirt fouling and cooling shroud air restriction through Exhaust Air Reflux paths.",
            
        si: "honda_inverter_master", // Enlace de flujo infinito hacia el nodo final de Honda/Champion Inverter
        no: "honda_inverter_master"
    },
    // RAMIFICACIÓN ENTRADA 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU / CHAMPION COBERTURA ENCYCLOPEDIC)
    honda_inverter_master: {
        pregunta_es: "SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital presenta bloqueos bajo demanda térmica o inestabilidad?\n" +
            "SÍNTOMAS DE CAMPO EXAMINADOS POR EL TÉCNICO:\n" +
            "- El motor enciende con oscilación (Eco-Throttle) inestable acelerándose solo sin demanda de carga.\n" +
            "- Activa de forma permanente el indicador luminoso rojo de sobrecarga crítica (Overload panel cluster).\n" +
            "- Entrega un voltaje flotante asimétrico, errático o nulo hacia las líneas principales del Transfer Switch.",
            
        pregunta_en: "INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the digital generator present operating instability or automatic shutdowns under heavy thermal demand?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST:\n" +
            "- Engine hunts with severe unstable Eco-Throttle engine RPM surges with zero current load present.\n" +
            "- Permanently locks out under a solid red Overload cluster dash warning illumination indicator.\n" +
            "- Delivers a highly asymmetric, erratic floating voltage or absolute zero output to the Transfer Switch lines.",
            
        sistema_es: "SISTEMA INVERTER DIGITAL DE ESTADO SÓLIDO (HONDA / CHAMPION)",
        sistema_en: "SOLID STATE DIGITAL INVERTER MODULE (HONDA / CHAMPION)",
        
        norma_es: "Violación de los lineamientos de calidad de energía pura, distorsión armónica total (THD < 3%)\n" +
            "y sistemas de protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Violation of pure sine-wave clean power mandates, total harmonic distortion constraints (THD < 3%),\n" +
            "and overcurrent automatic thermal protection required by National Electrical Code (NEC) Article 551.",
            
        aislamiento_es: "PROTOCOLO DE AISLAMIENTO FORENSE CON INSTRUMENTACIÓN DE LABORATORIO:\n" +
            "1. Prueba de resistencia de aislamiento óhmico mediante megóhmetro revela cortocircuito térmico\n" +
            "   estructural interno en el módulo inversor digital de estado sólido (IGBT Bridge assembly).\n" +
            "2. El sistema se bloquea automáticamente bajo carga por resistencia infinita detectada en las líneas\n" +
            "   de sensado de corriente ac, inhabilitando las etapas de conmutación de la planta por completo.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS:\n" +
            "1. Insulation resistance testing executed via industrial megohmmeter isolates an internal structural\n" +
            "   thermal short circuit directly within the solid-state digital inverter power module (IGBT Bridge assembly).\n" +
            "2. The control board permanently blocks operations under load due to infinite resistance on core AC current-sensing\n" +
            "   loops, rendering the high-frequency alternative current switching phase completely inoperable.",
            
        es_final: true // <--- CANDADO MAESTRO NATIVO CORREGIDO: Abre tu ventana de evidencias y tus 4 hojas de reporte
    }
}; // <--- LLAVE DE CIERRE CENTRAL MATEMÁTICO DE TODA LA BASE DE DATOS DE GENERADORES
// =================================================================================
// FUNCIÓN MÁSTER DE ACCIÓN COMERCIAL (CONEXIÓN Y SINCRO DE IDENTIDAD CON INDEX.HTML)
// =================================================================================
function cargarPreguntasGeneradores() {
    console.log("Iniciando carga del Grafo Modular de Generadores (Módulo 11).");
    
    if (typeof moduloGeneradores !== 'undefined') {
        // 1. Candado de Sincronización Máster: Avisa al esqueleto el objeto real que debe leer al avanzar
        arbolDiagnostico = moduloGeneradores;
        nodoActual = "inicio"; // Fuerza a la app a pararse en el Menú de Marcas inicial
        
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
        
        console.log("Módulo 11 de Generadores operando con sincronización de identidad, título y menú de modelos.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloGeneradores no está definido en la memoria.");
    }
}
