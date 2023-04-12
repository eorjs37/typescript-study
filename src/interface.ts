//Interface : 구조적 타입
interface Person{
    name:string;
    age:number;
    gender:string;
}
function printPerson(person:Person){
    console.log('name : ',person.name)
    console.log('age : ',person.age)
    console.log('gender : ',person.gender)
}


printPerson({
    name:'최대건',
    age:31,
    gender:'M'
});


//선택적 프로퍼티
// 모든 값을 필수로 받고 싶지 않을때 사용된다.
interface Config{
    width?:number;
    height?:number;
}

function square(config:Config):number{
    let width:number = 0;
    let height :number = 0;

    if(config.width){
        width = config.width;
    }


    if(config.height){
        height = config.height
    }

    return  width * height;
}

let result:number =  square({width:10,height:10});
console.log(result);


//초과 프로퍼티 검사
interface ClassInfo{
    className?:string;
    type?:string;
    startDate?:string;
    endDate?:string;
    time?:string;
}
function createClass(classInfo:ClassInfo){

}

//오류
// classNames 이라는 프로퍼티가 존재 하지 않음.
// createClass({
//     classNames:'테스트',
//     type:"C",
//     startDate:'2023-04-12',
//     endDate:'2023-04-16',
//     time:'20:00'
// })

//classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법1 -  타입 단언
createClass({
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
} as ClassInfo)

//classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법2 - 문자열 인덱스 서명
interface ClassInfo2{
    className?:string;
    type?:string;
    startDate?:string;
    endDate?:string;
    time?:string;
    [propName:string]:any
}


function createClass2(classInfo:ClassInfo2){

}
createClass2({
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
})

//classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법3 - 객체를 다른 변수에 할당
let squareOptions = {
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
}
createClass(squareOptions);