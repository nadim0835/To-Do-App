let input = document.querySelector('input');
let button = document.querySelector('button');
let ul =document.querySelector('ul')

 
// button.addEventListener('click',function(){
//   let li =document.createElement('li')
//   let ivalue=input.value;
//   li.innerHTML=ivalue;
//   ul.appendChild(li);
//   input.value='';
  
// })
button.addEventListener('click',function(){
  let ivalue=input.value;
  if(ivalue===''){
    alert("You have must write something")
  }
  else {
    let li =document.createElement('li')
    li.innerHTML=ivalue;
    ul.appendChild(li);
    input.value="";
  }
  
 
})


