const voiceList = document.getElementById("voiceList");
const text = document.getElementById("text");
const speakBtn = document.getElementById("speak");


let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceList.innerHTML = "";

    voices.forEach((voice, index) => {

        const option = document.createElement("option");

        option.value = index;
        option.textContent = `${voice.name} (${voice.lang})`;

        voiceList.appendChild(option);
    });
}

loadVoices();

speechSynthesis.onvoiceschanged = loadVoices;

speakBtn.addEventListener("click", () => {

    const utterance = new SpeechSynthesisUtterance(text.value);

    utterance.voice = voices[voiceList.value];

    speechSynthesis.speak(utterance);

});