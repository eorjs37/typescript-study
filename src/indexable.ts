//인덱싱 타입과 리턴타입을 정한다.
interface StringArray{
    [index:number]:string;
}

let myArray:StringArray;
myArray = ["Bed","Fred"];
console.log(myArray[0])

interface PersonInfo{
    [key:string]:string | number;
    name:string;
    age:number;
    gender:string;
}

const person:PersonInfo ={
    name:"dddd",
    age:30,
    gender:"Men"
}

const age:number = person['age'];
const names:string = person['name'];
console.log(age);
console.log(names);

