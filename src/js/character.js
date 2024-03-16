export default class Character{
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
          throw new Error('Ошибка');
        } else {
          this.name = name;
        }
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!types.includes(type)) {
          throw new Error('Ошибка');
        } else {
          this.type = type;
        }
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
    }
}