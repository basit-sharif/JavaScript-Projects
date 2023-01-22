let string="";
let buttons=document.querySelectorAll(".button");

Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML== "="){
            let inputVal = document.getElementById("inpute").value;
            string = eval(string) ||  eval(inputVal);
            document.querySelector("input").value=string;
        } else if(e.target.innerHTML== "CE"){
            string=""
            document.querySelector("input").value=string;
        } 
        else if(e.target.innerHTML==="X"){
            string=string.slice(0,string.length-1);
            document.querySelector("input").value=string;
        }
        else{
    string= string + e.target.innerHTML;
    document.querySelector("input").value=string;
}
})
})

