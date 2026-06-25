// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Sistemas Solar e Inversores
const moduloInversoresSolar = {
    badge_es: "SISTEMA ENERGÍA SOLAR Y REGENERATIVA",
    badge_en: "SOLAR ENERGY & REGENERATIVE SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL SOLAR: Los paneles están bajo el sol pleno, pero el controlador de carga (Victron SmartSolar, Go Power o Renogy) marca 0.0A de carga hacia las baterías. Seleccione el síntoma visual de los LEDs o pantalla del equipo:",
        pregunta_en: "MAIN SOLAR SYMPTOM: Panels are under full sun, but the charge controller (Victron SmartSolar, Go Power, or Renogy) reads 0.0A charging to the batteries. Select the visual symptom of the LEDs or display:",
        opciones_menu: true,
        si: "probar_voltaje_entrada_pv",
        no: "menu_segundo_nivel_solar"
    },
    probar_voltaje_entrada_pv: {
        pregunta_es: "SÍNTOMA INPUT: Los LEDs de 'Charge' están apagados o la pantalla parpadea con error de bajo voltaje. Con su multímetro en escala V DC, mida los bornes de entrada marcados como 'PV' (Paneles). ¿El voltaje es MAYOR al voltaje actual del banco de baterías por al menos 5.0V DC?",
        pregunta_en: "INPUT SYMPTOM: 'Charge' LEDs are off or the display flashes a low voltage error. With your multimeter in V DC scale, measure the input terminals marked 'PV' (Paneles). Is the voltage HIGHER than the current battery bank voltage by at least 5.0V DC?",
        si: "probar_salida_breaker_solar",
        no: "error_voltaje_pv_insuficiente_mppt"
    },
    error_voltaje_pv_insuficiente_mppt: {
        pregunta_es: "Paso A1.1: El voltaje de los paneles (Vpv) está abajo del umbral de activación. Desconecte las puntas y mida el Voltaje de Circuito Abierto (Voc) del cable positivo que viene del techo. ¿El Voc mide arriba de 18.0V DC por cada panel?",
        pregunta_en: "Step A1.1: Panel voltage (Vpv) is below the activation threshold. Disconnect the leads and measure the Open Circuit Voltage (Voc) of the positive wire coming from the roof. Does the Voc measure above 18.0V DC for each panel?",
        si: "error_sombreado_o_diodo_bypass",
        no: "error_fusible_mc4_o_corto_techo"
    },
    error_sombreado_o_diodo_bypass: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Condición de sombreado parcial severo en el techo o diodo de bypass quemado en la caja de conexiones del panel solar.<br><br><b>EXPLICACIÓN DE FÁBRICA MULTIMARCA:</b> Los controladores MPPT (Victron, Renogy) requieren obligatoriamente que el voltaje de entrada (Vpv) sea estrictamente 5V superior al voltaje del banco de baterías (Vbat) para iniciar el microprocesador interno, y luego mantenerse 1V por encima. Si una antena, el aire acondicionado o la sombra de un árbol tapan un solo recuadro del panel, el voltaje colapsa por debajo de este umbral.<br><br><b>CORRECCIÓN:</b> Mueva el RV a cielo abierto. Si el cielo está despejado y el voltaje sigue colapsado bajo el sol, desmonte la tapa plástica trasera del panel en el techo y reemplace los <b>Diodos de Bypass (Schottky)</b>; un cortocircuito en estos diodos provoca que el panel se auto-consuma y no envíe tensión.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Severe partial shading condition on the roof or a blown bypass diode in the solar panel junction box.<br><br><b>MULTI-BRAND FACTORY EXPLANATION:</b> MPPT controllers (Victron, Renogy) strictly require the input voltage (Vpv) to be exactly 5V higher than the battery bank voltage (Vbat) to start the internal microprocessor, and then maintain 1V above. If an antenna, the A/C unit, or a tree shadow covers a single panel square, the voltage collapses below this threshold.<br><br><b>CORRECTION:</b> Move the RV to open sky. If the sky is clear and the voltage remains collapsed under the sun, remove the plastic rear panel cover on the roof and replace the <b>Bypass Diodes (Schottky)</b>; a short circuit in these diodes causes the panel to auto-consume power and fail to send voltage.",
        imagen: "https://unsplash.com",
        final: true
    },
    error_fusible_mc4_o_corto_techo: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Línea de alimentación del techo abierta debido a un fusible aéreo tipo MC4 fundido o a una falla de corriente inversa (Reverse Current Loop).<br><br><b>EXPLICACIÓN EN CAMPO:</b> En arreglos donde hay 3 o más paneles conectados en paralelo, si uno de los paneles entra en cortocircuito físico, los paneles sanos envían toda su corriente hacia el panel dañado en lugar de mandarla al controlador. Esto calienta los cables y truena los fusibles en línea instalados en el techo.<br><br><b>CORRECCIÓN:</b> Suba al techo del RV, localice el portafusibles estanco tipo MC4 en la caja combinadora y reemplace el fusible de 15A/20A. Verifique que no haya cables pelados rozando la estructura metálica del chasis o las bases de aluminio.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Roof feed line open due to a blown MC4 inline fuse or a Reverse Current Loop fault.<br><br><b>FIELD EXPLANATION:</b> In setups with 3 or more panels wired in parallel, if one panel encounters a physical short circuit, the healthy panels dump all their current into the damaged panel instead of sending it down to the controller. This overheats the wires and pops the inline fuses installed on the roof.<br><br><b>CORRECTION:</b> Climb onto the RV roof, locate the weatherproof MC4 fuse holder at the combiner box, and replace the 15A/20A fuse. Verify there are no bare wires rubbing against the metal chassis or aluminum brackets.",
        imagen: "https://unsplash.com",
        final: true
    },
    probar_salida_breaker_solar: {
        pregunta_es: "Paso A2: El voltaje proveniente de los paneles solares es óptimo (+18V a +75V DC). Proceda a medir los bornes de salida del controlador marcados como 'BATT' o 'BATTERY' (+) y (-). ¿El multímetro registra exactamente el mismo voltaje que midió directo en los postes de la batería?",
        pregunta_en: "Step A2: Incoming solar panel voltage is optimal (+18V to +75V DC). Proceed to measure the controller output terminals marked 'BATT' or 'BATTERY' (+) and (-). Does the multimeter register the exact same voltage measured directly at the battery posts?",
        si: "error_controlador_bloqueado_firmware_solar",
        no: "error_breaker_type3_solar_disparado"
    },
    error_breaker_type3_solar_disparado: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Línea de salida del controlador hacia las baterías abierta debido a un breaker Type-III disparado o fusible ANL quemado.<br><br><b>EXPLICACIÓN EN CAMPO:</b> El controlador de carga solar está generando corriente limpia, pero la vía física de alimentación está rota, por lo que la energía no puede llegar al banco de baterías del RV.<br><br><b>CORRECCIÓN:</b> Siga el cable positivo grueso que sale del borne 'BAT' del controlador. Localice el breaker de seguridad tipo Type-III (rearmable manual con una pequeña palanca de plástico de color amarillo o negro) instalado cerca del banco de baterías. Si la palanca está salida, presionela firmemente hacia adentro para rearmar el trinquete interno y reanudar el flujo.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Controller output line to the batteries open due to a tripped Type-III breaker or blown ANL fuse.<br><br><b>FIELD EXPLANATION:</b> The solar charge controller is generating clean current, but the physical feed path is broken, so the energy cannot reach the RV's battery bank.<br><br><b>CORRECTION:</b> Follow the thick positive cable leading from the controller's 'BAT' terminal. Locate the Type-III safety breaker (manual resettable with a small yellow or black plastic lever) installed near the battery bank. If the lever is popped out, firmly press it back into the housing to reset the internal latch and resume power flow.",
        imagen: "https://unsplash.com",
        final: true
    },
    menu_segundo_nivel_solar: {
        pregunta_es: "SÍNTOMA CONFIGURACIÓN/FÍSICO: Seleccione el tipo de anomalía térmica o de software que muestra la aplicación de monitoreo (VictronConnect, Go Power o Renogy App):",
        pregunta_en: "CONFIGURATION/PHYSICAL SYMPTOM: Select the specific thermal or software anomaly shown on the monitoring application (VictronConnect, Go Power, or Renogy App):",
        options_menu: true,
        si: "error_derating_termico_solar",
        no: "error_confusion_voltaje_bms"
    },
    error_derating_termico_solar: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Caída drástica de eficiencia o corte total de carga por Derating Térmico (Sobrecalentamiento crítico del Controlador Solar).<br><br><b>EXPLICACIÓN DE FÁBRICA MULTIMARCA:</b> Los controladores solares disipan calor puro a través de sus aletas de aluminio traseras. Si el equipo se instala dentro de un compartimento de carga cerrado sin ventilación, tapado por maletas, o las aletas se llenan de polvo denso de carretera, la temperatura interna supera los 65°C. El microprocesador aplica un 'Derating' bajando la carga a 0A para evitar derretir los transistores.<br><br><b>CORRECCIÓN:</b> Limpie los disipadores con aire comprimido, abra rejillas de ventilación en el compartimento o instale un pequeño ventilador de 12V DC activado por termostato para extraer el aire caliente.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Drastic drop in efficiency or total charging cutout due to Thermal Derating (Critical Solar Controller Overheating).<br><br><b>MULTI-BRAND FACTORY EXPLANATION:</b> Solar charge controllers dissipate pure heat through their rear aluminum cooling fins. If the unit is installed inside a sealed storage bay without proper ventilation, covered by luggage, or the fins get packed with dense road dust, the internal temperature exceeds 65°C. The microprocessor applies a 'Derating' safety feature, lowering the charge to 0A to protect the internal transistors from thermal meltdown.<br><br><b>CORRECTION:</b> Clean the heat sinks using compressed air, open ventilation grills in the compartment, or install a small thermostat-controlled 12V DC fan to extract the trapped hot air.",
        imagen: "https://unsplash.com",
        final: true
    },
    error_confusion_voltaje_bms: {
        pregunta_es: "Paso C2: El controlador solar enciende pero muestra el error 'Error 26 - Overvoltage' o corta la carga por completo a los pocos minutos de salir el sol en el campamento. Abra la aplicación de monitoreo. ¿El controlador está configurado de forma fija manual en modo de 12V o se encuentra en el modo automático 'Auto-Detect'?",
        pregunta_en: "Step C2: The solar controller turns on but displays 'Error 26 - Overvoltage' or cuts off charging completely within a few minutes of sunrise at the campground. Open the monitoring app. Is the controller permanently set to 12V manual mode or is it on 'Auto-Detect' automatic mode?",
        si: "error_tarjeta_mppt_destruida",
        no: "error_auto_detect_software"
    },
    error_auto_detect_software: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Confusión de voltaje en el software del controlador solar debido a una desconexión errónea de cables en el taller o campo.<br><br><b>EXPLICACIÓN TÉCNICA MAESTRA (Normativa de Ingeniería Solar):</b> El 95% de los errores lógicos ocurren porque el técnico o usuario desconectan las baterías dejando los paneles solares conectados al techo. Al rearmar el sistema, si la batería de litio estaba en Sleep Mode (bloqueada por el BMS), el controlador lee el alto voltaje de los paneles del techo y asume erróneamente que el RV es un sistema de 24V o 48V en lugar de 12V, bloqueando la carga por sobretensión de seguridad.<br><br><b>PROCEDIMIENTO DE RESETEO INDUSTRIAL OBLIGATORIO:</b><br>1. Desconecte OBLIGATORIAMENTE primero el polo POSITIVO de los paneles solares en los bornes 'PV+'.<br>2. Desconecte el polo POSITIVO de la batería en 'BAT+'. El equipo quedará 100% apagado.<br>3. Espere 3 minutos para descargar los filtros capacitivos internos de la tarjeta.<br>4. Conecte PRIMERO la batería ('BAT+'). Esto obliga al procesador a leer los 12V reales de fábrica y calibrarse de forma correcta.<br>5. Conecte SEGUNDO la línea solar ('PV+'). Abra la app y fije el voltaje en '12V' manual, eliminando el modo 'Auto-Detect' para que el error jamás se repita.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Voltage confusion in the solar controller software due to an incorrect wire disconnection sequence in the shop or field.<br><br><b>MASTER TECHNICAL EXPLANATION (Solar Engineering Standards):</b> 95% of logic faults occur because the technician or user disconnects the batteries while leaving the solar panels connected on the roof. Upon system re-energization, if the lithium battery was in Sleep Mode (locked out by its BMS), the controller reads the high voltage from the roof panels and mistakenly assumes the RV is a 24V or 48V system instead of 12V, completely locking out charging due to a safety overvoltage fault.<br><br><b>MANDATORY INDUSTRIAL RESET PROCEDURE:</b><br>1. MANDATORILY disconnect the POSITIVE solar panel lead from the 'PV+' terminals first.<br>2. Disconnect the POSITIVE battery lead from 'BAT+'. The unit will power down 100%.<br>3. Wait 3 minutes to drain the internal capacitive filters of the circuit board.<br>4. Connect the battery FIRST ('BAT+'). This forces the processor to read the actual factory 12V nominal voltage and calibrate correctly.<br>5. Connect the solar line SECOND ('PV+'). Open the app and change the setting to a fixed '12V' manual mode, eliminating 'Auto-Detect' so this error never repeats.",
        imagen: "https://unsplash.com",
        final: true
    },
    error_tarjeta_mppt_destruida: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falla catastrófica en el microprocesador principal o en la etapa del sensor de voltaje interno de la placa lógica solar.<br><br><b>CORRECCIÓN:</b> Si el voltaje en la app está fijo en 12V manual, el banco de baterías está sano y los paneles entregan la tensión correcta en tus lecturas, pero la tarjeta marca errores internos de hardware o Error 26 persistentemente, el circuito integrado sufrió una degradación galvánica insalvable por un rayo o pico de estática. Reemplace el controlador de carga solar por una unidad nueva.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Catastrophic failure in the main microprocessor or within the internal voltage-sensing stage of the solar logic board.<br><br><b>CORRECTION:</b> If the voltage in the app is locked to a fixed 12V manual setting, the battery bank is healthy, and the panels output correct tension on your readings, but the board still flags persistent internal hardware faults or Error 26, the integrated circuit has suffered unrecoverable galvanic degradation caused by lightning or a static surge. Replace the solar charge controller with a new unit.",
        imagen: "https://unsplash.com",
        final: true
    },
    error_controlador_bloqueado_firmware_solar: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Bloqueo lógico por congelamiento de firmware o descalibración interna en el microprocesador del controlador de carga MPPT Victron / Go Power.<br><br><b>PROCEDIMIENTO RECOMENDADO:</b> Desconecte primero el fusible o breaker del cable POSITIVO que viene de los paneles solares. Desconecte el cable POSITIVO de la batería en el controlador. Espere 5 minutos completos. Vuelva a conectar primero la BATERÍA (para autodetección de 12V/24V) y finalmente reconecte los PANELES SOLARES.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Logic lockup due to firmware freeze or internal microchip calibration error on the Victron / Go Power MPPT charge controller panel.<br><br><b>RECOMMENDED PROCEDURE:</b> Disconnect the inline fuse or circuit breaker from the POSITIVE solar array cable first. Disconnect the house BATTERY positive lead from the controller. Wait 5 full minutes. Reconnect the HOUSE BATTERY first (for 12V/24V auto-detection) and finally reconnect the SOLAR ARRAYS feed.",
        imagen: "https://unsplash.com",
        final: true
    },
    error_rele_transferencia_interno_inversor: {
        solucion_es: "❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falla física en el relevador interno de transferencia automática (Internal Bypass Switch) o tarjeta lógica del inversor dañada.<br><br><b>CORRECCIÓN:</b> Si llega voltaje de batería limpio y las líneas de entrada de 120V AC externas están activas pero el aparato no conmuta los circuitos interiores, los platinos internos del bypass sufrieron una fusión térmica. Se requiere desmontar la unidad para servicio en laboratorio especializado o reemplazo completo del inversor/cargador.",
        solucion_en: "❌ UNIVERSAL MASTER DIAGNOSIS: Physical failure within the automatic internal bypass transfer relay or a damaged inverter power logic main board.<br><br><b>CORRECTION:</b> If clean battery voltage is present and external 120V AC input lines are hot but the appliance fails to pass through power to interior circuits, the internal bypass relay points have suffered thermal fusion. Bench testing or replacement of the inverter/charger unit is required.",
        imagen: "https://unsplash.com",
        final: true
    }
};
