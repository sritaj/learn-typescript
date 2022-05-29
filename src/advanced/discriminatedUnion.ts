//interfaces to demonstrate usgae of type property for type guarding
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function animalSpeed(animal: Animal) {
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
