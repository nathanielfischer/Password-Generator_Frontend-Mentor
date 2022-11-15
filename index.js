var bill = 0;
var tip = 0;
var people = 0;


// document.querySelectorAll('.btn').forEach(buttonElement => {
//   const button = bootstrap.Button.getOrCreateInstance(buttonElement)
//   button.toggle()
// })

// ----------------------- Bill start -----------------------

$("#bill-form").keydown(function(event) {
  setTimeout(function() {
    bill = Number(event.target.value);
    calculate()
  }, 50);
});

// ----------------------- Bill End -----------------------



// ----------------------- Tip start -----------------------

$("button").click(function(event) {
  $("button.percentage-btn").removeClass("active");
  $("#custom-form")[0].value = "";
  $(event.target).addClass("active");
  tip = Number(event.target.name.substring(4, event.target.name.length)) / 100;
  calculate();
});


$("#custom-form").keydown(function(event) {
  setTimeout(function() {
    $("button.percentage-btn").removeClass("active");
    tip = Number(event.target.value) / 100;
    calculate()
  }, 50);
});

// ----------------------- Tip End -----------------------


// ----------------------- People start -----------------------

$("#people-form").keydown(function(event) {
  setTimeout(function() {
    people = Number(event.target.value);
    if (people > 0) {
      $("p.zero-red").hide();
      $(".people-input").removeClass("red-border");
    } else {
      $("p.zero-red").show();
      $(".people-input").addClass("red-border");
    }
    calculate()
  }, 50);
});

// ----------------------- People End -----------------------




// ----------------------- Functions -----------------------

function calculate() {
  var tipAmount = 0;
  var tipPerPerson = 0;
  var totalPerPerson = 0;
  if (bill > 0 & people > 0) {
    totalPerPerson = bill / people;
    if (tip > 0) {
      tipAmount = bill * tip;
      tipPerPerson = tipAmount / people;
      totalPerPerson += tipPerPerson;
    }
  }
  $("#tip-amount").text("$" + tipPerPerson.toFixed(2));
  $("#total-amount").text("$" + totalPerPerson.toFixed(2));
}



// ----------------------- Reset Button -----------------------

$("#reset-button").click(function(event) {
  $("#bill-form")[0].value = "";
  $("#people-form")[0].value = "";
  $("button.percentage-btn").removeClass("active");
  $("#reset-button").removeClass("active");
  $("#custom-form")[0].value = "";
  bill = 0;
  calculate()
});
