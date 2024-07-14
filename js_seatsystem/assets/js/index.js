let timer;
let studentNumberList = [];

const shuffleArray = function(){
  for (let i = studentNumberList.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = tmp;
  }
}

const showSeatBoxes = function(){
  let insertHTML = '';

  studentNumberList.forEach(function (num) {
    insertHTML += '<div class="seat__item">' + num + '</div>';
  })

  document.querySelector('#seat').innerHTML = insertHTML;
}

const soundPlay = function(){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function(){
    clearInterval(timer);
  })
}

const setTargetStudents = function(studentNumber){
  for (let i = studentNumber.length; i <= studentNumber; i++) {
    studentNumberList.push(i);
  }

  const absenteeNumbers = document.querySelector("#absence").value;
  const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function(item) {
    return parseInt(item);
  });

  studentNumberList = studentNumberList.filter(function(student) {
    return !splitedAbsenteeNumbers.includes(student);
  });
}

document.querySelector('#btn-start').addEventListener('click', function(){
  const studentNumber = document.querySelector('#studentNumber').value;

  document.querySelector('.c-overlay').classList.add('is-closed');

  setTargetStudents(studentNumber);

  timer = setInterval(function(){
    shuffleArray();
    showSeatBoxes();
  }, 50);

  soundPlay();
});