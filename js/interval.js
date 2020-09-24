const nuo = 0;
const iki = 11;
const daliklis = 3;
let count = 0;

// % - dalybos liekana

for (let i = nuo; i <= iki; i++) {
    if (i%daliklis === 0) {
        count ++
    }
}
console.log(nuo, iki, daliklis, '-->', count);