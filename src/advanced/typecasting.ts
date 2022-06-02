const paragraph = document.querySelector("p");
//paragraph.innerHTML = "Hello";
//using ! to overide/ignore that the specified element could be null i.e not existing in the UI
paragraph!.innerHTML = "Hello ";

//approach one to specify the HTML type
const paragraphWithIDFirstApproach = <HTMLParagraphElement>(
  document.getElementById("message")
);
paragraphWithIDFirstApproach.innerHTML = "Hello Once";

//approach two to specify the HTML type - react syntax
const paragraphWithIDSecondApproach = document.getElementById(
  "message"
)! as HTMLParagraphElement;

paragraphWithIDSecondApproach.innerHTML = "Hello Once Again";

const paragraphdemo = document.getElementById("message");

//approach three to validate if object exists or not and then setting the value post validating if the object is of required type/element
if (paragraphdemo) {
  (paragraphdemo as HTMLParagraphElement).innerHTML = "Hello Once Again Again";
}
