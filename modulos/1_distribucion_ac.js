// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Sistemas de 120V AC
const moduloDistribucionAC = {
    badge_es: "120V AC - CORRIENTE ALTERNA",
    badge_en: "120V AC - AC POWER DISTRIBUTION",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DE CAMPO: Con el motorhome conectado al poste o con el generador encendido, NO hay electricidad de 120V AC en los contactos interiores. Seleccione el componente donde iniciará el rastreo:",
        pregunta_en: "MAIN FIELD SYMPTOM: With the motorhome connected to shore power or generator running, there is NO 120V AC power at the interior outlets. Select the component to start troubleshooting:",
        opciones_menu: true,
        si: "probar_voltaje_entrada_ats", // Enlace al bloque de la Toma Externa / Transfer Switch
        no: "inicio_inversor_cargador"     // Enlace al bloque del Inversor / Cargador Universal
    },
    
    // ==========================================
    // SUB-MÓDULO A: TOMA EXTERNA / TRANSFER SWITCH (ATS) UNIVERSAL
    // ==========================================
    probar_voltaje_entrada_ats: {
        pregunta_es: "SÍNTOMA TOMA/ATS: El RV está conectado o el generador ruge, pero no hay 120V en el interior. Revise la pantalla o LEDs del Protector de Sobretensión / EMS (Surge Guard, Progressive Industries o Southwire). ¿Muestra códigos de error activos de línea (como Reverse Polarity, Open Neutral, Open Ground, High/Low Voltage, o Line Frequency Error)?",
        pregunta_en: "SHORE/ATS SYMPTOM: The RV is plugged in or generator is running, but no 120V inside. Check the Surge Protector / EMS display or LEDs (Surge Guard, Progressive Industries, or Southwire). Does it show active line fault codes (such as Reverse Polarity, Open Neutral, Open Ground, High/Low Voltage, or Line Frequency Error)?",
        si: "error_protector_linea_activo",
        no: "medir_bornes_fisicos_ats"
    },
    error_protector_linea_activo: {
        pregunta_es: "Paso A1.1: El protector detectó una anomalía. Seleccione el código de error o comportamiento específico que muestra el Protector de Línea:",
        pregunta_en: "Step A1.1: The surge protector detected a fault. Select the specific error code or behavior shown on the Surge Protector display:",
        opciones_menu: true,
        si: "error_neutral_abierto_poste",
        no: "menu_errores_frecuencia_voltaje"
    },
    error_neutral_abierto_poste: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Condición crítica de Neutro Abierto (Open Neutral) en la toma del campamento o en el cordón marino de alimentación.<br><br>
        <b>⚠️ ALERTA DE SEGURIDAD CRÍTICA (Normativa NFPA 1192):</b> Desconecte inmediatamente el cable del RV. En sistemas de 50 Amperios (Split-Phase 120/240V), la pérdida del neutro físico provoca que el voltaje flote libremente entre las dos líneas vivas (L1 y L2). Esto inyectará hasta 240V AC directos a los circuitos interiores de 120V, quemando instantáneamente las tarjetas de cualquier marca de microondas, refrigerador o cargador, con un riesgo extremo de cortocircuito e incendio.<br><br>
        <b>CORRECCIÓN:</b> Reporte la falla al campamento. No vuelva a conectar el RV hasta que un electricista certifique la toma de tierra.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Critical Open Neutral condition at the campground pedestal or shore power cord.<br><br>
        <b>⚠️ CRITICAL SAFETY ALERT (NFPA 1192 Standard):</b> Immediately disconnect the RV power cord. In 50 Amp systems (Split-Phase 120/240V), losing the physical neutral wire causes the voltage to float freely between the two hot lines (L1 and L2). This will inject up to 240V AC directly into the 120V interior circuits, instantly frying control boards on any brand of microwave, refrigerator, or converter, posing an extreme fire hazard.<br><br>
        <b>CORRECTION:</b> Report the fault to the campground management. Do not reconnect the RV until a certified electrician inspects and repairs the pedestal ground/neutral block.`,
        imagen: "https://unsplash.com", 
        final: true
    },
    menu_errores_frecuencia_voltaje: {
        pregunta_es: "Paso A1.2: Seleccione el grupo de errores restante detectado por su protector de línea periférico:",
        pregunta_en: "Step A1.2: Select the remaining error group detected by your peripheral line protector:",
        opciones_menu: true,
        si: "error_voltaje_fuera_rango",
        no: "error_tierra_polaridad"
    },
    error_voltaje_fuera_rango: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Sobretensión (High Voltage >132V AC), Caída de Tensión crítica (Low Voltage <102V AC) o Error de Frecuencia de Línea (<54Hz o >66Hz).<br><br>
        <b>EQUIVALENCIAS DE MARCA (Surge Guard / Progressive Industries):</b> El protector corta el paso de energía por seguridad del hardware interior. El bajo voltaje es común en verano cuando los RVs encienden sus aires acondicionados a la vez, causando que los motores de tus compresores se sobrecalienten y se amarren.<br><br>
        <b>CORRECCIÓN:</b> Si usa generador (Cummins Onan, Generac), regule los RPM del motor a 3600 RPM constantes para estabilizar la frecuencia a 60Hz. Si es el poste del campamento, espere a que la red se estabilice o conecte un auto-transformador regulador de voltaje (Hughes Autoformer).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Overvoltage (High Voltage >132V AC), Critical Voltage Drop (Low Voltage <102V AC), or Line Frequency Error (<54Hz or >66Hz).<br><br>
        <b>BRAND EQUIVALENCIES (Surge Guard / Progressive Industries):</b> The line protector shuts off power transmission to safeguard interior hardware. Low voltage is common during summer when multiple RVs run their air conditioners simultaneously, causing compressor motors to overheat and seize.<br><br>
        <b>CORRECTION:</b> If running a generator (Cummins Onan, Generac), regulate engine speed to a steady 3600 RPM to stabilize the frequency at 60Hz. If connected to a campground pedestal, wait for grid stabilization or connect a voltage-regulating autotransformer (Hughes Autoformer).`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_tierra_polaridad: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Tierra Abierta (Open Ground / Error PE) o Polaridad Invertida (Reverse Polarity / Line/Neutral Reversed) en la toma de energía.<br><br>
        <b>EXPLICACIÓN TÉCNICA MULTIMARCA:</b> La Polaridad Invertida significa que el cable de Línea y el Neutro están cruzados en el poste. La Tierra Abierta significa que no hay disipación de descargas. Esto crea una condición de peligro extremo llamada <b>'Hot Skin' (Chasis Energizado)</b>: toda la estructura metálica del RV queda cargada con 120V AC, y cualquier persona que toque el RV descalza desde afuera recibirá una descarga eléctrica severa.<br><br>
        <b>CORRECCIÓN:</b> Exija el cambio de sitio de campamento de inmediato. Cableado externo totalmente defectuoso.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Open Ground (PE Fault) or Reverse Polarity (Line/Neutral Reversed) at the power pedestal.<br><br>
        <b>MULTI-BRAND TECHNICAL EXPLANATION:</b> Reverse Polarity means the Hot and Neutral wires are crossed at the pedestal. Open Ground means there is no path to dissipate static electrical discharges. This creates an extremely dangerous condition known as <b>'Hot Skin'</b>: the entire metal frame of the RV becomes energized with 120V AC, and anyone touching the RV barefoot from the outside will receive a severe electrical shock.<br><br>
        <b>CORRECTION:</b> Demand an immediate campsite change. External wiring is completely defective.`,
        imagen: "https://unsplash.com",
        final: true
    },
    medir_bornes_fisicos_ats: {
        pregunta_es: "Paso A2: Abra la tapa metálica del Transfer Switch Automático (ATS - Marcas: IOTA, Southwire o WFCO). Encienda el generador y espere 45 segundos a que la tarjeta temporizadora actúe. Con su multímetro en V AC, mida el voltaje en los bornes de entrada marcados como 'GENERATOR' o 'GEN'. ¿Mide entre 110V y 125V AC?",
        pregunta_en: "Step A2: Open the metal cover of the Automatic Transfer Switch (ATS - Brands: IOTA, Southwire, or WFCO). Turn on the generator and wait 45 seconds for the delay board to engage. With your multimeter in V AC, measure the voltage at the input lugs labeled 'GENERATOR' or 'GEN'. Does it read between 110V and 125V AC?",
        si: "probar_salida_load_ats",
        no: "error_generador_no_pwr"
    },
    error_generador_no_pwr: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El motor del generador enciende pero el alternador interno no envía corriente física hacia la caja del ATS.<br><br>
        <b>PROCEDIMIENTO DE CONTROL MULTIMARCA:</b><br>
        1. Vaya físicamente a la carcasa exterior de la planta de luz (Cummins Onan QG / Generac).<br>
        2. Localice el breaker magnético de seguridad negro (de 30A o doble de 50A) montado en el cuerpo del motor. En el 90% de los casos, este breaker se disparó por un pico de corriente. Apáguelo completamente (OFF) y súbalo con fuerza a la posición (ON).<br>
        3. Si sigue marcando 0V en el ATS, mida los diodos de rectificación y los carbones del anillo rozante. Limpie los anillos si tienen carbón o cambie el regulador de voltaje automático (AVR Board).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The generator engine runs but the internal alternator fails to send physical current to the ATS box.<br><br>
        <b>MULTI-BRAND CONTROL PROCEDURE:</b><br>
        1. Go physically to the outer housing of the generator unit (Cummins Onan QG / Generac).<br>
        2. Locate the black magnetic safety circuit breaker (30A or dual 50A) mounted on the engine body. In 90% of cases, this breaker tripped due to a current spike. Flip it completely to OFF, then firmly snap it back to the ON position.<br>
        3. If it still reads 0V at the ATS, test the rectification diodes and the slip ring brushes. Clean the rings if carbon buildup is present or replace the Automatic Voltage Regulator (AVR Board).`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_salida_load_ats: {
        pregunta_es: "Paso A3: Sí hay voltaje limpio en las terminales de entrada del ATS. Proceda a medir las barras de salida marcadas como 'LOAD' o 'PANEL' (Cables hacia el interior de la casa del RV). ¿El multímetro registra voltaje estable entre 110V y 125V AC?",
        pregunta_en: "Step A3: There is clean voltage at the ATS input terminals. Proceed to measure the output lugs labeled 'LOAD' or 'PANEL' (wires leading inside the RV). Does the multimeter register stable voltage between 110V and 125V AC?",
        si: "error_breaker_principal_panel",
        no: "probar_chattering_bobina_ats"
    },
    probar_chattering_bobina_ats: {
        pregunta_es: "Paso A4: Las terminales de salida marcan 0V o fluctúan erráticamente. Escuche con cuidado la caja del ATS. ¿Se percibe un zumbido eléctrico ensordecedor o un tableteo violento tipo ametralladora (Contactor Chattering) proveniente del relé magnético?",
        pregunta_en: "Step A4: The output terminals read 0V or fluctuate erratically. Listen closely to the ATS box. Is there a deafening electrical hum or a violent machine-gun-like clattering (Contactor Chattering) coming from the magnetic relay?",
        si: "error_caida_tension_dc_bobina",
        no: "error_ats_contactos_flameados"
    },
    error_caida_tension_dc_bobina: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fenómeno de 'Contactor Chattering' causado por baja tensión en la tarjeta rectificadora de control interna de la caja de transferencia.<br><br>
        <b>EXPLICACIÓN DE INGENIERÍA COMPARTIDA:</b> Las bobinas magnéticas de cualquier marca de ATS requieren un voltaje de CC rectificado constante para mantener los núcleos de hierro pegados con fuerza. Si el banco de baterías de la casa está por debajo de 10.5V DC, o la mini tarjeta interna del ATS tiene pistas sulfatadas, los imanes se pegan y despegan 60 veces por segundo, destruyendo el hardware.<br><br>
        <b>CORRECCIÓN:</b> Restablezca los 12V DC limpios del RV, limpie los arneses Molex internos de la tarjeta del ATS o cambie la placa temporizadora interna de la caja de transferencia.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 'Contactor Chattering' phenomenon caused by low voltage in the internal control rectifier board of the transfer switch.<br><br>
        <b>SHARED ENGINEERING EXPLANATION:</b> The magnetic coils of any brand of ATS require a constant rectified DC voltage to hold the iron cores tightly together. If the house battery bank is below 10.5V DC, or the internal mini board of the ATS has sulfated traces, the magnets engage and disengage 60 times per second, destroying the hardware.<br><br>
        <b>CORRECTION:</b> Restore clean 12V DC to the RV, clean the internal Molex harnesses on the ATS board, or replace the internal delay board of the transfer switch.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_ats_contactos_flameados: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Los contactos internos de cobre del contactor del Transfer Switch (ATS) están flameados, picados o soldados físicamente por un arco eléctrico.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA:</b> Esto ocurre cuando el usuario enciende el aire acondicionado o el microondas ANTES de conectar el RV al poste o arrancar el generador. Al conmutar el relé bajo una carga pesada, se genera un arco eléctrico que destruye las pastillas de plata de los contactos, dejando pasar 0V hacia la casa aunque la bobina pegue mecánicamente.<br><br>
        <b>CORRECCIÓN:</b> Reemplace la caja del Transfer Switch completa. Nunca intente lijar los contactos, la pérdida de la capa galvánica de fábrica provocará que se vuelvan a soldar en poco tiempo, arriesgando un cortocircuito mayor.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The internal copper contacts of the Automatic Transfer Switch (ATS) contactor are scorched, pitted, or physically welded together by an electrical arc.<br><br>
        <b>FACTORY EXPLANATION:</b> This happens when the user turns on the air conditioner or microwave BEFORE plugging the RV into the pedestal or starting the generator. When the relay switches under heavy load, an electrical arc is generated that destroys the silver pads of the contacts, passing 0V into the house even if the coil engages mechanically.<br><br>
        <b>CORRECTION:</b> Replace the complete Transfer Switch assembly. Never attempt to sand down the contacts; the loss of the factory galvanic coating will cause them to weld together again shortly, risking a major short circuit.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_breaker_principal_panel: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El Transfer Switch y las líneas externas funcionan perfectamente, enviando energía limpia al Centro de Carga principal del RV (Panel Distribuidor).<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Vaya al interior del RV, abra la compuerta del panel principal. Localice el Main Breaker (Breaker Principal) de 30A o doble de 50A. Apáguelo por completo (OFF) y muévalo firmemente hacia la posición (ON) para rearmar el trinquete interno. Si el breaker se dispara de inmediato con un fuerte estallido, proceda a aislar un cortocircuito directo en las líneas de Romex interiores o en los elementos térmicos del aire acondicionado o calentador de agua.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The Transfer Switch and external lines are working perfectly, sending clean power to the RV's main Load Center (Distribution Panel).<br><br>
        <b>FIELD CORRECTION:</b> Go inside the RV and open the main panel door. Locate the Main Breaker (30A or dual 50A). Flip it completely to OFF, then firmly snap it back to the ON position to reset the internal latch. If the breaker trips immediately with a loud pop, proceed to isolate a direct short circuit in the interior Romex lines or in the air conditioner or water heater heating elements.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // SUB-MÓDULO B: INVERSOR/CARGADOR UNIVERSAL (XANTREX / RENOGY / VICTRON / MAGNUM)
    // ==========================================
    inicio_inversor_cargador: {
        pregunta_es: "SÍNTOMA INVERSOR MULTIMARCA: Con el RV desconectado del poste, el panel digital o control remoto muestra códigos de error, o la pantalla está muerta y no alimenta los contactos interiores. Mida el voltaje directo de Corriente Directa (DC) en los bornes masivos de entrada del inversor. ¿El voltaje es MENOR a 10.0V DC?",
        pregunta_en: "MULTI-BRAND INVERTER SYMPTOM: With the RV unplugged from shore power, the digital panel or remote control shows error codes, or the display is dead and fails to power interior outlets. Measure the direct Current (DC) voltage at the massive inverter input terminals. Is the voltage LESS than 10.0V DC?",
        si: "error_baterias_muertas_inversor",
        no: "verificar_errores_pantalla_multimarca"
    },
    error_baterias_muertas_inversor: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Banco de baterías críticamente descargado o destruido (Voltaje < 10.0V DC).<br><br>
        <b>EQUIVALENCIAS DE MARCA:</b> Los inversores Magnum entran en protección 'Dead Battery', Victron activa 'Low Battery' y Renogy/Xantrex muestran error 'E01/LB'. Si el microprocesador detecta que el banco está abajo de 10V, bloquea el cargador interno de forma permanente para evitar sobrecalentar las celdas o causar una explosión térmica.<br><br>
        <b>CORRECCIÓN:</b> Use un cargador de taller externo, el alternador del motor del RV o paneles solares para levantar el voltaje del banco por encima de los 11.5V DC. Una vez superado este umbral, reconecte el poste de 120V AC y el inversor reenganchará su etapa automática de carga.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Battery bank critically discharged or destroyed (Voltage < 10.0V DC).<br><br>
        <b>BRAND EQUIVALENCIES:</b> Magnum inverters trigger 'Dead Battery' protection, Victron activates 'Low Battery' fault, and Renogy/Xantrex display 'E01/LB' error. If the microprocessor detects the bank is below 10V, it permanently locks out the internal charger to prevent overheating the cells or causing a thermal explosion.<br><br>
        <b>CORRECTION:</b> Use an external garage charger, the RV's engine alternator, or solar panels to raise the bank voltage above 11.5V DC. Once this threshold is surpassed, reconnect shore power and the inverter will re-engage its automatic charging phase.`,
        imagen: "https://unsplash.com",
        final: true
    },
    verificar_errores_pantalla_multimarca: {
        pregunta_es: "Paso B2: El voltaje DC de entrada es saludable (+12V DC). Revise el texto exacto del error en el panel digital. ¿Muestra códigos críticos de sobrecarga o daño interno de relés (Magnum: 'Internal Bridge/FET', Xantrex: 'E03/E05', Victron: 'Overload/Inverter Fault', Renogy: 'E04/E06')?",
        pregunta_en: "Step B2: Inbound DC voltage is healthy (+12V DC). Check the exact error text on the digital panel. Does it show critical overload codes or internal relay damage (Magnum: 'Internal Bridge/FET', Xantrex: 'E03/E05', Victron: 'Overload/Inverter Fault', Renogy: 'E04/E06')?",
        si: "error_puente_transferencia_o_componente_quemado",
        no: "probar_botones_hardware_inversor"
    },
    error_puente_transferencia_o_componente_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Relé de transferencia interna dañado o transistores de potencia (MOSFETs/FETs) destruidos por cortocircuito o sobrecarga masiva.<br><br>
        <b>EXPLICACIÓN TÉCNICA:</b> Significa que el interruptor automático interno de derivación que puentea los 120V AC del poste se quedó frito o soldado. También ocurre si los transistores sufrieron un colapso térmico al intentar alimentar un electrodoméstico de alto consumo (como un calentador de espacio o aire acondicionado) en modo baterías.<br><br>
        <b>CORRECCIÓN:</b> Desmonte la unidad inversora y envíela a un laboratorio electrónico autorizado para el reemplazo de la placa de potencia interna.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Damaged internal bypass transfer relay or power transistors (MOSFETs/FETs) destroyed by a short circuit or massive overload.<br><br>
        <b>TECHNICAL EXPLANATION:</b> This means the internal automatic bypass switch that bridges the 120V AC from the shore pedestal is fried or welded shut. It also occurs if the transistors suffered a thermal meltdown while trying to power a high-draw appliance (such as a space heater or air conditioner) in battery mode.<br><br>
        <b>CORRECTION:</b> Dismount the inverter unit and ship it to an authorized electronics lab for internal power board and relay replacement.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_botones_hardware_inversor: {
        pregunta_es: "Paso B3: La pantalla no muestra errores internos de potencia, pero el inversor no pasa corriente de 120V. Revise el chasis físico del inversor en el compartimento de carga. ¿Se encuentra el botón térmico redondo (Input Circuit Breaker) saltado o botado hacia afuera?",
        pregunta_en: "Step B3: The display shows no internal power faults, but the inverter fails to pass 120V power. Check the physical inverter chassis in the cargo bay. Is the round thermal push-button (Input Circuit Breaker) popped out?",
        si: "error_input_breaker_inversor_disparado",
        no: "probar_comunicacion_cable_datos"
    },
    error_input_breaker_inversor_disparado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El interruptor termo-magnético de entrada AC (Input Breaker) del chasis del inversor se disparó por sobrecorriente en modo de paso (Pass-Through).<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Desconecte aparatos pesados (como secadoras de cabello o cafeteras) del circuito invertido. Empuje firmemente el botón negro redondo del breaker hacia adentro en el costado del inversor para rearmarlo. Revise que la pantalla cambie al estado de paso o carga.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The AC input thermo-magnetic circuit breaker (Input Breaker) on the inverter chassis tripped due to overcurrent during pass-through mode.<br><br>
        <b>FIELD CORRECTION:</b> Disconnect heavy appliances (such as hair dryers or coffee makers) from the inverted circuit. Firmly press the round black breaker button inward on the side of the inverter to reset it. Verify that the display shifts back to pass-through or charging mode.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_comunicacion_cable_datos: {
        pregunta_es: "Paso B4: El breaker del chasis está rearmado. Sin embargo, el panel muestra el error 'No Comm', 'Link Error' o está totalmente muerto teniendo baterías sanas. Desconecte el cable de datos (RJ11/RJ45) del puerto del control remoto. Examine el conector. ¿Los colores de los hilos internos están acomodados en la misma posición en ambos extremos (Cable Directo), o están invertidos como en un cable de teléfono convencional (Cable Cruzado)?",
        pregunta_en: "Step B4: The chassis breaker is reset. However, the panel displays 'No Comm', 'Link Error', or is completely dead despite healthy batteries. Disconnect the data cable (RJ11/RJ45) from the remote control port. Examine the connector. Are the internal wire colors arranged in the exact same sequence on both ends (Straight Cable), or are they flipped like a conventional telephone wire (Crossover Cable)?",
        si: "error_tarjeta_logica_comunicacion_quemada",
        no: "error_cable_datos_invertido_telefono"
    },
    error_cable_datos_invertido_telefono: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Uso de cable de datos incorrecto (Cable telefónico cruzado convencional de casa).<br><br>
        <b>EXPLICACIÓN TÉCNICA MULTIMARCA:</b> Los inversores industriales de RV (Magnum, Xantrex, Victron) NO utilizan cables de teléfono normales. Los cables telefónicos invierten la polaridad de las punta en los extremos (cruzados). Las marcas exigen un <b>Cable de Datos Plano/Directo</b> (pines idénticos uno a uno en ambos lados). Instalar un cable cruzado provoca que los hilos de corriente choquen con los pines de datos, bloqueando la pantalla.<br><br>
        <b>CORRECCIÓN:</b> Instale un cable de datos directo específico para inversores de RV de 4 o 6 hilos y conéctelo entre el puerto del inversor y el control de pared.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Incorrect data cable installed (Conventional residential crossover telephone wire).<br><br>
        <b>MULTI-BRAND TECHNICAL EXPLANATION:</b> Industrial RV inverters (Magnum, Xantrex, Victron) DO NOT use standard phone cords. Telephone cables invert pin polarity at opposite ends (crossover). RV brands strictly require a <b>Straight-Through Data Cable</b> (identical pinout pin-to-pin on both sides). Installing a residential phone cord causes power lines to clash with sensitive data pins, locking out the display.<br><br>
        <b>CORRECTION:</b> Install a certified straight-through 4 or 6-wire data cable specified for RV inverters and connect it between the inverter port and the wall remote.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_tarjeta_logica_comunicacion_quemada: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Sección de la tarjeta lógica de red interna o puerto de comunicaciones dañado por pico de voltaje.<br><br>
        <b>CORRECCIÓN:</b> Si el cable es directo de fábrica y la pantalla sigue en 'No Comm' o muerta, ejecute un hard reset manteniendo presionado el botón físico de <b>RESET</b> en el chasis del inversor por exactamente 15 segundos. Si tras el reset no revive el enlace, la interfaz de red interna sufrió una degradación galvánica por sobretensión. Reemplace la tarjeta lógica de control.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Internal network logic board section or communication port fried by a high-voltage surge.<br><br>
        <b>CORRECTION:</b> If the cable is a factory-certified straight cord and the display remains on 'No Comm' or dead, perform a hardware hard reset by holding down the physical <b>RESET</b> button on the inverter chassis for exactly 15 seconds. If the data link does not recover after the reset, the internal network interface suffered galvanic degradation due to a surge. Replace the inverter's main logic control board.`,
        imagen: "https://unsplash.com",
        final: true
    }
};
