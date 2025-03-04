/**
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector(".js-box");
boxRef.addEventListener("mouseenter", event => {
  console.log("Enter", event);
  
});

boxRef.addEventListener("mousemove", event => {
  console.log("Coords: ", event.screenX, event.screenY);
});