// const res = require("express/lib/response");

function getVal() {
  const val = document.querySelector('input')
}
//getting and displaying api
function makeGetRequest(path) {
  axios.get('http://api.quotable.io/random').then(
      (response) => {
          var author = response.data.author;
          var result = response.data.content;
          console.log(result);
          document.getElementById('placement').innerHTML = '"' + result + '"' + " " + '-' + author;
      },
      (error) => {
          console.log(error);
      }
  );
}
const motivate = document.getElementById('genBtn');
motivate.addEventListener('click', makeGetRequest);



var savebtn = document.querySelector('.save-btn')
var title = document.getElementById('project-title')

savebtn.addEventListener('click', function changeText() {
  var input = document.getElementById('project-input').value;

  title.innerText = input;
})

// *****FUNCTION TO SET TODOS IN PROPER PERSON CARD***********

var inputBtn = document.querySelector('.input-btn')
var toDos = document.querySelector('.list-group')


document.addEventListener('click', (event) => {
  var userInput = document.getElementById('tasks').value;
  if (event.target.id === 'todo-btn') {
    var html = `<div>${userInput}</div>`
    event.target.insertAdjacentHTML("beforeBegin", html)
    // console.log(event.target)
  }
});

// attach to a sibling element - related to event.target
// for loop?
// save for local storage
