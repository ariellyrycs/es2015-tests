describe('generators', function(){

	xit('can build an iterable', function(){

		//create a generator function and yield the numbers from 1 to 5.
		let sum = 0;
		for(let n of numbers(1,5)){
			sum += n;
		}

		expect(sum).toBe(15);
	});

	xit('can be built by implementing Symbol.iterator', function(){

		class Company {
			constructor() {
				this.employees = [];
			}

			addEmployees(...names) {
				this.employees = this.employees.concat(names);
			}
			//TODO:create a function iterator(Advanced)
		}

		let count = 0;
		let company = new Company();
		company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

		for(let employee of company) {
			if(employee[0] === 'T') {
				count++;
			}
		}

		expect(count).toBe(2);
	});

});
