'use strict';

const countTotalSalary = function (employees) {
	let result = 0;

	for (const value of Object.values(employees)) {
		result += value;
	}

	return result;
};

console.log(countTotalSalary({}));
console.log(
	countTotalSalary({
		mango: 100,
		poly: 150,
		alfred: 80
	})
);
console.log(
	countTotalSalary({
		kiwi: 200,
		lux: 50,
		chelsy: 150
	})
);
