
// let iterationCounter = 100; // Количество проверок
// let i = 0; //Счётчик 
// let m = 0; //В m и n можете вписать любые числа 
// let n = 100;
// let currentValue; //Значение (min + NumberInRange) в текущей итерации
// let goodResault = 0; //Значения, удовлетворяющие условиям
// let badResault = 0; //Значения, не удовлетворяющие условиям
// let min = Math.min(n, m);
// let max = Math.max(n, m);

// function RandomGenerator(m, n) {
// 	let range = Math.abs(m - n); //100
// 	let NumberInRange = Math.round(Math.random() * range); // 0 - 100
// 	let checkmax = ((min + NumberInRange) == max); // true в случае, если будет 100 (0 + 100)
// 	if (((min + NumberInRange) % 2) == 1) {
// 		currentValue = min + NumberInRange;
// 	} else {
// 		if (checkmax == true) {
// 			NumberInRange -= 1;
// 			currentValue = min + NumberInRange;
// 		} else {
// 			NumberInRange += 1;
// 			currentValue = min + NumberInRange;
// 		}
// 	}
// }

// while (i < iterationCounter) {
// 	RandomGenerator(m, n);
// 	if ((currentValue % 2 == 1) && (currentValue <= max) && (currentValue >= min)) {
// 		goodResault += 1;
// 	} else {
// 		badResault += 1;
// 	}
// }

// console.log(goodResault, badResault);

// 


function RandomGenerator(m, n, numberOfIterations) {
	let i = 0;
	let badResault = 0;
	let goodResault = 0;
	while (i < numberOfIterations) {
		let currentValue;
		let range = Math.abs(m - n);
		let NumberInRange = Math.round(Math.random() * range);
		let min = Math.min(n, m);
		let max = Math.max(n, m);
		let checkmax = ((min + NumberInRange) == max);
		if (((min + NumberInRange) % 2) == 1) {
			currentValue = (min + NumberInRange);
		} else {
			if (checkmax == true) {
				NumberInRange -= 1;
				currentValue = (min + NumberInRange)
			} else {
				NumberInRange += 1;
				currentValue = (min + NumberInRange)
			}
		}
		if (((currentValue % 2) == 1) && (currentValue <= max) && (currentValue >= min)) {
			goodResault += 1;
		} else {
			badResault += 1;
		}


		i++;
	}
	console.log(goodResault, badResault);
}