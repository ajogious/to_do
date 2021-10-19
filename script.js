// -------------------------------- js -----------------------------------
const textBox = document.getElementById('textbox');
const btn = document.getElementById('btn');
const listItems = document.getElementById('list');

btn.addEventListener('click', function(){
   if(textBox.value === ''){
      newList.innerHTML = '';
   }
   let newList = document.createElement('li');
   newList.innerHTML = textBox.value;
   listItems.appendChild(newList);
   newList.style.fontSize ='30px';
   newList.style.fontWeight = 'bold';
   newList.style.textTransform = 'capitalize';
   newList.style.cursor = 'pointer';
   textBox.value = '';
   newList.addEventListener('click', function(){
      newList.style.textDecoration = 'line-through';
      newList.style.textDecorationColor = 'red';
   })
   newList.addEventListener('dblclick', function(){
      listItems.removeChild(newList);
   })
})