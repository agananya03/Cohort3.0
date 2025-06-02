class rectangle{
    constructor(width,height,color){
        this.width=width
        this.height=height
        this.color=color
    }
    area(){
        const area=this.width*this.height
        return area;
    }
    paint(){
        console.log('painting with color ${this.color}');
    }
}
const rect=new rectangle(2,6);
const area=rect.area()
console.log(area);

const now=new Date();
console.log(now);

const map=new Map();
map.set('name','Ananya')
map.set('age',19)
console.log(map.get('name'))

setTimeout(logname,3000) //calls the function logname after 3 sec