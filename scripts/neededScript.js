// Sort cards alphabetically
const alphaCardsNeeded = cardsNeeded.toSorted();

// Display cards as text
const textList = alphaCardsNeeded.join(", ");
document.getElementById("textarea-text-list").innerHTML = textList;
document.getElementById("text-list").innerHTML = textList;