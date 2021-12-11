var name ="jeo"

var randomOne = [
    "my name is " + name,
    name + " is my name",
    "shut tf up",
    "im here to rap not here to yap. My names "+name+" and im gonna scrap",
    "hello"
];
var randomTwo = [
    "Im here to dance and you look like you from france",
    "you are lame we are not the same",
    "shut the up you a nut",
    "you look older than my nan",
    "Yep"
];
var randomThree = [
    "Ay, what? Say, not.",
    "we are not the same. ",
    "stop tryna rap fam you sound like crap",
    "your shoes look dumb and like your dad you should run",
    "what i said"
];
var randomFour = [
    "dance to my raps",
    "if you forget my name is "+name,
    "hey man",
    "yeah man tryna hear you rap mad me clinically insane",
    "yep i said that"
];
var randomFive = [
    "like i said ive got game",
    "i win everytime i try",
    "yo man",
    "i just won a game",
    "i win all the time"
];
var randomSix= [
    "yeah biggie "+name+" out",
    "once again " +name + " is my name",
    "see ya maaaaan",
    "i just won easy",
    "bye"
];


var randomDiv1 = document.getElementById("1");

document.getElementById("1b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomOne.length-1));
      newText = randomOne[randomIndex];
      randomDiv1.innerHTML = newText;
});

var randomDiv2 = document.getElementById("2");

document.getElementById("2b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomTwo.length-1));
      newText = randomTwo[randomIndex];
      randomDiv2.innerHTML = newText;
});

var randomDiv3 = document.getElementById("3");

document.getElementById("3b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomThree.length-1));
      newText = randomThree[randomIndex];
      randomDiv3.innerHTML = newText;
});


var randomDiv4 = document.getElementById("4");

document.getElementById("4b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomFour.length-1));
      newText = randomFour[randomIndex];
      randomDiv4.innerHTML = newText;
});

var randomDiv5 = document.getElementById("5");

document.getElementById("5b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomFive.length-1));
      newText = randomFive[randomIndex];
      randomDiv5.innerHTML = newText;
});
var randomDiv6 = document.getElementById("6");

document.getElementById("6b").addEventListener("click", function() {
      randomIndex = Math.ceil((Math.random()*randomSix.length-1));
      newText = randomSix[randomIndex];
      randomDiv6.innerHTML = newText;
});
