// ### variables
var pageEvents = document.querySelector('main');
var enterButton = document.querySelector('button');
var outputArticle = document.querySelector('.output-article');
var eachNewBookMark = 0;
var bookMarksArray = [];

// ######### event listners
pageEvents.addEventListener('click', function(event) {
  // console.log(event.target.classList[0]);
  // console.log(event.target.classList);
  console.log(event.path[1].firstChild.id);
  // console.log(event.id);
  // console.log(event.target.closest.id);
  reading()

});



enterButton.addEventListener('click', function() {
  getInputs();
  // outputBookMarks();
  outputBookMarks()
  deleteBookmark(event.path[1].firstChild.id);



});

// ########## functions
function getInputs() {
  var userInputWeb = document.querySelector('.user-input-web');
  var userInputURL = document.querySelector('.user-input-url');
  if (userInputWeb.value !== "" && userInputURL.value !== " ") {
    makeClass(userInputWeb.value, userInputURL.value)
    checkInputs()

    // console.log("the web site", userInputWeb.value);
    // console.log("the URL", userInputURL.value);

  }
}
function checkInputs() {
}

function makeClass(title, url) {
  bookmark1 = new Bookmark(title, url);
  bookMarksArray.push(bookmark1);

  // console.log(bookMarksArray, bookmark1);
}

function outputBookMarks() {
  var div = document.createElement('div');
  div.innerHTML = '';
  for (var i = 0; i < bookMarksArray.length; i++) {
    div.innerHTML = `<input id='${bookMarksArray[i].id}' class='card'><h3>${bookMarksArray[i].title}</h3><hr/><p class="url">${bookMarksArray[i].url}</p><hr/><p class="read">Read</p><p class="delete">Delete</p></input> `;
    outputArticle.appendChild(div);
    // console.log(i);

    // document.querySelector(`.task-card-${card.id}-${card.counter}__content`).appendChild(div);
    //
    // div.innerHTML = `<input id='${card.tasksId[i]}' class="checkbox" type="checkbox"><label class='label-checkbox' for="${card.tasksId[i]}"><p class='item-text' contenteditable="true" data="${i}">${card.tasks[i]}</p></label>`;

  }

  }




// // remove tasks from ToDo list
// function removeItem(target) {
//   target.remove();
//   var index = taskArray.indexOf(target.innerText);
//   taskArray.splice(index, 1);
// }


// event.target.classList[0]

function reading() {
  if (event.target.classList[0] === 'read' && bookMarksArray[0].read === true) {
    bookMarksArray[0].toggleRead(!true);
    event.target.classList.toggle('read-selected');
    // console.log('toggle false', `${bookMarksArray[0].read}`);
  }
  if (event.target.classList[0] === 'read' && bookMarksArray[0].read === false) {
    bookMarksArray[0].toggleRead(!false);
    event.target.classList.toggle('read-selected');
    // console.log('toggle to true?', `${bookMarksArray[0].read}`);
  }

}
function deleteBookmark(target) {
    for (var i = 0; i < bookMarksArray.length; i++) {
      if (bookMarksArray[i].id === target) {
        console.log(i);
        bookMarksArray.slice(i, 0);

      }
    }
}
