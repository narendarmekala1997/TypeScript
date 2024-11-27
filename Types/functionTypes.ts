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