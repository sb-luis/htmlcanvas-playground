	function randInt(max){
		// Uniform distribution
		// From 0 to max (excluded)
		let x = Math.random() * (max);
		return Math.floor(x);
	}

	function gaussInt(mean = 0, deviation = 1){
		// Normal distribution
		// From 0 to max (excluded)
		let x = randBm() * (max);
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
		let x = randBm() * (max - min);
		return Math.floor(x) + min;
	}

	function randFloatRange(min, max){
		// Uniform distribution
		// from min (included) to max (included)
		return (Math.random() * (max - min)) + min;
	}

	function gaussian(mean, sd){
		let x = randBm();
		return sd * x;
	}

	function randBm(){
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

	function randMontecarlo(){
		while(true){
			let r1 = Math.random();
			let r2 = Math.random();
			let p = r1;

			if(r2 < p){
				return r1;
			}
		}
	}

	function randPerlin(x){
		const slopeAt = [];
		for (let i = 0; i < 10; i++) {
		  slopeAt[i] = (Math.random()*2)-1;
		}

		const lo = Math.floor(x);
		const hi = lo+1;
		const dist = x-lo;
		loSlope = slopeAt[lo];
		hiSlope = slopeAt[hi];
		loPos = loSlope * dist;
		hiPos = -hiSlope * (1-dist);
		const u = dist * dist * (3.0 - 2.0 * dist);  // cubic curve
		return (loPos*(1-u)) + (hiPos*u);  // interpolate
	}

