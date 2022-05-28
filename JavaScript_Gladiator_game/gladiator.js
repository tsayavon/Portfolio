// Gladiator class 
class Gladiator {
    constructor (name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
  }
  const max = new Gladiator("Maximus", "Trident");
  console.log(max.name);
  console.log(max.weapon);
  
  const titus = new Gladiator("Titus", "Club");
  console.log(titus.name + " " + titus.weapon);
  const andro = new Gladiator("Andronicus", "Sword");
  console.log(andro.name);
  console.log(andro.weapon);
  
  const heral = new Gladiator("Herald", "Archer");
  console.log(heral.name);
  console.log(heral.weapon);
