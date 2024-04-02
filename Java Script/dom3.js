let newBtn=document.createElement("button");
newBtn.innerText = "click me";

let div=document.querySelector("div");
div.after(newBtn);

let heading=document.createElement("p");
heading.innerHTML = "<i>hello guys</i>";

let body=document.querySelector("body");
body.prepend(heading);

let para=document.querySelector("p.para");
para.remove();