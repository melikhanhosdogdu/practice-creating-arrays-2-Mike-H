// Task 1
let greetings = Array(7).fill("Hello");
console.log(greetings);

// Task 2
greetings.fill("Hi", 0, 3);
console.log(greetings);

// Task 3
let numbers = Array(5);
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = i * 10;
}
console.log(numbers);
