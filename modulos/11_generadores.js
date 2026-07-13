// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// ARQUITECTURA DE GRAFOS LINEALES NATIVOS DE PASO CORTO (CERO OMISIONES)
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES CUMMINS ONAN, GENERAC, HONDA Y CHAMPION
// FORMATO ULTRA PRÁCTICO DE CAMPO DISEÑADO PARA EL SOPORTE DIRECTO DEL TÉCNICO
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con la lectura dinámica de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // ESTACIÓN 1: LÍNEA CUMMINS ONAN QG (GASOLINA / GAS LP MODELOS 2800 / 4000 / 5500 / 7000)
    inicio: {
        pregunta_es: "ESTACIÓN 1 - CUMMINS ONAN QG (2800/4000/5500/7000):\n" +
            "¿El motor auxiliar da marcha con fuerza (Crank) pero se apaga inmediatamente al soltar el interruptor,\n" +
            "o el panel de control remoto destella indicando de forma fija el código de falla 'Fault Code 36'\n" +
            "(Esto significa mecánicamente: MOTOR APAGADO SIN ORDEN - El sistema se quedó sin suministro de combustible)?",
            
        pregunta_en: "STATION 1 - CUMMINS ONAN QG LINE (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "Does the auxiliary engine crank normally but immediately stall out upon releasing the manual start toggle switch,\n" +
            "or does the remote switch flash an operational 'Fault Code 36' (Engine Stopped Without Command)?",
            
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC AUTOMATIC VOLTAGE REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC AUTOMATIC VOLTAGE REGULATION MODULE (ONAN QG)",
        
        norma_es: "Incumplimiento crítico de la norma federal de seguridad ANSI / RVIA EGS-1 para plantas auxiliares de energía\n" +
            "y violación directa de las directrices de suministro de fluidos, venteos y líneas de gas LP de la norma NFPA 1192.",
        norma_en: "Critical non-compliance with federal ANSI / RVIA EGS-1 auxiliary engine generator regulations and\n" +
            "direct violation of fuel line routing, venting, and liquid/gaseous LP gas installation mandates under NFPA 1192.",
            
        aislamiento_es: "SOPORTE TÉCNICO PERICIAL (SOLUCIÓN DE CAMPO SUGERIDA Y VALORES DE MEDICIÓN):\n" +
            "1. Conecta un manómetro digital Fluke en la línea de gasolina antes de la entrada al carburador:\n" +
            "   la presión hidrostática debe marcar entre 4.0 y 5.0 PSI de especificación de fábrica;\n" +
            "   lecturas por debajo de 2 PSI confirman obstrucción extrema de barniz en filtros o colapso de la bomba eléctrica.\n" +
            "2. En modelos de Gas LP, revisa el solenoide de corte (Lock-off Solenoid): el paso constante de gas pesado genera gomas\n" +
            "   que congelan estructuralmente el sello interno del vástago, restringiendo el flujo hacia la cámara de combustión.\n" +
            "3. Mide con tu multímetro la resistencia óhmica entre los anillos colectores del rotor (Slip Rings) retirando las escobillas:\n" +
            "   el rango correcto debe marcar entre 20 y 25 Ohmios flat; un valor infinito confirma bobina abierta (Rotor fundido).\n" +
            "4. Si presenta Código 14 (Overfrequency), el gobernador mecánico de revoluciones está descalibrado por encima de 63Hz.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Connect a fuel pressure gauge before the carburetor inlet: stable operating specs must read between 4.0 and 5.0 PSI;\n" +
            "   drops below 2 PSI isolate mechanical fuel pump cavitation, failed fuel lines, or aggregate varnish filter blockage.\n" +
            "2. On gaseous LP lines, inspect the structural liquid lock-off solenoid valve for internal sealing freeze or mechanical stick\n" +
            "   induced by high contamination layers of heavy oil and propane residues that restrict free fuel vaporization paths.\n" +
            "3. Track ohmic parameters across the carbon brush sub-assembly and rotor slip rings using a digital multimeter:\n" +
            "   resistance value must read between 20 and 25 Ohms flat; infinite resistance values confirm an open circuit winding pathology.\n" +
            "4. If 'Fault Code 14' (Overfrequency) occurs, engine speed surges beyond 63Hz, requiring governor linkage mechanical tuning.",
            
        si: "pregunta2", // Enlace lineal indexado nativo de fábrica (100% inmune a undefined)
        no: "pregunta2"
    },
    // ESTACIÓN 2: LÍNEA PESADA CUMMINS ONAN QD (QUIET DIESEL MODELOS 6000 / 7500 / 8000 / 10000 / 12500)
    pregunta2: {
        pregunta_es: "ESTACIÓN 2 - CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta pesada diésel se apaga sola a los pocos segundos o se ahoga por completo al meterle carga?\n" +
            "SÍNTOMAS OPERATIVOS EXPLICADOS EN LENGUAJE DE TALLER (TRADUCCIÓN DE FALLAS DE LA COMPUTADORA):\n" +
            "- El motor arranca bien pero la computadora aborta la marcha a los 3 segundos exactos dando 'Fault Code 32'.\n" +
            "  EXPLICACIÓN REAL: El Switch de presión de aceite se quedó pegado internamente o el monobloque no tiene lubricación.\n" +
            "- Despide humo blanco espeso por el escape con ruidos de golpeteo metálico (Aire atrapado / Cavitación de diésel).\n" +
            "- Al encender los aires acondicionados el generador se apaga de golpe registrando 'Fault Code 45'.\n" +
            "  EXPLICACIÓN REAL: El motor perdió la señal de revoluciones porque el Sensor Magnético se alejó o se trabó por calor.\n" +
            "- El tablero parpadea indicando el código crítico 'Fault Code 27'.\n" +
            "  EXPLICACIÓN REAL: Pérdida total de voltaje alterno. La planta no genera corriente AC y se apaga por protección.",
            
        pregunta_en: "STATION 2 - CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "Does the heavy diesel generator shut down by itself after a few seconds or stall under air conditioner load?\n" +
            "PRACTICAL BAY SYMPTOMS AND MICROPROCESSOR FAULT CODE TRANSLATION FOR THE MECHANIC:\n" +
            "- Engine catches but control board aborts within 3 seconds logging 'Fault Code 32' (OIL PRESSURE SWITCH FAILURE).\n" +
            "- Emits dense white smoke through the exhaust shroud paired with heavy fuel line cavitation and knocking noise.\n" +
            "- Upon coach AC engagement the generator stalls out instantly logging 'Fault Code 45' (SPEED SENSE SIGNAL LOST).\n" +
            "- Microprocessor flashes 'Fault Code 27' (AC VOLTAGE SENSE LOST - Inverter voltage feedback loop was interrupted).",
            
        sistema_es: "SISTEMA DE MONITOREO DIGITAL Y CAPTORES DE VELOCIDAD MAGNETICA DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SPEED CAPTORS MODULE (ONAN QD)",
        
        norma_es: "Violación directa de los protocolos federales de integridad mecánica, control rígido de sobrecorriente y distribución eléctrica del Artículo 551 del NEC.",
        norma_en: "Direct violation of mechanical safety integrity, overcurrent protection parameters, and electrical power distribution governed by NEC Article 551.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN DE EXPLICACIÓN PRÁCTICA):\n" +
            "1. Ve directo al sensor magnético de velocidad (Quadrature Speed Sensor) que lee los dientes del volante del motor:\n" +
            "   agarra tus calibradores de hojas y revisa si la separación física (Air Gap) está fuera de 0.030 pulgadas.\n" +
            "   Si notas que la carcasa plástica está derretida por el calor, el sensor ya no sirve y no mandará la señal de RPM.\n" +
            "2. Desconecta el cable del switch hidrostático de presión de aceite y mídelo con tu multímetro Fluke:\n" +
            "   si te marca continuidad (resistencia cero o corto a tierra) con el motor apagado, el diafragma interno de goma\n" +
            "   se reventó por fatiga térmica, engañando por completo a la computadora central para que corte la marcha.\n" +
            "3. Desconecta la manguera de alimentación de diésel y purga el riel: si salen burbujas, la tubería de succión está rota.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Inspect the magnetic quadrature speed sensor behind the flywheel: check if the air gap clearance drifts from\n" +
            "   0.030 inches factory specification or if the plastic housing is melted by heat fatigue, cutting off the digital RPM feedback.\n" +
            "2. Disconnect the hydrostatic oil pressure switch and test with meter: if it registers a direct short circuit to chassis ground\n" +
            "   with the engine off, it isolates structural breakdown of the internal rubber diaphragm, fooling the microprocessor.\n" +
            "3. Track the auxiliary sense winding loops: low excitation voltage parameters confirm internal stator winding decay.",
            
        si: "pregunta3", // Enlace lineal indexado nativo (100% inmune a undefined)
        no: "pregunta3"
    },
    // ESTACIÓN 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT MODELOS 40G / 55G / 50D / 75D)
    pregunta3: {
        pregunta_es: "ESTACIÓN 3 - SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "¿El generador fijo Generac se apaga de golpe al soltar el botón de arranque o tironea con explosiones en el taller?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y TRADUCCIÓN DE CÓDIGOS DE LA COMPUTADORA:\n" +
            "- El motor enciende mientras dejas presionado el switch manual, pero muere al soltarlo (Falla de retención de corriente).\n" +
            "- Presenta petardeos sordos por la caja del filtro debido a ahogamiento de aire (Aire caliente viciado recirculando).\n" +
            "- La computadora de a bordo registra o destella de forma fija el código de campo 'Fault Code 47'.\n" +
            "  EXPLICACIÓN REAL: Señal del gobernador electrónico perdida. El motorcito de pasos digital que jala mecánicamente\n" +
            "  la mariposa del acelerador para evaluar y estabilizar las revoluciones se desconectó, se abrió o se quedó pegado por óxido.",
            
        pregunta_en: "STATION 3 - GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
            "Does the fixed Generac generator stall instantly upon switch release or hunt with intake pops?\n" +
            "PRACTICAL BAY SYMPTOMS AND MICROPROCESSOR FAULT CODE TRANSLATION FOR THE MECHANIC:\n" +
            "- Internal combustion engine catches during cranking but stalls out the exact millisecond the manual switch is released.\n" +
            "- Exhibits muffled thermal popping through the air intake box caused by breathing hot viciated exhaust air reflux parameters.\n" +
            "- Digital controller board permanently flashes or logs 'Fault Code 47' (GOVERNOR SIGNAL SYSTEM LOST -\n" +
            "  The electronic stepping actuator that mechanically targets and stabilizes the throttle plate is jammed or open circuit).",
            
        sistema_es: "SISTEMA DE EXCITACIÓN DE CAMPO Y CONTROL DE FLUIDOS ELECTRÓNICO (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & FLUID GOVERNANCE SYSTEMS MODULE (GENERAC RV)",
        
        norma_es: "Incumplimiento de las especificaciones de seguridad mecánica, gobernación automática de frecuencia y control de emisiones de la norma ANSI / RVIA EGS-1.",
        norma_en: "Non-compliance with ANSI / RVIA EGS-1 automated speed governor frequency regulations and mobile power assembly guidelines.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN DE EXPLICACIÓN PRÁCTICA):\n" +
            "1. Agarra tu multímetro Fluke y mide los devanados del estator principal (Main Stator Winding D) en los conectores traseros:\n" +
            "   si la lectura óhmica da fuera de rango o alterada, las espiras internas sufrieron un cortocircuito térmico estructural,\n" +
            "   lo que anula por completo el envío del voltaje de autoexcitación remanente hacia la tarjeta del regulador automático AVR.\n" +
            "2. Inspecciona el sensor bimetálico de corte térmico y las aletas de aluminio: estos compartimentos Generac sufren de Exhaust Air Reflux;\n" +
            "   si las aletas de enfriamiento están tapadas de suciedad, el switch se abre a los 5 minutos por sobrecalentamiento.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Use a certified digital multimeter to measure main stator winding D loops: an internal short circuit pathology directly\n" +
            "   neutralizes the required residual self-excitation voltage feedback path to the electronic AVR regulation board assembly.\n" +
            "2. Inspect the bimetallic high-temperature safety switch: check for shroud dirt and cooling fin soot fouling that triggers\n" +
            "   block thermal saturation under heavy operational heat and air restriction through Exhaust Air Reflux paths.",
            
        si: "pregunta4", // Enlace lineal directo continuo libre de undefined hacia la estación final de Inverters
        no: "pregunta4"
    },
    // =============================================================================
    // ESTACIÓN TÉCNICA 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU3000i / EU7000is / CHAMPION)
    // =============================================================================
    pregunta4: {
        pregunta_es: "ESTACIÓN 4 - SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital portátil presenta bloqueos automáticos o una aceleración muy inestable (Hunting)?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y COMPORTAMIENTO ELECTRÓNICO REAL:\n" +
            "- El motor enciende pero el ralentí inteligente (Eco-Throttle) oscila subiendo y bajando revoluciones de forma loca sin tener nada conectado.\n" +
            "- Bloquea por completó la salida de corriente alterna y enciende de forma fija el foco rojo de sobrecarga crítica (Overload).\n" +
            "  EXPLICACIÓN REAL: El módulo inversor electrónico detectó un cortocircuito interno o una demanda excesiva y se congeló por seguridad.\n" +
            "- Al medir los receptáculos del tablero con tu voltímetro, arroja un voltaje flotante asimétrico, errático o simplemente cero voltios muertos.",
            
        pregunta_en: "STATION 4 - INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the compact digital generator present severe operating RPM hunting instability or automatic hardware lockouts?\n" +
            "PRACTICAL BAY SYMPTOMS AND DIGITAL SYSTEMS BEHAVIOR FOR THE MECHANIC:\n" +
            "- Internal combustion engine hunts with severe unstable Eco-Throttle engine RPM surges with zero alternative current load present on the panel.\n" +
            "- Permanently locks out high-power distribution operations under a solid red Overload cluster dash warning illumination indicator.\n" +
            "  REAL EXPLANATION: The electronic inverter module detected an internal short circuit or excessive aggregate current demand and locked down.\n" +
            "- Delivers a highly asymmetric, erratic floating line voltage output or absolute zero voltage generation to the core input terminals.",
            
        sistema_es: "SISTEMA INVERTER DIGITAL DE ESTADO SÓLIDO (HONDA / CHAMPION)",
        sistema_en: "SOLID STATE DIGITAL INVERTER MODULE (HONDA / CHAMPION)",
        
        norma_es: "Violación severa de los lineamientos federales de calidad de energía pura, distorsión armónica total (THD < 3%) y sistemas de protección térmica exigidos por el Artículo 551 del NEC.",
        norma_en: "Severe violation of pure sine-wave clean power mandates, total harmonic distortion constraints (THD < 3%), and overcurrent protection required by NEC Article 551 specs.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN DE EXPLICACIÓN PRÁCTICA):\n" +
            "1. Descarte rápido de combustible: Si el motor tironea o el ralentí oscila (Eco-Throttle hunting), saca el carburador antes de condenar la electrónica.\n" +
            "   El problema común es barniz gomoso obstruyendo la diminuta esprea de baja; desarma y limpia con líquido a presión en tu mesa de trabajo.\n" +
            "2. Prueba con Megóhmetro (Megger): Si el foco de sobrecarga (Overload) se queda fijo en rojo constante, pon tus puntas en la salida AC.\n" +
            "   Un cortocircuito térmico estructural interno directo en las celdas de silicio del puente inversor (IGBT Bridge assembly) inhabilita las conmutaciones\n" +
            "   y te dará lecturas de aislamiento alteradas. Si se confirma el corto, la solución obligatoria es cambiar el módulo Inverter completo.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Quick fuel triage: If Eco-Throttle surges or hunts, the primary cause is fuel varnish accumulation inside the pilot/idle jet; perform intensive carburetor teardown and flush before condemning core electronics.\n" +
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
        nodoActual = "inicio"; // Inicializa directo en la Estación 1 de Onan QG de forma lineal perfecta
        
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
