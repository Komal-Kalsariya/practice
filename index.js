class calculator{
    constructor(a,b,result){
        this.a=a;
        this.b=b;
        this.result=result;
    }
    getResult(){
        console.log(this.result)
    }
    add(){
        this.result=this.a+this.b;
        this.getResult()
        
    }
    sub(){
        this.result=this.a-this.b;
        this.getResult()
    }
    mul(){
        this.result=this.a*this.b;
        this.getResult()
    }
    div(){
        this.result=this.a/this.b;
        this.getResult()
    }
}

class calculator1 extends calculator{
    constructor(a,b,c,result){
        super(a,b,result)
        this.c=c

    }
    add(){
        this.result=this.a+this.b+this.c
        this.getResult()
    }
    sub(){
        this.result=this.a-this.b-this.c
        this.getResult()
    }
    mul(){
        this.result=this.a*this.b*this.c
        this.getResult()
    }
    div(){
        this.result=this.a/this.b/this.c;
        this.getResult()
    }
}
class calculator2 extends calculator1{
    constructor(a,result){
        super(a[0],a[1],a[2],result)
        this.a=a;
    };
   add(){
    for(let i=0;i<this.a.lenght;i++){
        this.result+=this.a[i];
    }
    this.getResult();
   }
}

// let cla1=new calculator(2,3)
// cla1.add();
// cla1.sub()
// cla1.mul()
// cla1.div()

// let cal2=new calculator1(2,3,4)
// cal2.add()
// cal2.sub()
// cal2.mul()
// cal2.div()

let cal3=new calculator2([2,2,2])
cal3.add();