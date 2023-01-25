var passage = document.getElementById("passage");
var wrong = document.getElementById("wrong");
var wwords = document.getElementById("wwords");
var ip = "";

//passage.innerText = "hello this is sandesh shingare"

var passageArr = [
  `This is the Typing speed test website`,

  `this is second) passage`,

  `A typing test is designed to find how fast one types in a given amount of time`,

  `The game shows a series of quotes that have to be typed in a specified time limit, as fast as possible.`,

  `An argument is a statement or group of statements called premises intended to determine the degree of truth or acceptability of another statement called a conclusion`,

  `In logic, an argument is usually expressed not in natural language but in a symbolic formal language, and it can be defined as any group of propositions of which one is claimed to follow from the others through deductively valid inferences that preserve truth from the premises to the conclusion. `,

  `According to Kant, however, the ancient Greeks used the word "dialectic" to signify the logic of false appearance or semblance.`,

  `The Socratic dialogues are a particular form of dialectic known as the method of elenchus (literally, "refutation, scrutiny"[7]) whereby a series of questions clarifies a more precise statement of a vague belief, logical consequences of that statement are explored, and a contradiction is discovered.`,

  `I was offended by the suggestion that my baby brother was a jewel thief.`,

  `When I was little I had a car door slammed shut on my hand and I still remember it quite vividly.`,

  `He decided to count all the sand on the beach as a hobby.`,

  `Having no hair made him look even hairier.`,

  `The thick foliage and intertwined vines made the hike nearly impossible.`,

  `The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.`,

  `The light that burns twice as bright burns half as long.`,

  `The sight of his goatee made me want to run and hide under my sister-in-law's bed.`,

  `He dreamed of eating green apples with worms.`,

  `She found his complete dullness interesting.`,

  `They throw cabbage that turns your brain into emotional baggage.`,

  `She was the type of girl who wanted to live in a pink house.`,

  `It was the scarcity that fueled his creativity.`,

  `Jim liked driving around town with his hazard lights on.`,

  `I always dreamed about being stranded on a desert island until it actually happened.`,
];

var randomsave = Math.floor(Math.random() * passageArr.length);

var random = passageArr[randomsave];

passage.innerHTML = random;

var letters = passageArr[randomsave].split(" ");


      function Save() {
        ip = document.getElementById("ip").value;
        // console.log(ip);
        var ipletters = ip.split(" ");
        var count = 0;
        //console.log(ipletters);

        wwords.innerHTML = "Wrong words are:: ";
        for (let j = 0; j < letters.length; j++) {
          if (letters[j] != ipletters[j]) {
            count++;
            //let arr = letters[j]
            if (count >= 0) {
              wwords.innerHTML += letters[j] + " ";
            }
          }
          // passage.innerHTML = ipletters[1]
        }
        if (count == 0) {
          wwords.innerHTML = "Wohoo!! You have typed all correct words";
        }

        wrong.innerHTML = `You have typed ` + count + ` Wrong words`;
      }
    
      //for Reload the page
      function newTest() {
        window.location.reload();
      }