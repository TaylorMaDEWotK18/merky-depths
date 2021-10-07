// 1. Declare variables and capture input.
/*const horror = new Img();
horror.src = 'https://s-media-cache-ak0.pinimg.com/564x/53/f5/53/53f553c13d346995e6e9245fc0f247d2.jpg';*/

const lostSouls1 = prompt("Hello Nichole! Welcome to one of your sexy husband's first programs! But first, just need a few easy answers from you! Please choose a number from 6-8.");
const lostSouls2 = prompt("Thank you! Please choose a number from 9-11.");
const bodyPart = prompt("Wonderful! Please, what is your favorite body part (appendages preferred?)");
const weapon = prompt("Beautiful! Your husband loves that part too! Next, what is a tool/weapon (not a gun) that you would find in your household?");
const tooMany = prompt("Great choice! Last but not least, which number calls more to you? 30, 40, or 50?");
alert("Awesome! Thank you so much Nichole. Now please, sit back, relax, read, and enjoy the tale!");

// 2. Combine the input with other words to create a story.

const theTale = `<p>The water began to rush in through the lower deck of the decrepit decaying ship. He ascended the latter as quick as he could, yet it was folly... How many had it dragged into the empty abyss? Was it ${lostSouls1}, maybe ${lostSouls2}.. Where it's veracious maw awaited their poor, sinking souls to devour and digest them...slowly. As he climbed the ladder to the Upper Deck, a tentacle, riddled with feelers coated in teeth, shot out from the merky depths and seized his ${bodyPart}. His eyes bulged in disbelief... jutting with terror at the thought of being dragged under those tenebrous merky depths, where it awaited... He could sense it, greedily smiling up at the meal to come. That's when he saw it, a ${weapon}, teetering on a storage ledge a foot above him. He reached, stretching on the verge on contortion, for the ${weapon}. This was it, his final test, final challenge, his last stand... He jumped, biting back the pain as the serated teeth shredded deeper into his ${bodyPart}, warm blood flowing into the hungry waters below. He got it! He actually got it! He raised the ${weapon} in triumph, releshing in disbelief, coupled with joy at his fortune. Now there was a chance... But as he turned his head, the feverish smile radiating over his face with relief slowly faded; all hope within him sank back into the reddening waters. Where one horrific tentacle had grabbed his leg, ${tooMany} had risen to relieve its efforts. This was it... This was the end. As the lonely tendrils wrapped around his frozen limbs and began their innocent drag to the horrors that waited below, one word escaped his lips... "Marie..."</p>`;

// 3. Display the story as a <p> inside the <main> element.

document.querySelector('main').innerHTML = theTale;
