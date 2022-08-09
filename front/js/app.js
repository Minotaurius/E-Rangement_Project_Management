// //List Items for each person
// const todo1 = document.getElementById('todo-1')
// const todo2 = document.getElementById('todo-2')
// const todo3 = document.getElementById('todo-3')
// const todo4 = document.getElementById('todo-4')

// //Add Todo buttons for each person
// const btn1 = document.getElementById('prsn-1');
// const btn2 = document.getElementById('prsn-2');
// const btn3 = document.getElementById('prsn-3');
// const btn4 = document.getElementById('prsn-4');

// function todoOutput(data) {
//   todo1.innerHTML, todo2.innerHTML, todo3.innerHTML, todo4.innerHTML = '';

//   if (!data.length) {
//     todo1.innerHTML, todo2.innerHTML, todo3.innerHTML, todo4.innerHTML = '<p>No ToDos have been added yet!</p>';
//   }

//   data.forEach((obj) => {
//     const html = `
//       <div id="todo-1">
//         <ul>
//           <li>${obj.text}</li>
//           <button data-id="${obj.id}">Delete</button>
//         </ul>
//       </div>
//     `;

//     todo1.insertAdjacentHTML('beforeend', html)
//   })

//   data.forEach((obj) => {
//     const html = `
//       <div id="todo-2">
//         <ul>
//           <li>${obj.text}</li>
//           <button data-id="${obj.id}">Delete</button>
//         </ul>
//       </div>
//     `;

//     todo2.insertAdjacentHTML('beforeend', html)
//   })

//   data.forEach((obj) => {
//     const html = `
//       <div id="todo-3">
//         <ul>
//           <li>${obj.text}</li>
//           <button data-id="${obj.id}">Delete</button>
//         </ul>
//       </div>
//     `;

//     todo3.insertAdjacentHTML('beforeend', html)
//   })

//   data.forEach((obj) => {
//     const html = `
//       <div id="todo-4">
//         <ul>
//           <li>${obj.text}</li>
//           <button data-id="${obj.id}">Delete</button>
//         </ul>
//       </div>
//     `;

//     todo4.insertAdjacentHTML('beforeend', html)
//   })
// }

// function getTodos() {
//   fetch('/view/todos')
//     .then(res => res.json())
//     .then(todos => {
//       outputToDos(todos);
//     });
// }

// function addTodo(event) {
//   const input = document.querySelector('input[name="todos"]');
//   const value = input.value;
//   const data = {
//     text: value
//   };

//   event.preventDefault();

//   fetch('/view/todos', {
//     method: 'post',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }).then(server_res => server_res.json())
//     .then(todos => {
//       input.value = '';
//       outputToDos(todos);
//     });
// }

// function deleteTodo(event) {
//   const el = event.target;

//   if (el.tagName === 'BUTTON') {
//     const id = el.dataset.id;
//     const data = {
//       id: parseInt(id)
//     };

//     fetch('/view/todos', {
//       method: 'delete',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(res => res.json())
//       .then(todos => outputToDos(todos));
//   }
// }

// function deleteTodo(event) {
//   const el = event.target;

//   if (el.tagName === 'BUTTON') {
//     const id = el.dataset.id;
//     const data = {
//       id: parseInt(id)
//     };

//     fetch('/view/todos', {
//       method: 'delete',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     }).then(res => res.json())
//       .then(todos => outputToDos(todos));
//   }
// }

// getTodos();
// btn1, btn2, btn3, btn4.addEventListener('click', addTodo);
// todo1, todo2, todo3, todo4.addEventListener('click', deleteTodo);

// var myModal = document.getElementById('modalBtn')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// });


var projTitle = document.getElementById('project-title');
var btn = document.querySelector('.save-btn');



btn.addEventListener('click', function changeText() {
  var userInput = document.getElementById('project-input').value;
  projTitle.innerText = userInput;
  //add function to hide modal
})

// function changeText() {
//   var title = document.getElementById('project-input').value
//   document.getElementById('project-title').changeText = title.value
//  }


// function getVal() {
//   const val = document.querySelector('input')
// }
