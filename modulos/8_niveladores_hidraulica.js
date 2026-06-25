// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Sistemas de Nivelación Hidráulica (Lippert LCI/HWH)
const moduloNiveladoresHidraulica = {
    badge_es: "SISTEMA DE NIVELACIÓN E HIDRÁULICA",
    badge_en: "HYDRAULIC LEVELING SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DE NIVELACIÓN: El panel digital muestra error de comunicación o los gatos hidráulicos no se mueven al presionar los botones. Seleccione el tipo de comportamiento de la falla:",
        pregunta_en: "MAIN LEVELING SYMPTOM: The digital panel shows a communication error or the hydraulic jacks do not move when buttons are pressed. Select the type of fault behavior:",
        opciones_menu: true,
        si: "inicio_falla_electrica_lci",    // Enlace a fallas eléctricas y de motor
        no: "menu_segundo_nivel_lci"        // Enlace a fallas mecánicas e hidráulicas
    },

    // ==========================================
    // SUB-MÓDULO A: FALLAS ELÉCTRICAS Y DE MOTOR (ALTA CORRIENTE)
    // ==========================================
    inicio_falla_electrica_lci: {
        pregunta_es: "SÍNTOMA ELÉCTRICO: Al presionar 'Auto Level', la pantalla parpadea con el error 'Low Voltage' (Bajo Voltaje) o se escucha un solo 'clic' fuerte en la bomba pero el motor no gira. Con su multímetro en escala V DC, mida los postes grandes de la batería del RV mientras presiona el botón. ¿El voltaje se mantiene ARRIBA de 12.2V DC bajo carga?",
        pregunta_en: "ELECTRICAL SYMPTOM: When pressing 'Auto Level', the screen flashes a 'Low Voltage' error or a single loud 'click' is heard at the pump but the motor does not rotate. With your multimeter in V DC scale, measure the large RV battery posts while pressing the button. Does the voltage stay ABOVE 12.2V DC under load?",
        si: "probar_solenoide_trombón",
        no: "error_baterias_descargadas_lci"
    },
    error_baterias_descargadas_lci: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Caída de tensión crítica en el banco de baterías. El motor de la bomba consume más de 100 Amperios y si la tarjeta detecta menos de 12V DC, corta por seguridad.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> Arranque el motor principal del RV (o la planta de luz) para que el alternador inyecte carga directa al banco. Limpie los bornes de la batería de sulfatación. Si la falla persiste, realice una prueba de carga (Load Test) a las baterías; es muy probable que tengan celdas muertas.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Critical voltage drop across the battery bank. The pump motor draws over 100 Amps, and if the control board detects less than 12V DC, it cuts out for safety.<br><br>
        <b>FIELD CORRECTION:</b> Start the main RV engine (or the generator) so the alternator injects a direct charge into the bank. Clean any sulfation from the battery terminals. If the fault persists, perform a battery load test; it is highly likely they have dead cells.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_solenoide_trombón: {
        pregunta_es: "Paso A2: El voltaje de la batería está perfecto. Localice el solenoide de alta corriente (Solenoid Trombone) montado junto a la bomba hidráulica. Mida el voltaje en el tornillo de salida que va directo al motor mientras un asistente presiona el botón de nivelación. ¿El multímetro registra 12V DC en la salida?",
        pregunta_en: "Step A2: Battery voltage is perfect. Locate the high-current relay (Solenoid Trombone) mounted next to the hydraulic pump. Measure the voltage at the output terminal leading straight to the motor while an assistant presses the leveling button. Does the multimeter register 12V DC at the output?",
        si: "probar_carbones_motor_lci",
        no: "error_solenoide_potencia_quemado"
    },
    error_solenoide_potencia_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El solenoide de potencia recibe la señal de activación pero sus contactos internos de cobre están flameados o carbonizados, impidiendo el paso de los 100+ Amperios hacia el motor.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el solenoide de arranque de alta corriente (Dual Direction Solenoid / Trombone) específico para sistemas Lippert o HWH. Nunca use un solenoide común de marcha automotriz, ya que se quedará pegado y dejará la bomba encendida infinitamente, reventando las mangueras por sobrepresión.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The power solenoid receives the activation trigger signal but its internal copper contact points are scorched or carbonized, blocking the 100+ Amps from reaching the motor.<br><br>
        <b>CORRECTION:</b> Replace the high-current reversing starter solenoid (Dual Direction Solenoid / Trombone) specified for Lippert or HWH systems. Never install a standard automotive starter solenoid, as it will weld shut and leave the pump running indefinitely, bursting hoses due to overpressure.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_carbones_motor_lci: {
        pregunta_es: "Paso A3: El solenoide entrega los 12V DC directos al motor, pero el motor está completamente mudo y caliente al tacto. Desconecte el cable positivo del motor, ponga el multímetro en la escala de Ohmios (Ω) y mida la resistencia entre el borne del motor y la carcasa metálica (tierra). ¿La lectura marca 0L (Infinito) o un cortocircuito directo de 0.0 Ω?",
        pregunta_en: "Step A3: The solenoid delivers direct 12V DC to the motor, but the motor remains completely silent and hot to the touch. Disconnect the positive cable from the motor, set the multimeter to the Ohms (Ω) scale, and measure resistance between the motor post and the metal casing (ground). Does the reading show 0L (Infinity) or a direct 0.0 Ω short circuit?",
        si: "error_motor_bomba_destruido",
        no: "error_bloqueo_freno_estacionamiento"
    },
    error_motor_bomba_destruido: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Motor de la bomba hidráulica de 12V destruido internamente (Carbones desgastados, devanado abierto o inducido amarrado en cortocircuito).<br><br>
        <b>CORRECCIÓN:</b> Desmonte el motor eléctrico de la parte superior del bloque de válvulas. Reemplace los carbones interiores si el devanado está sano, o instale un motor nuevo de reemplazo de 12V DC. Lubrique el cople de transmisión antes de armar de nuevo.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 12V hydraulic pump motor internally destroyed (Worn brushes, open winding, or armature seized in a direct short circuit).<br><br>
        <b>CORRECTION:</b> Dismount the electric motor from the top of the valve block assembly. Replace the internal carbon brushes if the winding is healthy, or install a new 12V DC replacement motor. Lubricate the drive coupler before reassembling.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // MENÚ SEGUNDO NIVEL: HIDRÁULICO / SEÑALES MULTIMARCA
    // ==========================================
    menu_segundo_nivel_lci: {
        pregunta_es: "SÍNTOMA HIDRÁULICO/SEÑALES: Seleccione el tipo de anomalía física o de control que presenta el sistema de nivelación:",
        pregunta_en: "HYDRAULIC/SIGNALS SYMPTOM: Select the specific physical or control anomaly the leveling system is displaying:",
        opciones_menu: true,
        si: "inicio_falla_hidraulica_lci",   // Enlace a fugas y mangueras
        no: "inicio_falla_sensores_lci"      // Enlace a sensores de freno y nivel
    },
    // ==========================================
    // SUB-MÓDULO B: FALLAS MECÁNICAS E HIDRÁULICAS (MANGUERAS Y VALVULAS)
    // ==========================================
    inicio_falla_hidraulica_lci: {
        pregunta_es: "SÍNTOMA HIDRÁULICO: El motor de la bomba ruge fuertemente con un sonido agudo, pero los gatos bajan extremadamente lento, se regresan solos al chasis o la pantalla marca 'Error de Retracción'. Revise el depósito de plástico translúcido de la bomba. ¿El nivel de fluido (Aceite ATF Dexron III) se encuentra ABAJO del nivel de la marca de llenado con los gatos retraídos?",
        pregunta_en: "HYDRAULIC SYMPTOM: The pump motor roars loudly with a high-pitched whine, but the jacks extend extremely slowly, retract on their own, or the screen flags a 'Retraction Error'. Check the translucent plastic pump reservoir. Is the fluid level (ATF Dexron III Oil) BELOW the fill mark with all jacks fully retracted?",
        si: "error_bajo_fluido_o_fuga",
        no: "probar_valvulas_solenoide_lci"
    },
    error_bajo_fluido_o_fuga: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de fluido hidráulico en el depósito debido a una fuga activa o falta de mantenimiento severa.<br><br>
        <b>PROCEDIMIENTO DE CAMPO (MFR Standard):</b><br>
        1. Revise los pistones de los gatos hidráulicos buscando sellos de hule rotos con goteo activo.<br>
        2. Inspeccione las líneas de mangueras naranjas y negras en los puntos de fricción del chasis buscando rajaduras por rozamiento.<br>
        3. Rellene el depósito usando exclusivamente aceite de transmisión automática (ATF Dexron III / Mercon). <b>IMPORTANTE:</b> Realice el llenado solo cuando TODOS los gatos y los extensiones (Slides) estén completamente RETRAÍDOS para evitar un desbordamiento masivo de aceite por el tapón de respiración trasero.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Lack of hydraulic fluid in the reservoir due to an active leak or total lack of maintenance.<br><br>
        <b>MFR STANDARD FIELD PROCEDURE:</b><br>
        1. Inspect the hydraulic jack cylinders checking for blown rubber seals with active dripping.<br>
        2. Trace the orange and black high-pressure hose lines along chassis rub points looking for friction cracks.<br>
        3. Top off the reservoir using exclusively automatic transmission fluid (ATF Dexron III / Mercon). <b>IMPORTANT:</b> Fill only when ALL jacks and slide-outs are completely RETRACTED to avoid a massive oil blowout through the rear breather cap.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_valvulas_solenoide_lci: {
        pregunta_es: "Paso B2: El nivel de fluido está perfecto. Localice las válvulas solenoide cilíndricas (con un cartucho dorado) montadas en el bloque de distribución hidráulica. Ponga una llave metálica cerca del solenoide mientras su asistente activa el sistema. ¿Se siente una fuerza magnética fuerte atrayendo la llave en el cartucho de la válvula activa?",
        pregunta_en: "Step B2: Fluid level is perfect. Locate the cylindrical solenoid valves (with a gold cartridge) mounted on the hydraulic manifold block. Hold a metal wrench close to the coil while an assistant activates the system. Do you feel a strong magnetic pull drawing the wrench toward the active valve cartridge?",
        si: "error_bypass_interno_pistón",
        no: "error_bobina_valvula_abierta"
    },
    error_bobina_valvula_abierta: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La bobina de la válvula solenoide (Cartridge Valve Coil) está rota internamente o no recibe la señal de 12V de control.<br><br>
        <b>CORRECCIÓN:</b> Desconecte el conector de 2 pines de la bobina y mida sus Ohmios. Si marca 0L, cambie la bobina plástica deslizando el bloque hacia afuera de la espiga de metal. Si marca continuidad, revise que las vías del arnés no estén cortadas en el camino a la tarjeta central.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The cartridge valve solenoid coil is open internally or fails to receive the 12V control signal from the board.<br><br>
        <b>CORRECTION:</b> Disconnect the 2-pin connector from the coil and measure its Ohms. If it reads 0L, swap the plastic coil block by sliding it off the metal valve stem. If it registers continuity, check that the harness wiring paths are not severed on the way to the main controller.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_bypass_interno_pistón: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La válvula abre eléctricamente y hay fluido, pero el gato hidráulico se baja solo tras nivelar o la bomba trabaja sin levantar el RV.<br><br>
        <b>EXPLICACIÓN TÉCNICA:</b> La válvula de aguja interna tiene detritos/basura atrapada que impide el cierre hermético, o los sellos internos del propio pistón sufrieron un "bypass" (el aceite se pasa del compartimento de presión al de retorno de forma interna).<br><br>
        <b>CORRECCIÓN:</b> Abra la válvula de alivio manual con una llave Allen de 1/8 para liberar suciedad. Si el gato sigue perdiendo firmeza bajo el peso del motorhome, reemplace el cilindro hidráulico dañado por uno nuevo Lippert.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The valve opens electrically and fluid is present, but the hydraulic jack sags under load after leveling or the pump runs without raising the RV.<br><br>
        <b>TECHNICAL EXPLANATION:</b> The internal needle valve has trapped debris preventing a hermetic seal, or the internal piston seals themselves have suffered a 'bypass' (oil slips internally from the pressure side to the return side).<br><br>
        <b>CORRECTION:</b> Open the manual override valve with a 1/8 Allen wrench to flush out any debris. If the jack continues to bleed down under the motorhome's weight, replace the damaged hydraulic cylinder with a new Lippert unit.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // SUB-MÓDULO C: FALLAS DE SENSORES Y SEÑALES DE SEGURIDAD
    // ==========================================
    inicio_falla_sensores_lci: {
        pregunta_es: "SÍNTOMA DE SENSORES: Al intentar encender la consola LCI o HWH, el panel pita fuertemente arrojando la alarma 'Park Brake' (Freno de mano) o la pantalla dice 'Excess Slope' (Inclinación Excesiva). Mueva la palanca del freno de mano/estacionamiento del tablero del RV. Con la llave del motor encendida, ¿el testigo de 'BRAKE' se ilumina en rojo en el tablero de instrumentos?",
        pregunta_en: "SENSORS SYMPTOM: When trying to power on the LCI or HWH console, the panel beeps loudly throwing the 'Park Brake' alarm or the screen reads 'Excess Slope'. Move the RV's parking brake lever on the dash. With the engine key turned on, does the 'BRAKE' warning light illuminate in red on the instrument cluster?",
        si: "error_calibracion_cero_lci",
        no: "error_switch_freno_estacionamiento"
    },
    error_switch_freno_estacionamiento: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La consola de nivelación hidráulica bloquea el sistema por seguridad total porque no detecta el pulso de tierra (-) proveniente del switch del freno de mano.<br><br>
        <b>CORRECCIÓN:</b> Localice el interruptor de presión eléctrico montado en la base de la palanca del freno de mano (chasis Ford F53 o Sprinter) o el switch de presión de la línea de aire en camiones diésel. Limpie la terminal y verifique que mande la señal de tierra física. Si el switch está roto, reemplácelo para liberar el bloqueo de seguridad.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The hydraulic leveling console locks out the system for total safety because it fails to detect the ground pulse (-) coming from the parking brake switch.<br><br>
        <b>CORRECTION:</b> Locate the electrical pressure switch mounted at the base of the parking brake lever (Ford F53 or Sprinter chassis) or the air line pressure switch on diesel pushers. Clean the terminal and verify that it sends a physical ground signal. If the switch is broken, replace it to release the safety lockout.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_calibracion_cero_lci: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El sistema tiene todas sus seguridades físicas activas pero ha perdido la memoria de calibración del punto cero (el plano horizontal nivelado de fábrica).<br><br>
        <b>PROCEDIMIENTO DE RE-CALIBRACIÓN DE PUNTO CERO (LCI Touch Panel):</b><br>
        1. Nivele el RV de forma 100% manual usando un nivel de burbuja físico puesto en el piso de la cocina.<br>
        2. Con el panel de control LCI apagado, presione el botón **FRONT** exactamente 5 veces consecutivas.<br>
        3. Presione el botón **REAR** exactamente 5 veces consecutivas de inmediato.<br>
        4. Las luces del panel parpadearán y la pantalla dirá 'Zero Point Calibration'. Presione el botón **ENTER** para guardar de forma permanente esta posición horizontal en la memoria del procesador. El sistema quedará reseteado de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The system has all its physical safeties active but has lost the zero-point calibration memory (the factory level horizontal plane).<br><br>
        <b>ZERO-POINT RE-CALIBRATION PROCEDURE (LCI Touch Panel):</b><br>
        1. Level the RV 100% manually using a physical bubble level placed on the kitchen floor.<br>
        2. With the LCI control panel turned OFF, press the **FRONT** button exactly 5 consecutive times.<br>
        3. Press the **REAR** button exactly 5 consecutive times immediately afterward.<br>
        4. The panel lights will flash and the display will read 'Zero Point Calibration'. Press the **ENTER** button to permanently save this horizontal position into the processor's memory. The system will be factory reset.`,
        imagen: "https://unsplash.com",
        final: true
    }
};
