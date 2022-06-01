"use strict";
function animalSpeed(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving speed is : ${speed}`);
}
animalSpeed({ type: "bird", flyingSpeed: 10 });
animalSpeed({ type: "horse", runningSpeed: 100 });
