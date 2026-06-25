// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Paneles Digitales y Redes Multiplexadas (Firefly/OneControl)
const moduloPanelesDigitales = {
    badge_es: "PANELES DIGITALES Y REDES MULTIPLEXADAS",
    badge_en: "DIGITAL PANELS & MULTIPLEX NETWORKS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL PANEL: La pantalla táctil de la cabina (Firefly, Lippert OneControl o Dometic IoT) enciende, pero se queda congelada en el logotipo, muestra el error 'No Comm' o las luces y switches de pared no responden. Seleccione el tipo de error visual en la pantalla:",
        pregunta_en: "MAIN PANEL SYMPTOM: The cabin touchscreen display (Firefly, Lippert OneControl, or Dometic IoT) powers up but freezes at the logo, displays a 'No Comm' error, or lights and wall switches fail to respond. Select the visual error type on the screen:",
        opciones_menu: true,
        si: "inicio_error_comunicacion_rvc",  // Enlace a fallas de Red de Datos / Bus CAN
        no: "menu_segundo_nivel_paneles"     // Enlace a fallas de Relevadores y Placas de Potencia
    },

    // ==========================================
    // SUB-MÓDULO A: FALLAS DE COMUNICACIÓN EN RED DE DATOS (RV-C BUS / CAN BUS)
    // ==========================================
    inicio_error_comunicacion_rvc: {
        pregunta_es: "SÍNTOMA RED DE DATOS: La pantalla táctil muestra el texto crítico 'Network Error' o 'No Comm with G12/G6 Board'. Vaya a la tarjeta de control maestra (BCM / Main Distribution Board) usualmente oculta en la cama o gabinete. ¿El LED de datos verde (Data/Net) parpadea intensamente de forma continua?",
        pregunta_en: "DATA NETWORK SYMPTOM: The touchscreen displays the critical text 'Network Error' or 'No Comm with G12/G6 Board'. Go to the master control distribution board (BCM / Main Distribution Board) usually hidden under the bed or a cabinet. Is the green data LED (Data/Net) flashing intensely and continuously?",
        si: "error_terminador_red_resistencia",
        no: "error_voltaje_baju_red_datos"
    },
    error_terminador_red_resistencia: {
        pregunta_es: "Paso A1.1: El LED verde indica que el cerebro central de la red está vivo, pero la pantalla sigue sin enlazarse. Apague por completo los interruptores maestros de 12V DC del RV. Localice el puerto de diagnóstico tipo Drop de la red de datos (un conector de red RJ45 de 4 o 2 hilos verde/amarillo). Ponga su multímetro en la escala de Ohmios (Ω) y mida entre el pin de Data+ (Can High) y Data- (Can Low). ¿La lectura registra exactamente 60 Ohmios (±2 Ω)?",
        pregunta_en: "Step A1.1: The green LED indicates the network master brain is alive, but the display still fails to link. Turn off all 12V DC master house disconnect switches completely. Locate the network data bus diagnostic drop port (a 4 or 2-wire green/yellow RJ45 network plug connector). Set your multimeter to the Ohms (Ω) scale and measure between the Data+ (Can High) and Data- (Can Low) pins. Does the reading register exactly 60 Ohms (±2 Ω)?",
        si: "error_firmware_pantalla_congelada",
        no: "error_terminador_120_ohmios_abierto"
    },
    error_terminador_120_ohmios_abierto: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Resistencia terminadora de red (CAN Bus Termination Resistor) de 120 Ohmios abierta, perdida o dañada en el arnés multiplexado.<br><br>
        <b>EXPLICACIÓN DE INGENIERÍA DE FÁBRICA (Manual Firefly / OneControl):</b> Las redes de datos RV-C en los motorhomes modernos requieren obligatoriamente dos resistencias de 120 Ohmios conectadas en paralelo en cada extremo físico del bus para absorber los ecos de los pulsos digitales y cerrar el circuito. Por la ley de Ohm, dos resistencias de 120Ω en paralelo deben medir exactamente 60 Ohmios en tu multímetro. Si marca 120Ω, significa que un terminador se cayó o se soltó. Si marca 0 Ohmios, hay un cortocircuito directo en los cables verde/amarillo que colapsa toda la red.<br><br>
        <b>CORRECCIÓN:</b> Siga el cable de red principal hasta el extremo trasero de la casa y reemplace la tapa del terminador de red de 120 Ohmios (Terminating Resistor Plug). Limpie cualquier rastro de óxido con limpiador de contactos electrónicos.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 120-Ohm CAN Bus Termination Resistor open, missing, or damaged within the multiplex wiring harness.<br><br>
        <b>FACTORY ENGINEERING EXPLANATION (Firefly / OneControl Manual):</b> RV-C data networks in modern motorhomes strictly require two 120-Ohm resistors wired in parallel at each physical end of the data bus to absorb digital voltage reflections and close the loop. Per Ohm's law, two 120Ω resistors in parallel must read exactly 60 Ohms on your multimeter. If it measures 120Ω, it means one terminator popped out or failed. If it measures 0 Ohms, a direct short circuit exists across the green/yellow data wires, crashing the entire network.<br><br>
        <b>CORRECTION:</b> Trace the main data backbone to the rear end of the coach and replace the 120-Ohm network terminating resistor dummy plug. Clean any trace of rust using electronic contact cleaner.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_voltaje_baju_red_datos: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de alimentación limpia de 12V DC en el puerto del arnés principal de red o caída crítica de voltaje de datos lógicos.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Las pantallas y módulos inteligentes multiplexados no operan si el voltaje del banco baja de 11.0V DC. Vaya al bloque maestro de fusibles y verifique la continuidad del fusible asignado a 'Network', 'Multiplex' o 'Gateway' (usualmente de 5A/7.5A). Limpie las conexiones Molex del arnés buscando hilos sueltos que causen intermitencia de datos.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Lack of clean 12V DC operating power at the main network harness plug or critical drop in logic data voltage.<br><br>
        <b>FIELD CORRECTION:</b> Touchscreens and smart multiplex modules fail to operate if the house battery bank drops below 11.0V DC. Go to the main fuse block and verify continuity for the fuse labeled 'Network', 'Multiplex', or 'Gateway' (typically 5A/7.5A). Clean the Molex wiring loom pins looking for loose wire strands causing intermittent data drops.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_firmware_pantalla_congelada: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Bloqueo lógico o congelamiento de memoria en el firmware de la pantalla táctil de la cabina.<br><br>
        <b>PROCEDIMIENTO DE RESETEO FORZADO DE FIRMWARE (Soft/Hard Reset):</b><br>
        1. Desconecte el interruptor principal de baterías de la casa (Battery Disconnect Switch) por exactamente 60 segundos completos para drenar los capacitores residuales de la tarjeta de la pantalla.<br>
        2. Si la pantalla sigue congelada en el logotipo al encenderla, retire el marco plástico protector de la pantalla táctil en la pared y desmonte los 4 tornillos.<br>
        3. Desconecte el conector de red RJ45/Drop trasero por 10 segundos y vuelva a conectarlo. Esto forzará un ciclo de reinicio de arranque en frío (Cold Boot) que limpiará los registros corruptos de la memoria caché interna del microprocesador.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Logic lockup or memory freeze within the cabin touchscreen display firmware.<br><br>
        <b>MANDATORY HARDWARE FIRMWARE RESET PROCEDURE (Soft/Hard Reset):</b><br>
        1. Turn off the main house battery disconnect switch for exactly 60 full seconds to completely drain residual capacitance from the display logic circuit.<br>
        2. If the touchscreen remains frozen at the boot logo upon re-powering, unclip the decorative plastic bezel from the wall display assembly and remove the 4 retaining screws.<br>
        3. Unplug the rear network RJ45 data/drop plug for 10 seconds and reinsert it. This forces a physical microchip cold-boot cycle, flushing out any corrupted boot records stored inside the internal microprocessor cache memory.`,
        imagen: "https://unsplash.com",
        final: true
    },

    // ==========================================
    // MENÚ SEGUNDO NIVEL: PLACAS CENTRALES DE POTENCIA Y RELEVADORES INTEGRADOS
    // ==========================================
    menu_segundo_nivel_paneles: {
        pregunta_es: "SÍNTOMA HARDWARE: La pantalla táctil opera perfecto y no marca errores, pero cuando presionas el botón de la bomba de agua o de las luces en la pantalla, el aparato físico NO enciende (o se queda encendido infinitamente). Localice la placa maestra de distribución de potencia (G12/G6 Firefly o LCI BCM). ¿El LED indicador del relevador correspondiente se ilumina en la tarjeta al presionar el botón digital?",
        pregunta_en: "HARDWARE SYMPTOM: The touchscreen works perfectly and reports no active faults, but when you tap the water pump or lighting icons on the screen, the physical appliance fails to activate (or stays stuck permanently ON). Locate the master power distribution board (Firefly G12/G6 or LCI BCM). Does the corresponding output status LED light up on the circuit board when the digital icon is pressed?",
        opciones_menu: true,
        si: "error_rele_estado_solido_quemado",
        no: "error_fusible_circuito_salida_bcm"
    },
    error_fusible_circuito_salida_bcm: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Circuito de salida de potencia abierto debido a un fusible fundido o canal lógico quemado en el bloque maestro.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Las placas multiplexadas (Firefly G12 / Lippert BCM) controlan los aparatos enviando corriente de 12V directa desde su propia tarjeta. Localice la fila de fusibles tipo cuchilla ATO/ATC montados directamente sobre la misma placa electrónica maestra. Reemplace el fusible fundido (usualmente de 10A o 15A) asignado al canal del componente que falló.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Power output circuit open due to a blown blade fuse or fried logic channel on the master board assembly.<br><br>
        <b>FIELD CORRECTION:</b> Multiplexed power boards (Firefly G12 / Lippert BCM) control coach appliances by routing 12V power direct from their own internal board traces. Locate the row of ATO/ATC blade fuses mounted directly onto the master electronic distribution board itself. Replace the blown fuse (typically 10A or 15A) assigned to the specific component channel that failed to operate.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_rele_estado_solido_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Relevador de estado sólido o transistor de conmutación MOSFET soldado o quemado permanentemente en la placa base.<br><br>
        <b>EXPLICACIÓN EN CAMPO:</b> La pantalla manda la señal, la tarjeta central la recibe y enciende su LED indicador de estado, pero la corriente física de 12V no pasa al cable exterior (o no se corta) porque los platinos internos o el chip MOSFET de potencia sufrieron una degradación térmica galvánica irreversible por un cortocircuito en el aparato final.<br><br>
        <b>CORRECCIÓN:</b> La placa central es un módulo sellado de fábrica. En campo, la solución profesional e industrial estándar en EUA es desconectar los conectores Molex y reemplazar la placa base de control completa (Main Board Assembly - Firefly G12 o Lippert BCM).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Integrated solid-state relay or switching MOSFET transistor permanently welded open or burned on the motherboard traces.<br><br>
        <b>FIELD EXPLANATION:</b> The touchscreen successfully commands the link, the central motherboard processes it and illuminates its diagnostic status LED, but physical 12V current fails to route to the output terminal wire (or fails to drop out) because the internal contacts or power MOSFET microchip suffered irreversible thermal meltdown due to a dead short down the appliance line.<br><br>
        <b>CORRECTION:</b> The central distribution block is a factory-sealed module. In the field, the standard US industrial professional solution is to disconnect all plug-in Molex connector looms and swap the complete main motherboard assembly (Firefly G12 or Lippert BCM Main Board).`,
        imagen: "https://unsplash.com",
        final: true
    }
};
