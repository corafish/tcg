function genAlphaList() {
    let listCards = document.getElementById("unsorted-list").value;
    listCards = listCards.replaceAll(' ', '');
    let enteredCardArray = listCards.split(',');
    enteredCardArray.sort();                                 
    document.getElementById('sorted-list').textContent = enteredCardArray.join(', ');
    document.getElementById('alpha-card-count').innerHTML = '<span class="badge rounded-pill badge-bg-black">' + enteredCardArray.length + ' cards</span>';
}