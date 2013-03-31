//canvas-size
c.width = 900;
c.height = 450;
d = function(g){
  if(8*t-25>g&&8*t-25<g+115){
  a.beginPath();
  a.arc(g,225,25,0,2*Math.PI);
  a.fillStyle="white";
  a.fill();
  a.closePath();}};

e = function(j,g,h){
  a.beginPath();  
  a.arc(g,h,j,0,2*Math.PI);
  a.fillStyle="white";
  a.fill();
  a.closePath();};

t = 0;

setInterval(function(){a.fillStyle="black";
  a.fillRect(0,0,900,450);
  t++;
  a.closePath();
  a.beginPath();
  a.arc(8*t-25,225,25,0,2*Math.PI);
  a.fillStyle="white";
  if(t<90){ a.fill();
    a.closePath();
    d(115);
    d(230);
    d(345);
    d(460);
    d(575);
    d(690);}
  if(t>89&&t<107){
    e(25+3*(t-89),690,225);}
  if(t>106&&t<116){
    e(76,690,225);}
  if(t>115&&t<197){
    e(76,690-(3*t-345),225);}
  if(t>196&&t<300){
    e(76,450,225);}
},40);

