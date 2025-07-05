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
    companyLabel: "Empresa",
    placeholderCompany: "Nombre de la empresa",
    meetingTitleLabel: "Título de la reunión",
    placeholderTitle: "Ej: Reunión Estratégica",
    descriptionLabel: "Descripción",
    placeholderDescription: "Descripción breve de la reunión",
    hostDateTimeLabel: "Fecha y hora del anfitrión",
    hostCountryLabel: "País del anfitrión",
    linkLabel: "Enlace a la videollamada",
    placeholderLink: "https://...",
    countriesLabel: "Selecciona los países participantes",
    searchPlaceholder: "Buscar país...",
    presetGreetingsLabel: "Seleccionar un saludo final",
    farewellLabel: "Mensaje de despedida",
    placeholderFarewell: "¡Los esperamos!",
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
    alertParticipantCountries: "Por favor, selecciona al menos un país participante.",
    alertInvalidDate: "Fecha y hora del anfitrión inválidas.",
    alertNoMessage: "No hay mensaje para copiar.",
    alertMessageCopied: "Mensaje copiado al portapapeles.",
    alertGenerateFirst: "Genera el mensaje primero.",
    hostDateLabel: "🗓️ Fecha y hora del anfitrión",
    hostCountryInfoLabel: "🌐 País anfitrión",
    videoCallLabel: "🔗 Enlace a la videollamada",
    regionLabel: "🌍 Región",
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
    companyLabel: "Company",
    placeholderCompany: "Company Name",
    meetingTitleLabel: "Meeting Title",
    placeholderTitle: "E.g., Strategic Meeting",
    descriptionLabel: "Description",
    placeholderDescription: "Brief description of the meeting",
    hostDateTimeLabel: "Host's Date & Time",
    hostCountryLabel: "Host's Country",
    linkLabel: "Video Call Link",
    placeholderLink: "https://...",
    countriesLabel: "Select Participant Countries",
    searchPlaceholder: "Search for a country...",
    presetGreetingsLabel: "Select a Closing Greeting",
    farewellLabel: "Farewell Message",
    placeholderFarewell: "Looking forward to seeing you!",
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
    alertParticipantCountries: "Please select at least one participant country.",
    alertInvalidDate: "Invalid host date and time.",
    alertNoMessage: "There is no message to copy.",
    alertMessageCopied: "Message copied to clipboard.",
    alertGenerateFirst: "Please generate the message first.",
    hostDateLabel: "🗓️ Host's date and time",
    hostCountryInfoLabel: "🌐 Host country",
    videoCallLabel: "🔗 Video call link",
    regionLabel: "🌍 Region",
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

// --- CORE FUNCTIONS ---

function setLanguage(lang) {
  if (!translations[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);
  
  const t = translations[lang];
  
  document.documentElement.lang = lang;
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('title').textContent = t.title;
  
  document.getElementById('companyLabel').textContent = t.companyLabel;
  document.getElementById('company').placeholder = t.placeholderCompany;
  
  document.getElementById('meetingTitleLabel').textContent = t.meetingTitleLabel;
  document.getElementById('meetingTitle').placeholder = t.placeholderTitle;
  
  document.getElementById('descriptionLabel').textContent = t.descriptionLabel;
  document.getElementById('description').placeholder = t.placeholderDescription;
  
  document.getElementById('hostDateTimeLabel').textContent = t.hostDateTimeLabel;
  document.getElementById('hostCountryLabel').textContent = t.hostCountryLabel;
  
  document.getElementById('linkLabel').textContent = t.linkLabel;
  document.getElementById('link').placeholder = t.placeholderLink;
  
  document.getElementById('countriesLabel').textContent = t.countriesLabel;
  document.getElementById('searchCountry').placeholder = t.searchPlaceholder;
  
  document.getElementById('presetGreetingsLabel').textContent = t.presetGreetingsLabel;
  document.getElementById('farewellLabel').textContent = t.farewellLabel;
  document.getElementById('farewell').placeholder = t.placeholderFarewell;
  
  document.getElementById('generateButton').textContent = t.generateButton;
  document.getElementById('copyButton').textContent = t.copyButton;
  document.getElementById('whatsappButton').textContent = t.whatsappButton;
  document.getElementById('telegramButton').textContent = t.telegramButton;
  
  const icsButton = document.getElementById('icsButton');
  if(icsButton) icsButton.textContent = t.icsButton;

  document.getElementById('licenseText').firstChild.nodeValue = t.licenseText + ' ';
  document.getElementById('licenseLink').textContent = t.licenseLink;

  document.getElementById('lang-es').classList.toggle('active', lang === 'es');
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');

  loadCountries();
  loadGreetings();
}

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
      
      const participantOption = document.createElement('option');
      participantOption.value = country.name;
      participantOption.textContent = optionText;
      optgroupParticipants.appendChild(participantOption);
    });
    
    hostCountrySelect.appendChild(optgroupHost);
    countriesSelect.appendChild(optgroupParticipants);
  }
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
  const select = document.getElementById('presetGreetings');
  const farewellInput = document.getElementById('farewell');
  if (select.value) {
    farewellInput.value = select.value;
  }
}

function filterCountries() {
  const filter = document.getElementById('searchCountry').value.toLowerCase();
  const options = document.getElementById('countries').options;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    option.style.display = option.textContent.toLowerCase().includes(filter) ? '' : 'none';
  }
}

function convertToTimeZone(date, timeZone) {
  if (!date) return '—';
  try {
    return new Intl.DateTimeFormat(currentLang === 'es' ? 'es-ES' : 'en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: timeZone
    }).format(date);
  } catch {
    return '—';
  }
}

function generateMessage() {
  const t = translations[currentLang];
  const company = document.getElementById('company').value.trim();
  const title = document.getElementById('meetingTitle').value.trim().toUpperCase();
  const description = document.getElementById('description').value.trim();
  const hostDateTimeInput = document.getElementById('hostDateTime').value;
  const hostCountryName = document.getElementById('hostCountry').value;
  const link = document.getElementById('link').value.trim();
  const farewell = document.getElementById('farewell').value.trim() || t.placeholderFarewell;
  const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);

  if (!title) return alert(t.alertTitle);
  if (!hostDateTimeInput) return alert(t.alertDateTime);
  if (!hostCountryName) return alert(t.alertHostCountry);
  if (selectedCountryNames.length === 0) return alert(t.alertParticipantCountries);
  
  const hostDate = new Date(hostDateTimeInput);
  if (isNaN(hostDate)) return alert(t.alertInvalidDate);

  let hostTz = null;
  let hostCountryEmoji = '';
  Object.values(countries).flat().forEach(c => {
    if (c.name === hostCountryName) {
      hostTz = c.tz;
      hostCountryEmoji = c.emoji;
    }
  });

  const hostDateString = new Intl.DateTimeFormat(currentLang === 'es' ? 'es-ES' : 'en-US', {
    dateStyle: 'full', timeStyle: 'short', hour12: true, timeZone: hostTz
  }).format(hostDate);

  let message = '';
  if (company) message += `🏢 *${company}*\n`;
  message += `📌 *${title}*\n`;
  if (description) message += `${description}\n`;
  message += `\n${t.hostDateLabel}: ${hostDateString}\n`;
  message += `${t.hostCountryInfoLabel}: ${hostCountryEmoji} ${hostCountryName}\n`;
  if (link) message += `${t.videoCallLabel}: ${link}\n\n`;

  const selectedByRegion = {};
  for (const region in countries) {
    const filtered = countries[region]
      .filter(c => selectedCountryNames.includes(c.name))
      .sort((a, b) => a.name.localeCompare(b.name));
    if (filtered.length > 0) {
      selectedByRegion[region] = filtered;
    }
  }

  for (const region in selectedByRegion) {
    message += `*${t.regionLabel}: ${region}*\n`;
    selectedByRegion[region].forEach(c => {
      const time = convertToTimeZone(hostDate, c.tz);
      message += `${c.emoji} ${c.name}: ${time}\n`;
    });
    message += '\n';
  }

  message += farewell;

  document.getElementById('output').textContent = message;

  const existingICSButton = document.getElementById('icsButton');
  if (existingICSButton) existingICSButton.remove();
  generateICS(hostDate, title, description, company, link);
}

function copyToClipboard() {
  const output = document.getElementById('output').textContent;
  if (!output) return alert(translations[currentLang].alertNoMessage);
  navigator.clipboard.writeText(output).then(() => {
    alert(translations[currentLang].alertMessageCopied);
  });
}

function share(platform) {
  const output = document.getElementById('output').textContent;
  if (!output) return alert(translations[currentLang].alertGenerateFirst);
  
  const encodedMessage = encodeURIComponent(output);
  let url = '';

  if (platform === 'whatsapp') {
    url = `https://api.whatsapp.com/send?text=${encodedMessage}`;
  } else if (platform === 'telegram') {
    url = `https://t.me/share/url?url=&text=${encodedMessage}`;
  } else {
    return;
  }
  window.open(url, '_blank');
}

function generateICS(date, title, description, company, link) {
    const toICSDate = (d) => d.toISOString().replace(/[-:.]/g, '').slice(0, 15) + 'Z';
    const startDate = toICSDate(date);
    const endDate = toICSDate(new Date(date.getTime() + 60 * 60 * 1000));

    const icsContent = [
        'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//ChronosyncInterface//v1.0//EN',
        'BEGIN:VEVENT', `UID:${Date.now()}@chronosync.app`,
        `DTSTAMP:${startDate}`, `DTSTART:${startDate}`, `DTEND:${endDate}`,
        `SUMMARY:${title}`, `DESCRIPTION:${description.replace(/\n/g, '\\n')}`,
        `LOCATION:${link}`, `ORGANIZER;CN=${company || 'Host'}:mailto:noreply@chronosync.app`,
        'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    
    const downloadButton = document.createElement('button');
    downloadButton.id = 'icsButton';
    downloadButton.textContent = translations[currentLang].icsButton;
    downloadButton.onclick = () => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `${title.replace(/ /g, '_')}.ics`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };
    
    document.querySelector('.share-buttons').appendChild(downloadButton);
}


// --- INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
  document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
  
  const savedLang = localStorage.getItem('preferredLang');
  const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
  setLanguage(savedLang || browserLang);
});
