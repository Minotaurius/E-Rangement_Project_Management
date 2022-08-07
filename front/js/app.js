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

  if(!data.length) {
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