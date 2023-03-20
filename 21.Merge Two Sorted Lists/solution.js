const items = [
    { name: "tv", price: 300 },
    { name: "ps5", price: 500 },
    { name: "shoes", price: 79 },
    { name: "lemon", price: 2 },
    { name: "nailclipper", price: 3 },
]
const newArray = items.filter((item) => {
    return items.price < 100
})
const newArray = items.map((item) => {
    return items.name
})
const newArray = items.find((item) => {
    return items.name === 'shoes'
})
items.forEach((item) => {
    console.log(item.price)
})
const total = items.reduce((item, currentTotal) => {
    return items.price + currentTotal
}, 0)

const nums = [1, 2, 3, 4, 5, 6, 7]
const doesContain = nums.includes(3)

const array = [1, 2, 3, 4, 5];
const newArray = array.slice(2, 4);

console.log(newArray); // [3, 4]