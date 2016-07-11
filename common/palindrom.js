function isStringPalindrom(x){
	var start = 0;
	var end = x.length - 1;

	var input = x.toLowerCase();

	while(start < end){
		if(input.charAt(start) != input.charAt(end)) {
			return false;
		}
		start++;
		end--;
	}
	return true;
}

function isNumberPalindrom(num){
	var n = num;
	var rev = 0;
	for(var i = 0; i <= num; i++){
		var r = parseInt(num % 10);
		num = parseInt(num / 10);
		rev = rev * 10 + r;
		i = 0;
	}
	if(n === rev){
		return true;
	}
	return false;
}