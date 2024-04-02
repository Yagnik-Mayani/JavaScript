let btn=document.querySelector("button");

btn.addEventListener("click", () => {
console.log("1 time click");
})

btn.addEventListener("click", () => {
    console.log("2 time click");
})

btn.addEventListener("click", () => {
console.log("3 time click");
})

let Handler4 = () => {
 console.log("4 time click");
}
btn.addEventListener("click",Handler4);
btn.removeEventListener("click",Handler4);