const textareaFrom = document.getElementById("textareaFrom");
const textareaTo = document.getElementById("textareaTo");
const btnTranslate = document.getElementById("btnTranslate");
const sourceLanguageSelect = document.querySelector(".selectFrom");
const targetLanguageSelect = document.querySelector(".selectTo");
const swapLanguagesButton = document.getElementById("swap-languages-button");
const btnOuvir1 = document.getElementById("btn-ouvir1");
const btnOuvir2 = document.getElementById("btn-ouvir2");



let activeUtterance = null;

const countries = {
    "en-GB": "Inglês",
    "fr-FR": "Francês",
    "de-DE": "Alemão",
    "es-ES": "Espanhol",
    "ru-RU": "Russo",
    "zh-CN": "Chinês (Mandarim)",
    "it-IT": "Italiano",
    "ja-JP": "Japonês",
    "ar-SA": "Árabe",
    "pt-BR": "Português",
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
});

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
        )}&langpair=${sourceLang}|${targetLang}`
    )
        .then((res) => {
            if (!res.ok) {
                throw new Error(
                    "Erro na tradução. Tente novamente mais tarde."
                );
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
})
