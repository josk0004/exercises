"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
const locale = "da";
const german = "de";

function switchLanguage(to) {
  const lang = texts[to];
  lang.texts.forEach(({ text, location }) => {
    document.querySelector(location).innerText = text;
  });
}

document
  .getElementById("language-select")
  .addEventListener("change", (event) => switchLanguage(event.target.value));

switchLanguage(locale);
