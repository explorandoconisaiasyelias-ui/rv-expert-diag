// =================================================================================
// MÓDULO 12: ENCICLOPEDIA FORENSE DE TOLDOS ELÉCTRICOS DE ALTA GAMA PARA RV
// ARQUITECTURA DE GRAFOS LINEALES NATIVOS DE PASO CORTO (CERO OMISIONES)
// EN ESTRICTO CUMPLIMIENTO CON LOS MANUALES DOMETIC, CAREFREE Y LIPPERT COMPONENTS
// FORMATO ULTRA PRÁCTICO DE CAMPO DISEÑADO PARA EL SOPORTE DIRECTO DEL TÉCNICO
// =================================================================================

const moduloToldosElectricos = {
    // Sincronización absoluta con la lectura dinámica de tu esqueleto original
    nombre_es: "SISTEMA DE TOLDOS ELÉCTRICOS Y ACCESORIOS DE EXTERIOR (DOMETIC / CAREFREE)",
    nombre_en: "POWER AWNING SYSTEMS & EXTERIOR ACCESSORIES SUITE (DOMETIC / CAREFREE)",
    badge_es: "TOLDOS ELÉCTRICOS AUTOMÁTICOS (DOMETIC / CAREFREE / LIPPERT)",
    badge_en: "POWER AWNING SYSTEMS AUTOMATIC (DOMETIC / CAREFREE / LIPPERT)",
    // ESTACIÓN 1: SÍNTOMAS GENERALES DE CAMPO, ACCIÓN DE MOTOR Y FILTRACIÓN DE SEÑALES
    inicio: {
        pregunta_es: "ESTACIÓN 1 - ACCIÓN DE MOTOR Y CAJAS DE CONTROL (DOMETIC / CAREFREE / LIPPERT):\n" +
            "¿El toldo exterior de patio o sobre la puerta se encuentra completamente congelado o inoperable?\n" +
            "SÍNTOMAS OPERATIVOS EXPLICADOS EN LENGUAJE DE TALLER PARA RESPALDO DEL MECÁNICO:\n" +
            "- Al presionar el interruptor de la pared o el control remoto NO se escucha el motor (Cero zumbido en los brazos).\n" +
            "- El toldo intenta desplegarse o cerrarse un par de pulgadas pero se frena de golpe por alta resistencia mecánica.\n" +
            "- El sensor de viento (Anemómetro de techo) bloquea los comandos manuales por falsas alarmas, atrapando el toldo afuera.\n" +
            "- El relevador de la caja central hace un ruido de clic-clic constante pero el rodillo se queda estático sin fuerza.",
            
        pregunta_en: "STATION 1 - POWER AWNING GEAR ACTIONS (DOMETIC WEATHERPRO / CAREFREE EXPEDITION / LIPPERT SOLERA):\n" +
            "Does the exterior patio or over-the-door power awning remain completely frozen, jammed, or inoperable?\n" +
            "PRACTICAL BAY SYMPTOMS AND CONTROLLER INTERFACE PATHOLOGIES FOR THE TECHNICIAN:\n" +
            "- Pressing the interior wall switch or remote key fob yields zero motor engagement or audible humming at the arm.\n" +
            "- The awning fabric deploys or retracts a few inches and then permanently stalls due to structural high friction.\n" +
            "- Roof-mounted wind anemometer locks out manual commands due to false signal clusters, trapping the awning extended.\n" +
            "- Central control box reversing relay clicks continuously without delivering target output 12V DC current to the head.",
            
        sistema_es: "SISTEMA DE MOTORES REVERSIBLES DE 12V DC Y SENSORES DE ANEMÓMETRO TRANSMISOR",
        sistema_en: "12V DC REVERSIBLE GEAR MOTORS & WIND ANEMOMETER SENSING INTERFACE",
        
        norma_es: "Incumplimiento de las especificaciones federales de estabilidad aerodinámica móvil de la norma ANSI / RVIA TS-1\n" +
            "y violación directa de los protocolos de cableado exterior y aislamiento contra intemperie del Artículo 551 del NEC.",
        norma_en: "Non-compliance with federal ANSI / RVIA TS-1 aerodynamic mobile structure stability guidelines and\n" +
            "direct violation of exterior exposed circuit routing and weatherproofing insulation under NEC Article 551 mandates.",
            
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN PRÁCTICA DE CAMPO EXCLUSIVA):\n" +
            "1. Desconecta el arnés bipolar del motor ubicado en la parte superior del brazo articulado delantero y mide voltaje con tu multímetro Fluke:\n" +
            "   mientras un ayudante oprime el interruptor de la cabina, la lectura en pantalla debe dar 12V DC alternando polaridad limpia\n" +
            "   (+12V DC para extender y -12V DC para retraer); si llega el voltaje correcto pero el rodillo no gira ni zumba, el motor interno\n" +
            "   tiene las escobillas de carbón destruidas, el devanado quemado por sobreesfuerzo o los imanes permanentes fracturados.\n" +
            "2. Si llega un voltaje nulo (cero voltios), ve directo a la caja de control electrónica oculta (debajo de los gabinetes, closets o cama)\n" +
            "   y puentea los pines de salida del motor alimentándolos de forma externa con una batería portátil de 12V de soporte auxiliar:\n" +
            "   si el toldo abre y cierra de forma inmaculada al meterle corriente directa, confirmas de inmediato que el motor está sano,\n" +
            "   y que el verdadero culpable es la tarjeta electrónica central o el relevador de conmutación quemado por filtración de agua o estática.\n" +
            "3. Si el toldo camina lento o se amarra a la mitad, mide el consumo de corriente (amperaje) en la línea con tu pinza amperimétrica:\n" +
            "   especificación de fábrica exige un rango menor a 5 Amperios; consumos que brinquen por encima de 8 Amperios confirman pernos\n" +
            "   de tijeras oxidados, resortes internos de asistencia rotos o un rodillo central doblado por acumulación de agua de lluvia.\n" +
            "4. Prueba de descarte del sensor de viento: Desconecta el anemómetro de la caja de control; si el toldo reacciona al instante,\n" +
            "   el sensor del techo está cortocircuitado enviando una señal falsa de tormenta continua que congela el sistema por protección.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & DETAILED SHOP PROCEDURES):\n" +
            "1. Disconnect the two-pin weatherpack wire harness directly at the front awning arm casting head and track voltage with a meter:\n" +
            "   while cycling the interior toggle wall switch, parameters must toggle polarity cleanly between +12V DC and -12V DC outputs;\n" +
            "   if correct voltage tracks flat but the drive head remains stationary, the internal permanent magnet motor failed or coils burnt.\n" +
            "2. If zero voltage tracks at the arm terminal, locate the central control box hidden module and execute a direct bypass jump:\n" +
            "   if the awning operates under direct 12V auxiliary shop battery power, the internal reversing modules or board relays failed.\n" +
            "3. If operation lags, check real-time current draw with an inductive amp clamp: normal factory parameters must remain under\n" +
            "   5 Amps flat; spikes exceeding 8 Amps isolate binding scissor arm mechanical joints, collapsed gas struts, or a warped roller drum.\n" +
            "4. Wind sensor isolation step: Unplug the roof anemometer modular lead at the main controller box; if manual operation restores,\n" +
            "   the roof sensor assembly is shorted internally, sending a continuous false high-wind safety signal lockout to the processor.",
            
        si: "pregunta2", // Avanza limpio al siguiente nodo pericial de Toldos (Herrajes y Ajustes de Lona)
        no: "pregunta2"
    },
    // ESTACIÓN 2: FALLAS DE HERRAJES MECÁNICOS, PISTONES DE ASISTENCIA Y ALINEACIÓN DE LONA
    pregunta2: {
        pregunta_es: "ESTACIÓN 2 - HERRAJES Y MECÁNICA DE TIJERAS (DOMETIC / CAREFREE / LIPPERT):\n" +
            "¿Los brazos articulados exteriores se tuercen, barren la lona o el toldo se amarra a mitad del viaje?\n" +
            "SÍNTOMAS OPERATIVOS EXPLICADOS EN LENGUAJE DE TALLER PARA RESPALDO DEL MECÁNICO:\n" +
            "- El toldo avanza de forma ruidosa (Crujidos pesados) y un brazo se queda más abierto que el otro al cerrar.\n" +
            "- Los resortes de gas (Pistones amortiguadores) no tienen fuerza y el técnico debe empujar el rodillo a mano.\n" +
            "- La lona se enrolla arrugada o chueca (Desalineada), saliéndose de los canales de aluminio del chasis.\n" +
            "- Al intentar el cierre completo, los candados de viaje magnéticos o mecánicos no embonan en el herraje fijo.",
            
        pregunta_en: "STATION 2 - SCISSOR ARMS, MECHANICAL LINKAGES & FABRIC ALINEATION (DOMETIC / CAREFREE):\n" +
            "Do the exterior articulating extension support arms bind, roll unevenly, or jam midway through operation?\n" +
            "PRACTICAL BAY SYMPTOMS AND LINKAGE MECHANICAL PATHOLOGIES FOR THE TECHNICIAN:\n" +
            "- Awning moves roughly emitting heavy structural pops, and one arm remains slightly extended upon fully closing.\n" +
            "- Dual gas gas-strut shock dampers lost nitrogen charge pressure, requiring the mechanic to manual assist the roller.\n" +
            "- Vinyl or acrylic awning fabric gathers wrinkles or drifts sideways, walking out of the core track channels.\n" +
            "- Upon complete retraction closure, the physical travel lock pins or built-in magnets fail to align into nesting sockets.",
            
        sistema_es: "MECANISMO DE TIJERAS ESTABILIZADORAS, AMORTIGUACIÓN POR GAS Y GUÍAS DE RODILLO",
        sistema_en: "SCISSOR STABILIZING LINKAGE, SHOCK DAMPER STRUTS & ROLLER GUIDE INTERFACES",
        
        norma_es: "Incumplimiento de las especificaciones federales de integridad estructural exterior de la norma ANSI / RVIA TS-1 e infracción directa de los protocolos de fijación y torque de herrajes pesados en chasis de aluminio.",
        norma_en: "Non-compliance with federal ANSI / RVIA TS-1 exterior structural attachment standards and direct violation of high-torque structural lag mounting fastener protocols inside aluminum laminated RV sidewalls.",
        
        aislamiento_es: "GUÍA TÉCNICA PASO A PASO PARA REFORZAR EL DIAGNÓSTICO EN TALLER (SOLUCIÓN PRÁCTICA DE CAMPO EXCLUSIVA):\n" +
            "1. Despliega el toldo por completo e inspecciona visualmente el vástago cromado de los pistones de asistencia de gas:\n" +
            "   si detectas goteo de aceite o si al empujar el brazo sientes que no opone resistencia, el sello interno se reventó;\n" +
            "   especificación exige reemplazar el pistón de gas (usualmente de 60 a 85 Libras de presión de fábrica según el modelo).\n" +
            "2. Revisa la desalineación de la lona midiendo la distancia desde el borde del vinil hasta las tapas del rodillo:\n" +
            "   ambos lados deben tener exactamente la misma medida de holgura; si la lona camina de lado (Fabric Walking),\n" +
            "   despliega el toldo, afloja los tornillos de seguridad del riel superior de la pared y desliza la lona hacia el lado opuesto,\n" +
            "   fijándola firmemente con remaches o tornillos nuevos para evitar que se vuelva a correr al enrollar.\n" +
            "3. Inspecciona los canales internos corredizos de los brazos de tijera (Slider Tracks): acumulación de tierra o falta\n" +
            "   de lubricación seca frenan las zapatas de teflón internas, disparando el amperaje; limpia y aplica silicón seco en spray.\n" +
            "4. Verifica los pernos pivote: si el brazo está doblado aunque sea un cuarto de pulgada por golpe, rozará contra el herraje.",
            
        aislamiento_en: "FORENSIC FIELD TROUBLESHOOTING STEP-BY-STEP (EXPERT SOLUTION & DETAILED SHOP PROCEDURES):\n" +
            "1. Deploy the awning completely and perform a visual check across the chrome shafts of both gas cylinder struts:\n" +
            "   if fluid weeping is present or the arm lacks counter-balance tension, the internal nitrogen seals failed;\n" +
            "   replace the pair under spec (factory parameters range from 60 to 85 lbs of lifting pressure based on arm length).\n" +
            "2. Triage fabric tracking by measuring the exact spatial clearance from the vinyl edges to the aluminum roller caps:\n" +
            "   both margins must track symmetric; if the fabric walks sideways, extend the unit, back out the lock-screws\n" +
            "   at the main roof awning rail, and slide the canvas layout to the opposite direction, sealing it back with pop-rivets.\n" +
            "3. Inspect the hidden slider channel tracks inside the main arm housings: heavy road dirt accumulation or lack of dry\n" +
            "   lubricant binds the inner Teflon slide blocks; perform thorough flushing and re-coat using high-grade dry silicone spray.\n" +
            "4. Check support arm alignment pins: a single bent link casting off by 1/4 inch will rub and bind, causing motor overload.",
            
        es_final: true // <--- CANDADO MAESTRO INDEPENDIENTE DEFINITIVO: Cierra aquí la enciclopedia exclusiva de Toldos
    }
};
// =================================================================================
// FUNCIÓN MÁSTER DE ACCIÓN COMERCIAL (CONEXIÓN Y SINCRO DE IDENTIDAD CON INDEX.HTML)
// =================================================================================
function cargarPreguntasToldos() {
    console.log("Iniciando carga del Grafo Modular de Toldos Eléctricos (Módulo 12).");
    
    if (typeof moduloToldosElectricos !== 'undefined') {
        // 1. Candado de Sincronización Máster: Avisa al esqueleto el objeto real que debe leer al avanzar
        arbolDiagnostico = moduloToldosElectricos;
        nodoActual = "inicio"; // Fuerza a la app a pararse en la Estación 1 de Motores Reversibles
        
        // 2. Disparador de refresco e idioma nativo de la suite de Chula Vista
        if (typeof reiniciar === 'function') {
            reiniciar();
        } else {
            const txtPregunta = document.getElementById("texto-pregunta");
            if (txtPregunta) txtPregunta.innerText = moduloToldosElectricos.inicio.pregunta_es;
        }

        // 3. Forzar el cambio físico del Badge superior azul en tu monitor al instante
        const badgeElemento = document.getElementById("badge-texto") || document.querySelector(".bg-amber-600\\/20");
        if (badgeElemento) {
            badgeElemento.innerText = (idiomaActual === "es") ? moduloToldosElectricos.nombre_es : moduloToldosElectricos.nombre_en;
            badgeElemento.className = "bg-amber-600/20 text-amber-400 text-[10px] font-black tracking-wider px-2.5 py-1 rounded-full border border-amber-500/30 uppercase";
        }

        // 4. Resorte Maestro UX: Eleva la pantalla automáticamente al inicio de las preguntas altas
        const targetPregunta = document.getElementById("badge-texto") || document.getElementById("texto-pregunta");
        if (targetPregunta) {
            targetPregunta.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        console.log("Módulo 12 de Toldos operando con sincronización de identidad, flujo continuo lineal y título.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloToldosElectricos no está definido en la memoria.");
    }
}

