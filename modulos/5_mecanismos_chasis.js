// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Mecanismos y Escalones de Entrada (Kwikee/Lippert)
const moduloMecanismosChasis = {
    badge_es: "SISTEMA DE MECANISMOS Y CHASIS",
    badge_en: "MECHANISMS & CHASSIS SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL ESCALÓN: Al abrir o cerrar la puerta del RV, el escalón eléctrico no se mueve en absoluto y se queda trabado (adentro o afuera). Seleccione el tipo de síntoma eléctrico inicial:",
        pregunta_en: "MAIN STEP SYMPTOM: When opening or closing the RV door, the power step does not move at all and stays stuck (in or out). Select the initial electrical symptom type:",
        opciones_menu: true,
        si: "inicio_falla_alimentacion_kwikee", // Enlace a fallas de voltajes, fusibles y tierras
        no: "menu_segundo_nivel_mecanismos"    // Enlace a fallas de motor, engranajes y override de ignición
    },

    // ==========================================
    // SUB-MÓDULO A: ALIMENTACIÓN ELÉCTRICA, TIERRAS Y INTERRUPTORES DE PUERTA
    // ==========================================
    inicio_falla_alimentacion_kwikee: {
        pregunta_es: "SÍNTOMA ALIMENTACIÓN: El escalón está totalmente muerto. Agáchese con cuidado debajo del vehículo y localice el arnés principal cuadrado de 4 pines. Con su multímetro en escala V DC, mida entre el cable ROJO grueso (+) y el cable VERDE grueso (-). ¿Mide 12.0V DC o más constantes?",
        pregunta_en: "POWER SUPPLY SYMPTOM: The step is completely dead. Carefully look under the vehicle and locate the main square 4-pin connector harness. With your multimeter in V DC scale, measure between the thick RED wire (+) and the thick GREEN wire (-). Does it read steady 12.0V DC or higher?",
        si: "probar_switch_magnetico_marrón",
        no: "error_tierra_o_fusible_principal_kwikee"
    },
    error_tierra_o_fusible_principal_kwikee: {
        pregunta_es: "Paso A1.1: El arnés de 4 pines registra 0V o un voltaje menor a 10.5V DC. Mida ahora entre el cable ROJO grueso (+) y una parte de metal limpia y pelada del chasis del RV (Tierra física directa). ¿El multímetro marca los 12V DC correctos del banco?",
        pregunta_en: "Step A1.1: The 4-pin harness registers 0V or a voltage under 10.5V DC. Now measure between the thick RED wire (+) and a clean, bare metal part of the RV chassis frame (Direct chassis ground). Does the multimeter read the correct 12V DC from the bank?",
        si: "error_corrosion_tierra_verde",
        no: "error_fusible_maxi_bateria_fundido"
    },
    error_corrosion_tierra_verde: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falla crítica de retorno a tierra física por corrosión galvánica u óxido en la estructura del chasis.<br><br>
        <b>EXPLICACIÓN TÉCNICA DE FÁBRICA (Manual Kwikee Service Master):</b> El 80% de todas las fallas intermitentes y muertes totales de los escalones ocurren en el cable VERDE grueso de tierra. Al estar montado debajo del RV, queda expuesto al agua de la carretera, lodo y sal, lo que genera una capa de óxido galvánico invisible que aísla los electrones. El motor intenta arrancar, consume amperios, no encuentra retorno a tierra y se apaga.<br><br>
        <b>CORRECCIÓN:</b> Desmonte el tornillo de tierra del cable verde. Use un cepillo de alambre o lija fina para raspar el metal del chasis hasta que brille. Reemplace el tornillo por uno nuevo autorroscante de acero inoxidable y aplique grasa dieléctrica marina para sellarlo contra la humedad.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Critical physical ground return failure due to galvanic corrosion or rust on the chassis frame structure.<br><br>
        <b>FACTORY TECHNICAL EXPLANATION (Kwikee Service Master Manual):</b> 80% of all intermittent faults and total power step deaths occur at the thick GREEN ground wire. Being mounted underneath the RV, it stays exposed to road water, mud, and salt, which generates an invisible galvanic oxide layer that insulates electrons. The motor attempts to crank, draws amps, finds no path to ground, and shuts off.<br><br>
        <b>CORRECTION:</b> Remove the ground screw from the green wire. Use a wire brush or fine-grit sandpaper to scrape the chassis metal until it shines. Replace the screw with a new stainless steel self-tapping screw and apply marine dielectric grease to seal it against moisture.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_fusible_maxi_bateria_fundido: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Línea positiva (+12V constante) abierta debido a un fusible principal fundido en la fusiblera del chasis del motor.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> El cable ROJO grueso viene directo de las baterías del motor (no de la casa). Vaya a la caja de fusibles del motor (debajo del capó del chasis Ford F53, Workhorse o Mercedes Sprinter). Localice el fusible tipo Maxi-Fuse o cuchilla de alta capacidad (usualmente de 20A o 25A) marcado como 'Step' o 'Auxiliary Step'. Reemplácelo por uno idéntico de fábrica. Si se vuelve a fundir al instante, hay un cortocircuito directo en el cable rojo rozando un filo metálico del chasis.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Positive line (+12V constant) open due to a blown main fuse in the engine chassis fuse box.<br><br>
        <b>FIELD CORRECTION:</b> The thick RED wire runs straight from the chassis/engine batteries (not the coach batteries). Go to the engine fuse box (under the hood on Ford F53, Workhorse, or Mercedes Sprinter chassis). Locate the high-capacity Maxi-Fuse or blade fuse (usually 20A or 25A) labeled 'Step' or 'Auxiliary Step'. Replace it with an identical factory fuse. If it blows again instantly, a direct short circuit exists on the red wire rubbing against a sharp metal chassis edge.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_switch_magnetico_marrón: {
        pregunta_es: "Paso A2: La alimentación principal de fuerza está perfecta. Localice el cable MARRÓN en el arnés de control (proviene del interruptor magnético montado en el marco de la puerta). Con la puerta del RV completamente ABIERTA, ponga su multímetro en continuidad. ¿El cable marrón registra continuidad perfecta a tierra (0.0 Ω)?",
        pregunta_en: "Step A2: Main power feed is perfect. Locate the BROWN wire in the control harness (comes from the magnetic switch mounted on the door frame). With the RV door completely OPEN, set your multimeter to continuity. Does the brown wire register perfect continuity to ground (0.0 Ω)?",
        si: "error_modulo_control_tarjeta_negra",
        no: "error_switch_puerta_descalibrado"
    },
    error_switch_puerta_descalibrado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Interruptor magnético de la puerta (Door Reed Switch) dañado, desalineado o con imanes flojos.<br><br>
        <b>EXPLICACIÓN DE INGENIERÍA:</b> La caja de control electrónica necesita que el cable marrón reciba tierra física para enterarse de que la puerta se abrió y ordenar la salida del escalón. Si el switch está roto o los dos imanes están desalineados por más de 1/4 de pulgada (6.3 mm), la tarjeta asume que la puerta sigue cerrada por seguridad y no se mueve.<br><br>
        <b>CORRECCIÓN:</b> Verifique la alineación física de los imanes en la puerta. Si están perfectamente centrados pero el cable marrón sigue marcando circuito abierto (0L) al abrir la puerta, el switch interno de lengüeta se quedó pegado. Reemplace el interruptor magnético de la puerta (estilo rectangular negro).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Door magnetic reed switch damaged, misaligned, or has loose magnets.<br><br>
        <b>ENGINEERING EXPLANATION:</b> The electronic control box requires the brown wire to receive physical ground to detect that the door was opened and command the step to deploy. If the switch is broken or both magnets are misaligned by more than 1/4 inch (6.3 mm), the board assumes the door remains closed for safety and stays static.<br><br>
        <b>CORRECTION:</b> Verify the physical alignment of the magnets on the door frame. If they are perfectly centered but the brown wire still flags an open circuit (0L) when the door opens, the internal reed switch is stuck. Replace the door magnetic switch (standard black rectangular style).`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_modulo_control_tarjeta_negra: {
        pregunta_es: "Paso A3: La señal de la puerta y las alimentaciones están sanas, pero el escalón sigue sin moverse. Desconecte el conector de 2 pines que va directo al motor del escalón. Conecte su multímetro en esos pines del lado que viene de la tarjeta. Abra y cierre la puerta. ¿Registra un pulso rápido de 12V DC?",
        pregunta_en: "Step A3: The door signal and power feeds are healthy, but the step still doesn't move. Disconnect the 2-pin connector leading straight to the step motor. Connect your multimeter to those pins on the side coming from the board. Open and close the door. Does it register a quick 12V DC pulse?",
        si: "error_motor_o_articulacion_amarrada",
        no: "error_caja_control_unidad_negra"
    },
    error_caja_control_unidad_negra: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Módulo de control electrónico (Control Unit) dañado o con relevadores de inversión térmicamente quemados.<br><br>
        <b>EXPLICACIÓN:</b> La tarjeta inteligente recibe todas las señales correctas de los manuales de fábrica (alimentación constante, tierra limpia y pulso de puerta), pero su circuito integrado de potencia sufrió una degradación galvánica y no emite la salida de fuerza hacia el motor.<br><br>
        <b>CORRECCIÓN:</b> Reemplace la unidad de control electrónica (la caja sellada de donde salen los 4 pines principales).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Electronic control module (Control Unit) damaged or with internally burned polarity-reversing relays.<br><br>
        <b>EXPLANATION:</b> The smart board receives all correct factory signals (constant power, clean ground, and door pulse), but its integrated power circuit suffered galvanic degradation and fails to output force to the motor.<br><br>
        <b>CORRECTION:</b> Replace the electronic control unit (the sealed black box where the main 4 pins emerge).`,
        imagen: "https://unsplash.com",
        final: true
    },

    // ==========================================
    // MENÚ SEGUNDO NIVEL: MOTOR, ENGRANAJES Y SEGURIDADES DE IGNICIÓN
    // ==========================================
    menu_segundo_nivel_mecanismos: {
        pregunta_es: "SÍNTOMA HARDWARE/IGNICIÓN: Seleccione el comportamiento específico del escalón o el circuito de seguridad del tablero:",
        pregunta_en: "HARDWARE/IGNITION SYMPTOM: Select the specific behavior of the power step or the dashboard safety circuit:",
        opciones_menu: true,
        si: "error_motor_o_articulacion_amarrada", // Va directo a evaluar el motor/engranaje
        no: "probar_ignition_override_kwikee"      // Enlace a pruebas de seguridad del motor del RV
    },
    error_motor_o_articulacion_amarrada: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Motor eléctrico en cortocircuito, caja de engranajes curvos (Gearbox) rota o articulaciones mecánicas amarradas por óxido pesado.<br><br>
        <b>EXPLICACIÓN TÉCNICA INDUSTRIAL (Lippert / Kwikee Manual):</b> El sistema no utiliza sensores físicos de fin de carrera para detenerse. La tarjeta lógica mide los Amperios que consume el motor; cuando el escalón choca al abrirse o cerrarse, el motor se frena mecánicamente, el amperaje se dispara a más de 20A y la tarjeta corta la corriente asumiendo que completó el recorrido. Si los engranajes o los brazos articulados están pegados por falta de grasa, el amperaje se dispara al instante y la tarjeta corta la luz antes de que el escalón se mueva un solo centímetro.<br><br>
        <b>PROCEDIMIENTO DE CONTROL DE CALIDAD EN CAMPO:</b><br>
        1. Retire el perno de chaveta central (Cotter pin) y desmonte el brazo de transmisión del motor para liberar el escalón mecánicamente.<br>
        2. Mueva el escalón con la mano. Si está pesado o duro, limpie los pernos de articulación y aplique <b>Grasa de Litio Blanca</b> en aerosol hasta que caiga libremente por gravedad.<br>
        3. Si el escalón está suave pero el motor sigue sin girar al meterle 12V directos de una batería portátil, el motor sufrió un sobrecalentamiento en las escobillas. Reemplace el ensamble de motor y engranajes.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Electric motor short-circuited, curved gearbox stripped, or mechanical linkages seized by heavy rust.<br><br>
        <b>INDUSTRIAL TECHNICAL EXPLANATION (Lippert / Kwikee Manual):</b> The power step system does not utilize physical limit switches to stop travel. The logic board constantly monitors the Amps drawn by the motor; when the step strikes its stop position upon extending or retracting, the motor stalls mechanically, the current spikes above 20A, and the board cuts power, assuming the cycle is complete. If the gears or linkage joints are frozen due to a lack of grease, the Amps spike instantly, and the board cuts power before the step moves a single inch.<br><br>
        <b>FIELD QUALITY CONTROL PROCEDURE:</b><br>
        1. Pull the central cotter pin and detach the motor linkage arm to isolate the step mechanically.<br>
        2. Swing the step assembly by hand. If it feels heavy or binds, spray the linkage pivot pins with <b>White Lithium Grease</b> until it swings freely under its own gravity.<br>
        3. If the step swings smoothly but the motor still refuses to turn when jumped with 12V from a portable pack, the internal brushes overheated. Replace the combined motor and gearbox assembly.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_ignition_override_kwikee: {
        pregunta_es: "Paso B2: El escalón opera bien al abrir la puerta, pero el sistema de seguridad 'Ignition Override' falló (el escalón NO se retrae automáticamente al encender el motor del RV estando la puerta cerrada). Localice el cable AMARILLO delgado en el arnés de 4 pines. Encienda la llave del motor del RV en posición RUN. ¿El multímetro registra 12V DC en ese cable amarillo?",
        pregunta_en: "Step B2: The step operates fine when opening the door, but the 'Ignition Override' safety system failed (the step does NOT automatically retract when starting the RV engine with the door closed). Locate the slender YELLOW wire in the 4-pin harness. Turn the RV ignition key to the RUN position. Does the multimeter register 12V DC on that yellow wire?",
        si: "error_logica_override_tarjeta",
        no: "error_fusible_ignicion_tablero"
    },
    error_fusible_ignicion_tablero: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Línea de señal de seguridad de ignición abierta por fusible fundido en el tablero del chasis automotriz.<br><br>
        <b>EXPLICACIÓN DE SEGURIDAD (Normativa ANSI/RVIA):</b> El cable AMARILLO es una vía de seguridad crítica de fábrica. Le avisa al escalón que el motor del RV arrancó para que se esconda de inmediato, evitando que choques el escalón contra un poste o banqueta al avanzar.<br><br>
        <b>CORRECCIÓN:</b> El cable amarillo no viene de las baterías de la casa, viene del circuito de accesorios de la llave de encendido. Vaya a la fusiblera del tablero delantero (debajo del volante del conductor en chasis Ford/Sprinter) y reemplace el fusible de 5A/10A marcado como 'Ignition Accessory' o 'Step Ignition'.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Ignition safety signal line open due to a blown fuse in the automotive chassis dashboard panel.<br><br>
        <b>SAFETY EXPLANATION (ANSI/RVIA Standard):</b> The YELLOW wire is a critical factory safety circuit. It flags the step control board that the RV engine has started, commanding it to retract immediately to prevent striking posts or curbs while driving.<br><br>
        <b>CORRECTION:</b> The yellow wire does not pull power from the house batteries; it taps the ignition switch accessory circuit. Go to the front dash fuse box (under the steering wheel on Ford/Sprinter chassis) and replace the 5A/10A fuse labeled 'Ignition Accessory' or 'Step Ignition'.`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_logica_override_tarjeta: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: La señal de 12V de la llave llega perfectamente por el cable amarillo, pero el circuito lógico integrado de la tarjeta electrónica está dañado y no procesa la anulación de seguridad.<br><br>
        <b>CORRECCIÓN:</b> Reemplace la unidad de control electrónica inferior (tarjeta de potencia negra).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The 12V key signal arrives perfectly via the yellow wire, but the integrated logic circuit on the electronic control board is corrupted and fails to process the safety override.<br><br>
        <b>CORRECTION:</b> Replace the lower electronic control module (black power board).`,
        imagen: "https://unsplash.com",
        final: true
    }
};
