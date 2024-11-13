var portalLit = false;
let blazeRodCount = 0;
var blazeDead = false;
var blaze2Dead = false;
let goldCount = 0;
function playButton() {
  window.location.href = "portalPage.html";
  console.log("clicked");
}
function noPortalButton() {
  if (portalLit == true) {
    window.location.href = "netherSpawn.html";
  }
  document.getElementById("noPortal").src = "Images/portalbutton2.png";
  console.log("change portal");
  portalLit = true;
}
function netherSpawn1() {
  window.location.href = "corridor.html";
}
function netherSpawn2() {
  window.location.href = "blazeSpawner.html";
}
function killBlaze() {
  document.getElementById("blaze").src = "Images/blaze_rod.png";
  document.getElementById("blaze").classList.remove("blaze");
  document.getElementById("blaze").classList.add("blazeRod");
  if (blazeDead == true) {
    blazeRodCount += 1;
    document.getElementById("blaze").classList.add("disappear");
    console.log(blazeRodCount);
  }
  blazeDead = true;
  pickUpBlazeRod();
}
function killBlaze2() {
  document.getElementById("blaze2").src = "Images/blaze_rod.png";
  document.getElementById("blaze2").classList.remove("blaze2");
  document.getElementById("blaze2").classList.add("blazeRod2");
  if (blaze2Dead == true) {
    blazeRodCount += 1;
    document.getElementById("blaze2").classList.add("disappear");
    console.log(blazeRodCount);
  }
  blaze2Dead = true;
  pickUpBlazeRod();
}
function pickUpBlazeRod() {
  if (blazeRodCount == 1) {
    document.getElementById("blazeMiddleImg").src = "Images/blazerod1.png";
    console.log("added");
  } else if (blazeRodCount == 2) {
    document.getElementById("blazeMiddleImg").src = "Images/blazerod2.png";
  }
}
function corridorLeft() {
  window.location.href = "chest.html";
}
function corridorForwards() {
  window.location.href = "netherWart.html";
}
function openChest() {
  document.getElementById("chestRight").src = "Images/openchestright.png";
  document.getElementById("chestMiddle").src = "Images/openchestmiddle.png";
  document.getElementById("chestLeft").src = "Images/openchestleft.png";
  document.getElementById("chest").classList.add("disappear");
  document.getElementById("empty1").classList.add("disappear");
  document.getElementById("empty2").classList.add("disappear");
  document.getElementById("empty3").classList.add("disappear");
  document.getElementById("empty4").classList.add("disappear");
}
function getGold() {
  goldCount += 1;
  console.log(goldCount);
  if (goldCount == 1) {
    document.getElementById("gold1").classList.remove("disappear");
    document.getElementById("empty1").classList.remove("disappear");
  } else if (goldCount == 2) {
    document.getElementById("gold1").classList.add("disappear");
    document.getElementById("empty2").classList.remove("disappear");
    document.getElementById("gold2").classList.remove("disappear");
  } else if (goldCount == 3) {
    document.getElementById("gold2").classList.add("disappear");
    document.getElementById("empty3").classList.remove("disappear");
    document.getElementById("gold3").classList.remove("disappear");
  }
}
function getArmor() {
  document.getElementById("horseArmor").classList.remove("disappear");
  document.getElementById("empty4").classList.remove("disappear");
}
function getNetherWart() {
  document.getElementById("netherWartMiddle").src = "Images/notnetherwart.png";
}
