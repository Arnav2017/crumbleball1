class paper 
{
   constructor(x,y,r)
   {
       var options={
           isStatic:false,
           restitutions:0.3,
           friction:0.5,
           density:1.2

       }
       this.x=x;
       this.y=y
       this.r=r
       this.body=Bodies.circle(this.x, this.y, this.r/2, options)
       world.add(WORLD, this.body);

    }

display()
{
    var paperpos=this.body.position;

     Push()
     translate(paper.x, paperpos.y);
     rectMode(CENTER)
     strokeWeight(3);
     fill(225,0,255)
     ellipse(0,0,this.r, this.r);
     Pop()

    
}

