class Chain{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
       
        
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(body){
        this.chain.bodyA = body;
    }
    
    fly(){
        this.chain.bodyA = null;
    }

    display(){
       
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;

            strokeWeight(2)
            var Anchor1X=pointA.x
            var Anchor1Y=pointA.y
            var Anchor2X=pontB.x+this.offsetX
            var Anchor2Y=pontB.y+this.offsetY
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
            
            




        }
    }
    
