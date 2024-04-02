const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for(let select of dropdowns){
    for(Currcode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=Currcode;
        newOption.value=Currcode;

        if(select.name==="from"  &&  Currcode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to"  &&  Currcode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt) => {
        updateFlage(evt.target);
    });
}
const updateFlage = (element) => {
    let Currcode=element.value;
    let countrycode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    console.log(amtValue);
    if(amtValue === "" || amtValue < 1){
       amtValue=1;
       amount.value="1";
    }
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data = await response.json();
    let rate=data[toCurr.value.toLowerCase()];
    
    let finalamt=amtValue*rate;
    msg.innerText=`${amtValue} ${fromCurr.value} = ${finalamt} ${toCurr.value}`;
});



