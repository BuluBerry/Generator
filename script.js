/*
Functions Needed:
1. Race
2. Class
3. Background
*/

const race = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling','Half-Orc','Human']
const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rouge', 'Sorcerer', 'Warlock', 'Wizard']
const background = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble', 'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin',]

function generateRandomItem(arr, itemName) {
    let randomItem = Math.floor(Math.random() * (arr.length));
    console.log(`Your ${itemName} will be ${arr[randomItem]}`);
}


generateRandomItem(race, 'race');
generateRandomItem(classes, 'class');
generateRandomItem(background, 'background')

/*let randomRace= Math.floor(Math.random() * (race.length));
let randomClass = Math.floor(Math.random() * (classes.length));
let randomBackground = Math.floor(Math.random() * (background.length));

console.log(`Your race will be ${race[randomRace]}.`);
console.log(`Your class is ${classes[randomClass]}`);
console.log(`Your background will be ${background[randomBackground]}`);*/