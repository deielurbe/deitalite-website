// ===================================
// Translations for deitalite
// ===================================

const translations = {
  en: {
    // Header
    'nav.cta': 'Get Started',

    // Hero Section
    'hero.title': 'A 7-Day Sales Forecast That Automatically Adjusts for Weather',
    'hero.subtitle': 'Reduce food waste by 10-20%, improve staffing efficiency by 5-10%, and plan with confidence. Built for independent restaurants.',
    'hero.cta': 'Get Started for €49',
    'hero.trust': 'No contracts · 30-day access · Setup in 1 day',

    // Problem Section
    'problem.title': 'You\'re Planning Next Week Based on Previous Days\' Numbers — And Hoping Weather Doesn\'t Ruin It',
    'problem.intro': 'As a restaurant manager, you know the drill:',
    'problem.item1': 'Rain hits on Saturday? Your terrace reservations drop 30% and you\'re stuck with excess staff and inventory.',
    'problem.item2': 'Heatwave forecast? You run out of cold drinks and ice cream by 8 PM because you didn\'t see it coming.',
    'problem.item3': 'Cold Sunday? You overstaffed because you were guessing based on last month\'s average.',
    'problem.conclusion': 'The result?',
    'problem.conclusion.text': 'Food waste, labor inefficiency, and constant firefighting. You need better information to make better decisions.',

    // How It Works Section
    'how.title': 'From Your Past Sales to a Live Dashboard in 3 Simple Steps',
    'how.step1.title': 'Upload Your Sales Data',
    'how.step1.text': 'Send us your orders data from your POS system. We need 365 days of historical data.',
    'how.step2.title': 'We Train Your Custom Model',
    'how.step2.text': 'Our approach combines your sales history with weather data (automatically fetched). We study item-level forecasts tailored to your menu and location. Setup time: 1 business day.',
    'how.step3.title': 'Access Your Live Dashboard',
    'how.step3.text': 'Log into your private dashboard to see next 7 days\' demand by item, updated daily with the latest weather forecast. Adjust inventory, preparations and staff accordingly.',

    // Features Section
    'features.title': 'Weather-Smart Forecasting That Fits Your Restaurant',
    'features.item1.title': 'Item-Level Predictions',
    'features.item1.text': 'Forecast sales for every menu item individually. Know exactly how many burgers, salads, and beers to prep for each day of the week.',
    'features.item2.title': 'Automatic Weather Integration',
    'features.item2.text': 'Real-time weather data (temperature, rain) automatically updates your forecast. No manual adjustments needed—we fetch it for you.',
    'features.item3.title': '7-Day Rolling Forecast',
    'features.item3.text': 'See today through next week at a glance. Plan staff schedules and orders with confidence, not guesswork.',
    'features.item4.title': 'Confidence Intervals',
    'features.item4.text': 'Understand uncertainty with upper/lower bounds. Make conservative or aggressive decisions based on your risk tolerance.',
    'features.item5.title': 'Easy CSV Export',
    'features.item5.text': 'Download forecasts to integrate with your existing workflows. Share with kitchen managers, suppliers, or accountants.',
    'features.item6.title': 'No Contracts, No Lock-In',
    'features.item6.text': '30-day access, no long-term commitment. Test the forecasts, measure the impact, decide if it\'s worth continuing.',

    // ROI Section
    'roi.title': 'Better Predictions = Better Profitability',
    'roi.subtitle': 'See how accurate forecasting translates into measurable savings:',
    'roi.stat1.number': '10-20%',
    'roi.stat1.title': 'Reduction in Food Waste',
    'roi.stat1.text': 'By matching prep to actual demand, reduce spoilage and overordering. For a restaurant spending €3,000/month on food, that\'s €300-600/month saved.',
    'roi.stat2.number': '5-10%',
    'roi.stat2.title': 'Improvement in Labor Efficiency',
    'roi.stat2.text': 'Right-size staffing levels based on predicted busy/slow days. Avoid overstaffing on rainy Tuesdays or understaffing on sunny Saturdays.',
    'roi.stat3.number': 'Fewer Stockouts',
    'roi.stat3.title': 'Avoid Costly Surprises',
    'roi.stat3.text': 'Never run out of your best-sellers on unexpected busy days. Weather-aware predictions help you stock the right items at the right time.',
    'roi.example': 'ROI Example: If you save €400/month on waste and labor, the 49€ monthly cost pays for itself 8× over.',

    // Pricing Section
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.badge': 'LIMITED TIME',
    'pricing.price': '€49',
    'pricing.period': '/month',
    'pricing.regular': 'Regular €79/month',
    'pricing.feature1': '✓ Item-level 7-day forecasts',
    'pricing.feature2': '✓ Automatic weather updates',
    'pricing.feature3': '✓ Private dashboard access',
    'pricing.feature4': '✓ CSV export',
    'pricing.feature5': '✓ 1-day onboarding setup',
    'pricing.feature6': '✓ 30-day access (no contract)',
    'pricing.feature7': '✓ Trained custom ML models',
    'pricing.cta': 'Start Your Forecast for €49',
    'pricing.footer': 'No credit card saved · Cancel anytime',

    // FAQ Section
    'faq.title': 'Frequently Asked Questions',
    'faq.q1.question': 'What data do I need to provide?',
    'faq.q1.answer': 'A file with your historical sales (365 days recommended). Required information: date, item name, quantity sold. We can work with exports from most POS systems (Square, Toast, Lightspeed, etc.) or simple Excel files.',
    'faq.q2.question': 'How accurate are the forecasts?',
    'faq.q2.answer': 'Our models are typically within 15-20% of actual sales 80% of the time on holdout data. Accuracy improves with more historical data (1 full year is ideal). We provide confidence intervals so you can plan conservatively or aggressively based on your needs.',
    'faq.q3.question': 'How long does setup take?',
    'faq.q3.answer': '1 business day. Once you share your sales data and answer a short questionnaire (city, operating hours, menu details), we train your models and send you a private link within 24 hours.',
    'faq.q4.question': 'What if I don\'t have 365 days of data?',
    'faq.q4.answer': 'We can work with as little as 90 days, but forecasts will be less accurate. If you\'re a brand new restaurant, wait until you have 9 months of history, then reach out.',
    'faq.q5.question': 'Can I cancel anytime?',
    'faq.q5.answer': 'You pay for 30 days of access upfront. After that, you decide whether to continue at the regular rate or stop. No automatic renewal, no cancellation fees.',
    'faq.q6.question': 'Do you integrate with my POS system?',
    'faq.q6.answer': 'Not yet. Currently, you export your sales data manually and send it to us for initial training. Future versions will support direct API integrations with major POS systems.',
    'faq.q7.question': 'Is my data secure?',
    'faq.q7.answer': 'Yes. All data is stored encrypted, accessed only by you and our training pipeline. We never share your sales data with third parties. See our Privacy Policy for details.',
    'faq.q8.question': 'What cities/countries do you support?',
    'faq.q8.answer': 'We support any city worldwide. Weather data is fetched from OpenMeteo (global coverage). Pricing is in EUR, but we serve restaurants in any location.',

    // Final CTA Section
    'cta.title': 'Start Planning Smarter This Week',
    'cta.subtitle': 'Join the first wave of restaurants using weather-smart forecasts to cut waste and boost efficiency.',
    'cta.button': 'Get Started for €49',
    'cta.urgency': 'Launch pricing available for the first 20 restaurants',

    // Footer
    'footer.tagline': 'Weather-smart restaurant forecasting',
    'footer.links': 'Links',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.faq': 'FAQ',
    'footer.contact': 'Contact',
    'footer.response': 'Response time: 24-48 hours',
    'footer.copyright': '© 2025 deitalite. All rights reserved.'
  },

  nl: {
    // Header
    'nav.cta': 'Aan de slag',

    // Hero Section
    'hero.title': 'Een 7-Daagse Omzetprognose Die Automatisch Corrigeert voor Weer',
    'hero.subtitle': 'Verminder voedselverspilling met 10-20%, verbeter personeelsefficiëntie met 5-10%, en plan met vertrouwen. Gebouwd voor zelfstandige restaurants.',
    'hero.cta': 'Start voor €49',
    'hero.trust': 'Geen contracten · 30 dagen toegang · Opzet in 1 dag',

    // Problem Section
    'problem.title': 'Je Plant Volgende Week Op Basis Van Vorige Dagen — En Hoopt Dat Het Weer Het Niet Verpest',
    'problem.intro': 'Als restaurantmanager ken je het wel:',
    'problem.item1': 'Regen op zaterdag? Je terrasreserveringen dalen met 30% en je zit met teveel personeel en voorraad.',
    'problem.item2': 'Hittegolf voorspeld? Je bent om 20:00 uur door je koude drankjes en ijs heen omdat je het niet zag aankomen.',
    'problem.item3': 'Koude zondag? Je hebt teveel personeel ingepland omdat je giste op basis van vorige maand.',
    'problem.conclusion': 'Het resultaat?',
    'problem.conclusion.text': 'Voedselverspilling, personeelsinefficiëntie, en constant brandjes blussen. Je hebt betere informatie nodig om betere beslissingen te nemen.',

    // How It Works Section
    'how.title': 'Van Je Verkoop Historie Naar Een Live Dashboard in 3 Eenvoudige Stappen',
    'how.step1.title': 'Upload Je Verkoopgegevens',
    'how.step1.text': 'Stuur ons je bestellingsdata vanuit je kassasysteem. We hebben 365 dagen historische data nodig.',
    'how.step2.title': 'Wij Trainen Je Maatwerk Model',
    'how.step2.text': 'Onze aanpak combineert je verkoopgeschiedenis met weerdata (automatisch opgehaald). We bestuderen prognoses op itemniveau, afgestemd op je menu en locatie. Opzettijd: 1 werkdag.',
    'how.step3.title': 'Toegang Tot Je Live Dashboard',
    'how.step3.text': 'Log in op je privé dashboard om de vraag per item voor de komende 7 dagen te zien, dagelijks bijgewerkt met de nieuwste weersvoorspelling. Pas voorraad, voorbereidingen en personeel hierop aan.',

    // Features Section
    'features.title': 'Weerslimme Prognoses Die Bij Je Restaurant Passen',
    'features.item1.title': 'Voorspellingen Per Item',
    'features.item1.text': 'Voorspel verkoop voor elk menu-item afzonderlijk. Weet precies hoeveel burgers, salades en biertjes je moet voorbereiden voor elke dag van de week.',
    'features.item2.title': 'Automatische Weer Integratie',
    'features.item2.text': 'Real-time weerdata (temperatuur, regen) werkt je prognose automatisch bij. Geen handmatige aanpassingen nodig—wij halen het voor je op.',
    'features.item3.title': '7-Daagse Rollende Prognose',
    'features.item3.text': 'Zie vandaag tot volgende week in één oogopslag. Plan personeelsroosters en bestellingen met vertrouwen, geen giswerk.',
    'features.item4.title': 'Betrouwbaarheidsintervallen',
    'features.item4.text': 'Begrijp onzekerheid met boven-/ondergrenzen. Neem conservatieve of agressieve beslissingen op basis van je risicotolerantie.',
    'features.item5.title': 'Eenvoudige CSV Export',
    'features.item5.text': 'Download prognoses om te integreren met je bestaande workflows. Deel met keukenmanagers, leveranciers, of accountants.',
    'features.item6.title': 'Geen Contracten, Geen Lock-In',
    'features.item6.text': '30 dagen toegang, geen lange termijn commitment. Test de prognoses, meet de impact, besluit of het de moeite waard is om door te gaan.',

    // ROI Section
    'roi.title': 'Betere Voorspellingen = Betere Winstgevendheid',
    'roi.subtitle': 'Zie hoe accurate prognoses zich vertalen in meetbare besparingen:',
    'roi.stat1.number': '10-20%',
    'roi.stat1.title': 'Reductie in Voedselverspilling',
    'roi.stat1.text': 'Door bereiding af te stemmen op werkelijke vraag, verminder je bederf en overbestelling. Voor een restaurant dat €3.000/maand aan eten uitgeeft, is dat €300-600/maand bespaard.',
    'roi.stat2.number': '5-10%',
    'roi.stat2.title': 'Verbetering in Arbeidsefficiëntie',
    'roi.stat2.text': 'Stem personeelsniveaus af op voorspelde drukke/rustige dagen. Vermijd overpersoneel op regenachtige dinsdagen of onderpersoneel op zonnige zaterdagen.',
    'roi.stat3.number': 'Minder Tekorten',
    'roi.stat3.title': 'Vermijd Kostbare Verrassingen',
    'roi.stat3.text': 'Raak nooit door je bestsellers heen op onverwacht drukke dagen. Weerbewuste voorspellingen helpen je de juiste items op het juiste moment op voorraad te hebben.',
    'roi.example': 'ROI Voorbeeld: Als je €400/maand bespaart op verspilling en arbeid, betaalt de €49 maandelijkse kosten zich 8× terug.',

    // Pricing Section
    'pricing.title': 'Eenvoudige, Transparante Prijzen',
    'pricing.badge': 'BEPERKTE TIJD',
    'pricing.price': '€49',
    'pricing.period': '/maand',
    'pricing.regular': 'Normaal €79/maand',
    'pricing.feature1': '✓ 7-daagse prognoses per item',
    'pricing.feature2': '✓ Automatische weerupdates',
    'pricing.feature3': '✓ Privé dashboard toegang',
    'pricing.feature4': '✓ CSV export',
    'pricing.feature5': '✓ 1-dag onboarding opzet',
    'pricing.feature6': '✓ 30 dagen toegang (geen contract)',
    'pricing.feature7': '✓ Getrainde maatwerk ML modellen',
    'pricing.cta': 'Start Je Prognose voor €49',
    'pricing.footer': 'Geen creditcard opgeslagen · Altijd opzegbaar',

    // FAQ Section
    'faq.title': 'Veelgestelde Vragen',
    'faq.q1.question': 'Welke data moet ik aanleveren?',
    'faq.q1.answer': 'Een bestand met je historische verkopen (365 dagen aanbevolen). Benodigde informatie: datum, itemnaam, verkochte hoeveelheid. We kunnen werken met exports van de meeste kassasystemen (Square, Toast, Lightspeed, etc.) of eenvoudige Excel-bestanden.',
    'faq.q2.question': 'Hoe nauwkeurig zijn de prognoses?',
    'faq.q2.answer': 'Onze modellen zitten doorgaans binnen 15-20% van de werkelijke verkoop 80% van de tijd op holdout data. Nauwkeurigheid verbetert met meer historische data (1 vol jaar is ideaal). We bieden betrouwbaarheidsintervallen zodat je conservatief of agressief kunt plannen op basis van je behoeften.',
    'faq.q3.question': 'Hoe lang duurt de opzet?',
    'faq.q3.answer': '1 werkdag. Zodra je je verkoopdata deelt en een korte vragenlijst invult (stad, openingstijden, menudetails), trainen we je modellen en sturen we je binnen 24 uur een privé link.',
    'faq.q4.question': 'Wat als ik geen 365 dagen aan data heb?',
    'faq.q4.answer': 'We kunnen werken met zo weinig als 90 dagen, maar prognoses zullen minder nauwkeurig zijn. Als je een gloednieuw restaurant bent, wacht tot je 9 maanden geschiedenis hebt, en neem dan contact op.',
    'faq.q5.question': 'Kan ik altijd opzeggen?',
    'faq.q5.answer': 'Je betaalt vooraf voor 30 dagen toegang. Daarna besluit je of je doorgaat tegen het reguliere tarief of stopt. Geen automatische verlenging, geen opzegkosten.',
    'faq.q6.question': 'Integreren jullie met mijn kassasysteem?',
    'faq.q6.answer': 'Nog niet. Momenteel exporteer je je verkoopdata handmatig en stuur je het naar ons voor de initiële training. Toekomstige versies zullen directe API-integraties met grote kassasystemen ondersteunen.',
    'faq.q7.question': 'Is mijn data veilig?',
    'faq.q7.answer': 'Ja. Alle data wordt versleuteld opgeslagen, alleen toegankelijk door jou en onze training pipeline. We delen je verkoopdata nooit met derden. Zie ons Privacybeleid voor details.',
    'faq.q8.question': 'Welke steden/landen ondersteunen jullie?',
    'faq.q8.answer': 'We ondersteunen elke stad wereldwijd. Weerdata wordt opgehaald van OpenMeteo (wereldwijde dekking). Prijzen zijn in EUR, maar we bedienen restaurants op elke locatie.',

    // Final CTA Section
    'cta.title': 'Begin Deze Week Slimmer Te Plannen',
    'cta.subtitle': 'Sluit je aan bij de eerste golf restaurants die weerslimme prognoses gebruiken om verspilling te verminderen en efficiëntie te verhogen.',
    'cta.button': 'Start voor €49',
    'cta.urgency': 'Launch prijzen beschikbaar voor de eerste 20 restaurants',

    // Footer
    'footer.tagline': 'Weerslimme restaurantprognoses',
    'footer.links': 'Links',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden',
    'footer.faq': 'Veelgestelde Vragen',
    'footer.contact': 'Contact',
    'footer.response': 'Reactietijd: 24-48 uur',
    'footer.copyright': '© 2025 deitalite. Alle rechten voorbehouden.'
  },

  es: {
    // Header
    'nav.cta': 'Comenzar',

    // Hero Section
    'hero.title': 'Una Previsión de Ventas a 7 Días Que Se Ajusta Automáticamente al Clima',
    'hero.subtitle': 'Reduce el desperdicio de alimentos en un 10-20%, mejora la eficiencia del personal en un 5-10%, y planifica con confianza. Creado para restaurantes independientes.',
    'hero.cta': 'Comenzar por €49',
    'hero.trust': 'Sin contratos · 30 días de acceso · Configuración en 1 día',

    // Problem Section
    'problem.title': 'Estás Planificando la Próxima Semana Basándote en los Números de Días Anteriores — Y Esperando Que el Clima No lo Arruine',
    'problem.intro': 'Como gerente de restaurante, conoces la rutina:',
    'problem.item1': '¿Llueve el sábado? Tus reservas en terraza caen un 30% y te quedas con exceso de personal e inventario.',
    'problem.item2': '¿Ola de calor pronosticada? Te quedas sin bebidas frías y helado a las 8 PM porque no lo viste venir.',
    'problem.item3': '¿Domingo frío? Tienes demasiado personal porque estabas adivinando basándote en el promedio del mes pasado.',
    'problem.conclusion': '¿El resultado?',
    'problem.conclusion.text': 'Desperdicio de alimentos, ineficiencia laboral, y constante apagado de incendios. Necesitas mejor información para tomar mejores decisiones.',

    // How It Works Section
    'how.title': 'De Tus Ventas Pasadas a un Panel en Vivo en 3 Simples Pasos',
    'how.step1.title': 'Sube Tus Datos de Ventas',
    'how.step1.text': 'Envíanos tus datos de pedidos desde tu sistema POS. Necesitamos 365 días de datos históricos.',
    'how.step2.title': 'Entrenamos Tu Modelo Personalizado',
    'how.step2.text': 'Nuestro enfoque combina tu historial de ventas con datos meteorológicos (obtenidos automáticamente). Estudiamos pronósticos a nivel de artículo adaptados a tu menú y ubicación. Tiempo de configuración: 1 día hábil.',
    'how.step3.title': 'Accede a Tu Panel en Vivo',
    'how.step3.text': 'Inicia sesión en tu panel privado para ver la demanda de los próximos 7 días por artículo, actualizada diariamente con el pronóstico del tiempo más reciente. Ajusta inventario, preparaciones y personal en consecuencia.',

    // Features Section
    'features.title': 'Pronósticos Inteligentes al Clima Que Se Adaptan a Tu Restaurante',
    'features.item1.title': 'Predicciones por Artículo',
    'features.item1.text': 'Pronostica ventas para cada artículo del menú individualmente. Sabe exactamente cuántas hamburguesas, ensaladas y cervezas preparar para cada día de la semana.',
    'features.item2.title': 'Integración Automática del Clima',
    'features.item2.text': 'Datos meteorológicos en tiempo real (temperatura, lluvia) actualizan automáticamente tu pronóstico. No se necesitan ajustes manuales—nosotros lo obtenemos por ti.',
    'features.item3.title': 'Pronóstico Móvil de 7 Días',
    'features.item3.text': 'Ve desde hoy hasta la próxima semana de un vistazo. Planifica horarios de personal y pedidos con confianza, no con conjeturas.',
    'features.item4.title': 'Intervalos de Confianza',
    'features.item4.text': 'Entiende la incertidumbre con límites superiores/inferiores. Toma decisiones conservadoras o agresivas según tu tolerancia al riesgo.',
    'features.item5.title': 'Exportación CSV Fácil',
    'features.item5.text': 'Descarga pronósticos para integrar con tus flujos de trabajo existentes. Comparte con gerentes de cocina, proveedores o contadores.',
    'features.item6.title': 'Sin Contratos, Sin Bloqueo',
    'features.item6.text': '30 días de acceso, sin compromiso a largo plazo. Prueba los pronósticos, mide el impacto, decide si vale la pena continuar.',

    // ROI Section
    'roi.title': 'Mejores Predicciones = Mejor Rentabilidad',
    'roi.subtitle': 'Ve cómo los pronósticos precisos se traducen en ahorros medibles:',
    'roi.stat1.number': '10-20%',
    'roi.stat1.title': 'Reducción en Desperdicio de Alimentos',
    'roi.stat1.text': 'Al ajustar la preparación a la demanda real, reduce el deterioro y el exceso de pedidos. Para un restaurante que gasta €3.000/mes en comida, eso es €300-600/mes ahorrados.',
    'roi.stat2.number': '5-10%',
    'roi.stat2.title': 'Mejora en Eficiencia Laboral',
    'roi.stat2.text': 'Ajusta los niveles de personal según los días ocupados/lentos previstos. Evita exceso de personal en martes lluviosos o falta de personal en sábados soleados.',
    'roi.stat3.number': 'Menos Desabastecimientos',
    'roi.stat3.title': 'Evita Sorpresas Costosas',
    'roi.stat3.text': 'Nunca te quedes sin tus productos más vendidos en días inesperadamente ocupados. Las predicciones conscientes del clima te ayudan a tener los artículos correctos en el momento correcto.',
    'roi.example': 'Ejemplo de ROI: Si ahorras €400/mes en desperdicio y mano de obra, el costo mensual de €49 se paga solo 8× veces.',

    // Pricing Section
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.badge': 'TIEMPO LIMITADO',
    'pricing.price': '€49',
    'pricing.period': '/mes',
    'pricing.regular': 'Precio regular €79/mes',
    'pricing.feature1': '✓ Pronósticos de 7 días por artículo',
    'pricing.feature2': '✓ Actualizaciones automáticas del clima',
    'pricing.feature3': '✓ Acceso a panel privado',
    'pricing.feature4': '✓ Exportación CSV',
    'pricing.feature5': '✓ Configuración de incorporación de 1 día',
    'pricing.feature6': '✓ 30 días de acceso (sin contrato)',
    'pricing.feature7': '✓ Modelos ML personalizados entrenados',
    'pricing.cta': 'Inicia Tu Pronóstico por €49',
    'pricing.footer': 'Sin tarjeta de crédito guardada · Cancela en cualquier momento',

    // FAQ Section
    'faq.title': 'Preguntas Frecuentes',
    'faq.q1.question': '¿Qué datos necesito proporcionar?',
    'faq.q1.answer': 'Un archivo con tus ventas históricas (se recomiendan 365 días). Información requerida: fecha, nombre del artículo, cantidad vendida. Podemos trabajar con exportaciones de la mayoría de los sistemas POS (Square, Toast, Lightspeed, etc.) o archivos simples de Excel.',
    'faq.q2.question': '¿Qué tan precisos son los pronósticos?',
    'faq.q2.answer': 'Nuestros modelos suelen estar dentro del 15-20% de las ventas reales el 80% del tiempo en datos de retención. La precisión mejora con más datos históricos (1 año completo es ideal). Proporcionamos intervalos de confianza para que puedas planificar de manera conservadora o agresiva según tus necesidades.',
    'faq.q3.question': '¿Cuánto tarda la configuración?',
    'faq.q3.answer': '1 día hábil. Una vez que compartes tus datos de ventas y respondes un breve cuestionario (ciudad, horarios de operación, detalles del menú), entrenamos tus modelos y te enviamos un enlace privado en 24 horas.',
    'faq.q4.question': '¿Qué pasa si no tengo 365 días de datos?',
    'faq.q4.answer': 'Podemos trabajar con tan solo 90 días, pero los pronósticos serán menos precisos. Si eres un restaurante nuevo, espera hasta tener 9 meses de historial, luego contáctanos.',
    'faq.q5.question': '¿Puedo cancelar en cualquier momento?',
    'faq.q5.answer': 'Pagas por 30 días de acceso por adelantado. Después de eso, decides si continuar a la tarifa regular o detenerte. Sin renovación automática, sin tarifas de cancelación.',
    'faq.q6.question': '¿Se integran con mi sistema POS?',
    'faq.q6.answer': 'Todavía no. Actualmente, exportas tus datos de ventas manualmente y nos los envías para el entrenamiento inicial. Las versiones futuras admitirán integraciones API directas con los principales sistemas POS.',
    'faq.q7.question': '¿Mis datos están seguros?',
    'faq.q7.answer': 'Sí. Todos los datos se almacenan encriptados, accesibles solo por ti y nuestra pipeline de entrenamiento. Nunca compartimos tus datos de ventas con terceros. Consulta nuestra Política de Privacidad para más detalles.',
    'faq.q8.question': '¿Qué ciudades/países soportan?',
    'faq.q8.answer': 'Soportamos cualquier ciudad del mundo. Los datos meteorológicos se obtienen de OpenMeteo (cobertura global). Los precios están en EUR, pero servimos a restaurantes en cualquier ubicación.',

    // Final CTA Section
    'cta.title': 'Comienza a Planificar de Manera Más Inteligente Esta Semana',
    'cta.subtitle': 'Únete a la primera ola de restaurantes que utilizan pronósticos inteligentes al clima para reducir el desperdicio y aumentar la eficiencia.',
    'cta.button': 'Comenzar por €49',
    'cta.urgency': 'Precios de lanzamiento disponibles para los primeros 20 restaurantes',

    // Footer
    'footer.tagline': 'Pronósticos de restaurante inteligentes al clima',
    'footer.links': 'Enlaces',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.contact': 'Contacto',
    'footer.response': 'Tiempo de respuesta: 24-48 horas',
    'footer.copyright': '© 2025 deitalite. Todos los derechos reservados.'
  }
};
