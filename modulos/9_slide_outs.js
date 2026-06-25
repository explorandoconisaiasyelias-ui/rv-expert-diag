// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Sistemas de Slide-Outs (Schwintek/Hydraulic/Cable)
const moduloSlideOuts = {
    badge_es: "SISTEMA DE EXTENSIONES Y SLIDE-OUTS",
    badge_en: "SLIDE-OUT & EXTENSION SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL SLIDE-OUT: Al presionar el interruptor de pared o el botón digital, la extensión no se mueve, se mueve chueca o se detiene. Seleccione la tecnología del sistema que presenta la falla:",
        pregunta_en: "MAIN SLIDE-OUT SYMPTOM: When pressing the wall switch or digital button, the extension fails to move, extends unevenly, or stalls. Select the system technology displaying the fault:",
        opciones_menu: true,
        si: "inicio_schwintek_lci",       // Enlace a sistemas electrónicos Schwintek / In-Wall
        no: "menu_segundo_nivel_slides"    // Enlace a sistemas Hidráulicos y de Cable
    },

    // ==========================================
    // SUB-MÓDULO A: SISTEMAS ELECTRÓNICOS EN LA PARED (LIPPERT SCHWINTEK IN-WALL)
    // ==========================================
    inicio_schwintek_lci: {
        pregunta_es: "SÍNTOMA SCHWINTEK: El slide avanza unas pocas pulgadas de forma chueca (un lado se mueve y el otro no) y se amarra por completo, o el motor solo hace un zumbido. Localice el controlador dual electrónico negro (usualmente oculto en un gabinete o compartimento de carga). Revise el LED rojo. ¿El LED parpadea indicando un código de error de fábrica?",
        pregunta_en: "SCHWINTEK SYMPTOM: The slide extends a few inches unevenly (one side moves, the other stalls) and binds completely, or the motor just hums. Locate the black dual electronic controller (usually hidden in a cabinet or pass-through bay). Check the red LED. Is the LED flashing a factory fault code?",
        si: "error_codigo_led_schwintek",
        no: "probar_motores_descalibrados"
    },
    error_codigo_led_schwintek: {
        pregunta_es: "Paso A1.1: El controlador está reportando un fallo mediante destellos. Cuente los parpadeos del LED rojo. ¿El LED parpadea 1 o 2 veces (Fallo de Motor 1 o Motor 2), o parpadea 8 o 9 veces (Fallo de corto a tierra / Hall Sensor)?",
        pregunta_en: "Step A1.1: The controller is reporting a fault via flashes. Count the red LED blinks. Does the LED flash 1 or 2 times (Motor 1 or Motor 2 Fault), or does it flash 8 or 9 times (Short to ground / Hall Sensor Fault)?",
        opciones_menu: true,
        si: "error_cable_sensor_hall_roto",
        no: "error_corto_potencia_motor"
    },
    error_cable_sensor_hall_roto: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Cortocircuito o línea abierta en el cableado del Sensor Hall de velocidad del motor (Error de 8 o 9 parpadeos).<br><br>
        <b>EXPLICACIÓN DE FÁBRICA (Manual Lippert Schwintek Master):</b> El controlador Schwintek requiere obligatoriamente saber cuántas vueltas exactas da cada motor a través de un sensor magnético interno (Sensor Hall). Si las vías del arnés de 5 hilos se muerden con el engranaje del slide o se llenan de óxido en el conector superior, la tarjeta pierde la señal de conteo, asume que el slide está rompiendo la estructura y bloquea la potencia de inmediato.<br><br>
        <b>CORRECCIÓN:</b> Desconecte el arnés del motor en el controlador y mida continuidad en las líneas de datos. En el 90% de los casos, el cable se rasgó dentro de la columna de la pared exterior. Repare el cable trenzado o reemplace el arnés Schwintek de 5 hilos de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Short circuit or open line within the encoder Hall Sensor speed wiring harness (8 or 9 blink fault code).<br><br>
        <b>FACTORY EXPLANATION (Lippert Schwintek Master Manual):</b> The Schwintek dual controller strictly monitors the exact revolutions executed by each motor via an internal magnetic encoder (Hall Sensor). If the 5-wire harness paths get pinched by the slide's spur gear tracks or accumulate moisture corrosion at the top connector plug, the board loses the pulse count. It assumes the extension is twisting out of square and cuts power instantly.<br><br>
        <b>CORRECTION:</b> Disconnect the motor wire loom from the controller and measure continuity across data lines. In 90% of field cases, the wire harness sheared inside the exterior wall structural column. Splice the torn wires or replace the factory Schwintek 5-wire harness assembly.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_corto_potencia_motor: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Cortocircuito severo en las líneas de alta potencia del motor o embobinado interno quemado (Error de 1 a 2 parpadeos).<br><br>
        <b>CORRECCIÓN:</b> Desconecte el conector en la tarjeta y meta 12V directos de una batería portátil por un segundo. Si el motor chispea agresivamente pero no gira, el embobinado sufrió una fusión galvánica. Reemplace el motor Schwintek de 300:1 o 500:1 sacando el tornillo de seguridad exterior desde el sello de la pared del RV.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Severe short circuit on the motor high-power lines or internally burned stator winding (1 to 2 blink code).<br><br>
        <b>CORRECTION:</b> Unplug the harness at the board and apply direct 12V from a jump pack for one second. If the motor sparks aggressively but fails to turn, the armature winding has suffered a galvanic meltdown. Replace the Schwintek 300:1 or 500:1 gear motor by removing the single exterior retaining screw from the outside wiper seal column.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_motores_descalibrados: {
        pregunta_es: "Paso A2: El controlador no marca códigos de error por LED, pero el slide camina chueco por unas pulgadas y se detiene (pérdida de sincronía mecánica). ¿Desea aplicar el procedimiento oficial de sincronización manual por switch o activar la anulación electrónica por software (Electronic Override)?",
        pregunta_en: "Step A2: The controller flags no active LED error codes, but the slide travels out of square for a few inches and stalls (loss of mechanical synchronization). Do you want to apply the official switch manual resync procedure or trigger the software electronic override?",
        opciones_menu: true,
        si: "solucion_sincronizacion_switch",
        no: "solucion_override_software_lci"
    },
    solucion_sincronizacion_switch: {
        solucion_es: `❌ PROCEDIMIENTO INDUSTRIAL DE RE-SINCRONIZACIÓN DE MOTORES (Schwintek/In-Wall):<br><br>
        <b>EXPLICACIÓN:</b> Los dos motores deben caminar exactamente a las mismas revoluciones. Si el usuario opera el switch a pausas, las memorias se desfasan, provocando que un motor camine más que el otro y el slide se atore.<br><br>
        <b>PROTOCOLO DE RECALIBRACIÓN EN PARED:</b><br>
        1. Meta el slide por completo. Mantenga presionado el botón de **IN** por 5 segundos completos DESPUÉS de que el motor se escuche amarrado. Esto obliga a la tarjeta a recalibrar los sensores a 0.<br>
        2. Saque el slide hacia afuera un tramo de solo 3 pulgadas y deténgase. Regréselo por completo hacia adentro y mantenga presionado el botón por otros 5 segundos.<br>
        3. Repita este ciclo de 3 pulgadas hacia afuera y todo hacia adentro 3 veces seguidas. Los motores quedarán perfectamente sincronizados en paralelo.<br>
        4. <b>REGLA DE ORO COMERCIAL:</b> Eduque al cliente diciéndole que **NUNCA** suelte el botón del slide hasta que la extensión se detenga por completo y pasen 3 segundos; soltarlo antes descalibra los motores de inmediato.`,
        solucion_en: `❌ INDUSTRIAL MOTOR RE-SYNCHRONIZATION PROCEDURE (Schwintek/In-Wall):<br><br>
        <b>EXPLANATION:</b> Both extension motors must spin at the exact same RPM. If the user feathers or pumps the wall switch intermittently, the position encoders drift out of phase, causing one motor to outrun the other and bind the room columns.<br><br>
        <b>WALL RESYNC PROTOCOL:</b><br>
        1. Retract the slide-out completely. Hold the **IN** button down for 5 full seconds AFTER the room stops and the motors stall. This forces the microboard to match and recalibrate encoder counts to zero.<br>
        2. Extend the room out a distance of only 3 inches and stop. Retract it fully back in and hold the wall switch down for another 5 full seconds.<br>
        3. Repeat this 3-inch-out and full-in cycle 3 consecutive times. The dual motors will re-align and match step perfectly.<br>
        4. <b>COMMERCIAL GOLDEN RULE:</b> Instruct the customer to **NEVER** let go of the slide switch until the room stalls completely and 3 seconds pass; releasing it mid-travel desynchronizes the encoders instantly.`,
        imagen: "https://unsplash.com",
        final: true
    },
    solucion_override_software_lci: {
        solucion_es: `❌ PROTOCOLO DE ANULACIÓN ELECTRÓNICA POR SOFTWARE (Electronic Emergency Override):<br><br>
        <b>SITUACIÓN EN CAMPO:</b> El slide está atorado afuera, bloqueando el camino, y el controlador electrónico tiene un bloqueo duro por error de sensor que impide mover el cuarto desde el switch de pared.<br><br>
        <b>PROCEDIMIENTO DE DESTREBE DE HARDWARE:</b><br>
        1. Vaya físicamente a la caja del controlador electrónico dual Schwintek negro.<br>
        2. Localice el pequeño botón blando empotrado rotulado como **MODE BUTTON**.<br>
        3. Presione el botón **6 veces consecutivas de forma rápida**, y en la séptima vez **manténgalo presionado por 5 segundos completos**.<br>
        4. Los LEDs rojo y verde comenzarán a parpadear intensamente al mismo tiempo, indicando que el software ignoró temporalmente todos los sensores de seguridad.<br>
        5. Vaya de inmediato al switch interior de la pared y presione **IN** para meter el slide y poder circular por la carretera de forma segura. El override se desactivará automáticamente después de un ciclo.`,
        solucion_en: `❌ ELECTRONIC EMERGENCY OVERRIDE PROTOCOL (Software Hardware Override):<br><br>
        <b>FIELD EMERGENCY:</b> The slide is jammed extended blocking the road, and the electronic controller has a hard software lock due to an encoder fault, making it refuse to move the room from the wall switch.<br><br>
        <b>HARDWARE BYPASS PROCEDURE:</b><br>
        1. Go physically to the black dual Schwintek electronic control box assembly.<br>
        2. Locate the small, recessed push-button labeled **MODE BUTTON**.<br>
        3. Press the button **6 times consecutively in rapid succession**, and on the 7th press, **hold it down for 5 full seconds**.<br>
        4. The red and green LEDs will flash simultaneously, indicating the firmware has temporarily bypassed all electronic safety sensors.<br>
        5. Go immediately to the interior wall switch and press **IN** to retract the slide room back into the chassis to travel safely on the road. The override automatically deactivates after one cycle.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // MENÚ SEGUNDO NIVEL: EXTENSIONES HIDRÁULICAS Y DE CABLE ACCIONADO
    // ==========================================
    menu_segundo_nivel_slides: {
        pregunta_es: "SÍNTOMA HIDRÁULICO/CABLE: Seleccione la anomalía física o mecánica que presenta la extensión del motorhome:",
        pregunta_en: "HYDRAULIC/CABLE SYMPTOM: Select the physical or mechanical anomaly displayed by the motorhome slide room:",
        opciones_menu: true,
        si: "error_slide_hidraulico_creep",   // Enlace a fallas hidráulicas / Válvulas
        no: "inicio_falla_slide_cable"        // Enlace a fallas de cables / Norco BAL
    },
    error_slide_hidraulico_creep: {
        pregunta_es: "Paso B1: El motor de la bomba hidráulica gira con fuerza, pero el slide no se mueve o se 'asoma' e infla solo unas pulgadas hacia afuera cuando vas manejando en la carretera (Room Creep). ¿El nivel de aceite ATF en el tanque está completo y las mangueras están libres de fugas visibles?",
        pregunta_en: "Step B1: The hydraulic pump motor spins powerfully, but the slide room fails to move or drifts out a few inches on its own while driving on the highway (Room Creep). Is the ATF oil level in the reservoir full and are all hoses free of visible leaks?",
        si: "error_bypass_valvula_cartucho_slide",
        no: "error_fuga_manguera_alta_presion_slide"
    },
    error_fuga_manguera_alta_presion_slide: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Pérdida de presión hidráulica por fuga activa en mangueras de alta resistencia o nivel crítico de fluido ATF Dexron III.<br><br>
        <b>CORRECCIÓN:</b> Rellene el tanque de almacenamiento únicamente cuando todos los slides y gatos hidráulicos estén completamente RETRAÍDOS. Si hay un charco de aceite, localice la manguera rasgada (usualmente la de color naranja de alta presión, 3000 PSI) y reemplácela por una nueva con conexiones engargoladas de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Loss of hydraulic operating pressure due to an active leak in high-strength hoses or critically low ATF Dexron III fluid level.<br><br>
        <b>CORRECCIÓN:</b> Top off the reservoir tank strictly when all slide rooms and hydraulic jacks are fully RETRACTED. If an oil puddle is found, trace the ruptured hose (typically the orange high-pressure line, 3000 PSI) and replace it with a new factory-crimped hydraulic line.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_bypass_valvula_cartucho_slide: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fenómeno de 'Room Creep' por bypass interno en los sellos del cilindro o suciedad en la válvula de cartucho solenoide.<br><br>
        <b>EXPLICACIÓN DE INGENIERÍA:</b> Si la extensión se desplaza hacia afuera sola mientras conduce, significa que la válvula solenoide asignada a ese cuarto no sella herméticamente por basura o rebaba metálica, o que los empaques interiores del pistón de doble acción están rotos, permitiendo que el aceite pase de largo libremente.<br><br>
        <b>CORRECCIÓN:</b> Cierre la válvula de alivio manual con una llave Allen. Si el problema persiste bajo carga, reemplace la válvula solenoide de cartucho dorado (Hydraulic Cartridge Valve) o mande empacar el pistón hidráulico central del slide.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: 'Room Creep' phenomenon caused by an internal piston seal bypass or debris inside the cartridge solenoid valve.<br><br>
        <b>ENGINEERING EXPLANATION:</b> If the slide room slowly drifts outward on its own while driving, it means the specific solenoid valve assigned to that room is failing to seal hermetically due to debris/metal shavings, or the internal seals of the double-acting piston are torn, letting oil bypass freely.<br><br>
        <b>CORRECCIÓN:</b> Cycle the manual override relief screw with an Allen wrench to flush debris. If the room continues to creep under load, replace the gold hydraulic cartridge solenoid valve or rebuild the center hydraulic ram cylinder seals.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // SUB-MÓDULO C: SISTEMAS DE CABLE DE ACERO (NORCO BAL ACCU-SLIDE)
    // ==========================================
    inicio_falla_slide_cable: {
        pregunta_es: "Paso C1: El motor superior de cadena ruge al presionar el switch, pero el slide se mueve de forma brusca, truena fuertemente o se observa un cable de acero flojo y caído en las esquinas. Revise los 4 cables de tensión exteriores e interiores. ¿Se observa algún cable deshilachado, roto o salido de sus poleas de aluminio?",
        pregunta_en: "Step C1: The top chain motor roars when pressing the switch, but the slide room moves jerkily, pops loudly, or a slack steel cable hangs in the corners. Inspect the 4 exterior and interior tension cables. Is any cable frayed, broken, or popped out of its aluminum pulleys?",
        si: "error_cable_roto_o_desalineado",
        no: "error_motor_cable_bal_quemado"
    },
    error_cable_roto_o_desalineado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Cable de acero inoxidable roto o poleas de reenvío flojas y desalineadas en el marco del slide.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA (Manual BAL Accu-Slide):</b> Este sistema tira del cuarto usando 4 cables para meterlo y 4 cables para sacarlo de forma simultánea. Si un cable se deshilacha por rozamiento contra el chasis, se atora en la polea y se revienta. El cuarto pierde tensión en esa esquina, provocando que se tuerza mecánicamente y se atasque por completo.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el cable roto usando un kit de reemplazo original de cable de 5/32 pulgadas. Use la herramienta de acoplamiento para jalar el nuevo cable a través del bloque de ajuste superior. Calibre la tensión en los tornillos de los tensores de la cadena central de modo que los cables tengan una deflexión de solo 1/2 pulgada al presionarlos con el dedo.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Broken stainless steel tension cable or loose, misaligned return pulleys within the slide-out frame structure.<br><br>
        <b>FACTORY EXPLANATION (BAL Accu-Slide Manual):</b> This system pulls the room using 4 cables to pull in and 4 cables to push out simultaneously. If a cable frays by rubbing against the chassis cutout, it jams in the pulley and snaps. The room loses structural tension at that corner, causing it to twist mechanically and jam completely.<br><br>
        <b>CORRECTION:</b> Replace the broken cable utilizing a 5/32-inch stainless steel cable replacement kit. Use the coupling sleeve to pull the new cable wire through the upper adjustment block. Calibrate the tension at the center chain turnbuckles so the cables have a deflection of only 1/2 inch when pressed firmly with a finger.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_motor_cable_bal_quemado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Los 8 cables de tensión están perfectos, pero el motor de alta torsión de 12V DC montado arriba del techo del slide está dañado internamente o la cadena de transmisión se brincó de los dientes.<br><br>
        <b>PROCEDIMIENTO DE CONTROL DE CALIDAD EN CAMPO:</b><br>
        1. Verifique que estén llegando 12V DC limpios al conector del motor superior mientras un asistente activa el interruptor de pared.<br>
        2. Si hay voltaje y el motor está mudo, use un taladro con un dado de 1/4 de pulgada puesto en el acoplamiento superior del motor para meter o sacar el slide manualmente en caso de emergencia por carretera.<br>
        3. <b>CORRECCIÓN:</b> Reemplace el conjunto de motor y caja de engranajes superior (BAL Accu-Slide Motor Gearbox). Lubrique la cadena de transmisión con grasa ligera para cadenas de motocicleta para evitar rechinidos severos de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: All 8 tension cables are in perfect condition, but the 12V DC high-torque motor mounted above the slide roof is internally shorted or the drive chain jumped the sprocket teeth.<br><br>
        <b>FIELD QUALITY CONTROL PROCEDURE:</b><br>
        1. Verify clean 12V DC is reaching the top motor plug while an assistant activates the interior wall switch.<br>
        2. If voltage is present and the motor is dead, use a power drill with a 1/4-inch hex bit inserted into the motor's top shaft manual override to manually extend or retract the room for road emergency travel.<br>
        3. <b>CORRECTION:</b> Replace the top motor and gearbox assembly (BAL Accu-Slide Motor Gearbox). Lubricate the drive chain with dry motorcycle chain lube to prevent harsh squeaking noises from the factory bracket.`,
        imagen: "https://unsplash.com",
        final: true
    }
};
