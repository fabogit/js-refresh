// Numbers
console.log(Number.MAX_SAFE_INTEGER);
const max = Math.pow(2, 53) - 1;
console.log(max);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.isFinite(10));

const big = BigInt(Math.pow(2, 88));
console.log(big);
console.log(309485009821345068724781056n === big); //true

console.log(0.2 + 0.4 === 0.6); // false
console.log((0.2).toFixed(2) + (0.4).toFixed(2) === (0.6).toFixed(2)); //true

console.log((0.2).toString(2)); // '0.001100110011001100110011001100110011001100110011001101'

function randomIntBetween(min, max) {
  // min: 5, max: 10
  return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

console.log(randomIntBetween(1, 10));

// Strings and tagged template
function productDescription(strings, productName, productPrice) {
  console.log(strings);
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'pretty cheap regarding its price';
  if (productPrice > 20) {
    priceCategory = 'fairly priced';
  }
  // return `${strings[0]}${productName}${strings[1]}${priceCategory}${
  //   strings[2]
  // }`;
  return { name: productName, price: productPrice };
}

const prodName = 'JavaScript Course';
const prodPrice = 29.99;

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`;
console.log(productOutput);

const mail = /^\S+@\S+\.\S+$/; // new RegExp('^\S+@\S+\.\S+$');
mail.test('valid@email.com'); //true
mail.exec('moreinfo@mail.com');

const camelCapital = /(h\H)ello/;
camelCapital.test('Hello'); // true

const any = /.ello/;
any.test('yellow'); // true