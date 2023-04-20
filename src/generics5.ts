//멀티 타입
type pariArray = [any, any][];

//멀티타입 T,M
function pushPariItem<T, M>(arr: pariArray, item: [T, M]): pariArray {
  arr.push(item);
  return arr;
}

const data: pariArray = [];

//멀티타입을 지정한 후 , 적절한 타입을 포함하는 데이터 추가
pushPariItem<boolean, string>(data, [false, 'false']);
pushPariItem<number, string>(data, [1, '1']);

export {};
