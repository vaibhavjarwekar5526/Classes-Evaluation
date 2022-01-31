class Rectangle{
    constructor(w, h){
        this.width=w;
        this.height=h;
    }
    getArea(){
        console.log(this.width*this.height);
    }
}

class Square extends Rectangle{
    constructor(w, h, s){
        super(w, h)
        this.side=s;
    }
    getPerimeter(){
        console.log(4*this.side)
    }
}

let square = new Square(6,5,4)
square.getArea()
square.getPerimeter();

