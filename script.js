// --- DATABASE & TRANSLATIONS (Mantener los objetos 'countries' y 'translations' como en la versión anterior) ---
const countries = { /*... Objeto de países expandido ...*/ };
const translations = { /*... Objeto de traducciones completo ...*/ };
let currentLang;

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners para controles existentes
    document.getElementById('lang-es').addEventListener('click', () => setLanguage('es'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('hostDateTime').addEventListener('input', drawTimezoneVisualizer);
    document.getElementById('countries').addEventListener('change', drawTimezoneVisualizer);

    // Event listeners para NUEVAS funciones
    document.getElementById('saveTemplateBtn').addEventListener('click', saveTemplate);
    document.getElementById('loadTemplateBtn').addEventListener('click', loadTemplate);
    document.getElementById('suggestTimeBtn').addEventListener('click', suggestOptimalTime);

    // Carga inicial
    const savedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    setLanguage(savedLang || browserLang);
    loadTemplates();
});


// --- FUNCIONES DE PLANTILLAS ---
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

    // Seleccionar los países guardados
    const countriesSelect = document.getElementById('countries');
    Array.from(countriesSelect.options).forEach(option => {
        option.selected = t.selectedCountries.includes(option.value);
    });
    drawTimezoneVisualizer();
}


// --- LÓGICA DEL VISUALIZADOR Y SUGERIDOR DE HORA ---
function drawTimezoneVisualizer() {
    const visualizer = document.getElementById('timezone-visualizer');
    visualizer.innerHTML = ''; // Limpiar visualizador
    const hostDateTimeInput = document.getElementById('hostDateTime').value;
    if (!hostDateTimeInput) return;

    const hostDate = new Date(hostDateTimeInput);
    if (isNaN(hostDate)) return;

    const hostCountryName = document.getElementById('hostCountry').value;
    const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const allNames = [hostCountryName, ...selectedCountryNames];
    const uniqueNames = [...new Set(allNames)];

    uniqueNames.forEach(name => {
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
        if (localHour24 >= 9 && localHour24 < 18) marker.classList.add('is-day');
        if (localHour24 < 8 || localHour24 >= 22) marker.classList.add('is-late');

        visualizer.appendChild(marker);
    });
}

function suggestOptimalTime() {
    const hostCountryName = document.getElementById('hostCountry').value;
    const selectedCountryNames = Array.from(document.getElementById('countries').selectedOptions).map(o => o.value);
    const allNames = [...new Set([hostCountryName, ...selectedCountryNames])];
    if (allNames.length === 0) return;

    const countryObjects = allNames.map(name => Object.values(countries).flat().find(c => c.name === name)).filter(Boolean);

    let bestSlots = [];
    const today = new Date();
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    for (let h = 0; h < 24; h++) {
        today.setHours(h);
        let score = 0;
        countryObjects.forEach(country => {
            const localTime = new Date(today.toLocaleString('en-US', { timeZone: country.tz }));
            const localHour = localTime.getHours();
            if (localHour >= 9 && localHour < 18) score += 2; // Horario ideal
            else if (localHour >= 8 && localHour < 20) score += 1; // Horario aceptable
        });
        bestSlots.push({ hour: h, score: score });
    }

    bestSlots.sort((a, b) => b.score - a.score);
    const top3 = bestSlots.slice(0, 3);
    
    const suggestion = top3.map(slot => `${slot.hour.toString().padStart(2, '0')}:00`).join(', ');
    const userChoice = prompt(`${currentLang === 'es' ? 'Horarios sugeridos (hora local anfitrión)' : 'Suggested times (host local time)'}: ${suggestion}\n${currentLang === 'es' ? 'Elige una hora (ej: 14):' : 'Choose an hour (e.g., 14):'}`);
    
    if (userChoice && !isNaN(parseInt(userChoice))) {
        const chosenHour = parseInt(userChoice);
        const newDate = new Date();
        newDate.setHours(chosenHour, 0, 0, 0);
        
        // Formatear para datetime-local (YYYY-MM-DDTHH:mm)
        const year = newDate.getFullYear();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');
        const hours = newDate.getHours().toString().padStart(2, '0');
        const minutes = newDate.getMinutes().toString().padStart(2, '0');

        document.getElementById('hostDateTime').value = `${year}-${month}-${day}T${hours}:${minutes}`;
        drawTimezoneVisualizer();
    }
}


// --- FUNCIONES PRINCIPALES (generateMessage, setLanguage, etc. con modificaciones) ---

function generateMessage() {
    // ... (código de validación igual que antes)
    // NUEVO: Obtener el valor de la agenda
    const agenda = document.getElementById('agenda').value.trim();

    // ... (código de construcción de mensaje)
    if (company) message += `🏢 *${company}*\n`;
    message += `📌 *${title}*\n`;
    if (description) message += `${description}\n`;

    // NUEVO: Añadir la agenda si existe
    if (agenda) {
        const agendaPoints = agenda.split('\n').map(point => `  - ${point}`).join('\n');
        message += `\n*${currentLang === 'es' ? 'Agenda' : 'Agenda'}:*\n${agendaPoints}\n`;
    }

    message += `\n${t.hostDateLabel}: ${hostDateString}\n`;
    // ... (resto del código de construcción de mensaje y generación de ICS igual que antes)
}

// ... (El resto de las funciones: setLanguage, loadCountries, copyToClipboard, etc., se mantienen igual que en la versión anterior. Asegúrate de tenerlas todas en este archivo.)
