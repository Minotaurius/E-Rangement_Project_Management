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

// function getVal() {
//   const val = document.querySelector('input')
// }
