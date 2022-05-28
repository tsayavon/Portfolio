The Emperor has commissioned you to build a Gladiator Arena. You will do so using your knowledge of object-oriented Javascript and ES6 classes.

All of your Javascript code will be written in gladiator.js and arena.js. You can test your code by opening index.html in the browser and interacting with the console.


------------------------------------
Part 1: The Gladiator
Create a Gladiator class that has the following properties...

* a name
* a weapon (one of Spear, Club, Trident)
* Once defined, you should be able to do the following...

const max = new Gladiator("Maximus", "Trident");
console.log(max.name); // "Maximus"
console.log(max.weapon); // "Trident"
----------------------------------------------------------
Part 2: The Arena

Create an Arena class that meets the following criteria...

An arena has a name
const colosseum = new Arena("Colosseum");
console.log(colosseum.name); // => Colosseum


The name should be capitalized
const megalopolis = new Arena("megalopolis");
console.log(megalopolis.name); // => Megalopolis


An arena can have gladiators
const colosseum = new Arena("Colosseum");
console.log(colosseum.gladiators); // => []


You can add a gladiator to the arena
const max = new Gladiator("Maximus", "Trident");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
console.log(colosseum.gladiators); // => [Gladiator]


The arena should never have more than 2 gladiators in it at a time
const max = new Gladiator("Maximus", "Trident");
const titus = new Gladiator("Titus", "Sword");
const andronicus = new Gladiator("Andronicus", "Sword");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andronicus);
console.log(colosseum.gladiators.length); // => 2


If there are two gladiators in the arena, you can call a fight method that results in the elimination of one of the gladiators from the arena.
Winning conditions:

Trident beats Spear
Spear beats Club
Club beats Trident
If the two gladiators have the same weapon, they are both eliminated.
const max = new Gladiator("Maximus", "Trident");


const titus = new Gladiator("Titus", "Spear");
const colosseum = new Arena("Colosseum");
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.fight();
console.log(colosseum.gladiators); // => [max]
