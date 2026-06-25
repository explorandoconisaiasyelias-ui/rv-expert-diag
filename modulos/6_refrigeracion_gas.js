// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Refrigeradores de Absorción (Dometic/Norcold)
const moduloRefrigeracionGas = {
    badge_es: "SISTEMA DE REFRIGERACIÓN POR ABSORCIÓN",
    badge_en: "ABSORPTION REFRIGERATION SYSTEM",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL REFRIGERADOR: Seleccione el compartimento o modo de energía que presenta la falla de enfriamiento:",
        pregunta_en: "MAIN REFRIGERATOR SYMPTOM: Select the power mode or compartment displaying the cooling fault:",
        opciones_menu: true,
        si: "inicio_falla_gas_refri",      // Enlace a fallas de Gas LP
        no: "menu_segundo_nivel_refri"     // Enlace a fallas Eléctricas y Físicas Catastróficas
    },

    // ==========================================
    // SUB-MÓDULO A: FALLAS EN MODO GAS LP (DOMEITC / NORCOLD DUAL FUEL)
    // ==========================================
    inicio_falla_gas_refri: {
        pregunta_es: "SÍNTOMA GAS: El refrigerador se cambia a modo GAS, la tarjeta hace chispa pero la flama no se mantiene encendida y la pantalla parpadea con el error 'LP' o 'FLT'. Con su multímetro en escala de milivoltios (mV), mida la señal del termocople o sensor de flama mientras hay fuego. ¿El multímetro marca 25 mV o más?",
        pregunta_en: "GAS SYMPTOM: The refrigerator switches to GAS mode, the board sparks but the flame does not hold, and the display flashes 'LP' or 'FLT' error. With your multimeter in millivolts (mV) scale, measure the thermocouple or flame sensor signal while fire is present. Does the multimeter read 25 mV or higher?",
        si: "error_esprea_o_presion_baja",
        no: "probar_continuidad_termocople"
    },
    probar_continuidad_termocople: {
        pregunta_es: "Paso A2: El voltaje del termocople es menor a 25 mV. Apague el gas, desconecte las terminales del termocople de la tarjeta electrónica y mida su continuidad. ¿El multímetro registra continuidad total (0.0 Ω)?",
        pregunta_en: "Step A2: Thermocouple voltage is below 25 mV. Turn off the gas, disconnect the thermocouple terminals from the control board, and measure its continuity. Does the multimeter register full continuity (0.0 Ω)?",
        si: "error_flama_debil_suciedad",
        no: "error_termocople_quemado"
    },
    error_termocople_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Termocople o sensor de ionización (Flame Sensor) totalmente dañado, agrietado o carbonizado internamente.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el termocople por uno nuevo de fábrica. Use un cepillo de alambre suave para limpiar la punta metálica de cualquier rastro de hollín grueso antes de fijarlo con precisión en el soporte metálico del quemador.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Refrigerator thermocouple or ionization flame sensor completely damaged, cracked, or internally carbonized.<br><br>
        <b>CORRECTION:</b> Replace the thermocouple with a new factory-certified unit. Use a soft wire brush to clean any heavy soot buildup from the metal tip before precisely securing it back into the burner mounting bracket.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_flama_debil_suciedad: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La flama de gas LP no tiene suficiente fuerza térmica para calentar el termocople debido a que el quemador inferior se encuentra parcialmente obstruido.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Retire la cubierta metálica del quemador inferior. Limpie las ranuras difusoras con un cepillo de cerdas suaves y aspire las acumulaciones de óxido de hierro desprendidas del interior de la chimenea de absorción.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The LP gas flame lacks sufficient thermal strength to heat up the thermocouple because the lower burner assembly is partially obstructed.<br><br>
        <b>FIELD CORRECTION:</b> Remove the lower burner metal heat shield. Clean the diffuser slots using a soft-bristle brush and vacuum out iron oxide rust flakes that have dropped down from the inside of the absorption flue chimney.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_esprea_o_presion_baja: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El termocople está sano, pero la flama se apaga por caídas de presión dinámica en la línea de gas LP o por una esprea parcialmente obstruida por insectos.<br><br>
        <b>PROCEDIMIENTO DE REPARACIÓN (MFR Standard):</b><br>
        1. Desmonte la esprea de rubí con extremo cuidado.<br>
        2. Sumérjala en alcohol isopropílico por 10 minutos y sople con aire comprimido a baja presión. <b>NUNCA introduzca agujas, alambres ni brocas metálicas</b>, ya que el rubí calibrado se romperá, creando una flama excesiva y destructiva.<br>
        3. Use un manómetro de agua en la línea de prueba para confirmar que la presión general de Gas LP sea de 11 pulgadas de columna de agua (11" W.C.) constantes bajo carga completa.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The thermocouple is functioning correctly, but the flame dies due to dynamic LP gas pressure drops or an orifice partially blocked by debris/insects.<br><br>
        <b>MFR STANDARD REPAIR PROCEDURE:</b><br>
        1. Remove the precision ruby burner orifice with extreme care.<br>
        2. Submerge it in isopropyl alcohol for 10 minutes and blow it clear using low-pressure compressed air. <b>NEVER insert needles, wires, or metal drill bits</b>, as you will warp the calibrated opening, creating a dangerous and destructive oversized flame.<br>
        3. Use a water manometer at the test port to confirm that the system's LP gas pressure holds a steady 11 inches of water column (11" W.C.) under full appliance load.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // MENÚ SEGUNDO NIVEL: ELÉCTRICO / CATASTRÓFICO MULTIMARCA
    // ==========================================
    menu_segundo_nivel_refri: {
        pregunta_es: "SÍNTOMA FÍSICO/ELÉCTRICO: Seleccione el tipo de problema eléctrico o físico que presenta el refrigerador:",
        pregunta_en: "PHYSICAL/ELECTRICAL SYMPTOM: Select the specific electrical or physical issue the refrigerator is showing:",
        opciones_menu: true,
        si: "inicio_falla_elec_refri",      // Enlace a fallas de 120V AC
        no: "inicio_falla_fisica_refri"     // Enlace a Termistor y Fugas de Amoniaco
    },
    // ==========================================
    // SUB-MÓDULO B: FALLAS EN MODO ELÉCTRICO (120V AC) UNIVERSAL
    // ==========================================
    inicio_falla_elec_refri: {
        pregunta_es: "SÍNTOMA ELÉCTRICO: El refrigerador funciona perfecto a Gas LP, pero cuando se conecta a 120V AC deja de enfriar por completo. Vaya a la parte trasera del refrigerador exterior. Localice el enchufe de 120V de la tarjeta. ¿Mide entre 110V y 125V AC directos en el contacto?",
        pregunta_en: "ELECTRICAL SYMPTOM: The refrigerator works perfectly on LP Gas, but when switched to 120V AC it stops cooling completely. Go to the rear refrigerator exterior access panel. Locate the 120V plug on the board. Does it measure between 110V and 125V AC directly at the outlet?",
        si: "probar_fusible_ac_tarjeta",
        no: "error_contacto_gfci_disparado"
    },
    error_contacto_gfci_disparado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de energía de 120V AC en el circuito del compartimento exterior del refrigerador.<br><br>
        <b>CORRECCIÓN:</b> Revise el breaker correspondiente en el centro WFCO. Si el breaker está armado, localice el contacto GFCI maestro del interior del RV (usualmente en la cocina o el baño) y presione el botón de RESET. El enchufe del refrigerador está colgado eléctricamente de esa misma línea de seguridad por normativa industrial.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Total lack of 120V AC shore power at the exterior refrigerator access compartment outlet.<br><br>
        <b>CORRECTION:</b> Check the corresponding breaker in the WFCO panel. If the breaker is armed, locate the master GFCI outlet inside the RV (usually in the kitchen or bathroom) and press the RESET button. The refrigerator outlet is electrically wired downstream from this safety circuit by industrial building codes.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_fusible_ac_tarjeta: {
        pregunta_es: "Paso B2: El contacto tiene energía limpia de 120V AC. Retire la tapa plástica negra de la tarjeta de control. Localice el fusible cerámico blanco de alta capacidad (generalmente de 5 Amperios / 120V AC). ¿El fusible tiene continuidad (0.0 Ω) según su multímetro?",
        pregunta_en: "Step B2: The outlet has clean 120V AC power. Remove the black plastic cover from the control board. Locate the high-capacity white ceramic fuse (usually 5 Amps / 120V AC). Does the fuse register continuity (0.0 Ω) on your multimeter?",
        si: "probar_resistencia_calentadora",
        no: "error_fusible_ac_quemado"
    },
    error_fusible_ac_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fusible de protección de corriente alterna de 5A quemado en la tarjeta de control por un cortocircuito severo.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el fusible por uno cerámico blanco idéntico de 5A de soplado rápido. Si se vuelve a fundir de inmediato al encender el aparato, significa que la tarjeta electrónica tiene un corto en las pistas de alta potencia o la resistencia calentadora está aterrizada.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 5A AC protection fuse blown on the main control board due to a severe electrical short circuit.<br><br>
        <b>CORRECTION:</b> Replace the fuse with an identical 5A white ceramic fast-acting fuse. If it blows again immediately upon powering up, it indicates the electronic control board has a short circuit on its high-voltage traces or the heating element itself is grounded.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_resistencia_calentadora: {
        pregunta_es: "Paso B3: El fusible AC está sano. Desconecte la corriente eléctrica. Localice los dos cables negros gruesos que salen de la tarjeta y entran a la chimenea aislada (Resistencia Calentadora). Ponga el multímetro en escala de Ohmios (Ω) y mida entre esos dos cables. ¿La lectura marca entre 35 y 65 Ohmios de resistencia?",
        pregunta_en: "Step B3: The AC fuse is healthy. Disconnect the electrical power. Locate the two thick black wires coming from the board and entering the insulated chimney sleeve (Heating Element). Set the multimeter to the Ohms (Ω) scale and measure between those two wires. Does the reading show between 35 and 65 Ohms of resistance?",
        si: "error_tarjeta_rele_ac_quemado",
        no: "error_resistencia_calentamiento_abierta"
    },
    error_resistencia_calentamiento_abierta: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Elemento de resistencia calentadora de 120V AC roto, abierto o fundido internamente.<br><br>
        <b>CORRECCIÓN:</b> La resistencia no genera el calor necesario para hervir la solución química de amoniaco. Deslícela hacia arriba con cuidado para extraerla de la funda metálica de la chimenea de absorción y reemplace el elemento calentador por uno nuevo respetando los vatios (W) originales de fábrica (ej. 325W o 440W).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 120V AC heating element ruptured, open, or internally burned out.<br><br>
        <b>CORRECTION:</b> The element fails to generate the heat required to boil the ammonia chemical solution. Carefully slide it upward to extract it from the absorption flue metal sleeve and replace the heating element with a new one matching the exact factory wattage rating (e.g., 325W or 440W).`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_tarjeta_rele_ac_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La resistencia está en perfecto estado físico y de ohmios, pero el relé conmutador AC integrado en la tarjeta de control principal está flameado y no cierra el puente de alta potencia.<br><br>
        <b>CORRECCIÓN:</b> Reemplace la tarjeta electrónica de control principal del refrigerador (Dometic/Norcold Main Power Board).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The heating element is in perfect physical and ohmic condition, but the integrated AC power relay on the main control board is scorched and fails to close the high-voltage circuit bridge.<br><br>
        <b>CORRECTION:</b> Replace the refrigerator's main electronic control power board (Dometic/Norcold Main Power Board).`,
        imagen: "https://unsplash.com",
        final: true
    },

    // ==========================================
    // SUB-MÓDULO C: FALLAS FÍSICAS, TERMISTOR Y CATASTRÓFICAS MULTIMARCA
    // ==========================================
    inicio_falla_fisica_refri: {
        pregunta_es: "SÍNTOMA FÍSICO CRÍTICO: Abra la puerta trasera exterior del refrigerador. ¿Se percibe un fuerte olor a amoniaco (olor químico penetrante a huevo podrido) o se observan manchas amarillas polvorientas acumuladas alrededor de los tubos de la chimenea?",
        pregunta_en: "CRITICAL PHYSICAL SYMPTOM: Open the rear exterior refrigerator access door. Is there a strong smell of ammonia (sharp, pungent egg-like chemical odor) or are there powdery yellow stains accumulated around the flue tubes?",
        si: "error_fuga_amoniaco_destruccion",
        no: "probar_resistencia_termistor"
    },
    error_fuga_amoniaco_destruccion: {
        solucion_es: `❌ DIAGNÓSTICO CATASTRÓFICO: El serpentín o unidad de enfriamiento (Cooling Unit) tiene una fractura interna y perdió por completo el gas refrigerante de amoniaco.<br><br>
        <b>⚠️ ALERTA DE SEGURIDAD CRÍTICA (Normativa NFPA 1192):</b> Apague inmediatamente el refrigerador, corte los 12V DC, el poste de 120V y cierre el tanque de gas LP. El amoniaco y el hidrógeno liberados son altamente inflamables, corrosivos y tóxicos para la salud.<br><br>
        <b>CORRECCIÓN:</b> El refrigerador es insalvable de forma directa. Requiere el reemplazo completo de la 'Cooling Unit' trasera o el cambio total del refrigerador por uno nuevo moderno de compresión de 12V.`,
        solucion_en: `❌ CATASTROPHIC DIAGNOSIS: The cooling unit coils have an internal fracture and have completely leaked the ammonia refrigerant gas.<br><br>
        <b>⚠️ CRITICAL SAFETY ALERT (NFPA 1192 Standard):</b> Immediately power off the refrigerator, disconnect 12V DC, unplug 120V shore power, and shut off the main LP gas tank. The released ammonia and hydrogen gases are highly flammable, corrosive, and toxic to human health.<br><br>
        <b>CORRECTION:</b> The refrigerator is beyond direct field repair. It requires a complete replacement of the rear 'Cooling Unit' or upgrading the entire refrigerator to a modern 12V compressor unit.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_resistencia_termistor: {
        pregunta_es: "Paso C2: No hay rastro de fugas de gas. El refrigerador enciende pero congela de forma extrema los alimentos abajo (no corta por temperatura) o viceversa. Localice el cable blanco del Termistor enganchado en las aletas de aluminio interiores de la cabina. Desconéctelo de la tarjeta trasera. Coloque un vaso con agua con hielos (32°F / 0°C), sumerja la punta del termistor por 5 minutos y mida sus Ohmios. ¿El multímetro registra entre 8,000 y 10,000 Ohmios (8kΩ - 10kΩ)?",
        pregunta_en: "Step C2: No signs of gas leaks. The refrigerator powers up but severely freezes food in the lower section (fails to cycle off by temperature) or vice versa. Locate the white Thermistor wire clipped to the interior cabin aluminum fins. Disconnect it from the rear board. Place a glass of ice water (32°F / 0°C), submerge the thermistor tip for 5 minutes, and measure its Ohms. Does the multimeter register between 8,000 and 10,000 Ohms (8kΩ - 10kΩ)?",
        si: "error_bloqueo_tarjeta_hard_lockout",
        no: "error_termistor_descalibrado"
    },
    error_termistor_descalibrado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Sensor de temperatura (Termistor) descalibrado, abierto o en cortocircuito directo.<br><br>
        <b>CORRECCIÓN:</b> Al entregar un valor erróneo de resistencia (ej. marcar 0.0 ohmios o resistencia infinita 0L), la tarjeta asume que la cabina está caliente o fría de forma permanente, congelando todo o bloqueando el enfriamiento. Reemplace el termistor interior respetando el modelo de la marca (Dometic o Norcold).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Temperature sensor (Thermistor) out of calibration, open, or directly short-circuited.<br><br>
        <b>CORRECTION:</b> By delivering an incorrect resistance value (e.g., reading 0.0 ohms or infinite resistance 0L), the board assumes the cabin is permanently hot or cold, freezing everything or blocking cooling entirely. Replace the interior thermistor matching the specific brand model (Dometic or Norcold).`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_bloqueo_tarjeta_hard_lockout: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El termistor y todos los componentes físicos están sanos, pero el microprocesador de la tarjeta entró en un bloqueo de seguridad permanente (Hard Lockout / Error de Flama Insegura).<br><br>
        <b>PROCEDIMIENTO DE RESETEO DE EMERGENCIA (Norcold/Dometic):</b><br>
        1. Localice el bloque de pines descubiertos en la tarjeta trasera.<br>
        2. Con un cable puente (Jumper wire), conecte el Pin marcado como 'GND' o 'Ground' con el Pin número 2 del chip de memoria por exactamente 5 segundos mientras el sistema tiene 12V activos.<br>
        3. Escuchará un clic del relé indicando que la memoria se borró. Apague y encienda el refrigerador desde el panel frontal para restablecer el ciclo de operación normal de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The thermistor and all physical components are healthy, but the circuit board's microprocessor has entered a permanent software safety lock (Hard Lockout / Unsafe Flame Error).<br><br>
        <b>EMERGENCY HARDWARE RESET PROCEDURE (Norcold/Dometic):</b><br>
        1. Locate the exposed jumper pin block on the rear control board.<br>
        2. Using a jumper wire, short the pin labeled 'GND' or 'Ground' to Pin number 2 on the memory chip for exactly 5 seconds while the system has active 12V power.<br>
        3. You will hear a distinctive relay click indicating the memory lock has been cleared. Power the refrigerator OFF and ON from the front eyebrow panel to restore normal factory operational cycles.`,
        imagen: "https://unsplash.com",
        final: true
    }
};
