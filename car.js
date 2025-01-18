function Car()
{
    this.y = 420;
    this.x = 200;
    this.width = 20;
    this.height = 30;
    this.show = function(){
        fill(0,0,230);
        rect(this.x,this.y,this.width,this.height);
    }
    
    this.right = function(){
        this.x=constrain(this.x+10,150,330);
        
    }
    this.left = function(){
        this.x=constrain(this.x-10,150,350);
    }
}