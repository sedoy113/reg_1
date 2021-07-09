const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть не менее 2 и не более 10 символов');
    } else {
      this.name = name;
    }
    if (!types.includes(type)) {
      throw new Error('Такого класса нет');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
  }
}
