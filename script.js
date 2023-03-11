let startBtn,
  stopBtn,
  resetBtn,
  copyBtn,
  deleteBtn,
  hr,
  min,
  sec,
  hrT,
  minT,
  secT,
  txt,
  int,
  words,
  chars;

// Times
hr = document.getElementById("hr");
min = document.getElementById("min");
sec = document.getElementById("sec");

// Number of Words and Characters calculations -
words = document.getElementById("words");
chars = document.getElementById("chars");

// Buttons
startBtn = document.getElementById("start");
stopBtn = document.getElementById("stop");
resetBtn = document.getElementById("reset");
copyBtn = document.getElementById("copy");
deleteBtn = document.getElementById("delete");

// Text input from Text Area
txt = document.getElementById("txt_input");

// Assigning values to variables
secT = 0;
minT = 0;
hrT = 0;

// Main function for Time increase
function timer() {
  secT++;
  if (secT > 59) {
    minT++;
    secT = 0;
    sec.innerHTML = secT < 10 ? "0" + secT : secT;
    min.innerHTML = minT < 10 ? "0" + minT : minT;
  } else if (minT > 59) {
    hrT++;
    minT = 0;
    min.innerHTML = minT < 10 ? "0" + minT : minT;
    hr.innerHTML = hrT < 10 ? "0" + hrT : hrT;
  } else {
    sec.innerHTML = secT < 10 ? "0" + secT : secT;
  }
}

// Copy button function
copyBtn.addEventListener("click", () => {
  txt.select();
  navigator.clipboard.writeText(txt.value);
  alert("Text copied");
});

// Delete button function

deleteBtn.addEventListener("click", () => {
  txt.select();
  txt.value = "";
});

// Reset Time
resetBtn.addEventListener("click", () => {
  clearInterval(int);
  secT = 0;
  minT = 0;
  hrT = 0;
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hr.innerHTML = "00";
});

// Stop Time
stopBtn.addEventListener("click", () => {
  clearInterval(int);
});

// Start Time
startBtn.addEventListener("click", () => {
  int = setInterval(timer, 1000);
});

// Words calculations

txt.addEventListener("input", () => {
  let text = txt.value;
  let splt_words = text.split(" ");
  let splt_chars = text.split("");
  words.innerHTML = splt_words.length;
  chars.innerHTML = splt_chars.length;
});
