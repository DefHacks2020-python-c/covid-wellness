const jokes = document.getElementById("jokes")
const jokesAnswers = document.getElementById("jokeAnswers")
var jokesQ = ["A neutron walks into a bar and asks how much for a drink.", "What do computer scientists like to eat?", "There is a band called 1023 mb.", "What do you do with a sick chemist?", "How do you keep an idiot in suspense?", "What’s the best thing about Switzerland?", "Why did Beethoven get rid of his chickens?", "I wondered why the frisbee was getting bigger", "If you boil a funny bone, it becomes a laughing stock.", "My girlfriend and I have a complex relationship.", "Today at the bank, an old lady asked me to check her balance.", "Why didn’t Tony Stark like his new assistant?", "What do you call a musician with problems?"]
var jokesA = ["Bartender replies, For you, no charge.", "Micro-chips", "They haven’t had any gigs yet.", "If you can’t Helium, and you can’t Curium, you might as well Barium. ", "...", "I don’t know, but the flag is a huge plus.", "All they said was Bach, Bach, Bach", "… and then it hit me", "That’s pretty humerus", "I’m real and she’s imaginary.", "So I pushed her over.", "He wasn’t Happy.", "A trebled man."]
var jokerng = getRandomInt(0, jokesQ.length - 1);
console.log(jokerng)
jokes.innerHTML = jokesQ[jokerng];
jokeAnswers.innerHTML = jokesA[jokerng];
console.log("runs jokes")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

