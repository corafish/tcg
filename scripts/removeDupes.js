function removeDupes() {
    let listDupes = document.getElementById("dupes-list").value;
    listDupes = listDupes.replaceAll(' ', '');
    let enteredListDupes = listDupes.split(',');

    let seen = new Set();
    let duplicate = [];
    for (let i = 0; i < enteredListDupes.length; i++) {
        if (seen.has(enteredListDupes[i])) {
            duplicate.push(enteredListDupes[i]);
        } else {
            seen.add(enteredListDupes[i]);
        }
    }

    let removeDupesArray = [...seen];

    document.getElementById('dupes-removed-list').textContent = removeDupesArray.join(', ');
    document.getElementById('dupe-final-card-count').innerHTML = '<span class="badge rounded-pill text-bg-light">' + removeDupesArray.length + ' cards</span>';
    document.getElementById('dupe-cards').innerHTML = duplicate.join(', ');
    document.getElementById('dupe-cards-count').innerHTML = '<span class="badge rounded-pill text-bg-light">' + duplicate.length + ' cards</span>';
}   