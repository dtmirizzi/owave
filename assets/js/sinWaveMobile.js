{
//Mobile View

var c = document.getElementById("oWaveBannerMobile");
var ctx = c.getContext("2d");
var cw = c.width = 200;
var ch = c.height = 200;
var cx = cw / 2, cy = ch / 2;
var rad = Math.PI / 180;
var w = 450;
var h = 170;
var amplitude = h;
var frequency = .045;
var phi = 0;
var frames = 0;
var stopped = true;
//ctx.strokeStyle = "Cornsilk";
ctx.lineWidth = 4;
var img =document.getElementById("logoWoSin");

function Draw() {
  frames++
  phi = frames / 30;
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img,0,0,400,285)
  ctx.beginPath();
  ctx.strokeStyle = "#2d86a5";
  //ctx.moveTo(0, ch);
  for (var x = 107; x < w -82; x++) {
    y = Math.sin(x * frequency + phi) * amplitude / 2 + amplitude / 2;
    //y = Math.cos(x * frequency + phi) * amplitude / 2 + amplitude / 2;
    ctx.lineTo(x, y +30); // 40 = offset

  }
  //ctx.lineTo(w, ch);
  //ctx.lineTo(0, ch);
  ctx.stroke();
  ctx.lineWidth=6;
  requestId = window.requestAnimationFrame(Draw);
}
requestId = window.requestAnimationFrame(Draw);
}