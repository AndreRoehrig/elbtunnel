//canvas-size
c.width = 900;
c.height = 450;
a.lineWidth = 10;
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
  a.globalAlpha=1;
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
  if(t>196&&t<440){
    e(76,450,225);}
  if(t>439&&t<444){
    e(76,450-(4*t-1760),225);}
  if(t>443&&t<453){
    e(76,438+(4*t-1772),225);}
  if(t>452&&t<462){
    e(76,474-(4*t-1844),225);}
  if(t>196){
    x=0;
    i=0;
    a.globalAlpha=0.1;
      for(i>-1;i<1000;i+=5){
    a.beginPath();
        for(x>-1;x<901;x+=10){
          y=50*Math.sin(x/75)+i+3*t;
          a.strokeStyle="red";
          a.lineTo(x,y-1800);
          if(x>899){a.stroke();}}
        x=0;}
    }


},40);

