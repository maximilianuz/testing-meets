// --- DATABASE & TRANSLATIONS ---
const countries = {
  latinAmerica: [
    { name: "Argentina", tz: "America/Argentina/Buenos_Aires", emoji: "🇦🇷" },
    { name: "Bolivia", tz: "America/La_Paz", emoji: "🇧🇴" },
    { name: "Brazil (East)", tz: "America/Sao_Paulo", emoji: "🇧🇷" },
    { name: "Brazil (West)", tz: "America/Manaus", emoji: "🇧🇷" },
    { name: "Chile", tz: "America/Santiago", emoji: "🇨🇱" },
    { name: "Colombia", tz: "America/Bogota", emoji: "🇨🇴" },
    { name: "Costa Rica", tz: "America/Costa_Rica", emoji: "🇨🇷" },
    { name: "Cuba", tz: "America/Havana", emoji: "🇨🇺" },
    { name: "Ecuador", tz: "America/Guayaquil", emoji: "🇪🇨" },
    { name: "El Salvador", tz: "America/El_Salvador", emoji: "🇸🇻" },
    { name: "Guatemala", tz: "America/Guatemala", emoji: "🇬🇹" },
    { name: "Honduras", tz: "America/Tegucigalpa", emoji: "🇭🇳" },
    { name: "Mexico (Central)", tz: "America/Mexico_City", emoji: "🇲🇽" },
    { name: "Mexico (Pacific)", tz: "America/Mazatlan", emoji: "🇲🇽" },
    { name: "Nicaragua", tz: "America/Managua", emoji: "🇳🇮" },
    { name: "Panama", tz: "America/Panama", emoji: "🇵🇦" },
    { name: "Paraguay", tz: "America/Asuncion", emoji: "🇵🇾" },
    { name: "Peru", tz: "America/Lima", emoji: "🇵🇪" },
    { name: "Puerto Rico", tz: "America/Puerto_Rico", emoji: "🇵🇷" },
    { name: "Dominican Republic", tz: "America/Santo_Domingo", emoji: "🇩🇴" },
    { name: "Uruguay", tz: "America/Montevideo", emoji: "🇺🇾" },
    { name: "Venezuela", tz: "America/Caracas", emoji: "🇻🇪" }
  ],
  northAmerica: [
    { name: "Canada (Atlantic)", tz: "America/Halifax", emoji: "🇨🇦" },
    { name: "Canada (Eastern)", tz: "America/Toronto", emoji: "🇨🇦" },
    { name: "Canada (Central)", tz: "America/Winnipeg", emoji: "🇨🇦" },
    { name: "Canada (Mountain)", tz: "America/Edmonton", emoji: "🇨🇦" },
    { name: "Canada (Pacific)", tz: "America/Vancouver", emoji: "🇨🇦" },
    { name: "USA (Eastern)", tz: "America/New_York", emoji: "🇺🇸" },
    { name: "USA (Central)", tz: "America/Chicago", emoji: "🇺🇸" },
    { name: "USA (Mountain)", tz: "America/Denver", emoji: "🇺🇸" },
    { name: "USA (Pacific)", tz: "America/Los_Angeles", emoji: "🇺🇸" },
    { name: "USA (Alaska)", tz: "America/Anchorage", emoji: "🇺🇸" },
    { name: "USA (Hawaii)", tz: "Pacific/Honolulu", emoji: "🇺🇸" }
  ],
  europe: [
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
    { name: "Turkey", tz: "Europe/Istanbul", emoji: "🇹🇷" },
    { name: "United Kingdom", tz: "Europe/London", emoji: "🇬🇧" }
  ],
  asia: [
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
    { name: "United Arab Emirates", tz: "Asia/Dubai", emoji: "🇦🇪" },
    { name: "Vietnam", tz: "Asia/Ho_Chi_Minh", emoji: "🇻🇳" }
  ],
  africa: [
    { name: "Egypt", tz: "Africa/Cairo", emoji: "🇪🇬" },
    { name: "Ghana", tz: "Africa/Accra", emoji: "🇬🇭" },
    { name: "Kenya", tz: "Africa/Nairobi", emoji: "🇰🇪" },
    { name: "Morocco", tz: "Africa/Casablanca", emoji: "🇲🇦" },
    { name: "Nigeria", tz: "Africa/Lagos", emoji: "🇳🇬" },
    { name: "South Africa", tz: "Africa/Johannesburg", emoji: "🇿🇦" }
  ],
  oceania: [
    { name: "Australia (Sydney)", tz: "Australia/Sydney", emoji: "🇦🇺" },
    { name: "Australia (Perth)", tz: "Australia/Perth", emoji: "🇦🇺" },
    { name: "Australia (Adelaide)", tz: "Australia/Adelaide", emoji: "🇦🇺" },
    { name: "New Zealand", tz: "Pacific/Auckland", emoji: "🇳🇿" }
  ]
};

const translations = {
  es: {
    appTitle: "Coordinador de Reuniones Multizona",
    title: "Coordinador de Reuniones Multizona",
    templatesLabel: "Plantillas",
    loadTemplateBtn: "Cargar plantilla seleccionada",
    saveTemplateBtn: "Guardar configuración actual como plantilla",
    companyLabel: "Empresa (Opcional)",
    meetingTitleLabel: "Título de la reunión",
    descriptionLabel: "Descripción (Opcional)",
    agendaLabel: "Agenda (un punto por línea)",
    hostDateTimeLabel: "Fecha y hora del anfitrión",
    durationLabel: "Duración (minutos)",
    suggestTimeBtn: "Sugerir hora óptima",
    hostCountryLabel: "País del anfitrión",
    linkLabel: "Enlace a la videollamada",
    countriesLabel: "Selecciona los países participantes",
    customTzLabel: "Añadir zona horaria manual (IANA)",
    visualizerLabel: "Visualizador de Horarios",
    presetGreetingsLabel: "Seleccionar un saludo final",
    farewellLabel: "Mensaje de despedida",
    generateButton: "Generar Mensaje",
    copyButton: "COPIAR",
    icsButton: "Añadir al Calendario",
    resetButtonTitle: "Limpiar formulario",
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
    regionLabel: "Horarios por Región",
    agendaTitle: "Agenda",
    placeholderCompany: "Nombre de la empresa",
    placeholderTitle: "Ej: Reunión Estratégica",
    placeholderDescription: "Descripción breve de la reunión",
    placeholderLink: "https://...",
    searchPlaceholder: "Buscar país...",
    placeholderFarewell: "¡Los esperamos!",
    suggestedTimesTitle: "Horas sugeridas (más personas en horario laboral):",
    compactMessageLabel: "Generar mensaje compacto (una sola línea)",
    addBtn: "Añadir",
    greetings: {
        "¡Saludos cordiales! 👋": "¡Saludos cordiales! 👋",
        "Nos vemos pronto 😊": "Nos vemos pronto 😊",
        "Quedamos atentos 👂": "Quedamos atentos 👂",
        "Gracias por su tiempo 🙏": "Gracias por su tiempo 🙏",
        "¡Los esperamos con entusiasmo! 🎉": "¡Los esperamos con entusiasmo! 🎉",
    },
    regions: {
        latinAmerica: "Latinoamérica",
        northAmerica: "Norteamérica",
        europe: "Europa",
        asia: "Asia",
        africa: "África",
        oceania: "Oceanía",
        custom: "Personalizado"
    }
  },
  en: {
    appTitle: "Multi-Timezone Meeting Coordinator",
    title: "Multi-Timezone Meeting Coordinator",
    templatesLabel: "Templates",
    loadTemplateBtn: "Load selected template",
    saveTemplateBtn: "Save current settings as a template",
    companyLabel: "Company (Optional)",
    meetingTitleLabel: "Meeting Title",
    descriptionLabel: "Description (Optional)",
    agendaLabel: "Agenda (one item per line)",
    hostDateTimeLabel: "Host's Date & Time",
    durationLabel: "Duration (minutes)",
    suggestTimeBtn: "Suggest optimal time",
    hostCountryLabel: "Host's Country",
    linkLabel: "Video Call Link",
    countriesLabel: "Select Participant Countries",
    customTzLabel: "Add Manual Timezone (IANA)",
    visualizerLabel: "Timezone Visualizer",
    presetGreetingsLabel: "Select a Closing Greeting",
    farewellLabel: "Farewell Message",
    generateButton: "Generate Message",
    copyButton: "COPY",
    icsButton: "Add to Calendar",
    resetButtonTitle: "Reset form",
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
    regionLabel: "Times by Region",
    agendaTitle: "Agenda",
    placeholderCompany: "Company Name",
    placeholderTitle: "E.g., Strategic Meeting",
    placeholderDescription: "Brief description of the meeting",
    placeholderLink: "https://...",
    searchPlaceholder: "Search for a country...",
    placeholderFarewell: "Looking forward to seeing you!",
    suggestedTimesTitle: "Suggested times (most people in working hours):",
    compactMessageLabel: "Generate compact message (single line)",
    addBtn: "Add",
    greetings: {
        "Kind regards! 👋": "Kind regards! 👋",
        "See you soon 😊": "See you soon 😊",
        "We'll be waiting 👂": "We'll be waiting 👂",
        "Thank you for your time 🙏": "Thank you for your time 🙏",
        "Looking forward to it! 🎉": "Looking forward to it! 🎉",
    },
    regions: {
        latinAmerica: "Latin America",
        northAmerica: "North America",
        europe: "Europe",
        asia: "Asia",
        africa: "Africa",
        oceania: "Oceania",
        custom: "Custom"
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
    document.getElementById('addTzBtn').addEventListener('click', addCustomTimezone);

    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    setLanguage(savedLang || browserLang);

    loadState();
});

function saveState() {
    const state = {};
    document.querySelectorAll('.save-state').forEach(el => {
        state[el.id] = el.type === 'checkbox' ? el.checked : el.value;
    });
    state.countries = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    localStorage.setItem('meetingCoordinatorState', JSON.stringify(state));
}

function loadState() {
    const state = JSON.parse(localStorage.getItem('meetingCoordinatorState'));
    if (state) {
        document.querySelectorAll('.save-state').forEach(el => {
            if (state[el.id] !== undefined) {
                if(el.type === 'checkbox') {
                    el.checked = state[el.id];
                } else {
                    el.value = state[el.id];
                }
            }
        });
        if (state.countries) {
            const countriesSelect = document.getElementById('countries');
            // We need to make sure countries are loaded before we can select them
            setTimeout(() => {
                 Array.from(countriesSelect.options).forEach(option => {
                    option.selected = state.countries.includes(option.value);
                });
                drawTimezoneVisualizer();
            }, 100);
        }
    }
    document.querySelectorAll('.save-state, .save-state-multiple').forEach(el => {
        el.addEventListener('change', saveState);
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
           el.addEventListener('keyup', saveState);
        }
    });
}


function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  const t = translations[lang];
  document.documentElement.lang = lang;

  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('title').textContent = t.title;
  document.getElementById('templatesLabel').textContent = t.templatesLabel;
  document.querySelector('#loadTemplateBtn').title = t.loadTemplateBtn;
  document.querySelector('#saveTemplateBtn').title = t.saveTemplateBtn;
  document.getElementById('companyLabel').textContent = t.companyLabel;
  document.getElementById('meetingTitleLabel').textContent = t.meetingTitleLabel;
  document.getElementById('descriptionLabel').textContent = t.descriptionLabel;
  document.getElementById('agendaLabel').textContent = t.agendaLabel;
  document.getElementById('hostDateTimeLabel').textContent = t.hostDateTimeLabel;
  document.getElementById('durationLabel').textContent = t.durationLabel;
  document.querySelector('#suggestTimeBtn').title = t.suggestTimeBtn;
  document.getElementById('hostCountryLabel').textContent = t.hostCountryLabel;
  document.getElementById('linkLabel').textContent = t.linkLabel;
  document.getElementById('countriesLabel').textContent = t.countriesLabel;
  document.getElementById('customTzLabel').textContent = t.customTzLabel;
  document.getElementById('addTzBtn').textContent = t.addBtn;
  document.getElementById('visualizerLabel').textContent = t.visualizerLabel;
  document.getElementById('presetGreetingsLabel').textContent = t.presetGreetingsLabel;
  document.getElementById('farewellLabel').textContent = t.farewellLabel;
  document.getElementById('generateButton').textContent = t.generateButton;
  document.getElementById('resetButton').title = t.resetButtonTitle;
  document.querySelector('#copyButton').lastChild.nodeValue = ` ${t.copyButton}`;
  document.getElementById('licenseLink').textContent = t.licenseLink;
  document.getElementById('licenseText').firstChild.nodeValue = t.licenseText + ' ';
  document.getElementById('compactMessageLabel').textContent = t.compactMessageLabel;

  document.getElementById('company').placeholder = t.placeholderCompany;
  document.getElementById('meetingTitle').placeholder = t.placeholderTitle;
  document.getElementById('description').placeholder = t.placeholderDescription;
  document.getElementById('link').placeholder = t.placeholderLink;
  document.getElementById('searchCountry').placeholder = t.searchPlaceholder;
  document.getElementById('farewell').placeholder = t.placeholderFarewell;

  const icsButton = document.getElementById('icsButton');
  if (icsButton) {
      const icon = '📅 ';
      icsButton.textContent = icon + t.icsButton;
  }

  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  loadCountries();
  loadGreetings();
  loadTemplates();
  drawTimezoneVisualizer();
}

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
        duration: document.getElementById('duration').value,
        selectedCountries: selectedCountries,
        farewell: document.getElementById('farewell').value,
        compact: document.getElementById('compactMessage').checked
    };
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    templates.push(template);
    localStorage.setItem('meetingTemplates', JSON.stringify(templates));
    loadTemplates();
}

function loadTemplates() {
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    const select = document.getElementById('templates');
    const currentSelection = select.value;
    select.innerHTML = `<option value="">${currentLang === 'es' ? 'Cargar plantilla...' : 'Load template...'}</option>`;
    templates.forEach((t, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = t.name;
        select.appendChild(option);
    });
    select.value = currentSelection;
}

function loadTemplate() {
    let templates = JSON.parse(localStorage.getItem('meetingTemplates')) || [];
    const selectedIndex = document.getElementById('templates').value;
    if (selectedIndex === "") return;
    const t = templates[selectedIndex];
    document.getElementById('company').value = t.company || '';
    document.getElementById('meetingTitle').value = t.title || '';
    document.getElementById('description').value = t.description || '';
    document.getElementById('agenda').value = t.agenda || '';
    document.getElementById('hostCountry').value = t.hostCountry || '';
    document.getElementById('link').value = t.link || '';
    document.getElementById('duration').value = t.duration || '60';
    document.getElementById('farewell').value = t.farewell || '';
    document.getElementById('compactMessage').checked = t.compact || false;

    const countriesSelect = document.getElementById('countries');
    Array.from(countriesSelect.options).forEach(option => {
        option.selected = t.selectedCountries ? t.selectedCountries.includes(option.value) : false;
    });
    drawTimezoneVisualizer();
    saveState();
}

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
    const allCountryObjects = Object.values(countries).flat();

    allNames.forEach(name => {
        const countryData = allCountryObjects.find(c => c.name === name);
        if (!countryData) return;

        const localTime = new Date(hostDate.toLocaleString('en-US', { timeZone: countryData.tz }));
        const hour = localTime.getHours() + localTime.getMinutes() / 60;
        const position = (hour / 24) * 100;

        const marker = document.createElement('div');
        marker.className = 'tz-marker';
        marker.style.left = `${position}%`;
        marker.title = `${countryData.name} (${countryData.tz})`;
        
        const localHourFormatted = localTime.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit', hour12: false });
        marker.innerHTML = `${countryData.emoji}<span class="tz-marker-time">${localHourFormatted}</span>`;

        if (name === hostCountryName) marker.classList.add('is-host');
        
        const localHour24 = localTime.getHours();
        if (localHour24 >= 8 && localHour24 < 22) {
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
    const allDbObjects = Object.values(countries).flat();
    const countryObjects = allNames.map(name => allDbObjects.find(c => c.name === name)).filter(Boolean);

    if (countryObjects.length === 0) return;

    let bestSlots = [];
    for (let i = 0; i < 48; i++) {
        const baseDate = new Date();
        baseDate.setDate(baseDate.getDate() + 1);
        baseDate.setHours(Math.floor(i / 2), (i % 2) * 30, 0, 0);

        let score = 0;
        countryObjects.forEach(country => {
            const localTime = new Date(baseDate.toLocaleString('en-US', { timeZone: country.tz }));
            const localHour = localTime.getHours();
            if (localHour >= 9 && localHour < 17) {
                score += 2;
            } else if (localHour >= 8 && localHour < 22) {
                score += 1;
            }
        });
        bestSlots.push({ date: baseDate, score: score });
    }

    bestSlots.sort((a, b) => b.score - a.score);
    
    const suggestionBox = document.getElementById('suggestion-box');
    suggestionBox.innerHTML = '';

    const topScore = bestSlots[0].score;
    const topSlots = bestSlots.filter(slot => slot.score === topScore).slice(0, 5);

    if(topSlots.length > 0) {
        const title = document.createElement('p');
        title.textContent = translations[currentLang].suggestedTimesTitle;
        title.style.width = '100%';
        title.style.margin = '0 0 5px 0';
        suggestionBox.appendChild(title);
    }
    
    topSlots.forEach((slot, index) => {
        const chip = document.createElement('div');
        chip.className = 'suggestion-chip';
        if(index === 0) chip.classList.add('best');
        chip.textContent = slot.date.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit', hour12: false });
        chip.onclick = () => {
            const finalDate = new Date(slot.date.getTime() - (slot.date.getTimezoneOffset() * 60000));
            document.getElementById('hostDateTime').value = finalDate.toISOString().slice(0, 16);
            drawTimezoneVisualizer();
            suggestionBox.innerHTML = '';
            saveState();
        };
        suggestionBox.appendChild(chip);
    });
}


function loadCountries() {
  const hostCountrySelect = document.getElementById('hostCountry');
  const countriesSelect = document.getElementById('countries');
  const savedHost = hostCountrySelect.value;
  const savedCountries = Array.from(countriesSelect.selectedOptions).map(o => o.value);

  hostCountrySelect.innerHTML = '';
  countriesSelect.innerHTML = '';

  const regionNames = translations[currentLang].regions;

  for (const regionKey in countries) {
    const optgroupHost = document.createElement('optgroup');
    optgroupHost.label = regionNames[regionKey] || regionKey;
    const optgroupParticipants = document.createElement('optgroup');
    optgroupParticipants.label = regionNames[regionKey] || regionKey;

    countries[regionKey].forEach(country => {
      const optionText = `${country.emoji} ${country.name}`;
      
      const hostOption = document.createElement('option');
      hostOption.value = country.name;
      hostOption.textContent = optionText;
      optgroupHost.appendChild(hostOption);

      const participantOption = document.createElement('option');
      participantOption.value = country.name;
      participantOption.textContent = optionText;
      optgroupParticipants.appendChild(participantOption);
    });
    hostCountrySelect.appendChild(optgroupHost);
    countriesSelect.appendChild(optgroupParticipants);
  }
  
  hostCountrySelect.value = savedHost;
  savedCountries.forEach(val => {
      const opt = countriesSelect.querySelector(`option[value="${val}"]`);
      if(opt) opt.selected = true;
  });
}

function loadGreetings() {
    const select = document.getElementById('presetGreetings');
    select.innerHTML = '';
    const greetings = translations[currentLang].greetings;
    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.textContent = `— ${currentLang === 'es' ? 'Elegir saludo' : 'Choose greeting'} —`;
    select.appendChild(defaultOption);
    for (const key in greetings) {
        const option = document.createElement('option');
        option.value = greetings[key];
        option.textContent = key;
        select.appendChild(option);
    }
}

function applyGreeting() {
  document.getElementById('farewell').value = document.getElementById('presetGreetings').value;
  saveState();
}

function filterCountries() {
  const filter = document.getElementById('searchCountry').value.toLowerCase();
  const options = document.querySelectorAll('#countries option, #countries optgroup');
  options.forEach(el => {
      if(el.tagName === 'OPTION') {
          const text = el.textContent.toLowerCase();
          el.style.display = text.includes(filter) ? '' : 'none';
      }
  });

  document.querySelectorAll('#countries optgroup').forEach(group => {
      const visibleOptions = Array.from(group.children).some(opt => opt.style.display !== 'none');
      group.style.display = visibleOptions ? '' : 'none';
  });
}

function addCustomTimezone() {
    const tzInput = document.getElementById('customTz');
    const tzValue = tzInput.value.trim();
    if (!tzValue) return;

    try {
        new Intl.DateTimeFormat("en-US", { timeZone: tzValue }).format();

        const countriesSelect = document.getElementById('countries');
        const regionNames = translations[currentLang].regions;
        const customRegionName = regionNames.custom || 'Custom';
        
        let optgroup = countriesSelect.querySelector(`optgroup[label="${customRegionName}"]`);

        if (!optgroup) {
            optgroup = document.createElement('optgroup');
            optgroup.label = customRegionName;
            countriesSelect.appendChild(optgroup);
        }

        if (!countriesSelect.querySelector(`option[value="${tzValue}"]`)) {
            const option = document.createElement('option');
            option.value = tzValue;
            option.textContent = `⚙️ ${tzValue}`;
            option.selected = true;
            optgroup.appendChild(option);
            
            if(!countries.custom) {
                countries.custom = [];
            }
            if(!countries.custom.some(c => c.name === tzValue)) {
                 countries.custom.push({ name: tzValue, tz: tzValue, emoji: '⚙️' });
            }
           
            drawTimezoneVisualizer();
            saveState();
        }
        tzInput.value = '';
    } catch (e) {
        alert(`'${tzValue}' is not a valid IANA timezone.`);
    }
}


function convertToTimeZone(date, timeZone) {
  if (!date) return '—';
  try {
    return new Intl.DateTimeFormat(currentLang, {
      hour: 'numeric', minute: 'numeric', hour12: false, timeZone: timeZone
    }).format(date);
  } catch { return '—'; }
}

function generateICS(date, title, description, company, link, agenda, duration) {
    const toICSDate = (d) => d.toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z';
    const startDate = toICSDate(date);
    const durationMinutes = parseInt(duration, 10) || 60;
    const endDate = toICSDate(new Date(date.getTime() + durationMinutes * 60 * 1000));

    let icsDescription = description;
    if (agenda) {
      const agendaPoints = agenda.split('\n').map(point => `- ${point.trim()}`).join('\\n');
      icsDescription += `\\n\\nAgenda:\\n${agendaPoints}`;
    }

    const icsContent = [
        'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ChronosyncInterface//v1.0//EN',
        'BEGIN:VEVENT', `UID:${Date.now()}@chronosync.app`,
        `DTSTAMP:${startDate}`, `DTSTART:${startDate}`, `DTEND:${endDate}`,
        `SUMMARY:${title}`, `DESCRIPTION:${icsDescription.replace(/\n/g, '\\n')}`,
        `LOCATION:${link}`, `ORGANIZER;CN=${company || 'Host'}:mailto:noreply@chronosync.app`,
        'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    let downloadButton = document.getElementById('icsButton');
    if (!downloadButton) {
        downloadButton = document.createElement('button');
        downloadButton.id = 'icsButton';
        document.querySelector('.share-buttons').appendChild(downloadButton);
    }
    
    downloadButton.innerHTML = `📅 ${translations[currentLang].icsButton}`;
    downloadButton.onclick = () => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.replace(/ /g, '_')}.ics`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };
}

function generateMessage() {
    const t = translations[currentLang];
    const company = document.getElementById('company').value.trim();
    const title = document.getElementById('meetingTitle').value.trim().toUpperCase();
    const description = document.getElementById('description').value.trim();
    const agenda = document.getElementById('agenda').value.trim();
    const hostDateTimeInput = document.getElementById('hostDateTime').value;
    const hostCountryName = document.getElementById('hostCountry').value;
    const link = document.getElementById('link').value.trim();
    const farewell = document.getElementById('farewell').value.trim() || t.placeholderFarewell;
    const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const duration = document.getElementById('duration').value;
    const isCompact = document.getElementById('compactMessage').checked;

    if (!title) { alert(t.alertTitle); return; }
    if (!hostDateTimeInput) { alert(t.alertDateTime); return; }
    if (!hostCountryName) { alert(t.alertHostCountry); return; }
    
    const hostDate = new Date(hostDateTimeInput);
    if (isNaN(hostDate)) { alert(t.alertInvalidDate); return; }

    const allCountryObjects = Object.values(countries).flat();
    const hostCountryData = allCountryObjects.find(c => c.name === hostCountryName);
    if(!hostCountryData) return;

    const { tz: hostTz, emoji: hostCountryEmoji } = hostCountryData;

    const hostDateString = new Intl.DateTimeFormat(currentLang, {
        dateStyle: 'full', timeStyle: 'short', hour12: false, timeZone: hostTz
    }).format(hostDate);

    const nl = isCompact ? ' | ' : '\n';
    const dnl = isCompact ? ' | ' : '\n\n';
    const indent = isCompact ? ' ' : '  - ';

    let message = '';
    if (company) message += `🏢 *${company}*${dnl}`;
    message += `📌 *${title}*${nl}`;
    if (description) message += `_${description}_${nl}`;
    if (agenda) {
        const agendaPoints = agenda.split('\n').map(point => `${indent}${point.trim()}`).join(nl);
        message += `${dnl}*${t.agendaTitle}:*${nl}${agendaPoints}`;
    }
    message += `${dnl}*${t.hostDateLabel}:*${nl}${hostDateString}${nl}`;
    message += `*${t.hostCountryInfoLabel}:* ${hostCountryEmoji} ${hostCountryName}`;
    if(link) message += `${dnl}*${t.videoCallLabel}:*${nl}${link}`;

    const finalCountries = [...new Set([hostCountryName, ...selectedCountryNames])].filter(Boolean);
    const selectedByRegion = {};

    finalCountries.forEach(countryName => {
        const countryData = allCountryObjects.find(c => c.name === countryName);
        if (!countryData) return;
        
        let regionKey = Object.keys(countries).find(r => countries[r].some(c => c.name === countryName));
        if(!regionKey) regionKey = 'custom';
        
        if (!selectedByRegion[regionKey]) {
            selectedByRegion[regionKey] = [];
        }
        if (!selectedByRegion[regionKey].some(c => c.name === countryName)) {
            selectedByRegion[regionKey].push(countryData);
        }
    });
    
    const regionNames = t.regions;
    for (const regionKey in selectedByRegion) {
        message += `${dnl}*${regionNames[regionKey] || regionKey}*${nl}`;
        selectedByRegion[regionKey].sort((a,b) => a.name.localeCompare(b.name)).forEach(c => {
            const time = convertToTimeZone(hostDate, c.tz);
            message += `${c.emoji} ${c.name}: *${time}*${isCompact ? '; ' : '\n'}`;
        });
        if(isCompact) message = message.slice(0, -2); // Remove last separator
    }

    message += `${dnl}${farewell}`;
    document.getElementById('output').textContent = message;

    const existingICSButton = document.getElementById('icsButton');
    if (existingICSButton) existingICSButton.remove();
    generateICS(hostDate, title, description, company, link, agenda, duration);
}


function copyToClipboard() {
  const output = document.getElementById('output').textContent;
  if (!output) { alert(translations[currentLang].alertNoMessage); return; }
  navigator.clipboard.writeText(output).then(() => {
    alert(translations[currentLang].alertMessageCopied);
  });
}

function share(platform) {
  const output = document.getElementById('output').textContent;
  if (!output) { alert(translations[currentLang].alertGenerateFirst); return; }
  const encodedMessage = encodeURIComponent(output);
  let url = '';
  if (platform === 'whatsapp') {
    url = `https://api.whatsapp.com/send?text=${encodedMessage}`;
  } else if (platform === 'telegram') {
    url = `https://t.me/share/url?url=meeting&text=${encodedMessage}`;
  }
  if (url) window.open(url, '_blank');
}

function resetForm() {
    document.querySelectorAll('input, textarea, select').forEach(el => {
        if (el.type === 'checkbox' || el.type === 'radio') {
            el.checked = false;
        } else if (el.multiple) {
            Array.from(el.options).forEach(opt => opt.selected = false);
        } else {
            if(el.id !== "duration") el.value = '';
        }
    });

    document.getElementById('duration').value = '60';
    document.getElementById('output').textContent = '';
    document.getElementById('suggestion-box').innerHTML = '';
    
    const icsButton = document.getElementById('icsButton');
    if (icsButton) icsButton.remove();

    localStorage.removeItem('meetingCoordinatorState');
    
    drawTimezoneVisualizer();
    console.log("Formulario y estado reseteados.");
}
