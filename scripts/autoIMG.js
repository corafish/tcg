function getEnteredCards() {
    let enteredCardNames = document.getElementById("cardnames").value;
    enteredCardNames = enteredCardNames.replaceAll(' ', "");
    let enteredCardArray = enteredCardNames.split(',');
    //enteredCardArray.sort();
    let howManyCards = enteredCardArray.length;
    let prefix = '<img src="';
    let preferredDomain = document.getElementById("preferred-domain").value;
    let middle = '.gif" alt="';
    let suffix = '">';
    let prefixColors = '<img src="';
    let suffixColors = '.gif" loading="lazy">';
    let newArr = enteredCardArray.map(el => prefix + preferredDomain + el + middle + el + suffix);
    let imageArray = enteredCardArray.slice();
    let imageArray2 = imageArray.map(el => prefixColors + preferredDomain + el + suffixColors);                                         
    document.getElementById('imgtags').textContent = newArr.join('');
    document.getElementById('imgtags').textContent.replaceAll(',', ' ')
    document.getElementById('cardimages').innerHTML = imageArray2.join('');
    document.getElementById('numberofcards').innerHTML = '<span class="badge rounded-pill text-bg-light">' + imageArray2.length + ' cards</span>';
    }