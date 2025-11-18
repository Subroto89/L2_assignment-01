// Problem 01
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if(typeof value === 'string') {
        return value.toUpperCase();
    }else if(typeof value === 'number') {
        return value * 10;
    }else {
        return !value;
    }
 
}

console.log(formatValue('hello world')); 
console.log(formatValue(5));               
console.log(formatValue(true)); 


// Problem 02
const getLength = (input: string | object): number => {
    if(typeof input === 'string') {
        return input.length;
    } else if(Array.isArray(input)){
        return input.length;
    } else {
        return 0;
    }
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// Problem 03
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// Problem 04
type Item = {
    name: string;
    rating: number;
}

const filterByRating = (items:Item[]):Item[] => {
    return items.filter((item)=> item.rating >= 4 );
}


const books = [
  { name: 'Book A', rating: 4.5 },
  { name: 'Book B', rating: 3.2 },
  { name: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));


// Problem 05
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users:User[]):User[] => {
    return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

// Problem 06
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book:Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable} `);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// Problem 07

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {

    const uniqueArray: (string | number)[] = [];

    for(const element of arr1) {
        if(!uniqueArray.includes(element)){
            uniqueArray.push(element);
        }
    }

    for(const element of arr2) {
        if(!uniqueArray.includes(element)){
            uniqueArray.push(element);
        }
    }

    return uniqueArray;

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// Problem 08
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]):number => {

    return products.reduce( (total, product) => {
        const discount = product.discount ? product.discount : 0;
        const productTotal = product.price * product.quantity * (1 - discount / 100);
        return total + productTotal;
    }   , 0);
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));