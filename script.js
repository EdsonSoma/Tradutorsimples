/* ========================================
   TRANSLATOR PROJECT - JAVASCRIPT
======================================== */

const textareaFrom = document.getElementById("textareaFrom");
const textareaTo = document.getElementById("textareaTo");
const btnTranslate = document.getElementById("btnTranslate");
const sourceLanguageSelect = document.querySelector(".selectFrom");
const targetLanguageSelect = document.querySelector(".selectTo");
const swapLanguagesButton = document.getElementById("swap-languages-button");
const btnOuvir1 = document.getElementById("btn-ouvir1");
const btnOuvir2 = document.getElementById("btn-ouvir2");
const btnMicrophone = document.getElementById("btn-microphone");
const btnLimpar = document.getElementById("btn-limpar");

let activeUtterance = null;

const countries = {
    "pt-BR": "Português (Brasil)",
    "en-GB": "Inglês (Reino Unido)",
    "fr-FR": "Francês (França)",
    "de-DE": "Alemão (Alemanha)",
    "es-ES": "Espanhol (Espanha)",
    "ru-RU": "Russo (Rússia)",
    "zh-CN": "Chinês (Mandarim)",
    "it-IT": "Italiano (Itália)",
    "ja-JP": "Japonês (Japão)",
    "ar-SA": "Árabe (Arábia Saudita)",
    "hi-IN": "Hindi (Índia)",
    "bn-BD": "Bengali (Bangladesh)",
    "pt-PT": "Português (Portugal)",
    "ur-PK": "Urdu (Paquistão)",
    "tr-TR": "Turco (Turquia)",
    "nl-NL": "Holandês (Países Baixos)",
    "el-GR": "Grego (Grécia)",
    "pl-PL": "Polonês (Polônia)",
    "sv-SE": "Sueco (Suécia)",
    "id-ID": "Indonésio (Indonésia)",
    "ko-KR": "Coreano (Coreia do Sul)",
    "th-TH": "Tailandês (Tailândia)",
    "vi-VN": "Vietnamita (Vietnã)",
};

function initializeLanguageSelects() {
    for (let countryCode in countries) {
        const option = `<option value="${countryCode}">${countries[countryCode]}</option>`;
        sourceLanguageSelect.insertAdjacentHTML("beforeend", option);
        targetLanguageSelect.insertAdjacentHTML("beforeend", option);
    }
    sourceLanguageSelect.value = "pt-BR";
    targetLanguageSelect.value = "en-GB";
}

swapLanguagesButton.addEventListener("click", function () {
    [sourceLanguageSelect.value, targetLanguageSelect.value] = [
        targetLanguageSelect.value,
        sourceLanguageSelect.value,
    ];
    [textareaFrom.value, textareaTo.value] = [
        textareaTo.value,
        textareaFrom.value
    ];
});

btnTranslate.addEventListener("click", () => {
    const textToTranslate = textareaFrom.value.trim();
    const sourceLanguage = sourceLanguageSelect.value;
    const targetLanguage = targetLanguageSelect.value;

    if (!textToTranslate) {
        alert("Por favor, digite um texto para traduzir.");
        return;
    }

    if (sourceLanguage === targetLanguage) {
        alert("Por favor, selecione idiomas diferentes.");
        return;
    }

    textareaTo.value = "Traduzindo...";
    textareaTo.classList.add('translating');
    btnTranslate.disabled = true;
    
    loadTranslation(textToTranslate, sourceLanguage, targetLanguage);
});

function loadTranslation(text, sourceLang, targetLang) {
    const apiURL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
    
    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro na tradução");
            }
            return response.json();
        })
        .then((data) => {
            textareaTo.value = data.responseData.translatedText;
            textareaTo.classList.remove('translating');
            btnTranslate.disabled = false;
        })
        .catch((error) => {
            textareaTo.value = "Erro na tradução. Tente novamente.";
            textareaTo.classList.remove('translating');
            btnTranslate.disabled = false;
            console.error("Erro:", error);
        });
}

function falarTexto(texto) {
    if (!texto) {
        alert("Não há texto para reproduzir.");
        return;
    }

    if (activeUtterance) {
        speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(texto);
    activeUtterance = utterance;
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    
    speechSynthesis.speak(utterance);
}

btnOuvir1.addEventListener("click", function () {
    falarTexto(textareaFrom.value);
});

btnOuvir2.addEventListener("click", function () {
    falarTexto(textareaTo.value);
});

btnLimpar.addEventListener("click", function() {
    textareaFrom.value = '';
    textareaTo.value = '';
    textareaFrom.focus();
});

if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.lang = "pt-BR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
        console.log("🎤 Reconhecimento iniciado");
        btnMicrophone.style.color = "#e74c3c";
        btnMicrophone.disabled = true;
    };

    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        textareaFrom.value = result;
    };

    recognition.onerror = function (event) {
        console.error("Erro:", event.error);
        let errorMessage = "Erro ao reconhecer voz.";
        
        switch(event.error) {
            case 'no-speech':
                errorMessage = "Nenhuma fala detectada.";
                break;
            case 'audio-capture':
                errorMessage = "Microfone não encontrado.";
                break;
            case 'not-allowed':
                errorMessage = "Permissão negada.";
                break;
        }
        
        alert(errorMessage);
    };

    recognition.onend = function () {
        console.log("🛑 Reconhecimento finalizado");
        btnMicrophone.style.color = "#667eea";
        btnMicrophone.disabled = false;
    };

    btnMicrophone.addEventListener("click", function () {
        try {
            recognition.start();
        } catch (error) {
            console.error("Erro ao iniciar:", error);
        }
    });
} else {
    console.warn("⚠️ Reconhecimento de voz não suportado");
    btnMicrophone.disabled = true;
    btnMicrophone.style.opacity = "0.5";
}

document.addEventListener("keydown", function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        btnTranslate.click();
    }
    
    if ((event.ctrlKey || event.metaKey) && event.key === "l") {
        event.preventDefault();
        btnLimpar.click();
    }
});

window.addEventListener("DOMContentLoaded", function() {
    initializeLanguageSelects();
    console.log("✅ Translator inicializado!");
});
