var i=20;
var z=0;
var whitestrips = [0,100,200,300,400];
var car;
var obstacle = [];
var temp;
function setup() {
    
    createCanvas(500,500);
    car = new Car();
    obstacle.push(new Obstacle());
	temp=new Temp();
}

function draw() {

    fill(0,160,0);
    rect(0,0,150,500);
    rect(350,0,500,500);
    fill(0,0,0);
    rect(150,0,200,500);
    fill(255,255,255);
	
    for(var j=0;j<6;j++)
        {
            whitestrips[j]++;
            if(whitestrips[j]>=500)
                {
                    whitestrips[j]=-30;
                }
            rect(245,whitestrips[j],10,30);
        }
    
    for(var k=obstacle.length-1;k>=0;k--)
        {
            obstacle[k].show();
            obstacle[k].update(); 
            if(obstacle[k].hits(car))
                {
                    print("Game Over");
					clear();
					temp.show();
					z++;
                }
            if(obstacle[k].y>500)
                {
                    obstacle.splice(k,1);
                }
        }
    if(frameCount % 120 == 0)
        {
                obstacle.push(new Obstacle());            
        }
		if(z==0)
		{
			car.show();
		}
		else
		{
			z=0;
		}
}
function keyPressed(){
    if(key == 'A')
        {
            car.left();
        }
    else if(key == 'D')
        {
            car.right();
        }
}