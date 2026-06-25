// Base de datos oficial UNIVERSAL, MULTIMARCA, BILINGÜE Y VISUAL para Sistemas de 12V DC y Baterías
const moduloBateriasYDC = {
    badge_es: "12V DC - BAJA TENSIÓN",
    badge_en: "12V DC - LOW VOLTAGE POWER",
    inicio: {
        pregunta_es: "SÍNTOMA PRINCIPAL DE 12V DC: El RV está conectado al poste (o motor encendido), pero las luces interiores están tenues, la bomba de agua no tiene fuerza o las pantallas de 12V parpadean. Con su multímetro en V DC, mida directamente los postes de la batería. ¿El voltaje es MENOR a 12.5V DC?",
        pregunta_en: "MAIN 12V DC SYMPTOM: The RV is plugged into shore power (or engine running), but interior lights are dim, the water pump is weak, or 12V displays flicker. With your multimeter in V DC, measure directly at the battery posts. Is the voltage LESS than 12.5V DC?",
        si: "probar_bateria_bms_litio",
        no: "error_bateria_saludable_puente"
    },
    error_bateria_saludable_puente: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El banco de baterías registra un voltaje nominal de carga óptimo (13.2V - 14.4V DC), indicando que el convertidor/cargador de la sección inferior está enviando corriente.<br><br>
        <b>CORRECCIÓN EN CAMPO:</b> La falta de energía o cortes intermitentes en el interior del RV se deben a un falso contacto crítico en el <b>Battery Disconnect Switch (Interruptor maestro de corte)</b> o a que el fusible/breaker principal de la línea de distribución de la casa (usualmente un fusible tipo maxi de 50A/80A cerca de la batería) está fundido o sulfatado. Verifique continuidad en las terminales físicas del interruptor.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The battery bank registers an optimal nominal charging voltage (13.2V - 14.4V DC), indicating the lower section converter/charger is operating.<br><br>
        <b>FIELD CORRECTION:</b> The lack of power or intermittent cutouts inside the RV is due to a critical loose contact at the <b>Battery Disconnect Switch (Master Cut-off Switch)</b> or the main house distribution line fuse/breaker (usually a 50A/80A maxi-fuse near the battery) is blown or sulfated. Check continuity at the switch terminals.`,
        imagen: "https://unsplash.com", // Imagen ilustrativa de bornes/baterías
        final: true
    },
    probar_bateria_bms_litio: {
        pregunta_es: "Paso B1.1: El voltaje en los postes marca valores críticamente bajos. Determine la tecnología de su banco de baterías. ¿Su sistema utiliza baterías modernas de Litio (LiFePO4) con sistema de gestión BMS integrado?",
        pregunta_en: "Step B1.1: Voltage at the posts reads critically low. Determine your battery bank technology. Does your system use modern Lithium (LiFePO4) batteries with an integrated BMS management system?",
        si: "probar_bms_wakeup_litio",
        no: "probar_salida_convertidor_wfco"
    },
    probar_bms_wakeup_litio: {
        pregunta_es: "Paso B1.2: Las baterías de Litio tienen un cerebro interno (BMS). Mida el voltaje exacto en los postes. ¿El multímetro registra un voltaje absoluto de 0.0V DC o menor a 2.0V DC?",
        pregunta_en: "Step B1.2: Lithium batteries have an internal brain (BMS). Measure the exact voltage at the posts. Does the multimeter register an absolute voltage of 0.0V DC or less than 2.0V DC?",
        si: "error_bms_litio_bloqueado",
        no: "probar_salida_convertidor_wfco"
    },
    error_bms_litio_bloqueado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El circuito de protección BMS de la batería de Litio entró en un bloqueo automático por sobredescarga extrema (Sleep Mode / Hard Lockout).<br><br>
        <b>EXPLICACIÓN DE FÁBRICA (Manual Battle Born / Renogy / Go Power!):</b> Cuando una batería de litio baja de 10V, su BMS corta físicamente los bornes internos abriendo el circuito para evitar celdas muertas irreversibles. Al medir afuera da 0V. El problema es que los convertidores normales (WFCO o Progressive Dynamics viejos) no pueden cargar una batería que marca 0V porque no detectan resistencia ni voltaje inicial.<br><br>
        <b>PROCEDIMIENTO DE DESBLOQUEO (Wake-up Process):</b> Aplique un pulso de 12V directos desde otra batería externa (puente con cables de arranque) o ponga el alternador del motor del RV en marcha por 5 minutos. Este choque de corriente despierta el BMS abriendo los relés internos de protección. Una vez que marque +12V, el cargador del panel la reconocerá y la cargará con normalidad.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The Lithium battery BMS protection circuit entered an automatic lockout due to extreme over-discharge (Sleep Mode / Hard Lockout).<br><br>
        <b>FACTORY EXPLANATION (Battle Born / Renogy / Go Power! Manual):</b> When a lithium battery drops below 10V, its internal BMS physically disconnects the external posts to prevent irreversible cell death. When measuring outside, it reads 0V. Standard converters (older WFCO or Progressive Dynamics) cannot charge a battery reading 0V because they fail to detect initial resistance or voltage.<br><br>
        <b>WAKE-UP PROCEDURE:</b> Apply a direct 12V pulse from an external battery (jump start cables) or run the RV's engine alternator for 5 minutes. This current shock forces the BMS to wake up, re-engaging the internal contactors. Once it reads +12V, the onboard converter/charger will recognize it and resume normal charging.`,
        imagen: "https://unsplash.com",
        final: true
    },
    probar_salida_convertidor_wfco: {
        pregunta_es: "Paso B2: Vaya físicamente al Centro de Carga interno (Marcas: WFCO, Progressive Dynamics o Elkhart Supply). Localice la barra de conexiones de cobre positiva trasera (donde se unen los cables gruesos de salida del convertidor) y la barra de tierra. Mida el voltaje directo de salida del convertidor. ¿Mide entre 13.6V y 14.4V DC?",
        pregunta_en: "Step B2: Go physically to the internal Load Center (Brands: WFCO, Progressive Dynamics, or Elkhart Supply). Locate the rear positive copper connection busbar (where the thick converter output wires meet) and the ground busbar. Measure the direct output voltage of the converter. Does it read between 13.6V and 14.4V DC?",
        si: "probar_continuidad_shunt_chasis",
        no: "probar_fusibles_reversos_wfco"
    },
    probar_continuidad_shunt_chasis: {
        pregunta_es: "Paso B2.1: El convertidor sí emite energía limpia en su propia barra, pero no llega a la batería. Siga el cable negativo (-) de la batería. Muchos RVs modernos tienen un monitor de baterías inteligente (Smart Shunt marcas: Victron, Renogy, Xantrex) atornillado en el cable negativo. Mida la caída de tensión (Ohmios) a través de las terminales metálicas de ese bloque Shunt. ¿Registra continuidad perfecta (0.0 Ω)?",
        pregunta_en: "Step B2.1: The converter does emit clean power on its own busbar, but it doesn't reach the battery. Follow the negative (-) battery cable. Many modern RVs have an intelligent battery monitor (Smart Shunt brands: Victron, Renogy, Xantrex) bolted to the negative cable. Measure the voltage drop (Ohms) across the metal terminals of that Shunt block. Does it register perfect continuity (0.0 Ω)?",
        si: "error_breaker_termico_chasis_disparado",
        no: "error_shunt_abierto_o_sulfatado"
    },
    error_shunt_abierto_o_sulfatado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El monitor de baterías (Smart Shunt) o sus bloques de conexión de cobre están altamente oxidados, sulfatados o el puente interno de aleación de manganina se rompió por un cortocircuito.<br><br>
        <b>EXPLICACIÓN TÉCNICA MULTIMARCA:</b> Toda la corriente de retorno de tierra (-) del RV pasa obligatoriamente por este bloque metálico para poder medir los amperios de consumo. Si se corta o se aísla por óxido, se abre el circuito general de retorno de corriente directas, simulando una batería muerta o desconectada en el interior aunque el convertidor envíe corriente limpia.<br><br>
        <b>CORRECCIÓN:</b> Desmonte el Shunt, limpie las caras de contacto de cobre con lija fina y limpie la corrosión con bicarbonato de sodio. If el puente interno está físicamente fisurado por sobrecorriente, reemplace la unidad Shunt por una nueva.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The battery monitor (Smart Shunt) or its copper connection blocks are highly oxidized, sulfated, or the internal manganin alloy bridge snapped due to a short circuit.<br><br>
        <b>MULTI-BRAND TECHNICAL EXPLANATION:</b> All ground return current (-) from the RV must pass through this metal block to measure power consumption amps. If it breaks or is isolated by rust, the general DC return circuit opens, simulating a dead or disconnected battery inside even though the converter is outputting clean power.<br><br>
        <b>CORRECTION:</b> Dismount the Shunt, clean the copper contact faces with fine-grit sandpaper, and clean corrosion using baking soda. If the internal shunt bridge is physically cracked due to overcurrent, replace the Shunt unit with a new one.`,
        imagen: "https://unsplash.com", // Imagen ilustrativa de shunt/bloque eléctrico
        final: true
    },
    error_breaker_termico_chasis_disparado: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: El convertidor de corriente funciona e intenta cargar, pero la línea positiva principal hacia las baterías está abierta en el tramo expuesto del chasis.<br><br>
        <b>PROCEDIMIENTO DE REPARACIÓN MULTIMARCA:</b><br>
        1. Siga el cable positivo grueso desde el borne positivo de la batería hacia la estructura inferior metálica del chasis.<br>
        2. Localice un pequeño bloque metálico o plástico de 1 pulgada (Marcas: Bussmann / Blue Sea) fijado al metal, llamado <b>Breaker Térmico de Cortocircuito de 12V (Hi-Amp Resettable Breaker)</b> de 30A/40A.<br>
        3. En el 90% de los casos de sobrecarga, una pequeña pestaña de plástico de color negro, gris o amarillo se bota hacia afuera. Presione esa pequeña palanca hacia adentro del bloque para rearmar el trinquete interno y restablecer la continuidad lineal de inmediato.`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: The power converter is functioning and attempting to charge, but the main positive line to the batteries is open along the exposed chassis run.<br><br>
        <b>MULTI-BRAND REPAIR PROCEDURE:</b><br>
        1. Follow the thick positive cable from the battery's positive post toward the lower metal structure of the chassis frame.<br>
        2. Locate a small 1-inch metal or plastic block (Brands: Bussmann / Blue Sea) bolted to the metal, known as a <b>12V Hi-Amp Resettable Short-Circuit Thermal Breaker</b> (30A/40A).<br>
        3. In 90% of overload cases, a small black, gray, or yellow plastic lever pops outward. Firmly press that small lever back into the block to reset the internal latch and instantly restore linear continuity.`,
        imagen: "https://unsplash.com", // Imagen de interruptores térmicos / breakers
        final: true
    },
    probar_fusibles_reversos_wfco: {
        pregunta_es: "Paso B3: El convertidor marca 0V de salida en sus barras traseras de cobre. Localice los dos fusibles de color ÁMBAR (40 Amperios) colocados en el centro del bloque del panel de carga, separados físicamente de la fila de circuitos individuales. ¿Se observan estos dos fusibles de polaridad invertida fundidos, rotos o derretidos en sus patas plásticas?",
        pregunta_en: "Step B3: The converter reads 0V output at its rear copper busbars. Locate the two AMBER fuses (40 Amps) positioned in the center of the load panel block, physically separated from the individual circuit row. Are these reverse polarity fuses blown, broken, or melted at their plastic legs?",
        si: "error_polaridad_invertida_bateria",
        no: "error_wfco_placa_mba_quemada"
    },
    error_polaridad_invertida_bateria: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Fusibles de Protección de Polaridad Inversa (Reverse Polarity Fuses) destruidos por cortocircuito de seguridad física obligatoria.<br><br>
        <b>EXPLICACIÓN DE FÁBRICA MULTIMARCA (Manual WFCO / Progressive Dynamics):</b> Esto ocurre el 100% de las veces cuando el usuario o un técnico conectan los cables de la batería al revés por error. En la industria de los RVs de EUA, el estándar de colores es confuso: el cable Negro es POSITIVO (+) y el cable Blanco es NEGATIVO (-). Si se conecta como un carro (donde negro es tierra), la tarjeta electrónica provocaría un incendio. Para evitarlo, estos dos fusibles de 40A se deforma y funden en microsegundos abriendo el circuito físico.<br><br>
        <b>CORRECCIÓN:</b> Desconecte el RV de los 120V AC. Corrija los cables en los bornes de la batería. Reemplace los dos fusibles tipo cuchilla de 40A por unos nuevos. Si no los cambia, el RV encenderá luces con el poste conectado pero la batería jamás recibirá carga y se vaciará por completo.<br><br>
        <b>ESQUEMA INTEGRAL DE FUSIBLES MULTIMARCA STANDARD:</b><br>
        <pre class="bg-gray-950 p-3 rounded font-mono text-xs text-amber-400 mt-2">
┌──────────────────────────────────────────────────┐
│             DISTRIBUCIÓN DE FUSIBLES 12V DC       │
│                                                  │
│   [ F1 ] [█] 15A - Luces Zona Alta / Techo       │
│   [ F2 ] [█] 15A - Bomba de Agua Automatizada    │
│   [ F3 ] [█] 15A - Horno / Calefacción Forzada   │
│   [ F4 ] [█] 15A - Refrigerador por Absorción    │
│                                                  │
│         FUSIBLES DE PROTECCIÓN INVERSA            │
│         ┌─────────┐      ┌─────────┐             │
│         │  [40A]  │      │  [40A]  │ ◄──[ÁMBAR]  │
│         └─────────┘      └─────────┘             │
│       (Si están rotos, la batería no cargará)     │
└──────────────────────────────────────────────────┘
        </pre>`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Reverse Polarity Protection Fuses destroyed by mandatory physical safety short circuit.<br><br>
        <b>MULTI-BRAND FACTORY EXPLANATION (WFCO / Progressive Dynamics Manual):</b> This occurs 100% of the time when the user or a technician mistakenly connects the battery cables backward. In the US RV industry, the color standard is confusing: the Black wire is POSITIVE (+) and the White wire is NEGATIVO (-). If connected like a car (where black is ground), the electronic board would catch fire. To prevent this, these two 40A fuses bend and blow in microseconds, opening the physical circuit.<br><br>
        <b>CORRECTION:</b> Disconnect the RV from 120V AC. Correct the cables on the battery terminals. Replace both 40A blade fuses with new ones. If you do not change them, the RV will turn on lights with shore power connected, but the battery will never receive a charge and will drain completely.<br><br>
        <b>COMPREHENSIVE MULTI-BRAND FUSE BLOCK SCHEMA:</b><br>
        <pre class="bg-gray-950 p-3 rounded font-mono text-xs text-amber-400 mt-2">
┌──────────────────────────────────────────────────┐
│              12V DC FUSE DISTRIBUTION BLOCK      │
│                                                  │
│   [ F1 ] [█] 15A - High Zone / Ceiling Lights    │
│   [ F2 ] [█] 15A - Automated Water Pump          │
│   [ F3 ] [█] 15A - Furnace / Forced Heat         │
│   [ F4 ] [█] 15A - Absorption Refrigerator       │
│                                                  │
│            REVERSE POLARITY PROTECTION FUSES     │
│         ┌─────────┐      ┌─────────┐             │
│         │  [40A]  │      │  [40A]  │ ◄──[AMBER]  │
│         └─────────┘      └─────────┘             │
│       (If blown or melted, battery won't charge) │
└──────────────────────────────────────────────────┘
        </pre>`,
        imagen: "https://unsplash.com", // Imagen de fusibles / multímetro
        final: true
    },
    error_wfco_placa_mba_quemada: {
        solucion_es: `❌ DIAGNÓSTICO MAESTRO UNIVERSAL: Destrucción interna del puente rectificador de diodos o transistores de conmutación de la sección del convertidor inferior.<br><br>
        <b>PROCEDIMIENTO DE CONTROL DE CALIDAD Y DIAGNÓSTICO:</b><br>
        1. Verifique que estén entrando 120V AC limpios al breaker de 15A del circuito del convertidor dentro del panel principal.<br>
        2. Si hay entrada de 120V AC y los fusibles de polaridad de 40A están totalmente sanos, pero la salida DC mide 0.0V en los bornes traseros, los diodos internos sufrieron un colapso térmico por picos de tensión externos.<br>
        3. <b>CORRECCIÓN:</b> La placa electrónica inferior es una pieza independiente de refacción. No cambie toda la caja plástica del RV; desmonte los dos tornillos de la base inferior y reemplace únicamente el ensamble de la tarjeta principal (WF-8955-MBA Main Board Assembly o equivalente de Progressive Dynamics).`,
        solucion_en: `❌ UNIVERSAL MASTER DIAGNOSIS: Internal destruction of the diode bridge rectifier or switching transistors in the lower converter section.<br><br>
        <b>QUALITY CONTROL AND DIAGNOSSTIC PROCEDURE:</b><br>
        1. Verify that clean 120V AC is entering the 15A converter circuit breaker inside the main panel.<br>
        2. If there is 120V AC input and the 40A reverse polarity fuses are completely healthy, but the DC output measures 0.0V at the rear terminals, the internal diodes suffered a thermal breakdown due to external voltage spikes.<br>
        3. <b>CORRECTION:</b> The lower electronic board is an independent replacement part. Do not replace the entire RV plastic housing; remove the two bottom base screws and replace only the main board assembly (WF-8955-MBA Main Board Assembly or Progressive Dynamics equivalent).`,
        imagen: "https://unsplash.com", // Imagen de tarjeta quemada / electrónica
        final: true
    }
};
