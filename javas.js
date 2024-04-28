var clicks = 0;
var clicksPerClick = 1;
var generators = 0;

function init(){
  loadGame();
}
function clickdat(number){
    clicks += number;
    document.getElementById("clicks").innerHTML = clicks;
};
function upgradeClick(){
  var upgradeCost = Math.floor(10 * Math.pow(1.3, clicksPerClick));
  if(clicks >= upgradeCost){
    clicksPerClick += 1;
    clicks -= upgradeCost;
    document.getElementById('clicksPerClick').innerHTML = clicksPerClick;
    document.getElementById('clicks').innerHTML = clicks;
  };
  var nextUpCost = Math.floor(10 * Math.pow(1.3, clicksPerClick));
  document.getElementById('upgradeCost').innerHTML = nextUpCost;
}
function buyGen(){
    var genCost = Math.floor(35 * Math.pow(1.5, generators));     
    if(clicks >= genCost){
        generators += 1;
    	  clicks -= genCost;
        document.getElementById('generators').innerHTML = generators;
        document.getElementById('clicks').innerHTML = clicks;
    };
    var nextGenCost = Math.floor(35 * Math.pow(1.5, generators));
    document.getElementById('genCost').innerHTML = nextGenCost;
};
function saveGame(){
  var save = {
    clicks: clicks,
    clicksPerClick: clicksPerClick,
    generators: generators
  };
  localStorage.setItem("save", JSON.stringify(save));
}
function loadGame(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if(typeof savegame.clicks !== "undefined") clicks = savegame.clicks;
  if(typeof savegame.clicksPerClick !== "undefined") clicksPerClick = savegame.clicksPerClick;
  if(typeof savegame.generators !== "undefined") generators = savegame.generators;

  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById('clicksPerClick').innerHTML = clicksPerClick;
  document.getElementById('generators').innerHTML = generators;
}

window.setInterval(function(){
	clickdat(generators);
}, 1000);
window.setInterval(saveGame(), 30000);