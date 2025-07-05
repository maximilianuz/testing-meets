/* --- 1. CONFIGURACIÓN GLOBAL Y TIPOGRAFÍA --- */
:root {
  color-scheme: light dark;
  --primary-color: #007aff;
  --primary-hover: #005ecb;
  --green-color: #34c759;
  --green-hover: #29a046;
  --secondary-color: #8e8e93;
  --secondary-hover: #6d6d71;
  --bg-light: #f2f2f7;
  --card-bg-light: #ffffff;
  --text-light: #1c1c1e;
  --border-light: #e5e5ea;
  --bg-dark: #1c1c1e;
  --card-bg-dark: #2c2c2e;
  --text-dark: #f2f2f7;
  --border-dark: #3a3a3c;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  padding: 20px;
  margin: 0 auto;
  transition: background-color 0.3s, color 0.3s;
}

/* --- 2. CONTENEDOR PRINCIPAL Y ENCABEZADO --- */
.main-container {
  background-color: var(--card-bg-light);
  max-width: 750px;
  margin: 20px auto;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border-light);
}

.header-container { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
h1 { font-size: 1.5em; text-align: left; margin: 0; flex-grow: 1; }
#lang-switcher button { background: none; border: none; padding: 5px; cursor: pointer; font-size: 1.5em; opacity: 0.7; transition: opacity 0.2s; }
#lang-switcher button:hover { opacity: 1; }
#lang-switcher button.active { opacity: 1; transform: scale(1.1); }

/* --- 3. ELEMENTOS DE FORMULARIO --- */
label { display: block; margin-top: 20px; font-weight: 500; font-size: 0.9em; color: var(--secondary-color); }
input, select, textarea {
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  border-radius: 8px;
  border: 1px solid var(--border-light);
  background-color: var(--bg-light);
  color: var(--text-light);
  box-sizing: border-box;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s, box-shadow 0.2s;
}
input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}
select[multiple] { height: 200px; padding: 10px; }

.host-time-controls, .template-controls { display: flex; gap: 10px; align-items: center; margin-top: 8px; }
.host-time-controls input, .template-controls select { flex-grow: 1; margin-top: 0; }

/* --- 4. BOTONERA --- */
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 1em;
  font-weight: 500;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
button:hover { transform: translateY(-1px); }
button:active { transform: translateY(0); box-shadow: none; }
button svg { width: 16px; height: 16px; fill: currentColor; }

/* Estilos de botones por función */
#generateButton {
  width: 100%;
  margin-top: 25px;
  padding: 16px;
  font-size: 1.1em;
  font-weight: 700;
  background-color: var(--primary-color);
}
#generateButton:hover { background-color: var(--primary-hover); }

#suggestTimeBtn, #loadTemplateBtn, #saveTemplateBtn {
  background-color: var(--secondary-color);
  padding: 12px;
  height: 46px; /* Altura consistente */
  width: 46px; /* Ancho consistente para botones de ícono */
  margin-top: 0;
}
#suggestTimeBtn:hover, #loadTemplateBtn:hover, #saveTemplateBtn:hover { background-color: var(--secondary-hover); }

.share-buttons { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 15px; }
.share-buttons button, #icsButton { flex-grow: 1; margin-top: 0; }
#copyButton { background-color: var(--secondary-color); flex-grow: 2; }
#whatsappButton { background-color: #25D366; }
#telegramButton { background-color: #229ED9; }
#icsButton { background-color: #34c759; }

/* Icon-only buttons */
#whatsappButton, #telegramButton { flex-grow: 0; width: 46px; height: 46px; padding: 0; gap: 0; }
#whatsappButton svg, #telegramButton svg { width: 20px; height: 20px; }

/* --- 5. COMPONENTES ESPECÍFICOS --- */
#timezone-visualizer-container { margin-top: 25px; }
#timezone-visualizer {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: var(--bg-light);
  border-radius: 8px;
  overflow: hidden;
}
.tz-marker {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
  padding: 4px 8px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  cursor: default;
  transition: background-color 0.3s;
}
.tz-marker.is-host { border: 2px solid var(--primary-color); }
.tz-marker.is-day { background-color: var(--green-color); }
.tz-marker.is-night { background-color: #ff3b30; }
.tz-marker-time { font-size: 0.9em; display: block; margin-top: 2px;}

#output {
  white-space: pre-wrap;
  background-color: var(--bg-light);
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
  border: 1px solid var(--border-light);
  min-height: 100px;
}
.license { margin-top: 30px; font-size: 0.8em; text-align: center; color: var(--secondary-color); }
.license a { color: inherit; }

/* --- 6. MODO OSCURO --- */
@media (prefers-color-scheme: dark) {
  body { background-color: var(--bg-dark); color: var(--text-dark); }
  .main-container { background-color: var(--card-bg-dark); border-color: var(--border-dark); }
  input, select, textarea { background-color: var(--bg-dark); border-color: var(--border-dark); color: var(--text-dark); }
  input:focus, select:focus, textarea:focus { border-color: var(--primary-color); box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.3); }
  #timezone-visualizer { background-color: var(--bg-dark); }
  #output { background-color: var(--bg-dark); border-color: var(--border-dark); }
  .tz-marker.is-day { background-color: var(--green-hover); }
}
  
