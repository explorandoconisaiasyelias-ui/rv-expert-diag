// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Aires Acondicionados (Dometic/Coleman/Airxcel)
const moduloAireAcondicionado = {
    badge_es: "SISTEMA DE AIRE ACONDICIONADO Y TERMOSTATOS",
    badge_en: "AIR CONDITIONING & THERMOSTAT SYSTEMS",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DEL AIRE ACONDICIONADO: Seleccione el comportamiento de la falla en el motorhome:",
        pregunta_en: "MAIN AIR CONDITIONER SYMPTOM: Select the operational behavior of the fault in the motorhome:",
        opciones_menu: true,
        si: "inicio_no_enciende",      // Enlace a fallas eléctricas/termostato
        no: "inicio_no_enfria"        // Enlace a fallas del compresor/capacitores
    },

    // ==========================================
    // SUB-MÓDULO A: EL AIRE NO ENCIENDE EN ABSOLUTO (PANTALLA MUERTA)
    // ==========================================
    inicio_no_enciende: {
        pregunta_es: "SÍNTOMA: La pantalla del termostato digital de pared (Dometic CCC2, Coleman o Airxcel) está completamente apagada y el aire de techo no responde. Con su multímetro en V DC, mida los cables de control que llegan detrás del termostato. ¿Mide 12.0V DC o más entre el cable Rojo (+) y el Negro (-)?",
        pregunta_en: "SYMPTOM: The digital wall thermostat display (Dometic CCC2, Coleman, or Airxcel) is completely blank and the rooftop unit does not respond. With your multimeter in V DC scale, measure the control wires behind the thermostat. Does it read 12.0V DC or higher between the Red (+) and Black (-) wires?",
        si: "error_termostato_malo",
        no: "probar_fusible_tarjeta_techo"
    },
    error_termostato_malo: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El termostato digital de pared recibe energía limpia de 12V DC pero su microprocesador interno está dañado de forma permanente.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el termostato de pared por uno nuevo compatible con su marca. Antes de encender el nuevo equipo, verifique meticulosamente que los cables RJ11 o conectores Molex de datos no tengan pines doblados, sulfatados o rastros de humedad que puedan causar un cortocircuito en el bus de comunicaciones de fábrica.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The digital wall thermostat receives clean 12V DC power but its internal microprocessor is permanently damaged.<br><br>
        <b>CORRECTION:</b> Replace the wall thermostat with a new compatible model. Before powering up the new device, meticulously check the RJ11 cables or Molex data connectors for bent pins, corrosion, or traces of moisture that could short-circuit the factory communication data bus.`,
        imagen: "https://unsplash.com", // Imagen de cables / conectores de red
        final: true
    },
    probar_fusible_tarjeta_techo: {
        pregunta_es: "Paso A2: Si no hay 12V DC en el termostato, baje el filtro del aire de techo para acceder a la caja de control metálica. Retire la tapa y localice el fusible de vidrio automotriz tipo ATC (3 Amperios) montado directo en la tarjeta electrónica. ¿Está este fusible quemado o roto?",
        pregunta_en: "Step A2: If there is no 12V DC at the thermostat, drop the ceiling air filter to access the metal control box. Remove the cover and locate the automotive glass ATC fuse (3 Amps) mounted directly on the circuit board. Is this fuse blown or broken?",
        si: "error_fusible_3a_roto",
        no: "error_breaker_120v_o_caida_dc"
    },
    error_fusible_3a_roto: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fusible de protección de baja tensión (3A) de la tarjeta de control de techo fundido.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el fusible por uno nuevo de 3A. Si el fusible se vuelve a fundir de inmediato al encender el sistema, hay un cortocircuito directo a tierra en el cableado del termostato de pared o en el solenoide de la válvula de reversa (si el equipo es bomba de calor / Heat Pump).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Low-voltage protection fuse (3A) on the rooftop control board is blown.<br><br>
        <b>CORRECTION:</b> Replace the fuse with a new 3A fuse. If the fuse blows again immediately upon powering up the system, a direct short circuit to ground exists in the wall thermostat wiring or within the reversing valve solenoid coil (if the unit is a Heat Pump).`,
        imagen: "https://unsplash.com",
        final: true
    },
    error_breaker_120v_o_caida_dc: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Falta de energía principal de 120V AC en la caja de control de techo o transformador integrado quemado.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b><br>
        1. Vaya al panel principal de breakers, localice el breaker de 20A dedicado al Aire Acondicionado (A/C) y reármelo con fuerza.<br>
        2. Si hay 120V AC en la entrada pero la tarjeta no genera los 12V DC de control hacia el termostato de pared, el transformador reductor integrado en la tarjeta de techo sufrió una sobrecarga galvánica. Reemplace la tarjeta de control de techo (Control Board).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Lack of main 120V AC power at the rooftop control box or burned internal step-down transformer.<br><br>
        <b>FIELD CORRECTION:</b><br>
        1. Go to the main circuit breaker panel, locate the 20A breaker dedicated to the Air Conditioner (A/C), and firmly reset it.<br>
        2. If 120V AC is present at the input but the board fails to output the 12V DC control voltage to the wall thermostat, the step-down transformer embedded on the board has suffered galvanic failure. Replace the rooftop control board assembly.`,
        imagen: "https://unsplash.com",
        final: true
    },
    // ==========================================
    // SUB-MÓDULO B: EL SOPLADOR ENCIENDE PERO NO ENFRÍA (COMPRESOR / CAPACITORES)
    // ==========================================
    inicio_no_enfria: {
        pregunta_es: "SÍNTOMA: El ventilador soplador de techo enciende y tira aire con fuerza, pero el aire sale a temperatura ambiente y el compresor no arranca (o hace un zumbido fuerte de 2 segundos y se apaga por térmico). Suba al techo y retire la cubierta de plástico. Localice el cilindro metálico del Capacitor de Marcha Doble. ¿Se observa la parte superior del capacitor inflada, deformada o con fuga de aceite?",
        pregunta_en: "SYMPTOM: The rooftop blower fan turns on and blows air forcefully, but the air is at room temperature and the compressor does not start (or makes a loud 2-second hum and trips on thermal protection). Climb to the roof and remove the plastic shroud. Locate the metal cylinder Dual Run精神 Capacitor. Does the top of the capacitor look bloated, deformed, or leaking oil?",
        si: "error_capacitor_reventado",
        no: "probar_resistencia_compresor"
    },
    error_capacitor_reventado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Capacitor de marcha doble (Dual Run Capacitor) totalmente destruido por fatiga térmica o picos de voltaje en la red del campamento.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA MULTIMARCA:</b> Sin la capacitancia calibrada de fábrica (ej. 45+5 uF o 55+5 uF), el motor del compresor no puede romper la inercia mecánica de arranque ni mantener el desfasaje eléctrico necesario para girar, entrando en bloqueo térmico instantáneo.<br><br>
        <b>CORRECCIÓN:</b> Reemplace el capacitor doble respetando exactamente los microfaradios (uF) de la etiqueta original. Conecte los cables en los bornes correctos: HERM (Compresor), FAN (Ventilador) y C (Común).<br><br>
        <b>RECOMENDACIÓN ELITE:</b> Instale un kit de arranque duro (Hard Start Kit / Supco SPP6 o equivalente Coleman) en paralelo para ayudar al compresor a arrancar fácilmente cuando el voltaje en los campamentos caiga por debajo de 110V AC.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Dual Run Capacitor completely destroyed by thermal fatigue or voltage spikes on the campground grid.<br><br>
        <b>MULTI-BRAND FACTORY EXPLANATION:</b> Without the factory-calibrated capacitance (e.g., 45+5 uF or 55+5 uF), the compressor motor cannot break the mechanical starting inertia or maintain the electrical phase shift necessary to rotate, leading to instant thermal lock.<br><br>
        <b>CORRECTION:</b> Replace the dual capacitor respecting the exact microfarads (uF) on the original label. Connect wires to the proper terminals: HERM (Compressor), FAN (Fan), and C (Common).<br><br>
        <b>ELITE RECOMMENDATION:</b> Install a Hard Start Kit (Supco SPP6 or Coleman equivalent) in parallel to help the compressor start easily when campground voltage drops below 110V AC.`,
        imagen: "https://unsplash.com", // Imagen de capacitor / componente metálico
        final: true
    },
    probar_resistencia_compresor: {
        pregunta_es: "Paso B2: El capacitor se observa en perfecto estado físico y marca los microfaradios correctos en el multímetro. Desconecte la corriente de 120V AC. Retire la tapa plástica superior del compresor y desconecte sus tres cables. Ponga el multímetro en escala de Ohmios (Ω) y mida las tres terminales: C (Común), R (Run) y S (Start). ¿Alguna de las lecturas da 0L / Infinito o marca 0.0 Ω (Continuidad directa a la carcasa de cobre)?",
        pregunta_en: "Step B2: The capacitor appears in perfect physical condition and reads the correct microfarads on the multimeter. Disconnect the 120V AC power. Remove the top plastic cover of the compressor and disconnect its three wires. Set the multimeter to the Ohms (Ω) scale and measure the three terminals: C (Common), R (Run), and S (Start). Do any of the readings show 0L / Infinity or read 0.0 Ω (Direct continuity to the copper housing)?",
        si: "error_compresor_quemado_o_amarrado",
        no: "error_rele_tarjeta_techo"
    },
    error_compresor_quemado_o_amarrado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Bobinado interno del compresor dañado de forma permanente (Abierto, en cortocircuito o aterrizado a chasis).<br><br>
        <b>CORRECCIÓN:</b> El compresor está destruido internamente o mecánicamente amarrado. No intente rearmarlo. Debido al costo del refrigerante ecológico y la mano de obra de soldado bajo la normativa ambiental, la solución estándar certificada de la industria de RVs en EUA es reemplazar la unidad completa de Aire Acondicionado de techo.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Compressor internal winding permanently damaged (Open, shorted, or grounded to chassis).<br><br>
        <b>CORRECTION:</b> The compressor is internally destroyed or mechanically locked. Do not attempt to reset it. Due to the high cost of eco-refrigerant evacuation, recharging, and brazing labor under environmental regulations, the standard certified solution in the US RV industry is to replace the complete rooftop Air Conditioner unit.`,
        imagen: "https://unsplash.com", // Imagen de tuberías / metal
        final: true
    },
    error_rele_tarjeta_techo: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El compresor y el capacitor están sanos eléctricamente, pero la señal de alta potencia de 120V AC no les llega físicamente por bloqueo de control.<br><br>
        <b>CORRECCIÓN:</b> El relé de potencia montado en la tarjeta de control de techo está flameado o el sensor de congelamiento (Freeze Sensor) del evaporador está descalibrado o suelto, lo que hace que la tarjeta corte el compresor por seguridad simulando escarcha. Reemplace el sensor de congelamiento o la tarjeta de techo completa.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The compressor and capacitor are electrically sound, but the high-power 120V AC signal physically fails to reach them due to a control lockout.<br><br>
        <b>CORRECTION:</b> The power relay mounted on the rooftop control board is scorched, or the evaporator Freeze Sensor is out of calibration or unclipped, causing the board to cut power to the compressor for safety by falsely simulating frost buildup. Replace the freeze sensor or the complete rooftop control board.`,
        imagen: "https://unsplash.com", // Tarjeta electrónica
        final: true
    }
};
