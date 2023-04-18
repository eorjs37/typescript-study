//매개변수 초기화
function person(firstName: string, lastName = 'Dae Geon') {}

let choi1 = person('Choi');
let choi2 = person('Choi', 'Dae Geon');
//오류
//let choi3 = person("Choi","Dae Geon","T");
export {};
