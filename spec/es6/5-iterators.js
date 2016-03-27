describe('for of', function() {

	xit('can work with iteratables at a high level', function(){

		let sum = 0;
		let numbers = [1,2,3,4];

		//TODO:sum the numbers using for in

		expect(sum).toBe(10);
	});

});

describe('iterables', function(){

	xit('can work with iterators at a low level', function(){

		// iterator
		let sum = 0;

		let iterator = numbers[Symbol.iterator]();
		let next = iterator.next();
		//TODO:sum numbers using iterator
		expect(sum).toBe(10);
	});

});



describe('iterable', function(){

	xit('can be built by implementing Symbol.iterator', function(){

		class Company {
			constructor() {
				this.employees = [];
			}

			addEmployees(...names) {
				this.employees = this.employees.concat(names);
			}
			[Symbol.iterator]() {
				return new ArrayIterator(this.employees);
			}
		}

		class ArrayIterator {
			//TODO:build Function next Iterator
			constructor(array) {
				this.array = array;
				this.index = 0;
			}
		}

		let count = 0;
		let company = new Company();
		company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

		for(let employee of company) {
			count += 1;
		}

		expect(count).toBe(4);
	});
});
