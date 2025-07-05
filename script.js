// --- DATABASE & TRANSLATIONS ---
const countries = {
  "Latinoamérica": [
    { name: "Argentina", tz: "America/Argentina/Buenos_Aires", emoji: "🇦🇷" },
    { name: "Bolivia", tz: "America/La_Paz", emoji: "🇧🇴" },
    { name: "Brasil", tz: "America/Sao_Paulo", emoji: "🇧🇷" },
    { name: "Chile", tz: "America/Santiago", emoji: "🇨🇱" },
    { name: "Colombia", tz: "America/Bogota", emoji: "🇨🇴" },
    { name: "Costa Rica", tz: "America/Costa_Rica", emoji: "🇨🇷" },
    { name: "Cuba", tz: "America/Havana", emoji: "🇨🇺" },
    { name: "Ecuador", tz: "America/Guayaquil", emoji: "🇪🇨" },
    { name: "El Salvador", tz: "America/El_Salvador", emoji: "🇸🇻" },
    { name: "Guatemala", tz: "America/Guatemala", emoji: "🇬🇹" },
    { name: "Honduras", tz: "America/Tegucigalpa", emoji: "🇭🇳" },
    { name: "México", tz: "America/Mexico_City", emoji: "🇲🇽" },
    { name: "Nicaragua", tz: "America/Managua", emoji: "🇳🇮" },
    { name: "Panamá", tz: "America/Panama", emoji: "🇵🇦" },
    { name: "Paraguay", tz: "America/Asuncion", emoji: "🇵🇾" },
    { name: "Perú", tz: "America/Lima", emoji: "🇵🇪" },
    { name: "Puerto Rico", tz: "America/Puerto_Rico", emoji: "🇵🇷" },
    { name: "República Dominicana", tz: "America/Santo_Domingo", emoji: "🇩🇴" },
    { name: "Uruguay", tz: "America/Montevideo", emoji: "🇺🇾" },
    { name: "Venezuela", tz: "America/Caracas", emoji: "🇻🇪" }
  ],
  "Norteamérica": [
    { name: "Canada", tz: "America/Toronto", emoji: "🇨🇦" },
    { name: "United States (East)", tz: "America/New_York", emoji: "🇺🇸" },
    { name: "United States (Central)", tz: "America/Chicago", emoji: "🇺🇸" },
    { name: "United States (Mountain)", tz: "America/Denver", emoji: "🇺🇸" },
    { name: "United States (Pacific)", tz: "America/Los_Angeles", emoji: "🇺🇸" }
  ],
  "Europa": [
    { name: "Austria", tz: "Europe/Vienna", emoji: "🇦🇹" },
    { name: "Belgium", tz: "Europe/Brussels", emoji: "🇧🇪" },
    { name: "Denmark", tz: "Europe/Copenhagen", emoji: "🇩🇰" },
    { name: "Finland", tz: "Europe/Helsinki", emoji: "🇫🇮" },
    { name: "France", tz: "Europe/Paris", emoji: "🇫🇷" },
    { name: "Germany", tz: "Europe/Berlin", emoji: "🇩🇪" },
    { name: "Greece", tz: "Europe/Athens", emoji: "🇬🇷" },
    { name: "Ireland", tz: "Europe/Dublin", emoji: "🇮🇪" },
    { name: "Italy", tz: "Europe/Rome", emoji: "🇮🇹" },
    { name: "Netherlands", tz: "Europe/Amsterdam", emoji: "🇳🇱" },
    { name: "Norway", tz: "Europe/Oslo", emoji: "🇳🇴" },
    { name: "Poland", tz: "Europe/Warsaw", emoji: "🇵🇱" },
    { name: "Portugal", tz: "Europe/Lisbon", emoji: "🇵🇹" },
    { name: "Spain", tz: "Europe/Madrid", emoji: "🇪🇸" },
    { name: "Sweden", tz: "Europe/Stockholm", emoji: "🇸🇪" },
    { name: "Switzerland", tz: "Europe/Zurich", emoji: "🇨🇭" },
    { name: "United Kingdom", tz: "Europe/London", emoji: "🇬🇧" }
  ],
  "Asia": [
    { name: "China", tz: "Asia/Shanghai", emoji: "🇨🇳" },
    { name: "Hong Kong", tz: "Asia/Hong_Kong", emoji: "🇭🇰" },
    { name: "India", tz: "Asia/Kolkata", emoji: "🇮🇳" },
    { name: "Indonesia", tz: "Asia/Jakarta", emoji: "🇮🇩" },
    { name: "Israel", tz: "Asia/Jerusalem", emoji: "🇮🇱" },
    { name: "Japan", tz: "Asia/Tokyo", emoji: "🇯🇵" },
    { name: "Malaysia", tz: "Asia/Kuala_Lumpur", emoji: "🇲🇾" },
    { name: "Philippines", tz: "Asia/Manila", emoji: "🇵🇭" },
    { name: "Qatar", tz: "Asia/Qatar", emoji: "🇶🇦" },
    { name: "Saudi Arabia", tz: "Asia/Riyadh", emoji: "🇸🇦" },
    { name: "Singapore", tz: "Asia/Singapore", emoji: "🇸🇬" },
    { name: "South Korea", tz: "Asia/Seoul", emoji: "🇰🇷" },
    { name: "Taiwan", tz: "Asia/Taipei", emoji: "🇹🇼" },
    { name: "Thailand", tz: "Asia/Bangkok", emoji: "🇹🇭" },
    { name: "Turkey", tz: "Europe/Istanbul", emoji: "🇹🇷" },
    { name: "United Arab Emirates", tz: "Asia/Dubai", emoji: "🇦🇪" },
    { name: "Vietnam", tz: "Asia/Ho_Chi_Minh", emoji: "🇻🇳" }
  ],
  "África": [
    { name: "Egypt", tz: "Africa/Cairo", emoji: "🇪🇬" },
    { name: "Ghana", tz: "Africa/Accra", emoji: "🇬🇭" },
    { name: "Kenya", tz: "Africa/Nairobi", emoji: "🇰🇪" },
    { name: "Morocco", tz: "Africa/Casablanca", emoji: "🇲🇦" },
    { name: "Nigeria", tz: "Africa/Lagos", emoji: "🇳🇬" },
    { name: "South Africa", tz: "Africa/Johannesburg", emoji: "🇿🇦" }
  ],
  "Oceanía": [
    { name: "Australia (Sydney)", tz: "Australia/Sydney", emoji: "🇦🇺" },
    { name: "Australia (Perth)", tz: "Australia/Perth", emoji: "🇦🇺" },
    { name: "New Zealand", tz: "Pacific/Auckland", emoji: "🇳🇿" }
  ]
};

const translations = {
  es: {
    appTitle: "Coordinador de Reuniones Multizona",
    title: "Coordinador de Reuniones Multizona",
    templatesLabel: "Plantillas",
    loadTemplateBtn: "Cargar",
    saveTemplateBtn: "Guardar",
    companyLabel: "Empresa",
    meetingTitleLabel: "Título de la reunión",
    descriptionLabel: "Descripción",
    agendaLabel: "Agenda (un punto por línea)",
    hostDateTimeLabel: "Fecha y hora del anfitrión",
    suggestTimeBtn: "Sugerir Hora",
    hostCountryLabel: "País del anfitrión",
    linkLabel: "Enlace a la videollamada",
    countriesLabel: "Selecciona los países participantes",
    visualizerLabel: "Visualizador de Horarios",
    presetGreetingsLabel: "Seleccionar un saludo final",
    farewellLabel: "Mensaje de despedida",
    generateButton: "Generar Mensaje",
    copyButton: "📋 Copiar",
    whatsappButton: "📱 WhatsApp",
    telegramButton: "✈️ Telegram",
    icsButton: "📅 Añadir al Calendario",
    licenseText: "© 2025 - Herramienta desarrollada por Maximiliano.C bajo",
    licenseLink: "Licencia CC BY 4.0",
    alertTitle: "Por favor, ingresa el título de la reunión.",
    alertDateTime: "Por favor, selecciona fecha y hora del anfitrión.",
    alertHostCountry: "Por favor, selecciona el país del anfitrión.",
    alertInvalidDate: "Fecha y hora del anfitrión inválidas.",
    alertNoMessage: "No hay mensaje para copiar.",
    alertMessageCopied: "Mensaje copiado al portapapeles.",
    alertGenerateFirst: "Genera el mensaje primero.",
    hostDateLabel: "Fecha y hora del anfitrión",
    hostCountryInfoLabel: "País anfitrión",
    videoCallLabel: "Enlace a la videollamada",
    regionLabel: "Región",
    placeholderCompany: "Nombre de la empresa",
    placeholderTitle: "Ej: Reunión Estratégica",
    placeholderDescription: "Descripción breve de la reunión",
    placeholderLink: "https://...",
    searchPlaceholder: "Buscar país...",
    placeholderFarewell: "¡Los esperamos!",
    greetings: {
        "¡Saludos cordiales! 👋": "¡Saludos cordiales! 👋",
        "Nos vemos pronto 😊": "Nos vemos pronto 😊",
        "Quedamos atentos 👂": "Quedamos atentos 👂",
        "Gracias por su tiempo 🙏": "Gracias por su tiempo 🙏",
        "¡Los esperamos con entusiasmo! 🎉": "¡Los esperamos con entusiasmo! 🎉",
    }
  },
  en: {
    appTitle: "Multi-Timezone Meeting Coordinator",
    title: "Multi-Timezone Meeting Coordinator",
    templatesLabel: "Templates",
    loadTemplateBtn: "Load",
    saveTemplateBtn: "Save",
    companyLabel: "Company",
    meetingTitleLabel: "Meeting Title",
    descriptionLabel: "Description",
    agendaLabel: "Agenda (one item per line)",
    hostDateTimeLabel: "Host's Date & Time",
    suggestTimeBtn: "Suggest Time",
    hostCountryLabel: "Host's Country",
    linkLabel: "Video Call Link",
    countriesLabel: "Select Participant Countries",
    visualizerLabel: "Timezone Visualizer",
    presetGreetingsLabel: "Select a Closing Greeting",
    farewellLabel: "Farewell Message",
    generateButton: "Generate Message",
    copyButton: "📋 Copy",
    whatsappButton: "📱 WhatsApp",
    telegramButton: "✈️ Telegram",
    icsButton: "📅 Add to Calendar",
    licenseText: "© 2025 - Tool developed by Maximiliano.C under",
    licenseLink: "CC BY 4.0 License",
    alertTitle: "Please enter the meeting title.",
    alertDateTime: "Please select the host's date and time.",
    alertHostCountry: "Please select the host's country.",
    alertInvalidDate: "Invalid host date and time.",
    alertNoMessage: "There is no message to copy.",
    alertMessageCopied: "Message copied to clipboard.",
    alertGenerateFirst: "Please generate the message first.",
    hostDateLabel: "Host's date and time",
    hostCountryInfoLabel: "Host country",
    videoCallLabel: "Video call link",
    regionLabel: "Region",
    placeholderCompany: "Company Name",
    placeholderTitle: "E.g., Strategic Meeting",
    placeholderDescription: "Brief description of the meeting",
    placeholderLink: "https://...",
    searchPlaceholder: "Search for a country...",
    placeholderFarewell: "Looking forward to seeing you!",
    greetings: {
        "Kind regards! 👋": "Kind regards! 👋",
        "See you soon 😊": "See you soon 😊",
        "We'll be waiting 👂": "We'll be waiting 👂",
        "Thank you for your time 🙏": "Thank you for your time 🙏",
        "Looking forward to it! 🎉": "Looking forward to it! 🎉",
    }
  }
};

let currentLang;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('hostDateTime').addEventListener('input', drawTimezoneVisualizer);
    document.getElementById('countries').addEventListener('change', drawTimezoneVisualizer);
    document.getElementById('hostCountry').addEventListener('change', drawTimezoneVisualizer);
    document.getElementById('saveTemplateBtn').addEventListener('click', saveTemplate);
    document.getElementById('loadTemplateBtn').addEventListener('click', loadTemplate);
    document.getElementById('suggestTimeBtn').addEventListener('click', suggestOptimalTime);
    document.getElementById('presetGreetings').addEventListener('change', applyGreeting);

    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    setLanguage(savedLang || browserLang);
    loadTemplates();
});

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  const t = translations[lang];
  document.documentElement.lang = lang;

  // Manera directa y segura de traducir
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('title').textContent = t.title;
  document.getElementById('templatesLabel').textContent = t.templatesLabel;
  document.getElementById('loadTemplateBtn').textContent = t.loadTemplateBtn;
  document.getElementById('saveTemplateBtn').textContent = t.saveTemplateBtn;
  document.getElementById('companyLabel').textContent = t.companyLabel;
  document.getElementById('meetingTitleLabel').textContent = t.meetingTitleLabel;
  document.getElementById('descriptionLabel').textContent = t.descriptionLabel;
  document.getElementById('agendaLabel').textContent = t.agendaLabel;
  document.getElementById('hostDateTimeLabel').textContent = t.hostDateTimeLabel;
  document.getElementById('suggestTimeBtn').textContent = t.suggestTimeBtn;
  document.getElementById('hostCountryLabel').textContent = t.hostCountryLabel;
  document.getElementById('linkLabel').textContent = t.linkLabel;
  document.getElementById('countriesLabel').textContent = t.countriesLabel;
  document.getElementById('visualizerLabel').textContent = t.visualizerLabel;
  document.getElementById('presetGreetingsLabel').textContent = t.presetGreetingsLabel;
  document.getElementById('farewellLabel').textContent = t.farewellLabel;
  document.getElementById('generateButton').textContent = t.generateButton;
  document.getElementById('copyButton').textContent = t.copyButton;
  document.getElementById('whatsappButton').textContent = t.whatsappButton;
  document.getElementById('telegramButton').textContent = t.telegramButton;
  document.getElementById('licenseLink').textContent = t.licenseLink;
  document.getElementById('licenseText').firstChild.nodeValue = t.licenseText + ' ';

  document.getElementById('company').placeholder = t.placeholderCompany;
  document.getElementById('meetingTitle').placeholder = t.placeholderTitle;
  document.getElementById('description').placeholder = t.placeholderDescription;
  document.getElementById('link').placeholder = t.placeholderLink;
  document.getElementById('searchCountry').placeholder = t.searchPlaceholder;
  document.getElementById('farewell').placeholder = t.placeholderFarewell;

  const icsButton = document.getElementById('icsButton');
  if(icsButton) icsButton.textContent = t.icsButton;

  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  loadCountries();
  loadGreetings();
}

// --- TEMPLATE FUNCTIONS ---
function saveTemplate() {
    const templateName = prompt(currentLang === 'es' ? 'Nombre para la plantilla:' : 'Name for the template:');
    if (!templateName) return;
    const selectedCountries = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const template = {
        name: templateName,
        company: document.getElementById('company').value,
        title: document.getElementById('meetingTitle').value,
        description: document.getElementById('description').value,
        agenda: document.getElementById('agenda').value,
        hostCountry: document.getElementById('hostCountry').value,
        link: document.getElementById('link').value,
        selectedCountries: selectedCountries
    };
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    templates.push(template);
    localStorage.setItem('meetingTemplates', JSON.stringify(templates));
    loadTemplates();
}

function loadTemplates() {
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    const select = document.getElementById('templates');
    select.innerHTML = `<option value="">${currentLang === 'es' ? 'Cargar plantilla...' : 'Load template...'}</option>`;
    templates.forEach((t, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = t.name;
        select.appendChild(option);
    });
}

function loadTemplate() {
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    const selectedIndex = document.getElementById('templates').value;
    if (selectedIndex === "") return;
    const t = templates[selectedIndex];
    document.getElementById('company').value = t.company;
    document.getElementById('meetingTitle').value = t.title;
    document.getElementById('description').value = t.description;
    document.getElementById('agenda').value = t.agenda;
    document.getElementById('hostCountry').value = t.hostCountry;
    document.getElementById('link').value = t.link;
    const countriesSelect = document.getElementById('countries');
    Array.from(countriesSelect.options).forEach(option => {
        option.selected = t.selectedCountries.includes(option.value);
    });
    drawTimezoneVisualizer();
}

// --- VISUALIZER AND TIME SUGGESTION LOGIC ---
function drawTimezoneVisualizer() {
    const visualizer = document.getElementById('timezone-visualizer');
    visualizer.innerHTML = ''; 
    const hostDateTimeInput = document.getElementById('hostDateTime').value;
    if (!hostDateTimeInput) return;
    const hostDate = new Date(hostDateTimeInput);
    if (isNaN(hostDate)) return;
    const hostCountryName = document.getElementById('hostCountry').value;
    const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const allNames = [...new Set([hostCountryName, ...selectedCountryNames])].filter(Boolean);
    allNames.forEach(name => {
        const countryData = Object.values(countries).flat().find(c => c.name === name);
        if (!countryData) return;
        const localTime = new Date(hostDate.toLocaleString('en-US', { timeZone: countryData.tz }));
        const hour = localTime.getHours() + localTime.getMinutes() / 60;
        const position = (hour / 24) * 100;
        const marker = document.createElement('div');
        marker.className = 'tz-marker';
        marker.style.left = `${position}%`;
        marker.title = countryData.name;
        const localHourFormatted = localTime.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit', hour12: true });
        marker.innerHTML = `${countryData.emoji}<span class="tz-marker-time">${localHourFormatted}</span>`;
        if (name === hostCountryName) marker.classList.add('is-host');
        const localHour24 = localTime.getHours();
        if (localHour24 >= 7 && localHour24 < 22) {
            marker.classList.add('is-day');
        } else {
            marker.classList.add('is-night');
        }
        visualizer.appendChild(marker);
    });
}

function suggestOptimalTime() {
    const hostCountryName = document.getElementById('hostCountry').value;
    if (!hostCountryName) {
        alert(translations[currentLang].alertHostCountry);
        return;
    }
    const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const allNames = [...new Set([hostCountryName, ...selectedCountryNames])].filter(Boolean);
    const countryObjects = allNames.map(name => Object.values(countries).flat().find(c => c.name === name)).filter(Boolean);
    if (countryObjects.length === 0) return;
    
    let bestSlots = [];
    
    for (let h = 0; h < 24; h++) {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + 1);
        baseDate.setHours(h, 0, 0, 0);

        let score = 0;
        countryObjects.forEach(country => {
            const localTime = new Date(baseDate.toLocaleString('en-US', { timeZone: country.tz }));
            const localHour = localTime.getHours();
            if (localHour >= 7 && localHour < 23) {
                score++;
            }
        });
        bestSlots.push({ hour: h, score: score });
    }

    bestSlots.sort((a, b) => b.score - a.score);
    const topScore = bestSlots[0].score;
    const topSlots = bestSlots.filter(slot => slot.score === topScore);
    const suggestion = topSlots.map(slot => `${slot.hour.toString().padStart(2, '0')}:00`).join(', ');
    
    const userChoice = prompt(
        `${currentLang === 'es' ? 'Horarios sugeridos (más personas despiertas)' : 'Suggested times (most people awake)'}: ${suggestion}\n\n` +
        `${currentLang === 'es' ? 'Elige una hora y escríbela (ej: 9, 14, 21):' : 'Choose an hour and type it (e.g., 9, 14, 21):'}`
    );
    
    if (userChoice && !isNaN(parseInt(userChoice))) {
        const chosenHour = parseInt(userChoice);
        const finalDate = new Date();
        finalDate.setDate(finalDate.getDate() + 1);
        finalDate.setHours(chosenHour, 0, 0, 0);
        
        document.getElementById('hostDateTime').value = finalDate.toISOString().slice(0, 16);
        drawTimezoneVisualizer();
    }
}


// --- CORE HELPER FUNCTIONS ---
function loadCountries() {
  const hostCountrySelect = document.getElementById('hostCountry');
  const countriesSelect = document.getElementById('countries');
  hostCountrySelect.innerHTML = '';
  countriesSelect.innerHTML = '';
  for (const region in countries) {
    const optgroupHost = document.createElement('optgroup');
    optgroupHost.label = region;
    const optgroupParticipants = document.createElement('optgroup');
    optgroupParticipants.label = region;
    countries[region].forEach(country => {
      const optionText = `${country.emoji} ${country.name}`;
      const hostOption = document.createElement('option');
      hostOption.value = country.name;
      hostOption.textContent = optionText;
      optgroupHost.appendChild(hostOption);
      const participantOption = document.c
