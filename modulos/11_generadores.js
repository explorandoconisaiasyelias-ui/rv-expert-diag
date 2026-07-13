// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// ARQUITECTURA MASTER DE GRAFOS INDEXADOS DE FLUJO CONTINUO (CERO OMISIONES)
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES CUMMINS ONAN, GENERAC, HONDA Y CHAMPION
// BAJO LAS NORMATIVAS FEDERALES: RVIA/ANSI EGS-1, NEC ARTICLE 551 Y NFPA 1192
// ESTRUCTURA INDUSTRIAL COMPLETAMENTE AMPLIADA DE DIAGNÓSTICO PARA SOPORTE DE CAMPO
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con la lectura dinámica de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // =============================================================================
    // ESTACIÓN TÉCNICA 1: LÍNEA CUMMINS ONAN QG (QUIET GAS / GAS LP MODELOS 2800 / 4000 / 5500 / 7000)
    // =============================================================================
    inicio: {
        pregunta_es: "ESTACIÓN 1 - CUMMINS ONAN QG (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "¿El generador presenta falla crítica de encendido o pérdida repentina de retención de marcha?\n" +
            "SÍNTOMAS OPERATIVOS DETECTADOS POR EL TÉCNICO EN EL COMPARTIMENTO DE CAMPO:\n" +
            "- El motor gira con alto torque de marcha (Crank fuerte) pero se apaga al soltar el interruptor.\n" +
            "- Despide olor a combustible crudo con petardeos violentos (Backfiring) por el silenciador.\n" +
            "- El interruptor destella indicando un código de error de segundo nivel grabado en el microprocesador:\n" +
            "  'Fault Code 36' (Engine Stopped Without Command - Motor apagado solo por falta de fluido o caída de presión),\n" +
            "  'Fault Code 14' (Overfrequency - El motor se acelera bruscamente por encima de 63Hz descalibrando el AVR),\n" +
            "  o 'Fault Code 13' (Undervoltage - Pérdida de corriente alterna por colapso en el devanado o escobillas de carbón).",
            
        pregunta_en: "STATION 1 - CUMMINS ONAN QG PRODUCT LINE (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "Does the auxiliary internal combustion engine exhibit critical field starting or retention failures?\n" +
            "FIELD VISUAL SYMPTOMS DETECTED BY SPECIALIST INSIDE THE SERVICE BAY:\n" +
            "- Engine cranks with high starter torque but immediately stalls out upon manual switch release.\n" +
            "- Suffers from severe backfiring exhaust pops or raw fuel engine flooding behaviors.\n" +
            "- Remote dash switch flashes Level 2 forensically recorded microprocessor system codes:\n" +
            "  'Fault Code 36' (Stopped Without Command / Engine cuts off due to starvation or mechanical load drop),\n" +
            "  'Fault Code 14' (Overfrequency Anomaly - Engine speed surges beyond 63Hz causing AVR governance lock),\n" +
            "  or 'Fault Code 13' (Undervoltage Pathology - Inability to sustain core residual self-excitation inside fields).",
            
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC AUTOMATIC VOLTAGE REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC AUTOMATIC VOLTAGE REGULATION MODULE (ONAN QG)",
        
        norma_es: "Incumplimiento crítico de la norma federal de seguridad ANSI / RVIA EGS-1 para plantas auxiliares de energía\n" +
            "y violación directa de las directrices de suministro de fluidos, venteos y líneas de gas LP de la norma NFPA 1192.",
        norma_en: "Critical non-compliance with federal ANSI / RVIA EGS-1 auxiliary engine generator regulations and\n" +
            "direct violation of fuel line routing, venting, and liquid/gaseous LP gas installation mandates under NFPA 1192.",
            
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (MECÁNICO EXPERTO):\n" +
            "1. Conecta un manómetro digital Fluke en la línea de suministro antes del carburador: la presión hidrostática\n" +
            "   debe marcar entre 4.0 y 5.0 PSI estables; caídas por debajo de 2 PSI confirman bomba obstruida o filtros saturados.\n" +
            "2. En variantes de Gas LP, desconecta el solenoide de corte (Lock-off Solenoid) y revisa si se congela internamente\n" +
            "   debido a la acumulación de gomas y sedimentos pesados del gas pesado, lo que restringe el flujo del combustible.\n" +
            "3. Abre la tapa lateral del estator y mide el conjunto de escobillas de carbón y anillos colectores (Slip Rings):\n" +
            "   la lectura de resistencia con tu multímetro calibrado debe marcar entre 20 y 25 Ohmios estables;\n" +
            "   parámetros que marquen resistencia infinita confirman un circuito abierto destructivo en las bobinas del rotor.\n" +
            "4. Monitorea la frecuencia AC bajo carga: fluctuaciones fuera del rango de 58Hz a 62Hz exigen ajuste en el gobernador.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT)::\n" +
            "1. Connect a digital fuel pressure gauge before the carburetor inlet: stable operating specs must read\n" +
            "   between 4.0 and 5.0 PSI; drops below 2 PSI isolate mechanical fuel pump cavitation or varnish filter blockage.\n" +
            "2. On LP gas lines, inspect the structural liquid lock-off solenoid valve for internal sealing freeze\n" +
            "   and high contamination layers of oily residues that restrict fuel vaporization processes inside regulator chambers.\n" +
            "3. Access the stator frame end bell and track ohmic parameters across the carbon brush sub-assembly and slip rings:\n" +
            "   resistance value must read 20 to 25 Ohms flat; infinite resistance values confirm an open circuit winding pathology.\n" +
            "4. Track real-time AC frequency drift under load: parameters outside the stable 58Hz-62Hz window mandate adjustment.",
            
        si: "paso2", // Enlace lineal directo continuo libre de undefined hacia Quiet Diesel
        no: "paso2"
    },
    // =============================================================================
    // ESTACIÓN TÉCNICA 2: LÍNEA PESADA CUMMINS ONAN QD (QUIET DIESEL MODELOS 6000 / 7500 / 8000 / 10000 / 12500)
    // =============================================================================
    paso2: {
        pregunta_es: "ESTACIÓN 2 - CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta pesada diésel se apaga de forma imprevista en el compartimento o corta corriente AC?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y TRADUCCIÓN DE CÓDIGOS DE LA COMPUTADORA:\n" +
            "- El motor arranca bien pero la computadora aborta la marcha a los 3 segundos dando 'Fault Code 32'\n" +
            "  (Esto significa: SWITCH DE PRESIÓN DE ACEITE DAÑADO o pérdida crítica de presión interna en el monobloque).\n" +
            "- Despide humo blanco espeso por el escape con ruidos de golpeteo (Aire atrapado / Cavitación en mangueras de alimentación).\n" +
            "- Al encender las cargas de la unidad el generador se apaga de golpe registrando 'Fault Code 45'\n" +
            "  (Esto significa: REVOLUCIONES INESTABLES O PÉRDIDA DE PULSOS, el Sensor Magnético se alejó o se trabó por calor).\n" +
            "- El tablero destella indicando el código crítico de diagnóstico pericial 'Fault Code 27'\n" +
            "  (Esto significa: PÉRDIDA DE SENSADO DE VOLTAJE ALTERNO, la computadora no detecta corriente AC y se apaga por protección).",
            
        pregunta_en: "STATION 2 - CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the heavy diesel generator shut down by itself after a few seconds or drop offline under coach load?\n" +
            "PRACTICAL BAY SYMPTOMS AND MICROPROCESSOR FAULT CODE TRANSLATION:\n" +
            "- Engine catches but control board aborts within 3 seconds logging 'Fault Code 32' (LOW OIL PRESSURE SAFETY SWITCH FAILURE).\n" +
            "- Emits dense white smoke through the exhaust shroud paired with heavy fuel line cavitation air bubbles and knocking.\n" +
            "- Upon coach AC engagement the generator stalls out instantly logging 'Fault Code 45' (SPEED SENSE SIGNAL LOST ANOMALY).\n" +
            "- Microprocessor flashes 'Fault Code 27' (AC VOLTAGE SENSE LOST - Core inverter voltage feedback loop was interrupted).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD MAGNETICA DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos federales de integridad mecánica, control rígido de sobrecorriente y distribución eléctrica del Artículo 551 del NEC.",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and electrical power distribution governed by NEC Article 551.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (MECÁNICO EXPERTO):\n" +
            "1. Ve directo al sensor magnético de velocidad (Quadrature Speed Sensor) montado detrás del volante del motor:\n" +
            "   revisa si la distancia de separación física (Air Gap) está fuera de la especificación de 0.030 pulgadas o si la carcasa plástica\n" +
            "   está derretida por la radiación térmica del bloque, lo que corta por completo los pulsos digitales hacia el inversor.\n" +
            "2. Desconecta el switch hidrostático de presión de aceite y mídelo con tu multímetro calibrado: si marca continuidad\n" +
            "   (resistencia cero o corto a tierra) estando el motor apagado, confirma que el diafragma interno de goma se colapsó por fatiga.\n" +
            "3. Desconecta la línea de alimentación de combustible y purga el riel: burbujas constantes confirman grietas en la tubería de succión.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Inspect the magnetic quadrature speed sensor behind the flywheel: check if the technical air gap clearance drifts from\n" +
            "   0.030 inches factory specification or if the plastic casing is melted by aggregate heat fatigue, cutting off the digital RPM feedback.\n" +
            "2. Disconnect the hydrostatic oil pressure switch and test with digital meter: if it registers a direct short circuit to chassis ground\n" +
            "   with the engine stationary, it isolates structural breakdown of the internal internal diaphragm under extreme thermal load.\n" +
            "3. Disconnect main fuel feed line and check for air bleeding: constant foaming indicates suction tubing hairline cracks inside the chassis tank.",
            
        si: "paso3", // Enlace lineal directo continuo libre de undefined hacia la estación de Generac
        no: "paso3"
    },
    // =============================================================================
    // ESTACIÓN TÉCNICA 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT MODELOS 40G / 55G / 50D / 75D)
    // =============================================================================
    paso3: {
        pregunta_es: "ESTACIÓN 3 - SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "¿El generador fijo Generac presenta fallas estacionales de marcha, tirones o cortes lógicos?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y TRADUCCIÓN DE CÓDIGOS DE LA COMPUTADORA:\n" +
            "- El motor de combustión enciende mientras dejas oprimido el switch, pero muere de golpe al soltarlo (Falla crítica de retención).\n" +
            "- Presenta explosiones térmicas sordas (Petardeos) por la caja del filtro debido a ahogamiento por recirculación de aire caliente.\n" +
            "- La computadora de a bordo registra de forma permanente o parpadea indicando el código crítico 'Fault Code 47'\n" +
            "  (Esto significa: SEÑAL DEL GOBERNADOR ELECTRÓNICO PERDIDA, el bracito o pequeño motor de pasos digital que controla\n" +
            "  mecánicamente la mariposa del acelerador para estabilizar las revoluciones bajo carga se desconectó, se trabó o se abrió).",
            
        pregunta_en: "STATION 3 - GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "Does the fixed-mount Generac generator stall instantly upon switch release or hunt with intake popping?\n" +
            "PRACTICAL BAY SYMPTOMS AND MICROPROCESSOR FAULT CODE TRANSLATION:\n" +
            "- Internal combustion engine catches during cranking but stalls out the exact millisecond the manual toggle switch is released.\n" +
            "- Exhibits muffled thermal popping through the air intake box caused by breathing hot viciated exhaust air reflux parameters.\n" +
            "- Digital controller board permanently flashes or logs microprocessed recorded parameters: 'Fault Code 47'\n" +
            "  (GOVERNOR SIGNAL SYSTEM LOST - The electronic stepping actuator that mechanically targets and stabilizes the throttle plate is jammed).",
            
        sistema_es: "SISTEMA DE EXCITACIÓN DE CAMPO Y CONTROL DE FLUIDOS ELECTRÓNICO (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & FLUID GOVERNANCE SYSTEMS MODULE (GENERAC RV)",
        
        norma_es: "Incumplimiento de las especificaciones de seguridad mecánica, gobernación automática de frecuencia y control de emisiones de la norma ANSI / RVIA EGS-1.",
        norma_en: "Non-compliance with ANSI / RVIA EGS-1 automated speed governor frequency stabilization regulations and mobile combustion emissions control mandates.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (MECÁNICO EXPERTO):\n" +
            "1. Agarra tu multímetro Fluke y mide los devanados del estator principal (Main Stator Winding D) en los conectores traseros:\n" +
            "   si la lectura óhmica da fuera de rango o alterada, las espiras internas sufrieron un cortocircuito térmico estructural,\n" +
            "   lo que anula por completo el envío del voltaje de autoexcitación remanente hacia la tarjeta del regulador automático AVR.\n" +
            "2. Inspecciona el sensor bimetálico de corte térmico y las aletas del motor: estos compartimentos Generac sufren de Exhaust Air Reflux;\n" +
            "   si las aletas de enfriamiento están tapadas de hollín o tierra, el sensor corta la corriente lógica a los 5 minutos por sobrecalentamiento.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Use a certified digital multimeter to measure main stator winding D loops: an internal short circuit pathology directly\n" +
            "   neutralizes the required residual self-excitation voltage feedback path to the electronic AVR regulation board assembly.\n" +
            "2. Inspect the bimetallic high-temperature safety switch: check for shroud dirt and cooling fin soot fouling that triggers\n" +
            "   block thermal saturation under heavy operational heat and air restriction through Exhaust Air Reflux paths.",
            
        si: "paso4", // Enlace lineal directo continuo libre de undefined hacia la estación final de Inverters
        no: "paso4"
    },
    // =============================================================================
    // ESTACIÓN TÉCNICA 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU3000i / EU7000is / CHAMPION)
    // =============================================================================
    paso4: {
        pregunta_es: "ESTACIÓN 4 - SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital portátil presenta bloqueos automáticos o una aceleración muy inestable (Hunting)?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y COMPORTAMIENTO ELECTRÓNICO REAL:\n" +
            "- El motor enciende pero el ralentí inteligente (Eco-Throttle) oscila subiendo y bajando revoluciones de forma loca sin tener nada conectado.\n" +
            "- Bloquea por completo la salida de corriente alterna y enciende de forma fija el foco rojo de sobrecarga crítica ('Overload permanent indicator').\n" +
            "- Al medir los receptáculos del tablero con tu voltímetro, arroja un voltaje flotante asimétrico, errático o simplemente cero voltios muertos hacia el Transfer Switch.",
            
        pregunta_en: "STATION 4 - INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the compact digital generator present severe operating RPM hunting instability or automatic hardware lockouts?\n" +
            "PRACTICAL BAY SYMPTOMS AND DIGITAL SYSTEMS BEHAVIOR:\n" +
            "- Internal combustion engine hunts with severe unstable Eco-Throttle engine RPM surges with zero alternative current load present on the receptacle panel.\n" +
            "- Permanently locks out high-power distribution operations under a solid red Overload cluster dash warning illumination indicator.\n" +
            "- Delivers a highly asymmetric, erratic floating line voltage output or absolute zero voltage generation to the core input terminals of the RV Transfer Switch.",
            
        sistema_es: "SISTEMA INVERTER DIGITAL DE ESTADO SÓLIDO (HONDA / CHAMPION)",
        sistema_en: "SOLID STATE DIGITAL INVERTER MODULE (HONDA / CHAMPION)",
        
        norma_es: "Violación severa de los lineamientos federales de calidad de energía pura, distorsión armónica total (THD < 3%) y sistemas automáticos de protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Severe violation of pure sine-wave clean power mandates, total harmonic distortion constraints (THD < 3%), and automatic overcurrent thermal protection devices required by National Electrical Code (NEC) Article 551 specs.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (MECÁNICO EXPERTO):\n" +
            "1. Descarte rápido de carburación: Si el ralentí oscila (Eco-Throttle hunting), el problema es barniz gomoso obstruyendo la de forma severa la diminuta esprea de baja; desarma y limpia con limpiador de carburadores antes de condenar el módulo.\n" +
            "2. Prueba con Megóhmetro (Megger): Si el foco rojo de sobrecarga está fijo, pon tu probador de aislamiento en las salidas; un cortocircuito térmico estructural interno directo en las celdas de silicio del puente inversor (IGBT Bridge assembly) inhabilita la conmutación y obliga a reemplazar la tarjeta Inverter completa.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Quick fuel triage: If Eco-Throttle surges or hunts, the primary cause is fuel varnish accumulation inside the pilot/idle jet; perform intensive carburetor teardown and flush before condemning hardware.\n" +
            "2. Insulation resistance testing: Execute tracking via industrial megohmmeter across outputs; an internal structural thermal short circuit pathology within the solid-state inverter module silicon cells (IGBT Bridge) permanently locks operation, requiring total module replacement.",
            
        es_final: true // <--- CANDADO MAESTRO NATIVO ASENTADO: Detona la interfaz de evidencias y abre las 4 hojas del reporte
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
        nodoActual = "inicio"; // Fuerza a la app a pararse en el Punto de Admisión Inicial de la Estación 1
        
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
