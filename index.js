const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`! @#$%^&*()_-+={[}]|\:;<,>.?/";


// ----------------------- Event Listener -----------------------

$("button").click(function(event) {
  var selectedLength = Number($(".character").text());
  generatePassword(selectedLength);
});


$(document).on("input", ".form-range", function() {
  $(".character").text($(".form-range")[0].value);
  console.log($(".form-range")[0].value);
});


// Copy to clipboard if button clicked
$(".fa-copy").click(function(event) {
  var copyText = $(".password").text();
  navigator.clipboard.writeText(copyText);
  $(".fa-copy").fadeOut(80);
  setTimeout(function() {
    $(".fa-copy").fadeIn(80);
  }, 80);
});


// ----------------------- generate Password -----------------------

function generatePassword(length) {
  var result = "";
  var characters = "";


  if ($("#defaultCheck1")[0].checked) {
    characters += upperCaseLetters;
  }
  if ($("#defaultCheck2")[0].checked) {
    characters += lowerCaseLetters;
  }
  if ($("#defaultCheck3")[0].checked) {
    characters += numbers;
  }
  if ($("#defaultCheck4")[0].checked) {
    characters += symbols;
  }

  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  strengthCalculator(result);

  $(".password").text(result);
  $(".password").addClass("password-set");
}




function strengthCalculator(password) {
  var lowerCount = 0;
  var upperCount = 0;
  var numbersCount = 0;
  var symbolsCount = 0;

  var pwLength = password.length;


  //checks which character types are contained in the password
  // for ( var i = 0; i < pwLength; i++ ) {
  //     var char = password.charAt(i);
  //     if(lowerCaseLetters.includes(char)){
  //       lowerCount = 1;
  //     }else if (upperCaseLetters.includes(char)) {
  //       upperCount = 1;
  //     }else if (numbers.includes(char)) {
  //       numbersCount = 1;
  //     }else if (symbols.includes(char)) {
  //       symbolsCount = 1;
  //     }
  // }


  // yet to implement: strength by character types

  var strength = "WEAK"; // 1 = weak, 2 = medium, 3 = strong, 4 = very strong
  var charsSafety = lowerCount + upperCount + numbersCount + symbolsCount;

  if (pwLength >= 5 && pwLength <= 7) {
    strength = "MEDIUM";
  } else if (pwLength >= 8 && pwLength <= 10) {
    strength = "STRONG";
  } else if (pwLength >= 11) {
    strength = "VERY STRONG";
  }

  $(".strength-keyword").text(strength);
  $(".strength-keyword").show();
}
