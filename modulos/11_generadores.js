// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE MÁSTER DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES DE SERVICIO CUMMINS ONAN Y GENERAC RV
// BAJO LAS NORMATIVAS FEDERALES AMERICANAS: RVIA/ANSI EGS-1, NEC ART. 551 Y NFPA 1192
// =================================================================================

const moduloGeneradores = {
    // Propiedades obligatorias de identidad para actualizar el Badge de tu suite
    nombre_es: "GENERADORES DE ENERGÍA (ONAN / CUMMINS / GENERAC)",
    nombre_en: "GENERATORS AND POWER PLANTS (ONAN / CUMMINS)",
    
    // NODO 1: LÍNEA CUMMINS ONAN QG (GASOLINE / GAS LP COBERTURA TOTAL)
    inicio: {
        pregunta_es: "CUMMINS ONAN QG SERIES (2800/4000/5500/7000): ¿El generador presenta falla crítica de arranque?\n" +
            "SÍNTOMAS DE CAMPO:\n" +
            "- El motor da marcha con fuerza pero NO retiene el encendido al soltar el interruptor.\n" +
            "- Presenta petardeos violentos (Backfiring) por el escape o ahogamiento por combustible crudo.\n" +
            "- El switch de cabina destella indicando 'Fault Code 36' (Engine Stopped Without Command),\n" +
            "  'Fault Code 14' (Overfrequency) o 'Fault Code 13' (Undervoltage / Pérdida de Excitación).",
            
        pregunta_en: "CUMMINS ONAN QG SERIES (2800/4000/5500/7000): Does the generator present a critical starting failure?\n" +
            "FIELD SYMPTOMS:\n" +
            "- Engine cranks with high starter torque but stalls immediately upon releasing the switch.\n" +
            "- Exhibits violent backfiring through exhaust or raw fuel flooding behavior.\n" +
            "- Remote switch flashes 'Fault Code 36' (Engine Stopped Without Command),\n" +
            "  'Fault Code 14' (Overfrequency), or 'Fault Code 13' (Undervoltage / Loss of Field Excitation).",
            
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC REGULATION MODULE (ONAN QG)",
        
        norma_es: "Incumplimiento severo de la norma de seguridad federal ANSI / RVIA EGS-1 para plantas auxiliares\n" +
            "y violación de las directrices de suministro de fluidos y tuberías de gas LP exigidas por la NFPA 1192.",
        norma_en: "Severe non-compliance with federal ANSI / RVIA EGS-1 auxiliary power regulations and\n" +
            "violation of liquid/gaseous fuel system routing and safety mandates governed by NFPA 1192.",
            
        aislamiento_es: "ANÁLISIS PERICIAL DE LABORATORIO:\n" +
            "1. Prueba hidrostática con manómetro digital en la línea de alimentación revela presión crítica\n" +
            "   por debajo de 2 PSI (Especificación: 4.5 PSI) por obstrucción extrema de barniz en espreas.\n" +
            "2. En variantes de Gas LP, el solenoide de corte presenta congelamiento estructural interno.\n" +
            "3. Monitoreo óhmico con multímetro Fluke certificado en los anillos colectores del rotor (Slip Rings)\n" +
            "   registra resistencia infinita (Circuito Abierto), confirmando devanados fundidos o escobillas de carbón falladas.\n" +
            "4. Medición de frecuencia muestra fluctuaciones asimétricas fuera del rango operativo estable de 60Hz bajo carga.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS:\n" +
            "1. Hydrostatic digital pressure tracking on the fuel feed line reveals critical drop below 2 PSI\n" +
            "   (Factory Spec: 4.5 PSI) induced by high-severity fuel varnish accumulation inside carburetor jets.\n" +
            "2. On LP gas models, the fuel lock-off solenoid exhibits internal contamination and structural freezing.\n" +
            "3. Certified Fluke multi-metering across rotor slip rings registers infinite resistance parameters,\n" +
            "   confirming a destructive open circuit winding pathology or carbon brush brush sub-assembly structural collapse.\n" +
            "4. AC frequency monitoring yields asymmetric drifting outside the stable 60Hz envelope under thermal load.",
            
        si: "onan_qd_diesel", // Enlace de flujo infinito al siguiente nodo masivo
        no: "onan_qd_diesel"
    },
    // NODO 2: LÍNEA PESADA CUMMINS ONAN QD (QUIET DIESEL COBERTURA TOTAL DE CLASE A)
    onan_qd_diesel: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta presenta paros inesperados bajo demanda o fallas de inyección?\n" +
            "SÍNTOMAS DE CAMPO:\n" +
            "- El motor arranca pero el switch de control aborta la marcha a los pocos segundos.\n" +
            "- Despide humo blanco espeso por el escape con ruidos de golpeteo por burbujas de aire (Cavitación).\n" +
            "- El sistema se desconecta el milisegundo exacto en que entran los aires acondicionados de la unidad.\n" +
            "- Registra en la interfaz digital 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost)\n" +
            "  o 'Fault Code 27' (Voltage Sense Lost / Pérdida de captura AC).",
            
        pregunta_en: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the diesel power plant present unexpected shutdowns under heavy load or injection failure?\n" +
            "FIELD SYMPTOMS:\n" +
            "- Engine catches but the control board aborts cranking operations within 3 to 5 seconds.\n" +
            "- Emits dense white smoke through exhaust shrowd paired with heavy fuel cavitation knocking.\n" +
            "- Power drops completely offline the exact millisecond the RV roof air conditioners engage.\n" +
            "- Diagnostic panel permanently registers 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45'\n" +
            "  (Speed Sense Lost), or 'Fault Code 27' (Voltage Sense Lost / AC feedback interruption).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos de integridad mecánica, control de sobrecorriente\n" +
            "y distribución eléctrica estipulados de forma rígida por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and\n" +
            "RV electrical power distribution architecture governed by National Electrical Code (NEC) Article 551.",
            
        aislamiento_es: "ANÁLISIS PERICIAL DE LABORATORIO:\n" +
            "1. Monitoreo pericial del sensor magnético de velocidad (Quadrature Speed Sensor) confirma pérdida\n" +
            "   total de pulsos de frecuencia digitales hacia el inversor interno por agrietamiento de carcasa.\n" +
            "2. Prueba hidrostática del switch de presión de aceite revela cortocircuito franco a tierra con\n" +
            "   el motor apagado, indicando colapso irreversible del diafragma interno por fatiga térmica severa.\n" +
            "3. Inspección del devanado auxiliar de captura muestra caídas de voltaje de excitación por debajo de límites.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS:\n" +
            "1. Field technical analysis on the magnetic quadrature speed sensor confirms total loss of digital\n" +
            "   frequency feedback pulses to the internal inverter controller due to thermal casing micro-fissures.\n" +
            "2. Hydrostatic oil pressure switch engineering test reveals a continuous short circuit to chassis ground\n" +
            "   with engine stationary, indicating structural collapse of the internal rubber diaphragm under extreme heat.\n" +
            "3. Aux AC sense winding tracking isolates critical excitation signal decay underneath operational parameters.",
            
        si: "generac_prim_quiet", // Siguiente eslabón de la cadena de grafos
        no: "generac_prim_quiet"
    },

    // NODO 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT COBERTURA TOTAL DE GAS / LP)
    generac_prim_quiet: {
        pregunta_es: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "¿El generador presenta fallas estacionales de marcha o cortes lógicos?\n" +
            "SÍNTOMAS DE CAMPO:\n" +
            "- El motor enciende de forma inestable pero muere de golpe al soltar el interruptor de arranque.\n" +
            "- Presenta explosiones térmicas sordas por la caja del filtro debido a ahogamiento de aire caliente.\n" +
            "- Registra o parpadea indicando 'Fault Code 47' (No Governor Signal / Pérdida de control del actuador).",
            
        pregunta_en: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "Does the generator present severe seasonal operating failures or automatic control lockouts?\n" +
            "FIELD SYMPTOMS:\n" +
            "- Engine catches roughly but stalls out instantly the exact millisecond the manual switch is released.\n" +
            "- Exhibits muffled thermal popping through the air intake system caused by cooling airflow restriction.\n" +
            "- System flashes or logs 'Fault Code 47' (No Governor Signal / Electronic governor actuator feedback failure).",
            
        sistema_es: "SISTEMA DE EXCITACIÓN DE CAMPO Y CONTROL DE FLUIDOS (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & FLUID GOVERNANCE SYSTEMS (GENERAC RV)",
        
        norma_es: "Incumplimiento de las especificaciones de seguridad mecánica, gobernación automática de frecuencia\n" +
            "y control pericial de emisiones estipuladas por la norma federal americana ANSI / RVIA EGS-1.",
        norma_en: "Non-compliance with ANSI / RVIA EGS-1 automated speed governor frequency stabilization regulations,\n" +
            "mechanical assembly guidelines, and mobile power combustion emissions control mandates.",
            
        aislamiento_es: "ANÁLISIS PERICIAL DE LABORATORIO:\n" +
            "1. Descarte forense con multímetro Fluke: Medición en los devanados del estator principal (Main Stator Winding D)\n" +
            "   registra cortocircuito franco entre espiras, anulando la retroalimentación de voltaje hacia el módulo AVR.\n" +
            "2. El sensor bimetálico de corte térmico interrumpe la inyección lógica por sobrecalentamiento del bloque\n" +
            "   causado por acumulación masiva de hollín y obstrucción de aire asistido por el fenómeno Exhaust Air Reflux.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS:\n" +
            "1. Certified Fluke multimeter tracking across main stator winding D loops isolates a direct inter-turn short\n" +
            "   circuit, permanently neutralizing the required residual self-excitation voltage feedback to the electronic AVR.\n" +
            "2. Bimetallic high-temperature safety switch cuts control board operating logic due to cylinder head thermal saturation\n" +
            "   induced by intensive dirt fouling and cooling shroud air restriction through Exhaust Air Reflux paths.",
            
        si: "honda_inverter_master", // Siguiente eslabón de la cadena de grafos
        no: "honda_inverter_master"
    },
    // NODO 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU / CHAMPION COBERTURA PORTÁTIL INTEGRADA)
    honda_inverter_master: {
        pregunta_es: "SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital presenta bloqueos bajo demanda térmica o inestabilidad?\n" +
            "SÍNTOMAS DE CAMPO:\n" +
            "- El motor enciende con oscilación (Eco-Throttle) inestable acelerándose solo sin demanda.\n" +
            "- Activa de forma permanente el indicador luminoso rojo de sobrecarga crítica (Overload).\n" +
            "- Entrega un voltaje flotante asimétrico, errático o nulo hacia las líneas del Transfer Switch.",
            
        pregunta_en: "INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the digital generator present operating instability or automatic shutdowns under heavy thermal demand?\n" +
            "FIELD SYMPTOMS:\n" +
            "- Engine hunts with severe unstable Eco-Throttle engine RPM surges with zero load present.\n" +
            "- Permanently locks out under a solid red Overload cluster dash warning illumination indicator.\n" +
            "- Delivers a highly asymmetric, erratic floating voltage or absolute zero output to the Transfer Switch lines.",
            
        sistema_es: "SISTEMA INVERTER DIGITAL DE ESTADO SÓLIDO (HONDA / CHAMPION)",
        sistema_en: "SOLID STATE DIGITAL INVERTER MODULE (HONDA / CHAMPION)",
        
        norma_es: "Violación de los lineamientos de calidad de energía pura, distorsión armónica total (THD < 3%)\n" +
            "y sistemas de protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Violation of pure sine-wave clean power mandates, total harmonic distortion constraints (THD < 3%),\n" +
            "and overcurrent automatic thermal protection required by National Electrical Code (NEC) Article 551.",
            
        aislamiento_es: "ANÁLISIS PERICIAL DE LABORATORIO:\n" +
            "1. Prueba de resistencia de aislamiento óhmico mediante megóhmetro revela cortocircuito térmico\n" +
            "   estructural interno en el módulo inversor digital de estado sólido (IGBT Bridge assembly).\n" +
            "2. El sistema se bloquea automáticamente bajo carga por resistencia infinita detectada en las líneas\n" +
            "   de sensado de corriente alterna, inhabilitando las etapas de conmutación de la planta por completo.",
            
        aislamiento_en: "FORENSIC ENGINEERING DIAGNOSTICS:\n" +
            "1. Insulation resistance testing executed via industrial megohmmeter isolates an internal structural\n" +
            "   thermal short circuit directly within the solid-state digital inverter power module (IGBT Bridge assembly).\n" +
            "2. The control board permanently blocks operations under load due to infinite resistance on core AC current-sensing\n" +
            "   loops, rendering the high-frequency alternative current switching phase completely inoperable.",
            
        finalizar: true
    }
}; // <--- AQUÍ SE CIERRA DE FORMA MATEMÁTICA Y LEGAL TODA TU BASE DE DATA DE GENERADORES RV

// =================================================================================
// FUNCIÓN MÁSTER DE ACCIÓN COMERCIAL (CONEXIÓN Y SINCRO DE IDENTIDAD CON INDEX.HTML)
// =================================================================================
function cargarPreguntasGeneradores() {
    console.log("Iniciando carga del Grafo Modular de Generadores (Módulo 11).");
    
    if (typeof moduloGeneradores !== 'undefined') {
        // 1. Candado de Sincronización Máster: Avisa al esqueleto el objeto real que debe leer al avanzar
        arbolDiagnostico = moduloGeneradores;
        
        // 2. Disparador de refresco e idioma nativo de la suite de Chula Vista
        if (typeof reiniciar === 'function') {
            reiniciar();
        } else {
            const txtPregunta = document.getElementById("texto-pregunta");
            if (txtPregunta) txtPregunta.innerText = moduloGeneradores.inicio.pregunta_es;
        }

        // 3. Resorte Maestro UX: Eleva la pantalla automáticamente al inicio de las preguntas
        const targetPregunta = document.getElementById("badge-texto") || document.getElementById("texto-pregunta");
        if (targetPregunta) {
            targetPregunta.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        console.log("Módulo 11 de Generadores operando con sincronización de identidad e idioma.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloGeneradores no está definido en la memoria.");
    }
}
