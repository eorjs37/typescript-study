# typescript 공부용

## npm init
> Node 패키지 정보를 관리를 위해 npm init을 해준다.


## npm install typescript --save-dev
> typescript를 설치해준다.


## npx tsc src/helloworld.ts
> tsc 명령어를 이용하여 ts => js으로 변경 해준다.  
> 그리고 node src/helloworld.js 를 실행시키면, 동작하는 것을  
> 확인이 가능하다.


## tsconfig.json
> 매번 명령어 치기는 힘드니, config 파일을 만들어 config 파일  
> 기준으로 명령어가 동작하는 것으로 가능하다.

```json
{
  "compilerOptions": {
    "module": "system",
    "noImplicitAny": false,  /* 'any' 타입으로 구현된 표현식 혹은 정의 에러처리 여부 */
    "removeComments": true, /* 주석 삭제 여부 */
    "preserveConstEnums": true,
    "sourceMap": false  /* '.map' 파일 생성 여부. */
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.spec.ts"]
}
```

## package.json 명령어 등록
> 명령어를 package.json에 등록하자, ts파일이 생성/수정 될때 마다  
> 자동으로 js으로 바꿔주도록 watch를 걸어주자.  
> 그리고 npm run tsc를 사용하면 된다.


```json
{
  "scripts": {
    "tsc": "npx tsc --watch"
  }
}

```

## typescript Interace
> 구조적 타입을 만들고 싶을때 사용된다.

```typescript
//Person이라는 구조체
interface Person{
    name:string;
    age:number;
    gender:string;
}

//person이라는 인자는 Person이라는 타입
function printPerson(person:Person){
    console.log('name : ',person.name)
    console.log('age : ',person.age)
    console.log('gender : ',person.gender)
}

printPerson({
    name:'최대건',
    age:31,
    gender:'M'
})
```

### Interface 선택적 프로퍼티
> 모든 프로퍼티를 필수적으로 받고 싶지 않을때 사용하는 방법이며, 프로퍼티 뒤에 ?를 붙여준다.
```typescript
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
console.log(result)
```

### 초과 프로퍼티 검사
> 규격에 맞지 않는 프로퍼티가 들어올 경우이거나, 추가된 프로퍼티가 있을 경우 처리방법이다.

#### className 대신 classNames를 넣은 경우
> 아래 코드 같은 경우 classNames 프로퍼티는 존재하지 않기 때문에,오류를 일으킨다.  
> 그래서 이것을 해결하는 방법이 몇가지가 있다.
```typescript
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
createClass({
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
})

```

#### classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법1 -  타입 단언
> 타입 단언으로 해결
```typescript
createClass({
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
} as ClassInfo)
```

#### classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법2 - 문자열 인덱스 서명
> 문자열 인덱스 서명 추가로 추가된 프로퍼티가 들어올 수 있게 처리한다.
```typescript
interface ClassInfo{
    className?:string;
    type?:string;
    startDate?:string;
    endDate?:string;
    time?:string;
    [propName:string]:any 
}
```


#### classNames 없는 프로퍼티 넣을때 오류가 뜨는경우 해결 법3 - 객체를 다른 변수에 할당
> 다른 변수에 객체를 담으면 오류가 나지 않는다.
```typescript
let squareOptions = {
    classNames:'테스트',
    type:"C",
    startDate:'2023-04-12',
    endDate:'2023-04-16',
    time:'20:00'
}
createClass(squareOptions);
```



### 인덱서블 타입
> 객체를 찾을때 key로 찾을 수 있도록 설정하는것

```typescript
//key라는 string타입으로 indexing이  가능하고 return은 string 또는 number
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
```