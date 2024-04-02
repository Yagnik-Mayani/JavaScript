const URL ="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn =document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText=data[0].text;
};

btn.addEventListener("click",getFacts);