const doSomething = (person: string, age:number, siFunnty:boolean): string =>{
    return "Hello world";
};

//function that can return number or sttring based on condition
function rando(num: number){
    if( Math.random() < 0.5){
        return num.toString();
    }
    return num;
}