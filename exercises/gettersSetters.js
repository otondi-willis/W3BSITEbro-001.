/* getter = special method that makes a property readable
         setter = special method that makes a property writable 
         validate  and modify a value when reading/writing a property
         
*/

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width cannot be negative");
        }

    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Height cannot be negative");
        }
    }
    get width(){
        return `${this._width.toFixed(2)}cm`;
    }
    get height(){
        return `${this._height.toFixed(2)}cm`;
    }
    get area(){
        return `${(this._width * this._height).toFixed(2)}cm2`;
    }
    get perimeter(){
        return `${(2 * (this._width + this._height)).toFixed(2)}cm`;
    }
    
}

const rectangle = new Rectangle(10, 4);
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log(rectangle.perimeter);
