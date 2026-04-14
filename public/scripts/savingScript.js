// Show total cards in tradepile
document.getElementById("count").innerHTML = cardsKeeping.length;

// Sort cards alphabetically
const alphaCardsKeeping = cardsKeeping.toSorted();

// Display cards as text
const textList = alphaCardsKeeping.join(", ");
document.getElementById("textarea-text-list").innerHTML = textList;
document.getElementById("text-list").innerHTML = textList;

// Display cards that start with a number
let startsWithNum = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('0')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('1')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('2')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('3')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('4')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('5')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('6')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('7')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('8')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
  if (alphaCardsKeeping[i].startsWith('9')) {
    startsWithNum.push(alphaCardsKeeping[i]);
  }
}
let imageListNum = startsWithNum.map(generateImageNum);
function generateImageNum(cardNum) {
    return '<img src="https://colors-tcg.eu/cards/' + cardNum + '.gif" class="mb-1" alt="' + cardNum + '" loading="lazy">';
}

// Display cards that start with A
let startsWithA = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('a')) {
    startsWithA.push(alphaCardsKeeping[i]);
  }
}
let imageListA = startsWithA.map(generateImageA);
function generateImageA(cardA) {
    return '<img src="https://colors-tcg.eu/cards/' + cardA + '.gif" class="mb-1" alt="' + cardA + '" loading="lazy">';
}

// Display cards that start with B
let startsWithB = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('b')) {
    startsWithB.push(alphaCardsKeeping[i]);
  }
}
let imageListB = startsWithB.map(generateImageB);
function generateImageB(cardB) {
    return '<img src="https://colors-tcg.eu/cards/' + cardB + '.gif" class="mb-1" alt="' + cardB + '" loading="lazy">';
}

// Display cards that start with C
let startsWithC = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('c')) {
    startsWithC.push(alphaCardsKeeping[i]);
  }
}
let imageListC = startsWithC.map(generateImageC);
function generateImageC(cardC) {
    return '<img src="https://colors-tcg.eu/cards/' + cardC + '.gif" class="mb-1" alt="' + cardC + '" loading="lazy">';
}

// Display cards that start with D
let startsWithD = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('d')) {
    startsWithD.push(alphaCardsKeeping[i]);
  }
}
let imageListD = startsWithD.map(generateImageD);
function generateImageD(cardD) {
    return '<img src="https://colors-tcg.eu/cards/' + cardD + '.gif" class="mb-1" alt="' + cardD + '" loading="lazy">';
}

// Display cards that start with E
let startsWithE = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('e')) {
    startsWithE.push(alphaCardsKeeping[i]);
  }
}
let imageListE = startsWithE.map(generateImageE);
function generateImageE(cardE) {
    return '<img src="https://colors-tcg.eu/cards/' + cardE + '.gif" class="mb-1" alt="' + cardE + '" loading="lazy">';
}

// Display cards that start with F
let startsWithF = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('f')) {
    startsWithF.push(alphaCardsKeeping[i]);
  }
}
let imageListF = startsWithF.map(generateImageF);
function generateImageF(cardF) {
    return '<img src="https://colors-tcg.eu/cards/' + cardF + '.gif" class="mb-1" alt="' + cardF + '" loading="lazy">';
}

// Display cards that start with G
let startsWithG = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('g')) {
    startsWithG.push(alphaCardsKeeping[i]);
  }
}
let imageListG = startsWithG.map(generateImageG);
function generateImageG(cardG) {
    return '<img src="https://colors-tcg.eu/cards/' + cardG + '.gif" class="mb-1" alt="' + cardG + '" loading="lazy">';
}

// Display cards that start with H
let startsWithH = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('h')) {
    startsWithH.push(alphaCardsKeeping[i]);
  }
}
let imageListH = startsWithH.map(generateImageH);
function generateImageH(cardH) {
    return '<img src="https://colors-tcg.eu/cards/' + cardH + '.gif" class="mb-1" alt="' + cardH + '" loading="lazy">';
}

// Display cards that start with I
let startsWithI = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('i')) {
    startsWithI.push(alphaCardsKeeping[i]);
  }
}
let imageListI = startsWithI.map(generateImageI);
function generateImageI(cardI) {
    return '<img src="https://colors-tcg.eu/cards/' + cardI + '.gif" class="mb-1" alt="' + cardI + '" loading="lazy">';
}

// Display cards that start with J
let startsWithJ = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('j')) {
    startsWithJ.push(alphaCardsKeeping[i]);
  }
}
let imageListJ = startsWithJ.map(generateImageJ);
function generateImageJ(cardJ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardJ + '.gif" class="mb-1" alt="' + cardJ + '" loading="lazy">';
}

// Display cards that start with K
let startsWithK = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('k')) {
    startsWithK.push(alphaCardsKeeping[i]);
  }
}
let imageListK = startsWithK.map(generateImageK);
function generateImageK(cardK) {
    return '<img src="https://colors-tcg.eu/cards/' + cardK + '.gif" class="mb-1" alt="' + cardK + '" loading="lazy">';
}

// Display cards that start with L
let startsWithL = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('l')) {
    startsWithL.push(alphaCardsKeeping[i]);
  }
}
let imageListL = startsWithL.map(generateImageL);
function generateImageL(cardL) {
    return '<img src="https://colors-tcg.eu/cards/' + cardL + '.gif" class="mb-1" alt="' + cardL + '" loading="lazy">';
}

// Display cards that start with M
let startsWithM = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('m')) {
    startsWithM.push(alphaCardsKeeping[i]);
  }
}
let imageListM = startsWithM.map(generateImageM);
function generateImageM(cardM) {
    return '<img src="https://colors-tcg.eu/cards/' + cardM + '.gif" class="mb-1" alt="' + cardM + '" loading="lazy">';
}

// Display cards that start with N
let startsWithN = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('n')) {
    startsWithN.push(alphaCardsKeeping[i]);
  }
}
let imageListN = startsWithN.map(generateImageN);
function generateImageN(cardN) {
    return '<img src="https://colors-tcg.eu/cards/' + cardN + '.gif" class="mb-1" alt="' + cardN + '" loading="lazy">';
}

// Display cards that start with O
let startsWithO = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('o')) {
    startsWithO.push(alphaCardsKeeping[i]);
  }
}
let imageListO = startsWithO.map(generateImageO);
function generateImageO(cardO) {
    return '<img src="https://colors-tcg.eu/cards/' + cardO + '.gif" class="mb-1" alt="' + cardO + '" loading="lazy">';
}

// Display cards that start with P
let startsWithP = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('p')) {
    startsWithP.push(alphaCardsKeeping[i]);
  }
}
let imageListP = startsWithP.map(generateImageP);
function generateImageP(cardP) {
    return '<img src="https://colors-tcg.eu/cards/' + cardP + '.gif" class="mb-1" alt="' + cardP + '" loading="lazy">';
}

// Display cards that start with Q
let startsWithQ = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('q')) {
    startsWithQ.push(alphaCardsKeeping[i]);
  }
}
let imageListQ = startsWithQ.map(generateImageQ);
function generateImageQ(cardQ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardQ + '.gif" class="mb-1" alt="' + cardQ + '" loading="lazy">';
}

// Display cards that start with R
let startsWithR = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('r')) {
    startsWithR.push(alphaCardsKeeping[i]);
  }
}
let imageListR = startsWithR.map(generateImageR);
function generateImageR(cardR) {
    return '<img src="https://colors-tcg.eu/cards/' + cardR + '.gif" class="mb-1" alt="' + cardR + '" loading="lazy">';
}

// Display cards that start with S
let startsWithS = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('s')) {
    startsWithS.push(alphaCardsKeeping[i]);
  }
}
let imageListS = startsWithS.map(generateImageS);
function generateImageS(cardS) {
    return '<img src="https://colors-tcg.eu/cards/' + cardS + '.gif" class="mb-1" alt="' + cardS + '" loading="lazy">';
}

// Display cards that start with T
let startsWithT = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('t')) {
    startsWithT.push(alphaCardsKeeping[i]);
  }
}
let imageListT = startsWithT.map(generateImageT);
function generateImageT(cardT) {
    return '<img src="https://colors-tcg.eu/cards/' + cardT + '.gif" class="mb-1" alt="' + cardT + '" loading="lazy">';
}

// Display cards that start with U
let startsWithU = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('u')) {
    startsWithU.push(alphaCardsKeeping[i]);
  }
}
let imageListU = startsWithU.map(generateImageU);
function generateImageU(cardU) {
    return '<img src="https://colors-tcg.eu/cards/' + cardU + '.gif" class="mb-1" alt="' + cardU + '" loading="lazy">';
}

// Display cards that start with V
let startsWithV = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('v')) {
    startsWithV.push(alphaCardsKeeping[i]);
  }
}
let imageListV = startsWithV.map(generateImageV);
function generateImageV(cardV) {
    return '<img src="https://colors-tcg.eu/cards/' + cardV + '.gif" class="mb-1" alt="' + cardV + '" loading="lazy">';
}

// Display cards that start with W
let startsWithW = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('w')) {
    startsWithW.push(alphaCardsKeeping[i]);
  }
}
let imageListW = startsWithW.map(generateImageW);
function generateImageW(cardW) {
    return '<img src="https://colors-tcg.eu/cards/' + cardW + '.gif" class="mb-1" alt="' + cardW + '" loading="lazy">';
}

// Display cards that start with X
let startsWithX = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('x')) {
    startsWithX.push(alphaCardsKeeping[i]);
  }
}
let imageListX = startsWithX.map(generateImageX);
function generateImageX(cardX) {
    return '<img src="https://colors-tcg.eu/cards/' + cardX + '.gif" class="mb-1" alt="' + cardX + '" loading="lazy">';
}

// Display cards that start with Y
let startsWithY = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('y')) {
    startsWithY.push(alphaCardsKeeping[i]);
  }
}
let imageListY = startsWithY.map(generateImageY);
function generateImageY(cardY) {
    return '<img src="https://colors-tcg.eu/cards/' + cardY + '.gif" class="mb-1" alt="' + cardY + '" loading="lazy">';
}

// Display cards that start with Z
let startsWithZ = [];
for (const i in alphaCardsKeeping) {
  if (alphaCardsKeeping[i].startsWith('z')) {
    startsWithZ.push(alphaCardsKeeping[i]);
  }
}
let imageListZ = startsWithZ.map(generateImageZ);
function generateImageZ(cardZ) {
    return '<img src="https://colors-tcg.eu/cards/' + cardZ + '.gif" class="mb-1" alt="' + cardZ + '" loading="lazy">';
}