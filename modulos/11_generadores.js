// =================================================================================
// MÓDULO 11: ENCICLOPEDIA FORENSE DE DIAGNÓSTICO INTEGRAL DE GENERADORES RV
// ARQUITECTURA MASTER DE GRAFOS INDEXADOS DE FLUJO CONTINUO (CERO OMISIONES)
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES CUMMINS ONAN, GENERAC, HONDA Y CHAMPION
// FORMATO ULTRA PRÁCTICO DE CAMPO DISEÑADO PARA EL SOPORTE DIRECTO DEL TÉCNICO
// =================================================================================

const moduloGeneradores = {
    // Sincronización absoluta con la lectura dinámica de tu esqueleto original
    nombre_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    nombre_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    badge_es: "GENERADORES Y PLANTAS DE LUZ (ONAN / CUMMINS / GENERAC)",
    badge_en: "FIELD GENERATORS & AUXILIARY POWER SUITE (ONAN / CUMMINS)",
    
    // FILTRO TÉCNICO 1: IDENTIFICACIÓN DE MODELO CUMMINS ONAN QG (GASOLINA / LP)
    pregunta1: {
        pregunta_es: "FILTRO DE INICIO PRÁCTICO: ¿El generador auxiliar instalado en la unidad RV que se dispone a diagnosticar pertenece a la línea CUMMINS ONAN QG (Quiet Gas / Gas LP de los Modelos portátiles o fijos 2800, 4000, 5500 o 7000)?",
        pregunta_en: "PRACTICAL START FILTER: Does the generator installed in the RV unit belong to the CUMMINS ONAN QG line (Quiet Gas / LP Gas Models 2800, 4000, 5500, or 7000)?",
        si: "onan_qg_banco",    // Si el mecánico dice SÍ, lo mete directo a su enciclopedia dedicada
        no: "pregunta2"        // Si dice NO, salta de inmediato a descartar la siguiente marca
    },

    // FILTRO TÉCNICO 2: IDENTIFICACIÓN DE MODELO CUMMINS ONAN QD (QUIET DIESEL)
    pregunta2: {
        pregunta_es: "FILTRO DE INICIO PRÁCTICO: ¿La planta de energía montada en el chasis es de la línea pesada de Motorhomes Clase A CUMMINS ONAN QD (Quiet Diesel de los Modelos de alta capacidad 6000, 7500, 8000, 10000 o 12500)?",
        pregunta_en: "PRACTICAL START FILTER: Is the chassis-mounted power unit a heavy Class A coach CUMMINS ONAN QD (Quiet Diesel high-capacity Models 6000, 7500, 8000, 10000, or 12500)?",
        si: "onan_qd_banco",    // Si el mecánico dice SÍ, abre su enciclopedia específica diésel
        no: "pregunta3"        // Si dice NO, pasa a revisar si es Generac
    },

    // FILTRO TÉCNICO 3: IDENTIFICACIÓN DE MODELO GENERAC RV FIXED
    pregunta3: {
        pregunta_es: "FILTRO DE INICIO PRÁCTICO: ¿El generador montado en el compartimento pertenece a la línea clásica fija GENERAC RV SERIES (Modelos de gasolina o gas LP Quietpact o Primepact 40G, 55G, 50D, o 75D)?",
        pregunta_en: "PRACTICAL START FILTER: Does the compartment generator belong to the classic fixed-mount GENERAC RV SERIES (Quietpact or Primepact Models 40G, 55G, 50D, or 75D gasoline or LP)?",
        si: "generac_rv_banco", // Si el mecánico dice SÍ, lo enruta a las fallas de Generac
        no: "honda_inv_banco"   // Si dice NO, por descarte final de marcas, es una planta portátil Inverter Honda/Champion
    },
        // BANCO DE DIAGNÓSTICO FORENSE 1: CUMMINS ONAN QG (GASOLINA / GAS LP COBERTURA AMPLIADA)
    onan_qg_banco: {
        pregunta_es: "CUMMINS ONAN QG (2800/4000/5500/7000 GASOLINA / LP):\n" +
            "¿El generador presenta falla crítica de encendido o pérdida repentina de retención de marcha?\n" +
            "SÍNTOMAS OPERATIVOS EXPLICADOS EN LENGUAJE DE TALLER (TRADUCCIÓN DE FALLAS DE LA COMPUTADORA):\n" +
            "- El motor gira con alto torque de marcha (Crank fuerte) pero se apaga al soltar el interruptor manual.\n" +
            "- Despide olor a combustible crudo con petardeos violentos (Backfiring) por el silenciador.\n" +
            "- El interruptor destella indicando un código de error de segundo nivel grabado en el microprocesador:\n" +
            "  'Fault Code 36' (MOTOR APAGADO SIN ORDEN - El sistema se quedó sin suministro de combustible o cayó la presión),\n" +
            "  'Fault Code 14' (OVERFREQUENCY - El motor se acelera bruscamente por encima de 63Hz descalibrando el AVR),\n" +
            "  o 'Fault Code 13' (UNDERVOLTAGE - El generador no produce corriente AC por colapso en bobinas o escobillas).",
            
        pregunta_en: "STATION 1 - CUMMINS ONAN QG PRODUCT LINE (2800/4000/5500/7000 GASOLINE / LP):\n" +
            "Does the auxiliary internal combustion engine exhibit critical field starting or retention failures?\n" +
            "PRACTICAL BAY SYMPTOMS AND MICROPROCESSOR FAULT CODE TRANSLATION FOR THE MECHANIC:\n" +
            "- Engine cranks with high starter torque but immediately stalls out upon manual switch release.\n" +
            "- Suffers from severe backfiring exhaust pops or raw fuel engine flooding behaviors.\n" +
            "- Remote dash switch flashes Level 2 forensically recorded microprocessor system codes:\n" +
            "  'Fault Code 36' (Stopped Without Command / Engine cuts off due to fuel starvation or mechanical load drop),\n" +
            "  'Fault Code 14' (Overfrequency Anomaly - Engine speed surges beyond 63Hz causing AVR governance lock),\n" +
            "  or 'Fault Code 13' (Undervoltage Pathology - Inability to sustain core residual self-excitation inside fields).",
            
        sistema_es: "SISTEMA DE GAS/LP COMBUSTIÓN Y AC AUTOMATIC VOLTAGE REGULATION (ONAN QG)",
        sistema_en: "GAS/LP COMBUSTION & AC AUTOMATIC VOLTAGE REGULATION MODULE (ONAN QG)",
        
        norma_es: "Incumplimiento crítico de la norma federal de seguridad ANSI / RVIA EGS-1 para plantas auxiliares de energía y violación directa de las directrices de suministro de fluidos de la norma NFPA 1192.",
        norma_en: "Critical non-compliance with federal ANSI / RVIA EGS-1 auxiliary engine generator regulations and direct violation of fuel line routing mandates under NFPA 1192.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN DE EXPLICACIÓN PRÁCTICA):\n" +
            "1. Conecta un manómetro digital Fluke en la línea de suministro antes del carburador: la presión hidrostática debe marcar entre 4.0 y 5.0 PSI estables; caídas por debajo de 2 PSI confirman bomba de gasolina obstruida o filtros saturados.\n" +
            "2. En variantes de Gas LP, desconecta el solenoide de corte (Lock-off Solenoid) y revisa si se congela internamente debido a la acumulación de sedimentos pesados del gas propano, lo que restringe por completo el flujo de vaporización.\n" +
            "3. Abre la tapa lateral del estator y mide el conjunto de escobillas de carbón y anillos colectores (Slip Rings): la lectura de resistencia con tu multímetro calibrado debe marcar entre 20 y 25 Ohmios estables; parámetros que marquen resistencia infinita confirman un circuito abierto destructivo en las bobinas del rotor.\n" +
            "4. Si presenta Código 14 (Overfrequency), el gobernador mecánico de revoluciones está descalibrado por encima de 63Hz.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & MEASUREMENT):\n" +
            "1. Connect a digital fuel pressure gauge before the carburetor inlet: stable operating specs must read between 4.0 and 5.0 PSI; drops below 2 PSI isolate mechanical fuel pump cavitation or varnish filter blockage.\n" +
            "2. On gaseous LP lines, inspect the structural liquid lock-off solenoid valve for internal sealing freeze and high contamination layers of oily residues that restrict free fuel vaporization processes inside regulator chambers.\n" +
            "3. Access the stator frame end bell and track ohmic parameters across the carbon brush sub-assembly and slip rings: resistance value must read 20 to 25 Ohms flat; infinite resistance values confirm an open circuit winding pathology.\n" +
            "4. Track real-time AC frequency drift under load: parameters outside the stable 58Hz-62Hz window mandate adjustment.",
            
        si: "pregunta2", // Avanza limpiamente de vuelta al filtro de la siguiente estación
        no: "pregunta2"
    },
    // BANCO DE DIAGNÓSTICO FORENSE 2: CUMMINS ONAN QD (QUIET DIESEL COBERTURA TOTAL DE CLASE A)
    onan_qd_banco: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL):\n" +
            "¿La planta pesada diésel se apaga sola a los pocos segundos o colapsa al meterle la carga de los aires acondicionados?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER Y TRADUCCIÓN DE CÓDIGOS DE LA COMPUTADORA:\n" +
            "- El motor arranca bien pero la computadora aborta la marcha a los 3 segundos exactos dando 'Fault Code 32'.\n" +
            "  EXPLICACIÓN REAL: El Switch de presión de aceite se quedó pegado internamente o el monobloque no tiene lubricación.\n" +
            "- Despide humo blanco espeso por el escape con ruidos de golpeteo metálico (Aire atrapado / Cavitación de diésel por mangueras porosas).\n" +
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
            
        si: "pregunta3", // Enlace lineal indexado nativo (100% inmune a undefined) hacia el filtro Generac
        no: "pregunta3"
    },
    // BANCO DE DIAGNÓSTICO FORENSE 3: LÍNEA GENERAC RV (QUIETPACT / PRIMEPACT COBERTURA DE GAS / LP)
    generac_rv_banco: {
        pregunta_es: "SISTEMAS GENERAC RV SERIES (PRIMEPACT / QUIETPACT 40G/55G/50D/75D):\n" +
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
        si: "honda_inv_banco", // Enlace lineal indexado nativo continuo hacia la estación final de Honda
        no: "honda_inv_banco"
    },

    // BANCO DE DIAGNÓSTICO FORENSE 4: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU3000i / EU7000is / CHAMPION)
    honda_inv_banco: {
        pregunta_es: "ESTACIÓN 4 - SISTEMAS INVERTER COMPACTOS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "¿La planta digital portátil presenta bloqueos automáticos o una aceleración muy inestable (Hunting)?\n" +
            "SÍNTOMAS PRÁCTICOS EN EL TALLER EN LENGUAJE CRUDO DE CAMPO:\n" +
            "- El motor enciende pero el ralentí inteligente (Eco-Throttle) oscila subiendo y bajando revoluciones de forma loca sin tener nada conectado.\n" +
            "- Bloquea por completo la salida de corriente alterna y enciende de forma fija el foco rojo de sobrecarga crítica (Overload).\n" +
            "  EXPLICACIÓN REAL: El módulo inversor electrónico detectó un cortocircuito interno o una demanda excesiva y se congeló por seguridad.\n" +
            "- Al medir los receptáculos del tablero con tu voltímetro, arroja un voltaje flotante asimétrico, errático o simplemente cero voltios muertos.",
        pregunta_en: "STATION 4 - INTEGRATED INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION):\n" +
            "Does the compact digital generator present severe operating RPM hunting instability or automatic hardware lockouts under thermal load?\n" +
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
            "   El problema común es barniz gomoso obstruyendo la de forma severa la de baja; desarma y limpia con líquido a presión en tu mesa de trabajo.\n" +
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
        nodoActual = "pregunta1"; // Fuerza a la app a pararse en el Filtro de Selección Inicial Técnico
        
        // 2. Disparador de refresco e idioma nativo de la suite de Chula Vista
        if (typeof reiniciar === 'function') {
            reiniciar();
        } else {
            const txtPregunta = document.getElementById("texto-pregunta");
            if (txtPregunta) txtPregunta.innerText = moduloGeneradores.pregunta1.pregunta_es;
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
