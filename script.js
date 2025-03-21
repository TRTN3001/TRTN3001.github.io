let isGay = 0;
let truval = "gay";

function turnGay() {
  isGay = Math.floor(Math.random() * 201);
  if (isGay == 0) {
    document.getElementById("status").innerHTML =
      "You are a confirmed homosexual";
    isGay = 0;
  } else {
    document.getElementById("status").innerHTML =
      "You are not a homosexual, yet";
    isGay = 0;
  }
}

function showResults() {
  let name = document.getElementById("name").value;
  let q1 = document.getElementById("q1").value;
  let q2 = document.getElementById("q2").value;
  let q3 = document.getElementById("q3").value;
  document.getElementById("results").innerHTML =
    "You, " +
    name +
    ', claimed "' +
    q1 +
    ", I am " +
    truval +
    '." You outed ' +
    q2 +
    ", and you saw " +
    q3 +
    " triangles. (incorrect, btw.)";
  document.getElementById("status").innerHTML =
    "Our conclusion: YOU ARE " + truval.toUpperCase();
}

function swapTest() {
  if (document.getElementById("testtype").checked) {
    truval = "lesbian";
    document.getElementById("checkbox").textContent =
      "alternatively, for a gay test, uncheck this box.";
    document.getElementById("flag").src = "lesbian.gif";
  } else {
    truval = "gay";
    document.getElementById("checkbox").innerHTML =
      "alternatively, for a lesbian test, check this box.";
    document.getElementById("flag").src = "gay.gif";
  }

  document.getElementById("header").innerHTML =
    truval + " test (certified accurate 2025)";
  document.getElementById("p1").innerHTML =
    "1: are you " + truval + " (yes or no)";
  document.getElementById("p2").innerHTML = "2: name 5 " + truval + " people";
  document.getElementById("gaybutton").innerHTML = "Run " + truval + " test!";
}
