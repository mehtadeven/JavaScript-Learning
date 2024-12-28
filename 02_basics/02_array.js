const marvel_heros = ["Thor", "Iornman", "Spiderman"]
const DC_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(DC_heros)
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...DC_heros]
// Spred opreater three Dot
// console.log(all_new_heros);

const another_array = [ 1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]

let real_array = another_array.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));
// console.log(Array.from({name:"Deven"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
    