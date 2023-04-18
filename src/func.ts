//함수 타입은 매개변수 타임과, 반환 타입 2개 존재
function add(x: number, y: number): number {
  return x + y;
}

// 선택적 매개변수와 기본 매개변수
function person(firstName: string, lastName: string) {}

//오류1 : 너무 적은 매개변수
//let choi1 = person('Choi');
//오류2 : 너무 많은 매개변수
//let choi2 = person("Choi","Dae Geon","Add");
//성공
let choi3 = person('Choi', 'Dae Geon');

//선택적 매개변수
function person2(firstName: string, lastName?: string) {}
//성공
let choi4 = person2('Choi');
//오류2 : 너무 많은 매개변수
//let choi5 = person2("Choi","Dae Geon","Add");
//성공
let choi6 = person2('Choi');
export {};
