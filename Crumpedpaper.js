class Crumpedpaper{
    constructor(x,y,r){
       var options = {
           restitution:0.3,
           density:1.2,
           friction:0.6
           }
   
   this.object = Bodies.circle(x,y,r,options);

   this.radius=r

   World.add(world,this.object); 
   
    }
    fly(){

        Matter.Body.applyForce(this.object,this.object.position,{x:85,y:-85 });   
    }
   display(){
   
   ellipseMode(CENTER);
   fill("green");
   ellipse(this.object.position.x,this.object.position.y,this.radius.r);
   
   }
   }
   