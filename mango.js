class Mango {
    constructor(x ,y ,width ,height) {
        var options = {
            isStatic : true , 
            restituition : 0 ,
            friction : 1 
        }
       this.image = loadImage("mango.png");
        this.width=width;
        this.height=height;
        this.circle
    }


    display(){
        image(this.image, 450,170 , this.width, this.height);
        image(this.image, 550,200 , this.width, this.height);
        image(this.image, 500,100 , this.width, this.height);
        image(this.image, 600,70 , this.width, this.height);
        image(this.image, 650,150 , this.width, this.height);
        image(this.image, 730,200 , this.width, this.height);
    }
}