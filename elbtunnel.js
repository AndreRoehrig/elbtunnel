//canvas-size
c.width = 900;
c.height = 450;

d = function(e,f,g){
                       if(t>e && t<f){
                       a.beginPath();
                       a.arc(g,225,25,0,2*Math.PI);
                       a.fillStyle="white";
                       a.fill();
                       a.closePath();}};

t = 0;
setInterval(function(){a.fillStyle="black";
                       a.fillRect(0,0,900,450);
                       t++;
                       a.closePath();
                       a.beginPath();
                       a.arc(8*t-25,225,25,0,2*Math.PI);
                       a.fillStyle="white";
                       a.fill();
                       a.closePath();
                       d(12,24,75);
                       d(24,36,167);
                       d(36,48,259);
                       d(48,60,351);
                       d(60,72,443);


                       },40);

