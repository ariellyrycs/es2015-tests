describe('arrow functions', function(){

	xit('provide a compact syntax to define a function', function(){
		//TODO:build add, square and three function using arrows
		expect(add(3, 4)).toBe(7);
		expect(square(4)).toBe(16);
		expect(three()).toBe(3);
	});

	xit('lexically binds to this', function(done) {

		this.name = 'Scott';

		setTimeout(() => {
			//TODO: compare both elenets
			expect().toBe('Scott');
			done();
		},15);

	});

});
