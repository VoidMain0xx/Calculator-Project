let string = "";
let button = document.querySelectorAll('.buttons');
Array.from(button).forEach((buttons)=>{
  buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('.calc-display').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('.calc-display').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('.calc-display').value = string;
      }
  })
})