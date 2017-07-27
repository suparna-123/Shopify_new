var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c=canvas.getContext("2d");
/*c.fillStyle="#FF0000";
c.fillRect(100,100,100,100);
c.fillStyle="blue";
c.fillRect(500,200,100,100);
c.beginPath();
c.moveTo(50,300);
c.strokeStyle="red";
c.lineTo(500,100);
c.stroke();*/


/*for(var i=0;i<100;i++){
	var x=Math.random()*window.innerWidth;
	var y=Math.random()*window.innerHeight;
c.beginPath();
c.arc(x, y, 50, 0, 2 * Math.PI,false);	

c.stroke();

}*/
function Circle(x,y,dy,dx,radius){
	this.x=x;
	this.y=y;
	this.dy=dy;
	this.dx=dx;
	this.radius=radius;
	this.draw=function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI,false);	
		c.strokeStyle="blue";
		c.stroke();
		c.fill();
	}
	this.update=function(){
		if(this.x + this.radius >innerWidth || this.x-this.radius <0){
		this.dx = -this.dx;
		}

		if(this.y + this.radius>innerHeight || this.y-this.radius <0){
			this.dy=-this.dy;
		}
		this.y+=this.dy;
		this.x +=this.dx;
		this.draw();
	}

}
var circlearray=[];
for(var i=0;i<100;i++){

	var x=Math.random()*(innerWidth-2*radius)+radius;
var y=Math.random()*(innerHeight-2*radius)+radius;
var dy=(Math.random()-0.5);
var dx=(Math.random()-0.5);
var radius=30;
circlearray.push(new Circle(x,y,dx,dy,radius));

}





function animate(){
	requestAnimationFrame(animate);

c.clearRect(0,0,innerWidth,innerHeight);

for(var i=0;i<circlearray.length;i++){
circlearray[i].update();
}
}
animate();