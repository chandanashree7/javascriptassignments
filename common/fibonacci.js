function fibonacci() {
	return{
		recursive : function(x){
			if(x <= 0){
				return 0;
			} else if(x == 1){
				return 1;
			} else {
				return this.recursive(x-1) + this.recursive(x-2);
			}
		},
		loop : function(x){
			if(x <= 0){
				return 0;
			}
			var a = 1;
			var b = 1;
			 
			for(var i = 2; i < x; i++){
				var c = a + b;
				a = b;
				b = c;
			}
			return b;
		}
	}
}