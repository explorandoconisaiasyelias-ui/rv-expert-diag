// =================================================================================
// MÓDULO 11: ENCICLOPEDIA INTEGRAL Y ÁRBOL FORENSE DE DIAGNÓSTICO DE GENERADORES
// COBERTURA COMPLETA: CUMMINS ONAN QG/QD, GENERAC, HONDA, INVERTER (GAS/LP/DIESEL)
// MANUAL DE CAMPO ADAPTADO CON REQUISITOS COMERCIALES DE LIQUIDACIÓN RVIA/ANSI/NFPA
// =================================================================================

const moduloGeneradores = {
    badge_es: "SISTEMAS DE GENERACIÓN DE ENERGÍA DE CAMPO",
    badge_en: "FIELD POWER GENERATION & AUXILIARY SYSTEMS",
    
    // NODO 1: ADMISIÓN DE FALLAS ELÉCTRICAS EN ONAN QG
    inicio: {
        pregunta_es: "CUMMINS ONAN QG SERIES (2800/4000/5500/7000): ¿El sistema presenta fallas lógicas de regulación de voltaje AC indicadas por 'Fault Code 13' (Undervoltage) o 'Fault Code 14' (Overfrequency)?",
        pregunta_en: "CUMMINS ONAN QG SERIES (2800/4000/5500/7000): Does the system present AC voltage regulation failures indicated by 'Fault Code 13' (Undervoltage) or 'Fault Code 14' (Overfrequency)?",
        sistema_es: "REGULACIÓN DE VOLTAJE AC (CUMMINS ONAN QG)",
        sistema_en: "AC VOLTAGE REGULATION (CUMMINS ONAN QG)",
        norma_es: "Incumplimiento del Artículo 551 del NEC (National Electrical Code) relativo a los límites de fluctuación segura de voltaje y frecuencia en vehículos recreativos.",
        norma_en: "Non-compliance with NEC Article 551 regarding safe voltage and frequency fluctuation limits within recreational vehicle electrical distribution.",
        aislamiento_es: "Descarte pericial: Inspección óhmica de las escobillas (Brushes) y anillos colectores del rotor revela acumulación severa de carbón o resistencia infinita. Medición de frecuencia muestra lecturas asimétricas fuera del rango operativo de 60Hz bajo carga térmica severa debido a descalibración física en los resortes del gobernador mecánico de aceleración.",
        aislamiento_en: "Technical diagnostics: Ohmic evaluation of carbon brushes and rotor slip rings confirms severe carbon fouling or infinite resistance parameters. AC frequency measurement yields highly asymmetric readings outside the stable 60Hz envelope under thermal load due to mechanical governor spring de-calibration.",
        si: "onan_qg_combustible",
        no: "onan_qg_combustible"
    },

    // NODO 2: FALLAS DE ARRANQUE Y COMBUSTIBLE EN ONAN QG
    onan_qg_combustible: {
        pregunta_es: "CUMMINS ONAN QG (GASOLINA / LP): ¿El motor presenta 'Fault Code 36' (Engine Stopped Without Command) o 'Fault Code 15' (Underfrequency) provocando un ciclo de arranque fallido (Crank pero No Start)?",
        pregunta_en: "CUMMINS ONAN QG (GASOLINE / LP): Does the engine present 'Fault Code 36' (Engine Stopped Without Command) or 'Fault Code 15' (Underfrequency), causing a failed ignition sequence (Crank but No Start)?",
        sistema_es: "SUMINISTRO DE COMBUSTIBLE Y PRESIÓN (ONAN QG)",
        sistema_en: "FUEL DELIVERY & PRESSURE MODULE (ONAN QG)",
        norma_es: "Violación de los lineamientos de seguridad mecánica para sistemas de combustible líquido/gaseoso y venteo exigidos por la normativa federal NFPA 1192.",
        norma_en: "Violation of mechanical safety guidelines for liquid/gaseous fuel delivery systems and exhaust ventilation mandated by federal NFPA 1192 regulations.",
        aislamiento_es: "Descarte de campo: Prueba hidrostática en la línea de combustible revela presión crítica por debajo de 2 PSI (Especificación original: 4.5 PSI). En modelos de Gas LP, el solenoide de corte presenta obstrucción interna o congelamiento estructural por gomas acumuladas. En modelos de gasolina, se detecta barniz y sedimentos obstructivos obstruyendo los espreas principales del carburador.",
        aislamiento_en: "Field verification: Hydrostatic testing on the fuel feed line reveals critical pressure drops under 2 PSI (Factory Spec: 4.5 PSI). On LP gas variants, the fuel lock-off solenoid presents internal contamination or structural freezing. On gasoline variants, obstructive fuel varnish deposits are blocking the main carburetor jets.",
        si: "onan_qd_diesel",
        no: "onan_qd_diesel"
    },
    // NODO 3: PROTOCOLO FORENSE PARA LÍNEA CUMMINS ONAN QD (DIESEL)
    onan_qd_diesel: {
        pregunta_es: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL): ¿La planta Quiet Diesel presenta corte imprevisto por 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost) o 'Fault Code 27' (Voltage Sense Lost)?",
        pregunta_en: "CUMMINS ONAN QD SERIES (6000/7500/8000/10000/12500 DIESEL): Does the Quiet Diesel plant present an uncommanded shutdown via 'Fault Code 32' (Low Oil Pressure), 'Fault Code 45' (Speed Sense Lost), or 'Fault Code 27' (Voltage Sense Lost)?",
        sistema_es: "MONITOREO DIGiTAL Y SENSORES DIESEL (ONAN QD)",
        sistema_en: "DIGITAL MONITORING & DIESEL SENSORS (ONAN QD)",
        norma_es: "Incumplimiento de las normas de seguridad eléctrica y protección contra sobrecorriente estipuladas por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Non-compliance with electrical safety and overcurrent protection protocols mandated by National Electrical Code (NEC) Article 551 standard operating practices.",
        aislamiento_es: "Descarte pericial: Medición del sensor magnético de velocidad (Quadrature Speed Sensor) revela pérdida absoluta de pulsos digitales hacia el inversor central por agrietamiento estructural. Switch de presión hidrostática de aceite presenta cortocircuito franco a chasis debido a degradación irreversible del diafragma interno bajo fatiga térmica severa.",
        aislamiento_en: "Technical evaluation: Diagnostic monitoring of the magnetic quadrature speed sensor confirms total loss of frequency pulses to the main controller due to housing structural fissures. Hydrostatic oil pressure switch testing reveals an internal direct short circuit to chassis ground caused by thermal fatigue degradation of the internal seal.",
        si: "generac_rv_master",
        no: "generac_rv_master"
    },

    // NODO 4: SISTEMAS DE EXCITACIÓN Y ENFRIAMIENTO GENERAC RV
    generac_rv_master: {
        pregunta_es: "GENERAC RV QUIETPACT / PRIMEPACT (40G/55G/50D/75D): ¿El motor enciende de forma inestable y se apaga de golpe al soltar el interruptor manual debido a pérdida de excitación ('Fault Code 47' / No Governor Signal) o sobrecalentamiento térmico?",
        pregunta_en: "GENERAC RV QUIETPACT / PRIMEPACT (40G/55G/50D/75D): Does the engine experience rough ignition and stall upon switch release due to field excitation loss ('Fault Code 47' / No Governor Signal) or high thermal limits?",
        sistema_es: "EXCITACIÓN DE CAMPO Y EXHAUST REFLUX (GENERAC RV)",
        sistema_en: "FIELD EXCITATION & THERMAL REFLUX (GENERAC RV)",
        norma_es: "Violación de los lineamientos de control automático de frecuencia, gobernación mecánica y disipación de gases calientes de la norma de ingeniería ANSI / RVIA EGS-1.",
        norma_en: "Violation of automated frequency regulation, mechanical governor specifications, and exhaust heat dissipation standards governed by ANSI / RVIA EGS-1 protocols.",
        aislamiento_es: "Descarte técnico: Comprobación óhmica en los devanados del estator principal (Main Stator Winding D) registra cortocircuito entre espiras, anulando la retroalimentación de voltaje hacia el regulador electrónico automático (AVR). El sensor bimetálico de temperatura del chasis corta la inyección lógica por acumulación de hollín y obstrucción de aire asistido.",
        aislamiento_en: "Technical diagnostic evaluation: Ohmic evaluation across main stator winding D loops registers an internal inter-turn short circuit, neutralizing self-excitation feedback to the Automatic Voltage Regulator (AVR). Bimetallic thermal sensor cuts control logic due to fan shroud fouling and cooling air restriction.",
        si: "inverter_digital_master",
        no: "inverter_digital_master"
    },
    // NODO 5: TECNOLOGÍA INVERTER DE ESTADO SÓLIDO (HONDA EU / CHAMPION SERIES)
    inverter_digital_master: {
        pregunta_es: "SISTEMAS INVERTER COMPACTOS INTEGRADOS (HONDA EU3000i/EU7000is / CHAMPION): ¿El sistema presenta sobrecarga crítica activa (Overload indicator permanente) con lecturas de voltaje flotante asimétricas bajo carga térmica?",
        pregunta_en: "INTEGRATED COMPACT INVERTER SYSTEMS (HONDA EU3000i/EU7000is / CHAMPION): Does the system present active critical overload (Permanent Overload indicator) with highly asymmetric floating voltage output under thermal load?",
        sistema_es: "PLANTAS DE LUZ TIPO INVERTER DIGITAL (HONDA / CHAMPION)",
        sistema_en: "DIGITAL INVERTER GENERATOR MODULES (HONDA / CHAMPION)",
        norma_es: "Violación de los lineamientos de calidad de energía pura, distorsión armónica total (THD < 3%) y protección térmica exigidos por el Artículo 551 del Código Eléctrico Nacional (NEC).",
        norma_en: "Violation of clean power guidelines, total harmonic distortion limitations (THD < 3%), and overcurrent thermal protection mandated by National Electrical Code (NEC) Article 551.",
        aislamiento_es: "Prueba de aislamiento óhmico mediante megóhmetro: Cortocircuito térmico estructural interno detectado en el módulo inversor digital de estado sólido (IGBT Bridge). El sistema se bloquea automáticamente bajo carga por resistencia infinita en las líneas de sensado de corriente alterna, inhabilitando la planta por completo.",
        aislamiento_en: "Insulation resistance testing via megohmmeter: Internal structural thermal short circuit detected within the solid-state digital inverter module (IGBT Bridge). The system permanently locks under load due to infinite resistance on AC current-sensing loops, rendering the entire power unit completely inoperable.",
        finalizar: true
    }
};

// =================================================================================
// FUNCIÓN MÁSTER DE ACCIÓN COMERCIAL (CONEXIÓN ADAPTADORA CON INDEX.HTML)
// =================================================================================
function cargarPreguntasGeneradores() {
    console.log("Iniciando carga del Grafo Modular de Generadores (Módulo 11).");
    
    if (typeof moduloGeneradores !== 'undefined') {
        // 1. ADAPTADOR DIRECTO DE MEMORIA: Sobreescribe el nodo o sistema que index.html lee al avanzar
        if (typeof nodoActual !== 'undefined') {
            nodoActual = moduloGeneradores.inicio;
        } else if (typeof sistemaActualData !== 'undefined') {
            sistemaActualData = moduloGeneradores;
        } else if (typeof ramificacion !== 'undefined') {
            ramificacion = moduloGeneradores;
        }

        // 2. DISPARADOR DE REFRESCO VISUAL NATIVO: Fuerza la carga del cuestionario en tu formulario
        if (typeof inicializarSistemaNuevo === 'function') {
            inicializarSistemaNuevo(moduloGeneradores);
        } else if (typeof cargarBloquePregunta === 'function') {
            cargarBloquePregunta(moduloGeneradores.inicio);
        } else {
            // Inyección de respaldo directa si tu motor central lee las etiquetas por ID fijo
            const txtPregunta = document.getElementById("texto-pregunta");
            if (txtPregunta) txtPregunta.innerText = moduloGeneradores.inicio.pregunta_es;
            
            const badgeSistema = document.getElementById("badge-sistema") || document.getElementById("sistema-actual");
            if (badgeSistema) badgeSistema.innerText = moduloGeneradores.inicio.badge_es;
        }

        // 3. AUTO-SCROLL AUTOMÁTICO: Agarra la pantalla de la laptop/celular y la eleva de golpe al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 4. LIMPIEZA LOGÍSTICA DE BOTONES SÍ/NO
        if (typeof inicializarOpciones === 'function') inicializarOpciones();

        console.log("Módulo 11 de Generadores operando con Auto-Scroll y enrutamiento indexado.");
    } else {
        console.error("Error crítico de laboratorio: El objeto moduloGeneradores no está definido en la memoria de la laptop.");
    }
}
