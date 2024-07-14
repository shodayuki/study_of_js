const shuffleArray = function(studentNumberList){
  for (let i = studentNumberList.length; i > 0; i--) {
    const randomNum = Math.floor(Math.random() * i);
    let tmp = studentNumberList[i - 1];
    studentNumberList[i - 1] = studentNumberList[randomNum];
    studentNumberList[randomNum] = tmp;
  }
  return studentNumberList;
}

const showSeatBoxes = function(shuffleStudent){
  let insertHTML = '';

  shuffleStudent.forEach(function (num) {
    insertHTML += `<div class="seat__item">${num}</div>`;
  })

  document.querySelector('#seat').innerHTML = insertHTML;
}

const soundPlay = function(timer){
  const audioElement = new Audio();
  audioElement.src = 'assets/audio/drum.mp3';
  audioElement.play();

  audioElement.addEventListener('ended', function(){
    clearInterval(timer);
  })
}

const setTargetStudents = function(studentNumber){
  let studentNumberList = [];

  for (let i = 1; i <= studentNumber; i++) {
    studentNumberList.push(i);
  }

  const absenteeNumbers = document.querySelector("#absence").value;
  if (absenteeNumbers !== "") {
    const splitedAbsenteeNumbers = absenteeNumbers.split(",").map(function(item) {
      return parseInt(item);
    });

    studentNumberList = studentNumberList.filter(function(student) {
      return !splitedAbsenteeNumbers.includes(student);
    });
  }

  return studentNumberList;
}

document.querySelector('#btn-start').addEventListener('click', function(){
  const studentNumber = document.querySelector('#studentNumber').value;
  const studentUpperLimit = 50;

  if (studentNumber === "") {
    alert('人数が未入力です。入力してからスタートボタンを押してください。');
    return false;
  }

  if (studentNumber > studentUpperLimit) {
    alert(`人数は${studentUpperLimit}人以内に設定してください！`);
    return false;
  }

  document.querySelector('.c-overlay').classList.add('is-closed');

  const studentNumberList = setTargetStudents(studentNumber);

  const timer = setInterval(function(){
    const shuffleStudent = shuffleArray(studentNumberList);
    showSeatBoxes(shuffleStudent);
  }, 50);

  soundPlay(timer);
});
