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
		/* Source: https://codepen.io/OliverBalfour/post/procedural-generation-part-1-1d-perlin-noise */



		//implementation
    	//let w = window.innerWidth;
    	//let h = window.innerHeight;
		//let x = 0;
		//let y = h / 2;
		//let fq = 1 / wl; //frequency

		/*
		while(x < w){
			if(x % wl === 0){
				a = b;
				b = rand();
				y = h / 2 + a * amp;
			}else{
			y = h / 2 + interpolate(a, b, (x % wl) / wl) * amp;
			}
			ctx.fillRect(x, y, 1, 1);
			x += 1;
		}
		*/

	}

class Perlin {
		constructor(){
		//prng
			this.M = 4294967296;
			// a - 1 should be divisible by m's prime factors
			this.A = 1664525;
			// c and m should be co-prime
			this.C = 1;
			this.Z = Math.floor(Math.random() * this.M);
			this.ran1 = this.rand();
			this.ran2 = this.rand();
		}

		rand(){
			this.Z = (this.A * this.Z + this.C) % this.M;
			return this.Z / this.M - 0.5;
		};

		interpolate(pa, pb, px){
			let ft = px * Math.PI;
			let f = (1 - Math.cos(ft)) * 0.5;
			return pa * (1 - f) + pb * f;
		}

		get(x){
			let amp = 1; //amplitude
			let wl = 1; //wavelength
			return this.interpolate(this.ran1,this.ran2, (x % wl) / wl) * amp;
		}
}
