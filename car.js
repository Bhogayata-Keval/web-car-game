function Car()
{
    this.y = 420;
    this.x = 200;
    this.show = function(){
        fill(0,0,230);
        rect(this.x,this.y,20,30);
    }
    
    this.right = function(){
        this.x=constrain(this.x+10,150,330);
        
    }
    this.left = function(){
        this.x=constrain(this.x-10,150,350);
    }
}