// Show total cards (trading and pending)
document.getElementById("count").innerHTML = cardsTrading.length;
document.getElementById("pending-count").innerHTML = cardsPending.length;

// Sort cards alphabetically
let alphaCardsTrading = cardsTrading.toSorted();

// Display cards as text
const textList = alphaCardsTrading.join(", ");
document.getElementById("textarea-text-list").innerHTML = textList;
document.getElementById("text-list").innerHTML = textList;
document.getElementById("pending-list").textContent = cardsPending.join(", ");

// Display cards that start with a number
let startsWithNum = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('0')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('1')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('2')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('3')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('4')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('5')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('6')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('7')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('8')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
  if (alphaCardsTrading[i].startsWith('9')) {
    startsWithNum.push(alphaCardsTrading[i]);
  }
}
let imageListNum = startsWithNum.map(generateImageNum);
function generateImageNum(cardNum) {
    return '<img src="https://colors-tcg.eu/cards/' + cardNum + '.gif" class="mb-1" alt="' + cardNum + '" loading="lazy">';
}

// Display cards that start with A
let startsWithA = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('a')) {
    startsWithA.push(alphaCardsTrading[i]);
  }
}
let imageListA = startsWithA.map(generateImageA);
function generateImageA(cardA) {
    return '<img src="https://colors-tcg.eu/cards/' + cardA + '.gif" class="mb-1" alt="' + cardA + '" loading="lazy">';
}

// Display cards that start with B
let startsWithB = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('b')) {
    startsWithB.push(alphaCardsTrading[i]);
  }
}
let imageListB = startsWithB.map(generateImageB);
function generateImageB(cardB) {
    return '<img src="https://colors-tcg.eu/cards/' + cardB + '.gif" class="mb-1" alt="' + cardB + '" loading="lazy">';
}

// Display cards that start with C
let startsWithC = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('c')) {
    startsWithC.push(alphaCardsTrading[i]);
  }
}
let imageListC = startsWithC.map(generateImageC);
function generateImageC(cardC) {
    return '<img src="https://colors-tcg.eu/cards/' + cardC + '.gif" class="mb-1" alt="' + cardC + '" loading="lazy">';
}

// Display cards that start with D
let startsWithD = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('d')) {
    startsWithD.push(alphaCardsTrading[i]);
  }
}
let imageListD = startsWithD.map(generateImageD);
function generateImageD(cardD) {
    return '<img src="https://colors-tcg.eu/cards/' + cardD + '.gif" class="mb-1" alt="' + cardD + '" loading="lazy">';
}

// Display cards that start with E
let startsWithE = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('e')) {
    startsWithE.push(alphaCardsTrading[i]);
  }
}
let imageListE = startsWithE.map(generateImageE);
function generateImageE(cardE) {
    return '<img src="https://colors-tcg.eu/cards/' + cardE + '.gif" class="mb-1" alt="' + cardE + '" loading="lazy">';
}

// Display cards that start with F
let startsWithF = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('f')) {
    startsWithF.push(alphaCardsTrading[i]);
  }
}
let imageListF = startsWithF.map(generateImageF);
function generateImageF(cardF) {
    return '<img src="https://colors-tcg.eu/cards/' + cardF + '.gif" class="mb-1" alt="' + cardF + '" loading="lazy">';
}

// Display cards that start with G
let startsWithG = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('g')) {
    startsWithG.push(alphaCardsTrading[i]);
  }
}
let imageListG = startsWithG.map(generateImageG);
function generateImageG(cardG) {
    return '<img src="https://colors-tcg.eu/cards/' + cardG + '.gif" class="mb-1" alt="' + cardG + '" loading="lazy">';
}

// Display cards that start with H
let startsWithH = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('h')) {
    startsWithH.push(alphaCardsTrading[i]);
  }
}
let imageListH = startsWithH.map(generateImageH);
function generateImageH(cardH) {
    return '<img src="https://colors-tcg.eu/cards/' + cardH + '.gif" class="mb-1" alt="' + cardH + '" loading="lazy">';
}

// Display cards that start with I
let startsWithI = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('i')) {
    startsWithI.push(alphaCardsTrading[i]);
  }
}
let imageListI = startsWithI.map(generateImageI);
function generateImageI(cardI) {
    return '<img src="https://colors-tcg.eu/cards/' + cardI + '.gif" class="mb-1" alt="' + cardI + '" loading="lazy">';
}

// Display cards that start with J
let startsWithJ = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('j')) {
    startsWithJ.push(alphaCardsTrading[i]);
  }
}
let imageListJ = startsWithJ.map(generateImageJ);
function generateImageJ(cardJ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardJ + '.gif" class="mb-1" alt="' + cardJ + '" loading="lazy">';
}

// Display cards that start with K
let startsWithK = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('k')) {
    startsWithK.push(alphaCardsTrading[i]);
  }
}
let imageListK = startsWithK.map(generateImageK);
function generateImageK(cardK) {
    return '<img src="https://colors-tcg.eu/cards/' + cardK + '.gif" class="mb-1" alt="' + cardK + '" loading="lazy">';
}

// Display cards that start with L
let startsWithL = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('l')) {
    startsWithL.push(alphaCardsTrading[i]);
  }
}
let imageListL = startsWithL.map(generateImageL);
function generateImageL(cardL) {
    return '<img src="https://colors-tcg.eu/cards/' + cardL + '.gif" class="mb-1" alt="' + cardL + '" loading="lazy">';
}

// Display cards that start with M
let startsWithM = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('m')) {
    startsWithM.push(alphaCardsTrading[i]);
  }
}
let imageListM = startsWithM.map(generateImageM);
function generateImageM(cardM) {
    return '<img src="https://colors-tcg.eu/cards/' + cardM + '.gif" class="mb-1" alt="' + cardM + '" loading="lazy">';
}

// Display cards that start with N
let startsWithN = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('n')) {
    startsWithN.push(alphaCardsTrading[i]);
  }
}
let imageListN = startsWithN.map(generateImageN);
function generateImageN(cardN) {
    return '<img src="https://colors-tcg.eu/cards/' + cardN + '.gif" class="mb-1" alt="' + cardN + '" loading="lazy">';
}

// Display cards that start with O
let startsWithO = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('o')) {
    startsWithO.push(alphaCardsTrading[i]);
  }
}
let imageListO = startsWithO.map(generateImageO);
function generateImageO(cardO) {
    return '<img src="https://colors-tcg.eu/cards/' + cardO + '.gif" class="mb-1" alt="' + cardO + '" loading="lazy">';
}

// Display cards that start with P
let startsWithP = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('p')) {
    startsWithP.push(alphaCardsTrading[i]);
  }
}
let imageListP = startsWithP.map(generateImageP);
function generateImageP(cardP) {
    return '<img src="https://colors-tcg.eu/cards/' + cardP + '.gif" class="mb-1" alt="' + cardP + '" loading="lazy">';
}

// Display cards that start with Q
let startsWithQ = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('q')) {
    startsWithQ.push(alphaCardsTrading[i]);
  }
}
let imageListQ = startsWithQ.map(generateImageQ);
function generateImageQ(cardQ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardQ + '.gif" class="mb-1" alt="' + cardQ + '" loading="lazy">';
}

// Display cards that start with R
let startsWithR = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('r')) {
    startsWithR.push(alphaCardsTrading[i]);
  }
}
let imageListR = startsWithR.map(generateImageR);
function generateImageR(cardR) {
    return '<img src="https://colors-tcg.eu/cards/' + cardR + '.gif" class="mb-1" alt="' + cardR + '" loading="lazy">';
}

// Display cards that start with S
let startsWithS = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('s')) {
    startsWithS.push(alphaCardsTrading[i]);
  }
}
let imageListS = startsWithS.map(generateImageS);
function generateImageS(cardS) {
    return '<img src="https://colors-tcg.eu/cards/' + cardS + '.gif" class="mb-1" alt="' + cardS + '" loading="lazy">';
}

// Display cards that start with T
let startsWithT = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('t')) {
    startsWithT.push(alphaCardsTrading[i]);
  }
}
let imageListT = startsWithT.map(generateImageT);
function generateImageT(cardT) {
    return '<img src="https://colors-tcg.eu/cards/' + cardT + '.gif" class="mb-1" alt="' + cardT + '" loading="lazy">';
}

// Display cards that start with U
let startsWithU = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('u')) {
    startsWithU.push(alphaCardsTrading[i]);
  }
}
let imageListU = startsWithU.map(generateImageU);
function generateImageU(cardU) {
    return '<img src="https://colors-tcg.eu/cards/' + cardU + '.gif" class="mb-1" alt="' + cardU + '" loading="lazy">';
}

// Display cards that start with V
let startsWithV = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('v')) {
    startsWithV.push(alphaCardsTrading[i]);
  }
}
let imageListV = startsWithV.map(generateImageV);
function generateImageV(cardV) {
    return '<img src="https://colors-tcg.eu/cards/' + cardV + '.gif" class="mb-1" alt="' + cardV + '" loading="lazy">';
}

// Display cards that start with W
let startsWithW = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('w')) {
    startsWithW.push(alphaCardsTrading[i]);
  }
}
let imageListW = startsWithW.map(generateImageW);
function generateImageW(cardW) {
    return '<img src="https://colors-tcg.eu/cards/' + cardW + '.gif" class="mb-1" alt="' + cardW + '" loading="lazy">';
}

// Display cards that start with X
let startsWithX = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('x')) {
    startsWithX.push(alphaCardsTrading[i]);
  }
}
let imageListX = startsWithX.map(generateImageX);
function generateImageX(cardX) {
    return '<img src="https://colors-tcg.eu/cards/' + cardX + '.gif" class="mb-1" alt="' + cardX + '" loading="lazy">';
}

// Display cards that start with Y
let startsWithY = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('y')) {
    startsWithY.push(alphaCardsTrading[i]);
  }
}
let imageListY = startsWithY.map(generateImageY);
function generateImageY(cardY) {
    return '<img src="https://colors-tcg.eu/cards/' + cardY + '.gif" class="mb-1" alt="' + cardY + '" loading="lazy">';
}

// Display cards that start with Z
let startsWithZ = [];
for (const i in alphaCardsTrading) {
  if (alphaCardsTrading[i].startsWith('z')) {
    startsWithZ.push(alphaCardsTrading[i]);
  }
}
let imageListZ = startsWithZ.map(generateImageZ);
function generateImageZ(cardZ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardZ + '.gif" class="mb-1" alt="' + cardZ + '" loading="lazy">';
}