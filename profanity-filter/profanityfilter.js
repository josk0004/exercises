

const curseWords = [
    { bad: "var", good: "const" },
    { bad: "float", good: "grid" },
    { bad: "marquee", good: "just don't" }
];

const sfwButton = document.getElementById("sfwButton");
const paragraph = document.querySelector("p");

sfwButton.addEventListener("click", () => {
    const goodWords = curseWords.map(word => word.good).join("|");
    const goodRegex = new RegExp(goodWords, "i");
    if (goodRegex.test(paragraph.textContent)) {
        let dialog = document.getElementById("profanityDialog");
        if (!dialog) {
            dialog = document.createElement("dialog");
            dialog.id = "profanityDialog";
            dialog.textContent = "Profanity already removed!";
            document.body.appendChild(dialog);
        }
        dialog.showModal();
        dialog.addEventListener("click", () => dialog.close());
        return;
    }

    paragraph.innerHTML = paragraph.textContent.replace(/var|float|marquee/gi, (match) => {
        const found = curseWords.find(word => word.bad === match);
        if (found) {
            return `<span class="good">${found.good}</span>`;
        }
        return match;
    });
});

