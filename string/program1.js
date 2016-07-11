function runninglength(input) {
	console.log('Running Length Input:'+input);
	var len = input.length;
	var result = '';
	var count = 1;
	for(var i=0;i<len;i++) {
		if((i+1) < len && input[i] == input[i+1]) {
			count++;
			continue;
		}
		result = result+input[i] + count;
		count = 1;
	}
	return result;
}