// const { response } = require("express");
import axios from 'axios';

//List Items for each person
const todo1 = document.getElementById('todo-1')
const todo2 = document.getElementById('todo-2')
const todo3 = document.getElementById('todo-3')
const todo4 = document.getElementById('todo-4')
//Add Todo buttons for each person
const btn1 = document.getElementById('prsn-1');
const btn2 = document.getElementById('prsn-2');
const btn3 = document.getElementById('prsn-3');
const btn4 = document.getElementById('prsn-4');
function todoOutput(data) {
  todo1.innerHTML, todo2.innerHTML, todo3.innerHTML, todo4.innerHTML = '';
  if (!data.length) {
    todo1.innerHTML, todo2.innerHTML, todo3.innerHTML, todo4.innerHTML = '<p>No ToDos have been added yet!</p>';
  }
  data.forEach((obj) => {
    const html = `
      <div id="todo-1">
        <ul>
          <li>${obj.text}</li>
          <button data-id="${obj.id}">Delete</button>
        </ul>
      </div>
    `;
    todo1.insertAdjacentHTML('beforeend', html)
  })
  data.forEach((obj) => {
    const html = `
      <div id="todo-2">
        <ul>
          <li>${obj.text}</li>
          <button data-id="${obj.id}">Delete</button>
        </ul>
      </div>
    `;
    todo2.insertAdjacentHTML('beforeend', html)
  })
  data.forEach((obj) => {
    const html = `
      <div id="todo-3">
        <ul>
          <li>${obj.text}</li>
          <button data-id="${obj.id}">Delete</button>
        </ul>
      </div>
    `;
    todo3.insertAdjacentHTML('beforeend', html)
  })
  data.forEach((obj) => {
    const html = `
      <div id="todo-4">
        <ul>
          <li>${obj.text}</li>
          <button data-id="${obj.id}">Delete</button>
        </ul>
      </div>
    `;
    todo4.insertAdjacentHTML('beforeend', html)
  })
}
function getTodos() {
  fetch('/view/todos')
    .then(res => res.json())
    .then(todos => {
      outputToDos(todos);
    });
}
function addTodo(event) {
  const input = document.querySelector('input[name="todos"]');
  const value = input.value;
  const data = {
    text: value
  };
  event.preventDefault();
  fetch('/view/todos', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(server_res => server_res.json())
    .then(todos => {
      input.value = '';
      outputToDos(todos);
    });
}
function deleteTodo(event) {
  const el = event.target;
  if (el.tagName === 'BUTTON') {
    const id = el.dataset.id;
    const data = {
      id: parseInt(id)
    };
    fetch('/view/todos', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(todos => outputToDos(todos));
  }
}
function deleteTodo(event) {
  const el = event.target;
  if (el.tagName === 'BUTTON') {
    const id = el.dataset.id;
    const data = {
      id: parseInt(id)
    };
    fetch('/view/todos', {
      method: 'delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(todos => outputToDos(todos));
  }
}
getTodos();
btn1, btn2, btn3, btn4.addEventListener('click', addTodo);
todo1, todo2, todo3, todo4.addEventListener('click', deleteTodo);






// const api_url ="https://zenquotes.io/api/quotes/";

// ('#genBtn').onclick = function() {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);

// }
// getapi(api_url);
// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }
// $('#genBtn').click(function(event) {
//   event.preventDefault();
//   setQuote
// })
// getapi(api_url);

  //   todo4.insertAdjacentHTML('beforeend', html)
//   })
// }

// ('#genBtn').onclick = function() {
//   fetch('https://zenquotes.io/api/quotes/')
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }else {
//         throw new Error('NOT WORKING!!')
//       }
//     }).then(data => {
//       console.log(data);
//       displayQuote(data)
//     })
//     .catch((error) => console.error("FETCH ERROR:", error));
//   }
  // });
  // };
  
  // function displayQuote(data) {
  //   const quoteDiv = document.getElementById('quotePlacement');
  //   quoteDiv.appendChild('quotePlacement');
  // }

  // axios.get("https://zenquotes.io/api/quotes/")
  // .then((data) => console.log(res))
  // .catch((err) => console.log(err))
