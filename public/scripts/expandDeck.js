function genExpandDeck() {
let deckName, deckLink, deckCards;
deckName = document.getElementById("expand-deck-name").value;
deckLink = `<a href="https://colors-tcg.eu/viewcards.php?deck=${deckName}" target="_blank">Colors TCG Deck Link</a>`;
deckCards = `${deckName}01, ${deckName}02, ${deckName}03, ${deckName}04, ${deckName}05, ${deckName}06, ${deckName}07, ${deckName}08, ${deckName}09, ${deckName}10, ${deckName}11, ${deckName}12, ${deckName}13, ${deckName}14, ${deckName}15, ${deckName}16, ${deckName}17, ${deckName}18, ${deckName}19, ${deckName}20`;
document.getElementById("deck-name").innerHTML = deckName;
document.getElementById("deck-link").innerHTML = deckLink;
document.getElementById("expand-deck-HTML").innerHTML = deckCards;
} 