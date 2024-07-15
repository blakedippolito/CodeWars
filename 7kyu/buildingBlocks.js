// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`

class Block{

    constructor(data){
      [this.w, this.l, this.h] = data
    }
    getWidth() {
      return this.w
    }
    getLength() {
      return this.l
    }
    getHeight() {
      return this.h
    }
    getVolume() {
      return this.w*this.l*this.h
    }
    getSurfaceArea() {
      return 2 * (this.l * this.w + this.l * this.h + this.h * this.w);
    }
  }

let block = new Block([2,4,6])
console.log(block.getVolume())
console.log(block.getSurfaceArea()) 