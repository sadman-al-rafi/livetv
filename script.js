var rawlink = window.location.href;
var splink = rawlink.split("?ch=");
var ch = splink[1];
fetch("dbase.json").then(res=>res.json()).then(data=>{
  var chlink = data[ch];
  const tvplayer = document.getElementById("tvplayer");
  tvplayer.innerHTML=`   <video controls id="vidplayer">
        <source src="${chlink}">
      </video>`
})