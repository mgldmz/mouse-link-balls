class Circle{

    constructor(){
        
        this.inc = 3;
        this.dx = (Math.random() -.5) * this.inc;
        this.dy = (Math.random() -.5) * this.inc;
        this.max = 15;
        this.min = 3;
        this.radius = Math.floor(Math.random() * (this.max - this.min)) + this.min;;
        this.x= Math.random()*innerWidth*.7+this.radius;
        this.y= Math.random()*innerHeight*.7+this.radius;
        this.color = Math.floor(Math.random()*3);

    }

    draw(){
    
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
        c.fill();
        c.fillStyle = colorPalette[this.color+1];

    }

    move(){
        this.x += this.dx;
        this.y += this.dy;

    }

    bounce(){
        if (this.x +this.radius > innerWidth || this.x - this.radius<0){
            this.dx = -this.dx;
        }
        if (this.y +this.radius > innerHeight || this.y - this.radius<0){
            this.dy = -this.dy;
        }

    }

    grow(){
        if(mouse.x -this.x <50 && mouse.x -this.x > -50 &&
            mouse.y -this.y <50 && mouse.y -this.y > -50){
            this.radius +=1;
        }
    }

    connect(otherCircle){
        var d = Math.sqrt(Math.pow((this.x-otherCircle.x),2)+(Math.pow((this.y-otherCircle.y),2)));

        if(d < 350){
            c.beginPath();
            c.moveTo(this.x, this.y);
            c.lineTo(otherCircle.x, otherCircle.y);
            c.stroke();
        }
    }

    
}