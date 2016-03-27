describe('destructuring', function() {
	'use strict';


	xit('can destructure objects', function() {

	    let doWork = function() {
		     return {
			    firstName: 'Scott',
		        lastName: 'Allen',
		        handles: {
		        	social: ['twitter:OdeToCode','fb:OdeToCode']
		    	  }
		    };
		};
		//TODO:get firstName and fb value using destrucuring

		expect(firstName).toBe('Scott');
		expect(fb).toBe('fb:OdeToCode');

	});
});
