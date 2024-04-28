var clicks = 0;
var clicksperclick = 1;
var cost = 0;
var timesupgraded = 0;
var clickspersec = 0;
var generators = 0;
var generatorcost = 35;

function generate(){
  loadGame();
  setInterval(function(){
    clicks += generators;
    document.getElementById("clicks").innerHTML = clicks;
  },1000);
  setInterval(function(){
    saveGame();
  }, 30000);
};
function onClick() {
  clicks += clicksperclick;
  document.getElementById("clicks").innerHTML = clicks;
};
function mejorar(){
  if(clicks >= (timesupgraded/2 + 15 * timesupgraded + 20)){
      var aux = timesupgraded;
      clicksperclick += 1;
      clicks -= aux/2 + 15 * timesupgraded + 20;
      timesupgraded += 1;
      document.getElementById("cost").innerHTML = aux/2 + 15 * timesupgraded + 20;
      document.getElementById("upgraded").innerHTML = timesupgraded;
      document.getElementById("clicks").innerHTML = clicks;
  }
}
function comprarGen(){
  if(clicks >= (generators/2 + 33 * generators + 35)){
    var aux = generators;
    clickspersec += 1;
    clicks -= aux/2 + 15 * aux + 35;
    generators += 1;
    document.getElementById("generatorcost").innerHTML = generators/2 + 33 * generators + 35;
    document.getElementById("generators").innerHTML = generators;
    document.getElementById("clicks").innerHTML = clicks;
  }
};
function saveGame(){
  var gameSave = {
    clicks: clicks,
    clicksperclick: clicksperclick,
    timesupgraded: timesupgraded,
    generators: generators
  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
function loadGame(){
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if(typeof savedGame.clicks !== "undefined") clicks = savedGame.clicks;
  if(typeof savedGame.clicksperclick !== "undefined") clicksperclick = savedGame.clicksperclick;
  if(typeof savedGame.timesupgraded !== "undefined") timesupgraded = savedGame.timesupgraded;
  if(typeof savedGame.generators !== "undefined") clicks = savedGame.generators;
}