//num is any type here
function square( num){
    return num*num;
}
square(3);

//num is number type here
function squares(num: number){
    return num*num;
}
squares(12);

function greet(person: string){
    return 'Hi there,${person}';
}
greet("naren");

//default value to function parameters
function square1(num: number=10 ){
    return num*num;
}

function greetingWithDefault( person: string = "Stranger"){
    return 'Hi there, ${person}!';
}