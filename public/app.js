window.onload = function () {
  show(0);
  Start();
}

//submit form
function submitform() {

  var name = document.getElementById("name").value;
  console.log(name);
  sessionStorage.setItem("name", name);
  location.href = "quiz.html";
}


//timer
var ms = 0;
var m = 0;
var s = 0;
var min = document.getElementById("m")
var sec = document.getElementById("s")
var interval;

function Start() {
  interval = setInterval(function milisec() {
    // ms++
    // millisec.innerHTML =ms;
    // if(ms>=100){
    s++
    ms = 0;
    sec.innerHTML = s;


    if (s >= 60) {
      m++
      s = 0;
      min.innerHTML = m;
    }

  }, 1000)
  // document.querySelector(".time").innerHTML += interval;

}
//questions
var questions = [
  {
    question: " Q#1  Who is the first governer of Pakistan?",
    answer: "Quaid-e-azam",
    options: [
      "Quaid-e-azam",
      "Liaquat ali khan",
      "Iskandar Mirza"
    ]
  },
  {
    question: "Q#2   Who is the first PM of Pakistan?",
    answer: "Liaquat ali khan",
    options: [
      "Quaid-e-azam",
      "Liaquat ali khan",
      "Iskandar Mirza"
    ]
  },
  {
    question: "Q#3   Who is the last messenger of ALLAh?",
    answer: "Hazrat Muhammad (s.A.W.W)",
    options: [
      "Hazrat Adam(A.S) ", "Hazrat Adam(A.S)", "Hazrat Muhammad (s.A.W.W)"]
  },
  {
    question: "Q#4 The sum of 16+9+4 is:",
    answer: "29",
    options: ["25", "30", "29"]
  },
  {
    question: "Q#5 What is the name first virus of computer?",
    answer: "Brain virus",
    options: ["Malware",
      "Brain virus",
      "DOS virus"]
  },
  {
    question: "Q#6 Which supply blood?",
    answer: "arteries",
    options: ["veins",
      "arteries",
      "none of the above"]
  },
  {
    question: "Q#7  using BODMAS rule 2+{(3*6)-9}",
    answer: "11",
    options: ["45", "11", "13"]
  },
  {
    question: "Q#8    Pc stand for?",
    answer: "personal computer",
    options: ["pakistan computer",
      "power computer",
      "personal computer"]
  },
  {
    question: "Q#9  what is the formula of (a<sup>2</sup>+b<sup>2</sup>)",
    answer: "(a+b)(a-b)",
    options: [" a<sup>2</sup>+2ab+b<sup>2</sup>",
      "(a+b)(a-b)",
      "none of the above"]
  },
  {
    question: "Q#10  how many colors in rainbow?",
    answer: "7",
    options: ["8",
      "11",
      "7"],
  }
];

var ques_count = 0;
 var wrong=0
let point = 0;
function next() {

  var user_answer = document.querySelector("li.active").innerHTML;
  if (user_answer == questions[ques_count].answer) {
    console.log(user_answer)
    point++;
    sessionStorage.setItem("points", point)
  }

  else {
    ques_count + 1 + " wrong answer"
    
  }
  if (ques_count == questions.length - 1) {
    location.href = "end.html";
    return;
  }
  ques_count++;
  
  show(ques_count)
}
// console.log(point)
function show(count) {
  var question = document.getElementById("question");
  question.innerHTML = document.createElement("h2").innerHTML = questions[count].question

  for (var i = 0; i < 3; i++) {
    var btn = document.createElement("li")
    btn.innerHTML = questions[count].options[i]

    btn.setAttribute("class", "options")
    // btn.setAttribute("class","options")

    document.getElementById("question").appendChild(btn);


  }

  toggleActive()
}

function toggleActive() {
  var btnContainer = document.getElementById("question");

  // Get all buttons with class="btn" inside the container
  let btns = btnContainer.querySelectorAll("li.options");
  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      // console.log(this.setAttribute("class"," active"))
      btns[i].classList.add("active")
      
    });

  }
}

