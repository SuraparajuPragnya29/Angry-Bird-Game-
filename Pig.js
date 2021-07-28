class Pig extends BaseClass
{
    constructor(x, y)
    {
        super(x, y, 50, 50);
        this.image = loadImage("Sprites/enemy.png");
        this.remove = "false";
    }
    display()
    {
       //console.log(this.body.speed);
        if(this.body.speed < 4)
        {
            super.display();
        }
        else
        {
            if(this.remove === "false")
            {
                World.remove(myWorld, this.body);
            score = score + 50;
            this.remove = "true";
            }
        }
    }
};