function Obstacle()
{
    this.x = random(150,330);
    this.y = 0;
    
    this.show = function()
    {
        fill(255,0,0);
        rect(this.x ,this.y,10,20);
    }
    
    this.update = function()
    {
        this.y++;
    } 
    
    this.hits = function(Car)
    {
        if( Math.abs(Car.x - this.x) < 15 && Math.abs(Car.y - this.y) < 20 )
            {
                return true;
            }
        else
            return false;
    }
    
}