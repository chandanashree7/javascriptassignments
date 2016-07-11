function mathOperation(operationType, initialValue){
	var result = initialValue;
	var operation = '';
	if(operationType === '+') {
		operation = function(x) {
			result += x;
			return result;
		}
	} else if(operationType === '-') {
		operation = function(x) {
			result -= x;
			return result;
		}
	} else if(operationType === '*') {
		operation = function(x,y) {
			result *= x * y;
			return result;
		}
	} else if(operationType === '/') {
		operation = function(x) {
			return result / x;
		}
	} else if(operationType === '%') {
		operation = function(x) {
			return (result % x);
		}
	} else {
		operation = function(x) {
			return "Invalid Operation";
		}
	}

	// return closure function
	return operation;
}