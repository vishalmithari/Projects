const quotes = [
  "With great power comes great responsibility.",
  "No man can win every battle, but no man should fall without a struggle.",
  "We don't get to choose our time. Death is what gives life meaning.",
  "Sometimes you gotta run before you can walk.",
  "What is grief, if not love persevering?",
  "The hardest choices require the strongest wills.",
  "If you're nothing without the suit, then you shouldn't have it.",
  "You could never hurt me. I just feel you.",
  "The price of freedom is high; it always has been.",
  "I choose to run towards my problems, and not away from them.",
  "The world has changed, and none of us can go back.",
  "Compromise where you can. Where you can't, don't.",
  "Everyone fails at who they're supposed to be.",
  "We're in the endgame now.",
  "I am burdened with glorious purpose.",
  "In times of crisis, the wise build bridges, while the foolish build barriers.",
  "I had nothing to prove to you.",
  "Vengeance has consumed you.",
  "Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
  "You're stronger than you think.",
  "I see this as an absolute win.",
  "If you step out that door, you are an Avenger.",
  "You cannot protect the world alone.",
  "A thing isn't beautiful because it lasts.",
  "That's my secret, I'm always angry.",
  "You can't protect the world if you can't protect each other.",
  "The city is flying, we're fighting an army of robots... and I have a bow and arrow.",
  "What makes you different is what makes you Spider-Man.",
  "I'm still worthy.",
  "The hardest part of being a hero is knowing when to stand down."
];

const button= document.querySelector('button');
const quote= document.querySelector('h1')

button.addEventListener('click',()=>{
  const index= Math.floor(Math.random()*20);
  quote.textContent= quotes[index];
})