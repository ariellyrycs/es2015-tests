describe('default parameters', function(){

	xit('provides defaults', function(){

		var doWork = function(name) {
			return name || 'Scott';//TODO: change this to es2015
		};

		const result = doWork(0);
		expect(result).toBe('Scott');

	})
});
