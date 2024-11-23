var jucatori;
var detaliiJ;
var okuri;

window.onload = function(){

  /*
  if(window.localStorage.length > 0)
  {
    var cnt;
    var drezerve2 = document.getElementById("drezerve");
    for(cnt = 0; cnt<window.localStorage.length; cnt++)
        if(JSON.parse(window.localStorage.getItem(localStorage.key(cnt)) != null))
            drezerve2.appendChild(JSON.parse(window.localStorage.getItem(localStorage.key(cnt))));
  } */

  var nr = 10;

  setInterval(function(){
    document.getElementById("cnter").innerHTML = "Secunde de cand sunteti pe pag: " + nr;
    nr = nr+10;
  }, 10000)

  
    jucatori = document.getElementById("players").children;
    detaliiJ = new Array(jucatori.length);
    okuri = new Array(jucatori.length).fill(0);
    const jucator1 = {
        numar: 33,
        pozitie: 'atacant'
      };
      detaliiJ[0] = jucator1;
      const jucator2 = {
        numar: 21,
        pozitie: 'atacant'
      };
      detaliiJ[1] = jucator2;
      const jucator3 = {
        numar: 17,
        pozitie: 'atacant'
      };
      detaliiJ[2] = jucator3;
      const jucator4 = {
        numar: 5,
        pozitie: 'mijlocas'
      };
      detaliiJ[3] = jucator4;
      const jucator5 = {
        numar: 8,
        pozitie: 'mijlocas'
      };
      detaliiJ[4] = jucator5;
      const jucator6 = {
        numar: 11,
        pozitie: 'mijlocas'
      };
      detaliiJ[5] = jucator6;
      const jucator7 = {
        numar: 3,
        pozitie: 'fundas'
      };
      detaliiJ[6] = jucator7;
      const jucator8 = {
        numar: 18,
        pozitie: 'fundas'
      };
      detaliiJ[7] = jucator8;
      const jucator9 = {
        numar: 3,
        pozitie: 'fundas'
      };
      detaliiJ[8] = jucator9;
      const jucator10 = {
        numar: 16,
        pozitie: 'fundas'
      };
      detaliiJ[9] = jucator10;
      const jucator11 = {
        numar: 4,
        pozitie: 'portar'
      };
      detaliiJ[10] = jucator11;
}

function showInfoJucator(arg)
{
    let i;
    for(i=0;i<detaliiJ.length;i++)
    {
        if(arg.className == "cerc" + (i+1) && okuri[i] == 0)
        {
            var info = document.createElement("div");
            arg.appendChild(info);
            info.id = "jucator" + i;
            info.innerHTML = "Numar: " + detaliiJ[i].numar + " Pozitie: " + detaliiJ[i].pozitie;
            info.style.color = "black";
            info.style.width = "200px";
            info.style.backgroundColor = "transparent";
            info.style.borderRadius = "0";
            info.style.position = "absolute";
            info.style.animation = "show 1s linear";
            okuri[i] = 1;
        }
    }
}

function removeInfoJucator(arg)
{
    let nrj = arg.className.slice(4)
    arg.children[arg.children.length - 1].style.animation = "remove 1s linear";
    arg.removeChild(arg.children[arg.children.length - 1]);
    okuri[nrj-1] = 0;
}


function myFunction() {
    var x = document.getElementById("myMenu");
    if (x.className === "meniu") {
      x.className += "-responsive";
    } else {
      x.className = "meniu";
    }
  } 

var drezerve;

function AddPlayer(){
  drezerve = document.getElementById("drezerve");
  var newrezerva = document.createElement("div");
  newrezerva.className = "dropdownsub";
  drezerve.appendChild(newrezerva);
  newrezerva.innerHTML = "Rezerva " + drezerve.children.length  + ": " + document.getElementsByName("Nume")[0].value 
    + ", " + document.getElementsByName("Pozitie")[0].value;
  let cheie = "rez" + drezerve.children.length - 2;
  window.localStorage.setItem(cheie, JSON.stringify(newrezerva));

}