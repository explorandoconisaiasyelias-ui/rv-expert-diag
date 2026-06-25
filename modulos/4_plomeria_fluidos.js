// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Calentadores de Agua (Atwood/Suburban/Truma)
const moduloPlomeriaFluidos = {
    badge_es: "SISTEMA DE PLOMERÍA Y CALENTADORES",
    badge_en: "PLUMBING & WATER HEATER SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL CALENTADOR: El agua sale fría. Seleccione el modo de energía o el comportamiento donde presenta la falla el motorhome:",
        pregunta_en: "MAIN WATER HEATER SYMPTOM: The water is coming out cold. Select the power mode or operational behavior showing the fault in the motorhome:",
        opciones_menu: true,
        si: "inicio_falla_gas",       // Enlace a fallas de Gas LP / Chispa DSI
        no: "inicio_falla_electrico"   // Enlace a fallas de Resistencia 120V AC
    },

    // ==========================================
    // SUB-MÓDULO A: FALLAS EN MODO GAS LP (12V DC / CHISPA DSI UNIVERSAL)
    // ==========================================
    inicio_falla_gas: {
        pregunta_es: "SÍNTOMA GAS: El switch de gas interior se enciende, pero el quemador no hace chispa ni enciende, y el LED de error 'Fault' se ilumina en el tablero. Con su multímetro en V DC, mida el voltaje en el cable de entrada que llega al termostato. ¿Mide 12.0V DC o más?",
        pregunta_en: "GAS SYMPTOM: The indoor gas switch is turned on, but the burner does not spark or ignite, and the 'Fault' error LED lights up on the dashboard. With your multimeter in V DC, measure the input voltage leading to the thermostat. Does it read 12.0V DC or higher?",
        si: "probar_fusible_termico_eco",
        no: "error_no_pwr_panel_calentador"
    },
    error_no_pwr_panel_calentador: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de alimentación general de 12V DC desde el Centro de Distribución hacia la tarjeta de control del calentador de agua.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Revise el fusible de 15A en el panel principal asignado a 'Appliances' (Aparatos) o 'Water Heater'. Si el fusible está sano, desmonte el interruptor de pared interior del RV y verifique que el cable positivo de control de 12V no esté suelto, roto o altamente sulfatado, interrumpiendo la señal física hacia el tanque.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Lack of main 12V DC power feed from the Distribution Center to the water heater control board.<br><br>
        <b>FIELD CORRECTION:</b> Check the 15A fuse in the main panel labeled 'Appliances' or 'Water Heater'. If the fuse is healthy, remove the RV's interior wall switch and verify that the 12V positive control wire is not loose, broken, or heavily sulfated, which interrupts the physical signal to the tank.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_fusible_termico_eco: {
        pregunta_es: "Paso A2: Llegan 12V correctos a la entrada. Localice el pequeño cable negro que tiene un fusible envuelto en plástico transparente (Thermal Cut-Off) conectado directo al termostato de 140°F. Mida la continuidad de ese fusible. ¿El multímetro registra continuidad total (0.0 Ω)?",
        pregunta_en: "Step A2: Correct 12V arrives at the inlet. Locate the short black wire with a fuse wrapped in clear plastic (Thermal Cut-Off) connected directly to the 140°F thermostat. Measure the continuity of that fuse. Does the multimeter register full continuity (0.0 Ω)?",
        si: "probar_salida_termostato_eco",
        no: "error_fusible_termico_derretido"
    },
    error_fusible_termico_derretido: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fusible Térmico de Seguridad (Thermal Cut-Off) derretido y abierto permanentemente por exceso de calor externo.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA MULTIMARCA:</b> Este es un fusible térmico de sacrificio diseñado para romperse si la flama del gas se llega a "regresar" hacia afuera del tubo de la chimenea (debido a obstrucciones o ráfagas de viento fuertes), evitando que se queme el cableado del RV o la tarjeta electrónica.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el fusible térmico Thermal Cut-Off por uno nuevo original de 190°F. Antes de encender el gas, inspeccione que el tubo del quemador esté perfectamente alineado y libre de obstrucciones de flama periféricas.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Thermal Safety Fuse (Thermal Cut-Off) melted and permanently open due to excessive external heat.<br><br>
        <b>MULTI-BRAND FACTORY EXPLANATION:</b> This is a sacrificial thermal fuse designed to snap if the gas flame "blows back" out of the exhaust tube (caused by obstructions or strong wind gusts), preventing the RV wiring or control board from catching fire.<br><br>
        <b>CORRECTION:</b> Replace the Thermal Cut-Off fuse with a new factory-certified 190°F fuse. Before lighting the gas, inspect the burner tube to ensure it is perfectly aligned and free of peripheral flame obstructions.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_salida_termostato_eco: {
        pregunta_es: "Paso A3: El fusible térmico está sano. Mida ahora el voltaje de salida del interruptor ECO (Energy Cut-Off) de alta seguridad de 180°F. ¿Registra 12V DC constantes pasando hacia la tarjeta de control?",
        pregunta_en: "Step A3: The thermal fuse is healthy. Now measure the output voltage of the high-safety 180°F ECO (Energy Cut-Off) switch. Does it register constant 12V DC passing through to the control board?",
        si: "probar_bobinas_solenoide_gas",
        no: "error_termostato_o_eco_abierto"
    },
    error_termostato_o_eco_abierto: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Conjunto de termostato de control (140°F) o interruptor de seguridad ECO (180°F) dañado o abierto permanentemente fuera de rango.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el kit de termostato y ECO. <b>REGLA DE ORO DE FÁBRICA:</b> Use una lija de grano fino para limpiar perfectamente la pared metálica del tanque de agua antes de adherir las nuevas pastillas térmicas; si queda sarro u óxido, los sensores leerán mal la temperatura, provocando que el agua hierva en exceso y actúe la válvula de alivio por presión.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Control thermostat assembly (140°F) or ECO safety switch (180°F) damaged or permanently open out of operational range.<br><br>
        <b>CORRECTION:</b> Replace the thermostat and ECO kit. <b>FACTORY GOLDEN RULE:</b> Use a fine-grit sandpaper to thoroughly clean the metal water tank wall before adhering the new thermal pads; if scale or rust remains, the sensors will misread the temperature, causing the water to overheat and trip the pressure relief valve.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_bobinas_solenoide_gas: {
        pregunta_es: "Paso A4: El voltaje llega perfectamente a la tarjeta de control. La tarjeta genera la chispa audible (DSI) pero el quemador no enciende. Desconecte el arnés de la válvula de gas. Ponga su multímetro en la escala de Ohmios (Ω) y mida la resistencia de cada bobina solenoide. ¿La lectura se encuentra en el rango seguro de entre 30 y 50 Ohmios?",
        pregunta_en: "Step A4: Voltage reaches the control board perfectly. The board generates an audible spark (DSI) but the burner does not light. Disconnect the gas valve harness. Set your multimeter to the Ohms (Ω) scale and measure the resistance of each solenoid coil. Is the reading within the safe range of 30 to 50 Ohms?",
        si: "probar_electrodo_y_venturi",
        no: "error_bobinas_solenoide_quemadas"
    },
    error_bobinas_solenoide_quemadas: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Bobinas de la válvula solenoide de gas quemadas o con cortocircuito interno (fuera de rango óhmico de fábrica).<br><br>
        <b>CORRECCIÓN:</b> Reemplace el ensamble completo de la válvula de gas dual. <b>⚠️ ALERTA DE SEGURIDAD:</b> Nunca intente desarmar o forzar las bobinas mecánicamente; una alteración en este bloque compromete el sello hermético de fábrica, arriesgando fugas masivas de gas LP dentro del compartimento.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Gas solenoid valve coils burned or internally short-circuited (outside factory ohmic specification).<br><br>
        <b>CORRECTION:</b> Replace the complete dual gas valve assembly. <b>⚠️ SAFETY ALERT:</b> Never attempt to disassemble or mechanically force the coils; altering this block compromises the factory hermetic seal, risking massive LP gas leaks inside the compartment.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_electrodo_y_venturi: {
        pregunta_es: "Paso A5: Las bobinas están sanas y abren mecánicamente liberando gas, pero la flama no enciende o se apaga a los 3 segundos de encender. Revise el electrodo de chispa (Spark Electrode). ¿La punta de cerámica blanca se observa agrietada, el cable de alta tensión tiene sarro o la esprea metálica tiene hollín denso?",
        pregunta_en: "Step A5: The coils are healthy and open mechanically releasing gas, but the flame does not light or shuts off 3 seconds after lighting. Inspect the Spark Electrode. Is the white ceramic tip cracked, does the high-voltage wire have scale, or does the metal orifice have thick soot?",
        si: "error_electrodo_o_porcelana_rota",
        no: "error_presion_gas_o_tubo_obstruido"
    },
    error_electrodo_o_porcelana_rota: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Electrodo de chispa e ionización (DSI Spark Electrode) aterrizado a chasis por porcelana rota o falta de conductividad galvánica.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA MULTIMARCA:</b> El electrodo tiene doble función: primero tira la chispa de alto voltaje para encender el gas, y luego actúa como sensor enviando una microcorriente (microamperios) a través de la flama de regreso a la tarjeta para confirmar que hay fuego. Si la porcelana está rota o hay óxido, la corriente se fuga a tierra; la tarjeta asume que no encendió y corta el gas por seguridad tras 3 intentos (Lockout).<br><br>
        <b>CORRECCIÓN:</b> Reemplace el electrodo de chispa. Calibre la separación de las puntas metálicas a exactamente 1/8 de pulgada (3.2 mm) para asegurar un arco eléctrico óptimo.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: DSI Spark Electrode grounded to the chassis due to cracked porcelain or lack of galvanic conductivity.<br><br>
        <b>MULTI-BRAND FACTORY EXPLANATION:</b> The electrode serves a dual purpose: first, it throws a high-voltage spark to ignite the gas, and then it acts as a sensor, sending a microcurrent (microamps) through the flame back to the board to confirm fire is present. If the porcelain is cracked or rust is present, the current leaks to ground; the board assumes it failed to light and shuts off gas for safety after 3 attempts (Lockout).<br><br>
        <b>CORRECTION:</b> Replace the spark electrode. Calibrate the gap between the metal tips to exactly 1/8 inch (3.2 mm) to ensure an optimal electrical arc.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_presion_gas_o_tubo_obstruido: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Obstrucción física en el tubo Venturi de mezcla de aire o esprea bloqueada por detritos o nidos de arañas (falla sumamente común en almacenamiento).<br><br>
        <b>PROCEDIMIENTO DE REPARACIÓN EN CAMPO:</b><br>
        1. Desmonte la esprea del quemador con cuidado.<br>
        2. Sumérjala en alcohol isopropílico y sople con aire comprimido. <b>NUNCA use agujas o alambres</b>, ya que agrandará el orificio calibrado, provocando una flama amarilla inestable y desastrosa.<br>
        3. Limpie el tubo Venturi de aire con un cepillo de alambre flexible para eliminar telarañas.<br>
        4. Verifique con manómetro que el regulador del tanque de gas del RV mantenga una presión constante de 11 pulgadas de columna de agua (11" W.C.).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Physical obstruction in the air-mixing Venturi tube or orifice blocked by debris or spider nests (extremely common storage fault).<br><br>
        <b>FIELD REPAIR PROCEDURE:</b><br>
        1. Remove the burner orifice carefully.<br>
        2. Submerge it in isopropyl alcohol and blow with compressed air. <b>NEVER use needles or wires</b>, as you will enlarge the calibrated hole, causing an unstable and soot-heavy yellow flame.<br>
        3. Clean the air Venturi tube with a flexible wire brush to eliminate spider webs.<br>
        4. Verify with a manometer that the RV's main propane tank regulator maintains a constant pressure of 11 inches of water column (11" W.C.).`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // SUB-MÓDULO B: FALLAS EN MODO ELÉCTRICO (120V AC - RESISTENCIA)
    // ==========================================
    inicio_falla_electrico: {
        pregunta_es: "SÍNTOMA ELÉCTRICO: Con el RV conectado al poste de 120V AC y el interruptor eléctrico del calentador encendido, el agua no calienta en absoluto. Vaya a la parte trasera del tanque. Localice la caja de conexiones Romex de 120V. Con su multímetro en escala V AC, mida entre el cable Negro (Línea) y el Blanco (Neutro). ¿Registra voltaje estable entre 110V y 125V AC?",
        pregunta_en: "ELECTRICAL SYMPTOM: With the RV connected to 120V AC shore power and the water heater electric switch turned on, the water does not heat up at all. Go to the back of the tank. Locate the 120V Romex junction box. With your multimeter in V AC scale, measure between the Black wire (Hot) and White wire (Neutral). Does it register stable voltage between 110V and 125V AC?",
        si: "probar_ohmios_resistencia_atwood",
        no: "error_breaker_120v_calentador_disparado"
    },
    error_breaker_120v_calentador_disparado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de alimentación de corriente alterna de 120V en el compartimento trasero del calentador de agua.<br><br>
        <b>CORRECCIÓN:</b> Vaya al panel de breakers principal. Localice el breaker de 15A marcado como 'WH' o 'Water Heater'. Apáguelo por completo y reármelo con fuerza hacia arriba (ON). Si se vuelve a disparar de inmediato, proceda a aislar un cortocircuito directo en la línea de cableado Romex o en el relé de transferencia trasera.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Lack of 120V AC power supply at the rear compartment of the water heater.<br><br>
        <b>CORRECTION:</b> Go to the main breaker panel. Locate the 15A breaker labeled 'WH' or 'Water Heater'. Flip it completely to OFF, then firmly snap it back up to the ON position. If it trips again immediately, proceed to isolate a direct short circuit in the Romex wiring line or in the rear power relay.`,
        imagen: "https://unsplash.com", // Panel de breakers
        final: true
    },
    probar_ohmios_resistencia_atwood: {
        pregunta_es: "Paso B2: Sí hay voltaje de 120V AC llegando a la caja trasera. Desactive OBLIGATORIAMENTE el breaker de electricidad por completo. Desconecte los dos cables que entran a los tornillos de la resistencia roscada de metal (Heating Element). Ponga su multímetro en la escala de Ohmios (Ω) y mida directamente entre los dos tornillos de la resistencia. ¿Mide entre 10 y 16 Ohmios de resistencia?",
        pregunta_en: "Step B2: Yes, 120V AC voltage is reaching the rear electrical box. OBLIGATORILY shut off the main circuit breaker completely. Disconnect the two wires entering the screws of the threaded metal heating element. Set your multimeter to the Ohms (Ω) scale and measure directly between the two element screws. Does it read between 10 and 16 Ohms of resistance?",
        si: "error_relay_conmutador_12v_defectuoso",
        no: "error_elemento_resistencia_quemado"
    },
    error_elemento_resistencia_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Elemento calefactor eléctrico de resistencia (Heating Element) de 120V completamente roto o autofundido.<br><br>
        <b>EXPLICACIÓN DE INGENIERÍA DE FÁBRICA:</b> Esto ocurre el 99% de las veces cuando el usuario o un técnico encienden el switch eléctrico del calentador estando el tanque completamente VACÍO (por ejemplo, después de un drenado de invierno o antes de conectar la manguera de agua del campamento). Al no haber agua que absorba el calor, la resistencia supera los 1000°F en menos de 5 segundos, destruyendo el filamento interno y marcando resistencia infinita (0L).<br><br>
        <b>CORRECCIÓN:</b> Desenrosque la resistencia dañada usando un dado para elementos de 1-1/2 pulgadas. Instale un elemento nuevo de 1440W / 120V. <b>REGLA MANDATORIA:</b> Llene el tanque con agua abriendo las llaves del RV hasta que salga aire continuo ANTES de volver a encender el breaker eléctrico.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 120V electrical heating element completely ruptured or burned out.<br><br>
        <b>FACTORY ENGINEERING EXPLANATION:</b> This happens 99% of the time when the user or a technician flips the water heater electric switch while the tank is completely EMPTY (for instance, after winterization draining or before hooking up the campground water hose). With no water to absorb the heat, the element exceeds 1000°F in less than 5 seconds, destroying the internal filament and reading infinite resistance (0L).<br><br>
        <b>CORRECTION:</b> Unscrew the damaged element using a 1-1/2 inch element wrench socket. Install a new 1440W / 120V element. <b>MANDATORY RULE:</b> Fill the tank with water by running the RV faucets until all air is purged BEFORE turning the electric breaker back on.`,
        imagen: "https://unsplash.com", // Elemento / multímetro
        final: true
    },
    error_relay_conmutador_12v_defectuoso: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La resistencia eléctrica y el breaker están en perfecto estado, pero el relé conmutador de potencia (de 12V DC a 120V AC) ubicado en la caja plástica trasera del tanque está dañado.<br><br>
        <b>EXPLICACIÓN:</b> Los calentadores Atwood/Suburban modernos usan un interruptor de pared que manda 12V DC de señal hacia un relé trasero. Este relé cierra internamente el puente de alta potencia de 120V hacia la resistencia. Si los platinos del relé están flameados o carbonizados, los 120V nunca pasarán al tornillo de la resistencia.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el relé de potencia trasero (Relay assembly) y verifique la señal de 12V DC de control.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The electrical heating element and circuit breaker are in perfect working order, but the power conmutator relay (12V DC to 120V AC) located inside the rear plastic tank enclosure is defective.<br><br>
        <b>EXPLANATION:</b> Modern Atwood/Suburban water heaters utilize a wall switch that sends a 12V DC signal to a rear relay. This relay internally bridges the high-voltage 120V power path to the heating element. If the relay contact points are scorched or carbonized, the 120V will never pass onto the heating element screws.<br><br>
        <b>CORRECTION:</b> Replace the rear power relay assembly and verify the incoming 12V DC control signal.`,
        imagen: "https://unsplash.com", // Relé / circuito
        final: true
    }
};
