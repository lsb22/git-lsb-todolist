const arr = [{
           info: 'Cooking', 
           dueDate: '22-05-2023' 
            },
             {
               info: 'Swimming',
               dueDate: '20-05-2023'
              }];

printList(); // this is for default values in array

function printList(){

  let list1 = '';


    for(let i=0; i<arr.length; i++){
    const element = arr[i];
    const info = element.info; // shortcut--> const {info} = element;
    const dueDate = element.dueDate; // shortcut--> const {dueDate} = element;  

    const html = `
      <div>${info} </div> 
      <div>${dueDate}</div>
      <button onclick = "
       arr.splice(${i},1);
       printList(); 
      " class = "del-butt">Delete</button>
    
    `;// creating paragraph for each elemnt of array
      // paragraph is been replaced by <div> because because with paragraph we can't arrange the things in grid
     //console.log(html);

     list1 += html;
     
    }

    document.querySelector('.js-div').innerHTML = list1;
}

function addTo(){
  const getText = document.querySelector('.js-box');
  const info = getText.value;

  const getDate = document.querySelector('.js-date');
  const dueDate = getDate.value;

  arr.push({
    info: info,
     dueDate: dueDate
   });
  //console.log(arr);
 // getText.value = '';

  printList();

}