const astronomyFacts = [
    "The Sun is so massive that it contains approximately 99.86% of the total mass of our entire solar system.",
    "Black holes are incredibly dense regions in space where gravity is so strong that nothing, not even light, can escape from them.",
    "Our solar system is part of the Milky Way galaxy, which is estimated to contain over 100 billion stars.",
    "Light travels at a mind-boggling speed of approximately 186,282 miles per second (299,792 kilometers per second) in a vacuum."
];

const generateFact = fact =>{
    const randomIndex = Math.floor(Math.random() * fact.length);
    const randomFact = fact[randomIndex];
    console.log(randomFact);
}

generateFact(astronomyFacts);