	function randInt(max){
		// Uniform distribution
		// From 0 to max (excluded)
		let x = Math.random() * (max);
		return Math.floor(x);
	}

	function gaussInt(mean = 0, deviation = 1){
		// Normal distribution
		// From 0 to max (excluded)
		let x = rand_bm() * (max);
		return Math.floor(x);
	}

	function randFloat(max){
		// Uniform distribution
		// from 0.0 to max (included)
		return Math.random() * max;
	}

	function randIntRange(min, max){
		// Uniform distribution
		// from min (included) to max (excluded)
		let x = Math.random() * (max - min);
		return Math.floor(x) + min;
	}

	function gaussIntRange(min,max){
		// Normal distribution
		// From 0 to max (excluded)
		let x = rand_bm() * (max - min);
		return Math.floor(x) + min;
	}

	function randFloatRange(min, max){
		// Uniform distribution
		// from min (included) to max (included)
		return (Math.random() * (max - min)) + min;
	}

	function gaussian(mean, sd){
		let x = rand_bm();
		return sd * x;
	}

	function rand_bm(){
		// Normal Distributed Random Numbers using Box-Muller transform.
		// A mean of zero and a standard deviation of one
		// from: https://stackoverflow.com/a/49434653
		let u = 0, v = 0;
  		while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  		while(v === 0) v = Math.random();
  		let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  		num = num / 10.0 + 0.5; // Translate to 0 -> 1
  		if (num > 1 || num < 0) return randn_bm() // resample between 0 and 1
  		return num
	}

