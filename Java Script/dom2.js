let divs=document.querySelectorAll("div");
console.log(divs);
// divs[0].innerText="new value 1";
// divs[1].innerText="new value 2";
// divs[2].innerText="new value 3";

let idx = 0;
for(div of divs)
{
    div.innerText = `new value ${idx}`;
    idx++;
}
