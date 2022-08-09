function makeGetRequest(path) {
  axios.get('http://api.quotable.io/random').then(
      (response) => {
          var result = response.data;
          // let i = Math.floor(Math.random() * result.length);
          // console.log(result[i]);
          console.log(result);
      },
      (error) => {
          console.log(error);
      }
  );
}
const motivate = document.getElementById('genBtn')

motivate.addEventListener('click', makeGetRequest);

// .then(html => {document.getElementById('data').append(html)});

var savebtn = document.querySelector('.save-btn')
var title = document.getElementById('project-title')

savebtn.addEventListener('click', function changeText() {
  var input = document.getElementById('project-input').value;

  title.innerText = input;
});
// function getVal() {
//   const val = document.querySelector('input')
// }
