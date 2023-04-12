function printPerson(person) {
    console.log('name : ', person.name);
    console.log('age : ', person.age);
    console.log('gender : ', person.gender);
}
printPerson({
    name: '최대건',
    age: 31,
    gender: 'M'
});
function square(config) {
    var width = 0;
    var height = 0;
    if (config.width) {
        width = config.width;
    }
    if (config.height) {
        height = config.height;
    }
    return width * height;
}
var result = square({ width: 10, height: 10 });
console.log(result);
function createClass(classInfo) {
}
createClass({
    classNames: '테스트',
    type: "C",
    startDate: '2023-04-12',
    endDate: '2023-04-16',
    time: '20:00'
});
function createClass2(classInfo) {
}
createClass2({
    classNames: '테스트',
    type: "C",
    startDate: '2023-04-12',
    endDate: '2023-04-16',
    time: '20:00'
});
var squareOptions = {
    classNames: '테스트',
    type: "C",
    startDate: '2023-04-12',
    endDate: '2023-04-16',
    time: '20:00'
};
createClass(squareOptions);
