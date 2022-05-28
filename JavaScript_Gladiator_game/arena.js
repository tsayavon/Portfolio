// Arena class 
class Arena {
    constructor (name) {
      this.name = name;
      this.gladiators = [];
    }
    checkForFirstLetter () {
      const firstLetter = this.name.charAt(0);
      const cpaitalizedLetter = firstLetter.toUpperCase();
      return cpaitalizedLetter + this.name.slice(1);
         // return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      }

      addGladiator(inst){
        if(this.gladiators.length < 2){
          this.gladiators.push(inst);
        }
        return this;
       }

   /* gladiatorsLength () {
        if(this.gladiators.length < 2){
        addGladiator(inst);
        console.log("added gladiators");
      }else{
        console.log("Nope");
      }
    }*/


   fight(){
    if((this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Spear") || (this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Trident")){
      console.log("Trident wins");
    }else if((this.gladiators[0].weapon === "Spear" && this.gladiators[1].weapon === "Club") || (this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Spear")){
      console.log("Spear wins")
    }else if((this.gladiators[0].weapon === "Club" && this.gladiators[1].weapon === "Trident") || (this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Club")){
      console.log("Club wins");
    /* }else if(this.gladiators[0].weapon === "Trident" && this.gladiators[1].weapon === "Club"){
           console.log("Club Wins");
         }else if{
           console.log("Spear Wins");
         }else if{
           console.log("Trident Wins"); */
    }else{
      console.log("Eliminated");
    }
   }
}
const colosseum = new Arena ("Colosseum");
// console.log(colosseum.name);
console.log(colosseum.checkForFirstLetter());
colosseum.addGladiator(max);
colosseum.addGladiator(titus);
colosseum.addGladiator(andro);
colosseum.addGladiator(heral);


console.log(colosseum.gladiators);
console.log(colosseum.gladiators.length);
colosseum.fight();
console.log(colosseum.gladiators);
