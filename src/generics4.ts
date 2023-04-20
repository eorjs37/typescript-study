//js
function getItemArray(arr, index) {
  return arr[index];
}

function pushItemArray(arr, item) {
  arr.push(item);
}

//ts
function getItemArray2(arr: any[], index: number): any {
  return arr[index];
}

function pushItemArray2(arr: any[], item: any): void {
  arr.push(item);
}

//ts -generics
function getItemArray3<T>(arr: T[], index: number): T {
  return arr[index];
}

function pushItemArray3<T>(arr: T[], item: T): void {
  arr.push(item);
}

const arr = ['자바스크립트'];
getItemArray3<string>(arr, 0);
pushItemArray3<string>(arr, 'TTT');
console.log(arr);
export {};
