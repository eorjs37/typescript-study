let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

let myAdd2: (base: number, val: number) => number = function (x: number, y: number): number {
  return x + y;
};

//rest
function buildName(firstName: string, ...restString: string[]) {
  return firstName + ' ' + restString.join(' ');
}

export {};
