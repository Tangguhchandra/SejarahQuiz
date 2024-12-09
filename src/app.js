console.log('Moazam');

const question = [
  {
    ques: 'Kapan Indonesia memproklamasikan kemerdekaannya?',
    a: '17 Agustus 1945',
    b: '1 Juni 1945',
    c: '28 Oktober 1928',
    d: '20 Mei 1908',
    correct: 'a',
  },
  {
    ques: 'Siapa yang membacakan teks proklamasi kemerdekaan Indonesia?',
    a: 'Mohammad Hatta',
    b: 'Soekarno',
    c: 'Ahmad Soebardjo',
    d: 'Sutan Sjahrir',
    correct: 'b',
  },
  {
    ques: 'Peristiwa Sumpah Pemuda terjadi pada tahun berapa?',
    a: '1928',
    b: '1945',
    c: '1930',
    d: '1908',
    correct: 'a',
  },
  {
    ques: 'Organisasi Budi Utomo didirikan pada tahun berapa?',
    a: '1908',
    b: '1912',
    c: '1928',
    d: '1930',
    correct: 'a',
  },
  {
    ques: 'Siapa tokoh utama yang memimpin Kongres Pemuda II tahun 1928?',
    a: 'Soegondo Djojopoespito',
    b: 'Mohammad Yamin',
    c: 'Sutan Sjahrir',
    d: 'Haji Agus Salim',
    correct: 'a',
  },
  {
    ques: 'Apa nama perjanjian yang menandai pengakuan kedaulatan Indonesia oleh Belanda?',
    a: 'Perjanjian Linggarjati',
    b: 'Perjanjian Renville',
    c: 'Konferensi Meja Bundar',
    d: 'Perjanjian Bongaya',
    correct: 'c',
  },
  {
    ques: 'Siapakah pendiri organisasi Muhammadiyah?',
    a: 'KH. Ahmad Dahlan',
    b: 'KH. Hasyim Asy’ari',
    c: 'Haji Samanhudi',
    d: 'Ki Hajar Dewantara',
    correct: 'a',
  },
  {
    ques: 'Apa isi dari teks Sumpah Pemuda yang ketiga?',
    a: 'Kami putra dan putri Indonesia menjunjung bahasa persatuan, Bahasa Indonesia.',
    b: 'Kami putra dan putri Indonesia mengaku bertumpah darah yang satu, tanah Indonesia.',
    c: 'Kami putra dan putri Indonesia mengaku berbangsa yang satu, bangsa Indonesia.',
    d: 'Kami putra dan putri Indonesia menjunjung tanah air Indonesia.',
    correct: 'a',
  },
  {
    ques: 'Siapakah tokoh yang dikenal sebagai "Bapak Pendidikan Nasional" di Indonesia?',
    a: 'Ki Hajar Dewantara',
    b: 'Raden Ajeng Kartini',
    c: 'KH. Ahmad Dahlan',
    d: 'Haji Samanhudi',
    correct: 'a',
  },
  {
    ques: 'Apa nama naskah perjuangan yang dirumuskan oleh para pendiri bangsa pada tahun 1945?',
    a: 'Piagam Jakarta',
    b: 'Teks Proklamasi',
    c: 'Pancasila',
    d: 'Deklarasi Kemerdekaan',
    correct: 'a',
  },
];
var choosenAnswer = [];
const total = question.length;
const display = document.querySelector('.box');
const progressBar = document.querySelector('.progress-bar');
let index = 0;
let right = 0;
let wrong = 0;
let timerInterval; // Variable to hold the timer interval
let timeLeft = 300;

// Load questions
// Load questions
// Variable to hold the timer interval
let timeElapsed = 0; // Track time elapsed in seconds

// Load questions
const loadQues = function () {
  if (index < total) {
    const data = question[index];
    display.innerHTML = `
      <div id="timer" style="font-size: 1.5rem; color: #3498db; margin-bottom: 20px;">${formatTime(timeElapsed)}</div>
      <div class="progress-container">
        <div class="progress-bar" style="width: ${((index + 1) / total) * 100}%;"></div>
      </div>
      <h1 class="Ques">Q${index + 1}) ${data.ques}</h1>
      <div class="row">
        <input type="radio" class="options" id="option1" value="a" name="ques" />
        <label for="option1">${data.a}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option2" value="b" name="ques" />
        <label for="option2">${data.b}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option3" value="c" name="ques" />
        <label for="option3">${data.c}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option4" value="d" name="ques" />
        <label for="option4">${data.d}</label>
      </div>
      <div class="submitRow">
        <button class="btn2 submit2">Prev</button>
        <button class="btn submit">Submit</button>
      </div>
      <p id="error-message" style="color: red;"></p>
    `;

    // Update progress bar
    const progressPercentage = ((index + 1) / total) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Attach event listeners
    document.querySelector('.submit').onclick = getResult;
    document.querySelector('.submit2').onclick = prevQ;

    // Show or hide the Prev button
    document.querySelector('.submit2').style.display = index === 0 ? 'none' : 'block';

    // Start the timer only on the first question
    if (index === 0) {
      startTimer();
    }
  } else {
    endQuiz();
  }
};

function startTimer() {
  clearInterval(timerInterval);
  timeElapsed = 0; // Reset time
  document.getElementById('timer').textContent = formatTime(timeElapsed);
  
  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('timer').textContent = formatTime(timeElapsed);
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


// Get result and validate
const getResult = function () {
  const data = question[index];
  const answer = checkAnswer();
  const errorMessage = document.getElementById('error-message');

  if (!answer) {
    errorMessage.textContent = 'Please select an answer before submitting.';
    return;
  } else {
    errorMessage.textContent = ''; // Clear the error message
  }

  if (answer === data.correct) {
    right++;
  } else {
    wrong++;
  }
  console.log(answer);
  saveAnswers(index, answer, data.correct);
  index++;
  loadQues();
};

// Check selected answer
const checkAnswer = function () {
  const options = document.querySelectorAll('.options');
  let answer;
  options.forEach(input => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const saveAnswers = (index, choosen, answer) => {
  console.log(index);
  var answerFormat = {
    index: index,
    choosen: choosen,
    answer: answer,
  };

  if (choosenAnswer.length <= 0) {
    choosenAnswer.push(answerFormat);
  } else {
    let found = false;

    for (let i = 0; i < choosenAnswer.length; i++) {
      if (index == choosenAnswer[i].index) {
        // If index matches, replace the existing answer
        choosenAnswer.splice(i, 1, answerFormat);
        found = true;
        console.log('if worked');
        break;
      }
    }

    // If the index was not found, push the new answer
    if (!found) {
      choosenAnswer.push(answerFormat);
      console.log('else worked');
    }
  }
  console.log(choosenAnswer);
};


var i = 0;
function showAnswer() {
  if (i < total) {
    const data = question[i]; // Get current question data
    const choosenData = choosenAnswer.find(item => item.index === i); // Find chosen answer by index
    const choosenAns = choosenData ? choosenData.choosen : "Not answered"; // Handle case when no answer chosen

    display.innerHTML = `
      <div class="progress-container">
        <div class="progress-bar" style="width: ${
          ((i + 1) / total) * 100
        }%;"></div>
      </div>
      <h1 class="Ques">Q${i+ 1}) ${data.ques}</h1>
      <div class="row">
        <div class="options">Jawabanmu:</div>
        <label for="option1">${choosenAns}</label> 
      </div>
      <div class="row">
        <div class="options">Jawaban Benar:</div>
        <label for="option1">${data.correct}</label>
      </div>
      <div class="submitRow">
        <button class="btn2 submit2">Prev</button>
        <button class="btn submit">Next</button>
      </div>
      <p id="error-message" style="color: red;"></p>
    `;

    // Attach event listeners for navigation
    document.querySelector('.submit').onclick = nextQ;
    document.querySelector('.submit2').onclick = prevQues;

    // Hide Prev button on the first question
    if (index === 0) {
      document.querySelector('.submit2').style.display = 'none';
    } else {
      document.querySelector('.submit2').style.display = 'block';
    }

    // Update progress bar (you already have this inline, so this can be removed)
    // const progressPercentage = ((index + 1) / total) * 100;
    // progressBar.style.width = `${progressPercentage}%`;

  } else {
    endQuiz();
  }
}
function nextQ() {
  if (i < total - 1) {
    i++; // Move to next question
    showAnswer(); // Update the display
  } else {
    endQuiz(); // End quiz if at last question
  }
}
// Navigate to previous question
const prevQ = function () {
  if (index > 0) {
    index--;
    loadQues();
  }
};
const prevQues = function () {
  if (i > 0) {
    i--;
    loadQues();
  }
};
// End the quiz and display results
const endQuiz = () => {
  clearInterval(timerInterval);
  display.innerHTML = '';

  // Calculate total time taken
  const timeTaken = formatTime(timeElapsed);

  let resultMessage = '';
  if (right === total) {
    resultMessage = `Mantap👏`;
  } else if (right === total - 1) {
    resultMessage = `Good 👍`;
  } else if (right === total - 2) {
    resultMessage = `Satisfactory `;
  } else {
    resultMessage = `semoga Beruntung di lain waktu`;
  }

  display.innerHTML = `
    <h2 class="head">Thank you for solving the quiz!</h2>
    <div class="results-box">
      <h3 class="marks">Correct Options: ${right}/${total}</h3>
      <h3 class="time-taken" style="font-size: 1.5rem;">Time Taken: ${timeTaken}</h3>
      <br><br><h2 class="result">${resultMessage}</h2>
    </div>
    <button class="btn again" onclick="againStart()">Try Again</button>
    <button class="btn again" onclick="showAnswer()">See Answers</button>
  `;
};



// Restart the quiz
const againStart = () => {
  index = 0;
  right = 0;
  wrong = 0;
  choosenAnswer = [];
  loadQues();
};

// Load the first question
loadQues();
