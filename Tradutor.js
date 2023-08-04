const textareaFrom = document.getElementById("textareaFrom");
const textareaTo = document.getElementById("textareaTo");
const btnTranslate = document.getElementById("btnTranslate");
const sourceLanguageSelect = document.querySelector(".selectFrom");
const targetLanguageSelect = document.querySelector(".selectTo");
const swapLanguagesButton = document.getElementById("swap-languages-button");
const btnOuvir1 = document.getElementById("btn-ouvir1");
const btnOuvir2 = document.getElementById("btn-ouvir2");
const btnMicrophone = document.getElementById("btn-microphone");
const faMicrophone = document.querySelector(".fa-solid.fa-microphone");
const textarea = document.getElementById("textareaFrom"); // Get the textarea element

let activeUtterance = null;

const countries = {
  "pt-BR": "Português",
  "en-GB": "Inglês",
  "fr-FR": "Francês",
  "de-DE": "Alemão",
  "es-ES": "Espanhol",
  "ru-RU": "Russo",
  "zh-CN": "Chinês (Mandarim)",
  "it-IT": "Italiano",
  "ja-JP": "Japonês",
  "ar-SA": "Árabe",
};

for (let countryCode in countries) {
  const option = `<option value="${countryCode}">${countries[countryCode]}</option>`;
  sourceLanguageSelect.insertAdjacentHTML("beforeend", option);
  targetLanguageSelect.insertAdjacentHTML("beforeend", option);
}
swapLanguagesButton.addEventListener("click", function () {
  [sourceLanguageSelect.value, targetLanguageSelect.value] = [
    targetLanguageSelect.value,
    sourceLanguageSelect.value,
  ];
}); /*bloco de cod. 25-35. troca de linguagem */

btnTranslate.addEventListener("click", () => {
  const textToTranslate = textareaFrom.value.trim();
  const sourceLanguage = sourceLanguageSelect.value; // Corrected variable name
  const targetLanguage = targetLanguageSelect.value;

  if (textToTranslate && sourceLanguage !== targetLanguage) {
    textareaTo.value = "Traduzindo...";
    loadTranslation(textToTranslate, sourceLanguage, targetLanguage);
  } else {
    textareaTo.value = "";
  }
});

function loadTranslation(text, sourceLang, targetLang) {
  fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${sourceLang}|${targetLang}` /*Chave Api */
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Erro na tradução. Tente novamente mais tarde.");
      }
      return res.json();
    })
    .then((data) => {
      textareaTo.value = data.responseData.translatedText;
    })
    .catch((error) => {
      textareaTo.value = "Erro na tradução. Tente novamente mais tarde.";
      console.error("Error:", error);
    });
}

function falarTexto(texto) {
  if (activeUtterance) {
    speechSynthesis.cancel();
  }
  const utterance = new SpeechSynthesisUtterance(texto);
  activeUtterance = utterance;
  speechSynthesis.speak(utterance);
}

btnOuvir1.addEventListener("click", function () {
  const textoEntrada = textareaFrom.value;
  falarTexto(textoEntrada);
});

btnOuvir2.addEventListener("click", function () {
  const textoSaida = textareaTo.value;
  falarTexto(textoSaida);
});

// Verificar se o navegador suporta a API de Reconhecimento de Fala
if ("webkitSpeechRecognition" in window) {
  const recognition = new webkitSpeechRecognition();

  // Definir configurações opcionais
  recognition.continuous = false; // Não continuará escutando após detectar a fala
  recognition.lang = "pt-BR"; // Define o idioma para o reconhecimento (exemplo: Português do Brasil)

  recognition.onstart = function () {
    console.log("Escutando...");
  };

  recognition.onresult = function (event) {
    const result = event.results[0][0].transcript;
    textarea.value = result; // Update the textarea value with the transcribed speech
  };

  recognition.onerror = function (event) {
    console.error("Erro de reconhecimento de fala:", event.error);
  };

  // Add a click event listener to the btn-microphone button to start recognition
  btnMicrophone.addEventListener("click", function () {
    recognition.start();
  });
} else {
  console.error("API de Reconhecimento de Fala não suportada neste navegador.");
}
