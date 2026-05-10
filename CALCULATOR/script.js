const input=document.getElementById("number-input");
const result=document.getElementById("input-result");
function handleButton(el){
    console.log(el.innerText);
    const exp=`${input.value} ${el.innerText}`;
    input.value=exp;
    if(["+","-","*","/"].includes(el.innerText)) return;
    // eval function for evaluate the expression
    result.value=eval(exp);
}

function reset(){
    input.value="";
    result.value=""

}