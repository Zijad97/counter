'use strict';

const number=document.getElementById('number');
const options=document.getElementById('options');


options.addEventListener('click',function(e){
  if(!e.target.closest('button'))return;
  const id =e.target.id;

  if(id==='increase')number.textContent++;
  if(id==='decrease')number.textContent--;
  if(id==='reset')number.textContent=0;
  if(number.textContent>0)number.style.color='yellowgreen';
 else if(number.textContent<0)number.style.color='crimson';
  else number.style.color = "darkcyan";
})


