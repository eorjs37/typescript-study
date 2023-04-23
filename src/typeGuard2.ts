interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
export {};
