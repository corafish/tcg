function genArrayList() {
    let listCards = document.getElementById("cardcommas").value;
    listCards = listCards.replaceAll(' ', '');
    let enteredCardArray = listCards.split(',');
    //enteredCardArray.sort();
    let prefix = '"';
    let suffix = '"';
    let newArr = enteredCardArray.map(el => prefix + el + suffix);                                  

    document.getElementById('newlist').textContent = newArr.join(', ');
    }   