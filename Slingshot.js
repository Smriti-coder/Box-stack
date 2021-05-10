class Slingshot{

    constructor(bodyA, pointB){

        var options = {

            length:10,
            stiffness:0.04,
            bodyA:bodyA,
            pointB:pointB,
        } 
        this.pointB=pointB
        this.sling = Constraint.create(options)
        World.add(world,this.sling)
    

    }
fly(){
    this.sling.bodyA=null;
}


display(){
    if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
    var pointB =this.sling.pointB;
   line (pointA.x, pointA.y, pointB.x,pointB.y);
   strokeWeight(5);
    }
}
}

