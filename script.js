/*
// Q1 - Given an array of numbers, use the map function with an arrow function to square each element of the array.

const numbers = [2, 4, 6, 8, 10];
// const squaredNumbers = numbers.map(num => num * num);
// console.log("Squared Numbers:", squaredNumbers);


// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators.

function getGrade(score) {
    return score >= 90 ? 'A' :
           score >= 80 ? 'B' :
           score >= 70 ? 'C' :
           score >= 60 ? 'D' : 'F';
}
// console.log("Grade for score 85:", getGrade(85));
// console.log("Grade for score 92:", getGrade(92));


// Q3 - Create an object representing a car with properties like Company name, model, and year. 
// Write a function to change the car's year property. Also, use object destructuring to extract and print the car's Model and Year.

const car = {
    company: "Toyota",
    model: "Corolla",
    year: 2020
};

function updateCarYear(newYear) {
    car.year = newYear;
}

updateCarYear(2022);

const { model, year } = car;
// console.log("Car Model:", model);
// console.log("Car Year:", year);


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const primeNumbers = numbersArray.filter(isPrime);
// console.log("Prime Numbers:", primeNumbers);


// Q5 - State different use cases of map, filter, and reduce functions.

// 1. map(): Used when you want to transform each element in an array. For example, converting an array of temperatures in Celsius to Fahrenheit.
// 2. filter(): Used when you want to select a subset of elements from an array based on a condition. For example, filtering out even numbers from an array.
// 3. reduce(): Used when you want to accumulate values from an array to a single result, such as summing all numbers in an array or finding the maximum value.


// Q6 - Write an asynchronous function using async-await to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
// fetchData();


// Q7 - Define a nested object representing a person with properties like name, address, and contact.
// Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: "John Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        zip: "12345"
    },
    contact: {
        phone: "555-1234",
        email: "johndoe@example.com"
    }
};

const phoneNumber = person.contact?.phone;
// console.log("Person's Phone Number:", phoneNumber);

const missingContactNumber = person.contact?.fax;
// console.log("Missing Contact Number:", missingContactNumber);


*/

// Q1: Square each element of the array
function showQ1Solution() {
    const numbers = [2, 4, 6, 8, 10];
    const squaredNumbers = numbers.map(num => num * num);
    document.getElementById("q1-result").innerText = `Squared Numbers: ${squaredNumbers.join(", ")}`;
}

// Q2: Get grade from score
function showQ2Solution() {
    const score = parseInt(document.getElementById("q2-score").value);
    const grade = score >= 90 ? 'A' :
                  score >= 80 ? 'B' :
                  score >= 70 ? 'C' :
                  score >= 60 ? 'D' : 'F';
    document.getElementById("q2-result").innerText = `Grade: ${grade}`;
}

// Q3: Car properties and update
function showQ3Solution() {
    const car = { company: "Toyota", model: "Corolla", year: 2020 };
    const { model, year } = car;
    document.getElementById("q3-result").innerText = `Car Model: ${model}, Year: ${year}`;
}

// Q4: Filter prime numbers
function showQ4Solution() {
    const numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const primeNumbers = numbersArray.filter(isPrime);
    document.getElementById("q4-result").innerText = `Prime Numbers: ${primeNumbers.join(", ")}`;
}

// Q5: Use cases for map, filter, and reduce
function showQ5Solution() {
    const useCases = `
    - map(): Transform each element in an array.
    - filter(): Select elements that meet a condition.
    - reduce(): Accumulate values to a single result.`;
    document.getElementById("q5-result").innerText = useCases;
}

// Q6: Fetch data from API (Async/Await)
async function showQ6Solution() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        document.getElementById("q6-result").innerText = `Fetched Data: ${JSON.stringify(data.slice(0, 2), null, 2)}`;
    } catch (error) {
        document.getElementById("q6-result").innerText = "Error fetching data.";
    }
}

// Q7: Access nested object properties
function showQ7Solution() {
    const person = {
        name: "John Doe",
        address: { street: "123 Main St", city: "Anytown", zip: "12345" },
        contact: { phone: "555-1234", email: "johndoe@example.com" }
    };
    const phoneNumber = person.contact?.phone || "Phone number not available";
    document.getElementById("q7-result").innerText = `Phone Number: ${phoneNumber}`;
}
