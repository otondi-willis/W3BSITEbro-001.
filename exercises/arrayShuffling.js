/**
 * fisher-yates algorithm
 */
const cards = ['A', 2, 3, 4, 5, 6, 7,8, 9, 10,'J','Q','K'];
cards.sort(()=> Math.random()-0.5)

console.log(cards);
shuffle(cards);

function shuffle(arrays){
    for (let i = arrays.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [arrays[i], arrays[random]] = [arrays[random], arrays[i]];
    }
    return arrays;
}