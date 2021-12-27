	function randInt(max){
		// From 0 to max (excluded)
		let x = Math.random() * (max);
		return Math.floor(x);
	}

	function randFloat(max){
		// from 0.0 to max (included)
		return Math.random() * max;
	}

	function randIntRange(min, max){
		// from min (included) to max (excluded)
		let x = Math.random() * (max - min);
		return Math.floor(x) + min;
	}

	function randFloatRange(min, max){
		// from min (included) to max (included)
		return (Math.random() * (max - min)) + min;
	}
