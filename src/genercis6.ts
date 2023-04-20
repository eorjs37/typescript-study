class Model {
  constructor(public options: any) {}
}

//팩토리 함수

function create<T, U>(C: { new (U): T }, options: U): T {
  return new C(options);
}

create<Model, string[]>(Model, ['class Type']);

export {};
