function isPrimenumber(x)
{
	var sqrt = Math.sqrt(x) + 1;

	for(var i=2;i < sqrt; i++){
		if(x % i == 0) {
			return false;
		}
	}
	return true;
}