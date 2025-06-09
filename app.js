
// Traducciones
const translations = {
  es: {
    title: "Bienvenido a Evangelion",
    subtitle: "Explora el mundo de los EVAs y los Ángeles",
    rei_title: "Rei Ayanami",
    rei_desc: "Primer Niño. Piloto del EVA-00. Enigmática y emocionalmente distante, pero profundamente importante.",
    quotes_title: "Frases Icónicas",
    characters_title: "Personajes Principales",
    corporations_title: "Corporaciones y Organizaciones",
    evas_title: "Unidad Evangelion",
  },
  en: {
    title: "Welcome to Evangelion",
    subtitle: "Explore the world of EVAs and Angels",
    rei_title: "Rei Ayanami",
    rei_desc: "First Child. Pilot of EVA-00. Mysterious and emotionally distant, yet deeply important.",
    quotes_title: "Iconic Quotes",
    characters_title: "Main Characters",
    corporations_title: "Corporations and Organizations",
    evas_title: "Evangelion Units",
  },
  jp: {
    title: "エヴァンゲリオンへようこそ",
    subtitle: "EVAと使徒の世界を探検しよう",
    rei_title: "綾波レイ",
    rei_desc: "第1の子供。EVA-00のパイロット。神秘的で感情を見せないが、とても重要な存在。",
    quotes_title: "名セリフ集",
    characters_title: "主要キャラクター",
    corporations_title: "企業と組織",
    evas_title: "エヴァンゲリオンユニット",
  }
};

// Frases aleatorias
const quotes = [
  "\"El dolor trae crecimiento.\"",
  "\"Debes vivir tu propia vida.\"",
  "\"No huyas. No huyas. No huyas.\"",
  "\"Estoy aquí porque me dijeron que debía estarlo.\"",
  "\"Las lágrimas no significan debilidad.\"",
  "\"No valgo nada…\"",
  "\"Lo siento… no sé lo que quiero.\""
];

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key] || el.textContent;
  });
}

document.getElementById('language-selector').addEventListener('change', (e) => {
  updateLanguage(e.target.value);
});

// Cambiar frases cada 7 segundos
function rotateQuotes() {
  const quoteEl = document.getElementById('quote');
  setInterval(() => {
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[random];
  }, 7000);
}

// Navegación por secciones
document.querySelectorAll('#main-menu button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  });
});

// Terminal NERV
const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');

function appendOutput(text) {
  terminalOutput.textContent += text + '\n';
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function processCommand(cmd) {
  const command = cmd.toLowerCase().trim();
  switch (command) {
    case 'help':
      appendOutput('Comandos:\nhelp\ninfo rei\ninfo shinji\ninfo asuka\ninfo nerv\ninfo seele\nclear');
      break;
    case 'info rei':
      appendOutput('Rei Ayanami: Primer Niño, piloto del EVA-00. Enigmática y fundamental.');
      break;
    case 'info shinji':
      appendOutput('Shinji Ikari: Piloto del EVA-01, protagonista con conflictos emocionales.');
      break;
    case 'info asuka':
      appendOutput('Asuka Langley: Piloto del EVA-02, orgullosa y competitiva.');
      break;
    case 'info nerv':
      appendOutput('NERV: Organización que opera los EVAs para proteger a la humanidad.');
      break;
    case 'info seele':
      appendOutput('SEELE: Organización secreta que controla NERV y persigue sus propios planes.');
      break;
    case 'clear':
      terminalOutput.textContent = '';
      break;
    default:
      appendOutput(`Comando no reconocido: ${cmd}`);
  }
}


terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = terminalInput.value;
    appendOutput('> ' + cmd);
    processCommand(cmd);
    terminalInput.value = '';
  }
});


// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage('es'); // idioma por defecto
  rotateQuotes();
});

