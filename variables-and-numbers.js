
//Задание номер один
function RectangleArea(x1, y1, x2, y2) {
	let S = Math.abs(x1 - x2) * Math.abs(y1 - y2);
	return S;
}

console.log('Первое задание');
console.log(RectangleArea(2, 3, 10, 5));
console.log(RectangleArea(10, 5, 2, 3));
console.log(RectangleArea(-5, 8, 10, 5));
console.log(RectangleArea(5, 8, 5, 5));
console.log(RectangleArea(8, 1, 5, 1));

//Задание номер два
function FractionalParts(a, b, n) {
	let RemainsA = Math.floor((a % 1) * Math.pow(10, n));
	console.log(RemainsA);
	let RemainsB = Math.floor((b % 1) * Math.pow(10, n));
	console.log(RemainsB);
	console.log('a > b ?', RemainsA > RemainsB)
	console.log('a < b ?', RemainsA < RemainsB)
	console.log('a >= b ?', RemainsA >= RemainsB)
	console.log('a <= b ?', RemainsA <= RemainsB)
	console.log('a === b ?', RemainsA === RemainsB)
	console.log('a != b ?', RemainsA != RemainsB)
}

console.log('Второе задание');
console.log(FractionalParts(13.123456789, 2.123, 5));
console.log(FractionalParts(13.890123, 2.891564, 2));
console.log(FractionalParts(13.890123, 2.891564, 3));

//Задание номер три
function RandomGenerator(m, n) {
	let range = Math.abs(m - n);
	let NumberInRange = Math.round(Math.random() * range);
	let min = Math.min(n, m);
	let max = Math.max(n, m);
	let checkmax = ((min + NumberInRange) == max);
	if (((min + NumberInRange) % 2) == 1) {
		console.log(min + NumberInRange);
	} else {
		if (checkmax == true) {
			NumberInRange -= 1;
			console.log(min + NumberInRange)
		} else {
			NumberInRange += 1;
			console.log(min + NumberInRange)
		}
	}
}


console.log(RandomGenerator(10, 20));
console.log(RandomGenerator(2, 5));
console.log(RandomGenerator(100, -5));
console.log(RandomGenerator(-3, -10));