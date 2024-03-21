let password = "Piwko Tesco";
password = password.toUpperCase();

let length = password.length;

let password1 = "";

let howManyMistakes = 0;

let yes = new Audio("yes.wav");
let no = new Audio("no.wav");

function crossOutPassword() {
  for (i = 0; i < length; i++) {
    if (password.charAt(i) == " ") password1 = password1 + " ";
    else password1 = password1 + "_";
  }
}
function writeOutPassword() {
  document.getElementById("password").innerHTML = password1;
}
window.onload = start;

var alphabet = new Array(35);

alphabet[0] = "A";
alphabet[1] = "Ą";
alphabet[2] = "B";
alphabet[3] = "C";
alphabet[4] = "Ć";
alphabet[5] = "D";
alphabet[6] = "E";
alphabet[7] = "Ę";
alphabet[8] = "F";
alphabet[9] = "G";
alphabet[10] = "H";
alphabet[11] = "I";
alphabet[12] = "J";
alphabet[13] = "K";
alphabet[14] = "L";
alphabet[15] = "Ł";
alphabet[16] = "M";
alphabet[17] = "N";
alphabet[18] = "Ń";
alphabet[19] = "O";
alphabet[20] = "Ó";
alphabet[21] = "P";
alphabet[22] = "Q";
alphabet[23] = "R";
alphabet[24] = "S";
alphabet[25] = "Ś";
alphabet[26] = "T";
alphabet[27] = "U";
alphabet[28] = "V";
alphabet[29] = "W";
alphabet[30] = "X";
alphabet[31] = "Y";
alphabet[32] = "Z";
alphabet[33] = "Ż";
alphabet[34] = "Ź";

function start() {
  let div_content = "";
  for (i = 0; i < 35; i++) {
    let element = "lit" + i;
    div_content =
      div_content +
      '<div class="letter" onclick="check(' +
      i +
      ')" id="' +
      element +
      '">' +
      alphabet[i] +
      "</div>";
    if ((i + 1) % 7 == 0)
      div_content = div_content + '<div class="break"></div>';
  }
  document.getElementById("letters").innerHTML = div_content;
  crossOutPassword();
  writeOutPassword();
}

String.prototype.ustawZnak = function (place, char) {
  if (place > this.length - 1) return this.toString();
  else return this.substr(0, place) + char + this.substr(place + 1);
};

function check(nr) {
  var correct = false;
  for (i = 0; i < length; i++) {
    if (password.charAt(i) == alphabet[nr]) {
      password1 = password1.ustawZnak(i, alphabet[nr]);
      correct = true;
    }
  }

  if (correct == true) {
    yes.play();
    let element = "lit" + nr;
    document.getElementById(element).style.background = "#1ea31e";
    document.getElementById(element).style.color = "#006b00";
    document.getElementById(element).style.border = "5px solid #006b00";
    document.getElementById(element).style.cursor = "default";
    writeOutPassword();
  } else {
    no.play();
    let element = "lit" + nr;
    document.getElementById(element).style.background = "#ff7676";
    document.getElementById(element).style.color = "#b10000";
    document.getElementById(element).style.border = "5px solid #b10000";
    document.getElementById(element).style.cursor = "default";
    document.getElementById(element).setAttribute("onclick", ";");

    //mistake

    howManyMistakes++;

    let image = "img/s" + howManyMistakes + ".png";

    document.getElementById("hangman").innerHTML =
      '<img class="hangmanimg" src="' + image + '" alt="" />';
  }

  //wygrana
  if (password == password1) {
    document.getElementById("letters").innerHTML =
      "You Won! <br />" +
      '<span class="you_won"> Password: <br /> ' +
      password +
      '<br /> <br /><span onclick="location.reload()" class="reset"> TRY AGAIN?</span>';
    document.getElementById("password").innerHTML = "";
  }

  //przegrana
  if (howManyMistakes >= 10) {
    document.getElementById("letters").innerHTML =
      "You Lost... <br />" +
      '<span class="you_won"> Password: <br /> ' +
      password +
      '<br /> <br /><span onclick="location.reload()" class="reset"> TRY AGAIN?</span>';
    document.getElementById("password").innerHTML = "";
  }
}

//buttons
