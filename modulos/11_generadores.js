// =================================================================================
// MÓDULO 11: ARBOL MÁSTER DE DIAGNÓSTICO INTEGRAL DE GENERADORES DE ENERGÍA DE CAMPO
// COBERTURA COMPLETA: CUMMINS ONAN (QG/QD), GENERAC, HONDA, INVERTER (GAS/LP/DIESEL)
// EN ESTRICTO CUMPLIMIENTO CON RVIA/ANSI EGS-1, NEC ARTICLE 551 & NFPA 1192
// =================================================================================

const preguntasGeneradores = [
    {
        id: "gen-p1",
        texto_es: "SISTEMA CUMMINS ONAN QG 2800/4000/5500/7000 (GASOLINE / LP): ¿El generador presenta falla crítica de encendido con código de destellos Nivel 2 'Fault Code 36' (Engine Stopped Without Command) o 'Fault Code 14' (Overfrequency)?",
        texto_en: "CUMMINS ONAN QG 2800/4000/5500/7000 (GASOLINE / LP): Does the generator present a critical ignition failure with Level 2 blink code 'Fault Code 36' (Engine Stopped Without Command) or 'Fault Code 14' (Overfrequency)?",
        sistema_es: "GENERADORES GAS/LP (CUMMINS ONAN QG SERIES)",
        sistema_en: "GAS/LP GENERATORS (CUMMINS ONAN QG SERIES)",
        norma_es: "Incumplimiento de la norma RVIA / ANSI EGS-1 para Plantas de Energía Auxiliares y Sistemas de Suministro de Combustible Líquido/Gaseoso en Remolques y Motorhomes.",
        norma_en: "Non-compliance with RVIA / ANSI EGS-1 Standards for Engine Generator Sets and Liquid/Gaseous Fuel Systems installation in RV structures.",
        aislamiento_es: "Descarte pericial mediante multímetro Fluke certificado: Lectura óhmica en los anillos colectores del rotor (Rotor Slip Rings) presenta resistencia infinita, confirmando devanado abierto. Bomba de combustible eléctrica registra presión hidrostática crítica por debajo de 2 PSI (Parámetro de fábrica: 4-5 PSI), provocando estrangulamiento térmico y paro imprevisto bajo carga.",
        aislamiento_en: "Fluke certified multi-meter isolation test: Ohmic reading across rotor slip rings shows infinite resistance, confirming open winding pathology. Electric fuel pump registers critical hydrostatic pressure under 2 PSI (Factory Spec: 4-5 PSI), inducing thermal starvation and uncommanded engine shutdown under electrical load conditions."
    },
    {
        id: "gen-p2",
        texto_es: "SISTEMA CUMMINS ONAN QD 6000/7500/8000/10000/12500 (DIESEL): ¿La planta de luz Quiet Diesel presenta 'Fault Code 32' (Low Oil Pressure) o 'Fault Code 45' (Speed Sense Lost) interrumpiendo la salida de voltaje AC hacia el Transfer Switch?",
        texto_en: "CUMMINS ONAN QD 6000/7500/8000/10000/12500 (DIESEL): Does the Quiet Diesel plant present 'Fault Code 32' (Low Oil Pressure) or 'Fault Code 45' (Speed Sense Lost), terminating AC voltage output to the Transfer Switch?",
        sistema_es: "GENERADORES DIESEL INTEGRADOS (CUMMINS ONAN QD HÉLICE AVANZADA)",
        sistema_en: "INTEGRATED DIESEL GENERATORS (CUMMINS ONAN QD ADVANCED LINE)",
        norma_es: "Violación de los protocolos de integridad mecánica y seguridad eléctrica del Artículo 551 del NEC (National Electrical Code) y lineamientos de ventilación e impactos térmicos de la norma NFPA 1192.",
        norma_en: "Violation of mechanical integrity and electrical safety protocols under NEC Article 551 and thermal/exhaust ventilation guidelines governed by NFPA 1192 regulations.",
        aislamiento_es: "Monitoreo pericial del sensor magnético de velocidad (Quadrature Speed Sensor). Pérdida total de pulsos digitales de frecuencia hacia el controlador inversor interno. Prueba hidrostática del switch de presión de aceite revela cortocircuito franco a tierra con motor apagado, indicando colapso interno estructural del sensor por fatiga térmica severa.",
        aislamiento_en: "Field technical diagnostics on the magnetic quadrature speed sensor confirms total loss of digital frequency pulses to the internal inverter controller. Hydrostatic oil pressure switch testing reveals an internal direct short circuit to ground with engine stationary, indicating sensor structural collapse due to severe thermal fatigue."
    },
    {
        id: "gen-p3",
        texto_es: "SISTEMA GENERAC RV QUIETPACT / PRIMEPACT 40/55/75 (GAS/LP): ¿El motor de la planta Generac enciende pero se apaga inmediatamente al soltar el switch de arranque debido a falla en la excitación del campo ('Fault Code 47' / No Governor Signal)?",
        texto_en: "GENERAC RV QUIETPACT / PRIMEPACT 40/55/75 (GAS/LP): Does the Generac generator start but immediately shut down upon releasing the start switch due to field excitation loss ('Fault Code 47' / No Governor Signal)?",
        sistema_es: "GENERADORES DE ENFRIAMIENTO COMPACTO (GENERAC RV SERIES)",
        sistema_en: "COMPACT AIR-COOLED GENERATORS (GENERAC RV SERIES)",
        norma_es: "Incumplimiento de las especificaciones de seguridad mecánica y control de emisiones ANSI / RVIA EGS-1 relativas a la regulación automática de frecuencia en generadores de combustión interna para RV.",
        norma_en: "Non-compliance with ANSI / RVIA EGS-1 mechanical safety and emissions specifications regarding automated frequency and governor regulation on internal combustion RV generators.",
        aislamiento_es: "Descarte técnico pericial: Medición de resistencia óhmica en los devanados del estator principal (Main Stator Winding D) registra cortocircuito entre espiras, impidiendo la generación del voltaje de autoexcitación remanente hacia el regulador electrónico de voltaje (AVR). El motor se apaga por acción del circuito de protección lógica integrado.",
        aislamiento_en: "Technical diagnostic evaluation: Ohmic resistance measurement across main stator winding D registers an inter-turn short circuit, preventing residual self-excitation voltage feedback from reaching the Automatic Voltage Regulator (AVR). The engine is shut down by the integrated logic protection loop."
    },
    {
        id: "gen-p4",
        texto_es: "SISTEMAS INVERTER COMPACTOS INTEGRADOS (HONDA EU3000i/EU7000is / CHAMPION): ¿El sistema presenta sobrecarga crítica activa (Overload indicator permanente) con lecturas de voltaje flotante asimétricas?",
        texto_en: "INTEGRATED COMPACT INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION): Does the system present active critical overload (Permanent Overload indicator) with highly asymmetric floating voltage output?",
        sistema_es: "PLANTAS DE LUZ TIPO INVERTER DIGITAL (HONDA / CHAMPION EXTENDIDO)",
        sistema_en: "DIGITAL INVERTER GENERATOR MODULES (HONDA / CHAMPION EXTENDED)",
        norma_es: "Violación de los lineamientos de calidad de energía pura, distorsión armónica total (THD < 3%) y protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Violation of clean power guidelines, total harmonic distortion limitations (THD < 3%), and overcurrent thermal protection mandated by National Electrical Code (NEC) Article 551.",
        aislamiento_es: "Prueba de aislamiento óhmico mediante megóhmetro: Cortocircuito térmico estructural interno detectado en el módulo inversor digital de estado sólido (IGBT Bridge). El sistema se bloquea automáticamente bajo carga por resistencia infinita en las líneas de sensado de corriente alterna, inhabilitando la planta por completo.",
        aislamiento_en: "Insulation resistance testing via megohmmeter: Internal structural thermal short circuit detected within the solid-state digital inverter module (IGBT Bridge). The system permanently locks under load due to infinite resistance on AC current-sensing loops, rendering the entire power unit completely inoperable."
    }
];

function cargarPreguntasGeneradores() {
    console.log("Iniciando Módulo Máster de Generadores en la interfaz.");
    
    // 1. Enlazar la base de datos de Onan/Cummins/Generac con el flujo central de la suite
    if (typeof preguntasGeneradores !== 'undefined') {
        ramificacion = preguntasGeneradores;
        preguntaActual = 0;
        
        // 2. Sincronizar el idioma actual y dibujar de golpe el Paso 1 en tu pantalla azul
        const txtPregunta = document.getElementById("texto-pregunta");
        if (txtPregunta) {
            txtPregunta.innerText = (idiomaActual === "es") ? ramificacion[0].texto_es : ramificacion[0].texto_en;
        }

        // 3. Forzar el refresco de las etiquetas visuales (Badges) de la parte superior del diagnóstico
        const badgeSistema = document.getElementById("badge-sistema") || document.getElementById("sistema-actual");
        if (badgeSistema) {
            badgeSistema.innerText = (idiomaActual === "es") ? ramificacion[0].sistema_es : ramificacion[0].sistema_en;
        }

        // 4. Limpiar el menú anterior del taller y redibujar los botones de SÍ y NO en su estado original
        if (typeof mostrarOpciones === 'function') {
            mostrarOpciones();
        } else if (typeof renderizarOpciones === 'function') {
            renderizarOpciones();
        } else if (typeof inicializarOpciones === 'function') {
            inicializarOpciones();
        }
        
        // 5. Ocultar el menú de sistemas inferior para dejarle la pantalla limpia al mecánico
        const menuSistemas = document.getElementById("contenedor-sistemas") || document.getElementById("menu-sistemas");
        if (menuSistemas) menuSistemas.style.display = "none";

        console.log("Cuestionario de Generadores desplegado con éxito en el monitor.");
    } else {
        console.error("Error crítico: La base de datos de 11_generadores.js no está respondiendo en la memoria.");
    }
}
