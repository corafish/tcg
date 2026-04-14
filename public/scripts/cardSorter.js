function genTradingList() {
    let listCards = document.getElementById("input-trading").value;
    listCards = listCards.replaceAll(' ', '');
    let enteredTradingArray = listCards.split(',');
    enteredTradingArray.sort();
    const intersectionTrading = enteredTradingArray.filter(element => cardsNeeded.includes(element));
    document.getElementById('show-trading').innerHTML = intersectionTrading.join(', ');
    if (intersectionTrading.length === 0) { document.getElementById('show-trading').innerHTML = 'No cards needed. :(' };
    document.getElementById('trading-card-count').innerHTML = '<span class="badge rounded-pill text-bg-light">' + intersectionTrading.length + ' cards</span>';
    } 

function genNeededList() {
    let listCards = document.getElementById("input-needed").value;
    listCards = listCards.replaceAll(' ', '');
    let enteredNeededArray = listCards.split(',');
    enteredNeededArray.sort();
    const intersectionNeeded = enteredNeededArray.filter(element => cardsTrading.includes(element));
    document.getElementById('show-needed').innerHTML = intersectionNeeded.join(', ');
    if (intersectionNeeded.length === 0) { document.getElementById('show-needed').innerHTML = 'No cards needed. :(' };
    document.getElementById('needed-card-count').innerHTML = '<span class="badge rounded-pill text-bg-light">' + intersectionNeeded.length + ' cards</span>';
    }  