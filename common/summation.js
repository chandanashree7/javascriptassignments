function summation(){
	return {
		recursive : function(x){
			if(x <= 1){
				return 1;
			} else {
				return x + this.recursive(x-1);
			}
		},
		loop : function(x){
			if(x <= 1){
				return 1;
			} else {
				var result = 1;
				for(var i = 1; i <= x; i++){
					result += i;
				}
				return result;
			}
		}
	}
}