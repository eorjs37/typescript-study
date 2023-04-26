"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSmallPet() {
    return {};
}
var pet = getSmallPet();
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
