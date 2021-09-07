const createColor = require('my-colors'); // import the script my-colors
const randomColor = require('randomcolor'); // import the script randomColor
const prompt = require('prompt-sync')(); // import the script prompt-sync
/* const chalk = require('chalk'); */ // import chalk but never used

let hue = 'random';
let luminosity = 'random';

// check userinput at position 2 and 3 for hue and luminosity

hue = process.argv[2];
luminosity = process.argv[3];

// check if user imput on position 2 is ask

if (process.argv[2] === 'ask') {
  hue = prompt('what the hue: ');
  luminosity = prompt('what luminosity (bright, light or dark): ');
}

// create the color with randomColor

const color = randomColor({
  luminosity: luminosity,
  hue: hue,
});

// create the text in color

const colorText = createColor(color);

// create my output

const output = `###############################
###############################
###############################
#####                     #####
#####        ${color}      #####
#####                     #####
###############################
###############################
###############################`;

// color my output

const message = colorText(output);

console.log(message);
