var message="Try Again !";
function Temp()
{
    this.y = 100;
    this.x = 100;
    this.show = function(){
		fill(0,160,0);
        rect(this.x,this.y,500,300);
		fill(0,0,0);
		textSize(50);
		text(message,200,200);
    }
}