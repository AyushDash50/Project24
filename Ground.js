class Ground{
    constructor(x,y,w,h){
       var options = {
           isStatic: true
           }
   
   this.object = Bodies.rectangle(x,y,w,h,options);
   this.width = w;
   this.height = h;
   World.add(world,this.object); 
   
    }
   display(){
   
   rectMode(CENTER);
   fill("yellow");
   rect(this.object.position.x,this.object.position.y, this.width,this.height);
   
   }
   }
   