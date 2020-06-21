const jokes = document.getElementById("jokes")
const jokesAnswers = document.getElementById("jokeAnswers")
var jokesArray = ["A neutron walks into a bar and asks how much for a drink.", "What do computer scientists like to eat?", "Why was the computer cold?", "There is a band called 1023 mb.", "What do you do with a sick chemist? " ];
var jokeanswersArray = ["Bartender replies, ‘For you, no charge’.", "Micro-chips", "Because it forgot to close Windows.", "They haven’t had any gigs yet.", "If you can’t Helium, and you can’t Curium, you might as well Bariumm "];
var jokerng = getRandomInt(0,jokesArray.length-1);
console.log(jokerng)
jokes.innerHTML = jokesArray[jokerng];
jokeAnswers.innerHTML = jokeanswersArray[jokerng];
console.log("runs jokes")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

