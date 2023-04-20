//제네릭
// 클래스 또는 함수에서 사용할 타입을 , 그 클래스나 함수를 사용할때 결정하는 프로그래밍 기법

//
class Model {
  private _data: any[] = [];
  constructor(data: any[]) {
    this._data = data;
  }

  get data(): any {
    return this._data;
  }

  add(item: any): void {
    this._data.push(item);
  }

  remove(index: number): void {
    this._data.splice(index, 1);
  }

  item(index: number): any {
    return this._data[index];
  }

  clear(): void {
    this._data = [];
  }
}

class ObjectModel extends Model {
  constructor(data: object[] = []) {
    super(data);
  }

  add(item: any) {
    super.add(item);
  }
}

export {};
