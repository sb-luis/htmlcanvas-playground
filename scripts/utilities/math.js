// A simple 2D Vector class
class Vector{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }
  
    //Pseudo-properties
    get length(){
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  
    //Instance Methods
    add(other){
      try{
        this.x += other.x;
        this.y += other.y;
      }
      catch(error){
        console.log(`ERROR: ${error}`);
      }
    }
  
    sub(other){
      try{
        this.x -= other.x;
        this.y -= other.y;
      }
      catch(error){
        console.log(`ERROR: ${error}`);
      }
    }
  
    mult(scalar){
      this.x *= scalar;
      this.y *= scalar;
    }
  
    div(scalar){
      this.x /= scalar;
      this.y /= scalar;
    }
  
    normalize(){
      this.x /= this.length;
      this.y /= this.length;
    }
    //Static Methods
    static add(v1, v2){
      let result = false;
  
      try{
        result = new Vector(v1.x + v2.x, v1.y + v2.y);
      }
      catch(error){
        console.log(`ERROR: ${error}`);
      }
      finally{
        return result;
      }
    }
  
    static sub(v1, v2){
      let result = false;
  
      try{
        result = new Vector(v1.x - v2.x, v1.y - v2.y);
      }
      catch(error){
        console.log(`ERROR: ${error}`);
      }
      finally{
        return result;
      }
    }
  
    static mult(v1, scalar){
      return new Vector(v1.x * scalar, v1.y * scalar);
    }
  
    static div(v1, scalar){
      return new Vector(v1.x / scalar, v1.y / scalar);
    }
  
    static dot(v1, v2){
      return v1.x * v2.x + v1.y * v2.y;
    }
  
    static normalize(v1){
      return new Vector(v1.x / v1.length, v1.y / v1.length);
    }
  }
  