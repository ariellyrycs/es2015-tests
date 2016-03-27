describe('template literals', function(){

	xit('can help build URLs', function(){

		let category = 'music';
		let id = 2112;
		//TODO:Make such concatenation here.

		expect(url).toBe('http://apiserver/music/2112');
	});

	xit('can use tags', function(){

		let upper = function(strings, ...values){
			let result = '';
			for(var i = 0; i < strings.length; i++){
				result += strings[i];
				if(i < values.length){
					result += values[i];
				}
			}
			return result.toUpperCase();
		};


		expect(result).toBe('1 + 3 IS 4');

	});

});
