export const speakChinese = (text: string) => {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    console.warn("Speech synthesis is not supported in this environment");
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.85; // Slightly slower for clear learner comprehension
  utterance.pitch = 1.0;

  // Attempt to select a Chinese voice if available
  const voices = window.speechSynthesis.getVoices();
  const chineseVoice = voices.find(
    (voice) => voice.lang.includes("zh") || voice.lang.includes("cmn")
  );
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }

  window.speechSynthesis.speak(utterance);
};
