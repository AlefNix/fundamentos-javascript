console.log('Hello World JavaScript!');

console.error('Erro');
console.warn('Aviso');
console.log('Mensagem');

var x = 10;
let y = 25;
const z = 20;

if(1) {
    let y = 55;
    console.log(y);
}

console.log(x);
console.log(y);
console.log(z);

y = 25;

console.log(y);

const name = 'Alef';

console.log(name);
console.log(typeof name);

const shirtsQty = 4;
console.log(shirtsQty);
console.log(typeof shirtsQty);

const decimal = 12.5;
console.log(decimal);
console.log(typeof decimal);

const isApproved = false;
console.log(isApproved);
console.log(typeof isApproved);

let surname = null;
console.log(surname);
console.log(typeof surname);

surname = 'Bryan';
console.log(surname);
console.log(typeof surname);

let age;
console.log(age);
console.log(typeof age);

age = 19;
console.log(age);
console.log(typeof age);


const languages = ['javascript', 'php', 'python'];
console.log(languages);
console.log(typeof languages);

const user = {
    email: 'aleffrade@gmail.com',
    password: '1234',
    age: age
}
console.log(user);
console.log(typeof user);


const fullName = 'Alef Bryan';
console.log(fullName.length);

const stringToArray = fullName.split(' ');
console.log(stringToArray);

console.log(fullName.toLowerCase());

console.log(fullName.toUpperCase());

console.log(fullName.indexOf('Bryan'));

console.log(fullName.slice(0, 4));

const list = ['a', 'b', 'c', 'd', 'e'];

console.log(list.length);

console.log(list[2]);

list[5] = 'f';

console.log(list);

console.log(list[list.length - 1]);

list.push('g');

console.log(list);

list.pop();

console.log(list);

list.shift();

console.log(list);

list.unshift('a');

console.log(list);

const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    sizes: ['p', 'm', 'g', 'gg'],
    'Main Color': 'Blue',
}

console.log(product.name);

console.log(product['name']);

console.log(product['Main Color']);

const {price, inStock} = product;

console.log(price);

console.log(inStock);

const [n1, n2] = list;

console.log(n1);
console.log(n2);

const dog = {
    name: 'Shark',
    age: 10
}

const json = JSON.stringify(dog);

console.log(json);

const obj = JSON.parse(json);

console.log(obj);

const jsonErrado = '{"name": "Teste", "surname": "testando"}';

const obj2 = JSON.parse(jsonErrado);

console.log(obj2);

const a = 10;

if (a > 8) {
    console.log('A é maior que 8');
}

const b = 'Mateus';

if(b === 'João') {
    console.log('João')
} else if (b === 'Pedro') {
    console.log('Pedro')
} else {
    console.log('Não encontramos o nome do usuário!')
};

const someNumber = 14;

let testingNumber = someNumber < 20 ? 'yes' : 'no';

console.log(testingNumber);

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let counter = 0;

while (counter < myList.length) {
    console.log('Imprimindo: ' + myList[counter]);
    counter++;
}

const mySecondList = ['a', 'b', 'c', 'd', 'e'];

for(let counter = 0; counter < mySecondList.length; counter++ ) {
    console.log(`Imprimindo: ${mySecondList[counter]}`)
};

const names = ['João', 'Pedro', 'Maria'];

names.forEach(function(name) {
    console.log(`O nome é: ${name}`);
});

const modifiedNames = names.map(function(name) {
    if(name === 'João') {
        return (name = "Sr. João");
    } else {
        return name;
    }
});

console.log(modifiedNames);

const bigNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 123].filter(function(number) {
    return number >= 5;
});

console.log(bigNumbers);

const sumAll = [10, 20, 30, 40, 50].reduce(function(total, number) {
    return total + number
})

console.log(sumAll);

function minhaFuncao() {
    console.log('Olá Funcao!');
}

minhaFuncao();

function nomeCompleto(nome, sobrenome) {
    return(`O nome completo é: ${nome} ${sobrenome}`)
}

console.log(nomeCompleto('Alef', 'Bryan'));

const meuNomeCompleto = nomeCompleto('Mateus', 'Battisti');

console.log(meuNomeCompleto);

const primeiroNome = 'Jao';

const segundoNome = 'Lucas';

console.log(nomeCompleto(primeiroNome, segundoNome));

const myArrowFunction = (a, b) => {
    return a + b;
}

console.log(myArrowFunction(2, 5));

const mySimpleArrow = (a, b) => a + b;

console.log(myArrowFunction(3, 7));

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    productDetails() {
        return `Nome: ${this.name}, preço: R$ ${this.price}`;
    }
}

const socks = new Product('Meia brnaca', 10.99);
const shirt = new Product('Camisa Preta', 22.99)

console.log(socks);
console.log(shirt);

console.log(shirt.productDetails());

class SuperProduct extends Product {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    showAdjective(adjective) {
        return `O ${this.name} é ${adjective}`;
    }

    static sayHello() {
        console.log('Hello');
    }
}

const tenis = new SuperProduct('Tênis Vermelho', 59.90, 41);

console.log(tenis);

console.log(tenis.showAdjective('Bom'));

SuperProduct.sayHello();

const title = document.getElementById('title');

console.log(title);

const sameTitle = document.querySelector("#title");

console.log(sameTitle);

const texts = document.querySelectorAll('.text');

console.log(texts);
console.log(texts[1]);

texts.forEach((text) => {
    console.log(text.textContent.toUpperCase());
});

title.textContent = "Mudei o Texto";

texts[0].innerHTML = '<h1>Alteramos o elemento/tag</h1>';

texts[1].style.backgroundColor = 'red';

texts[2].classList.add('my-class');

texts[2].classList.remove('text');

texts[3].remove();

function random_rgba() {
    return 'rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.random().toFixed(1) + ')';
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    console.log('clicou');
    texts[2].style.color = random_rgba();
    texts[2].style.backgroundColor = random_rgba()
})