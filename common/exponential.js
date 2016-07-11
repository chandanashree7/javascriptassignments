function exponential() {
	return{
		recursive : function(n,e){
			if(e <= 0){
				return 1;
			} else {
				return n * this.recursive(n,e-1);
			}
		},
		loop : function(n,e){
			if(e <= 0){
				return 1;
			}
			
			var result = 1;
			for(var i = 1; i <= e; i++){
				result = n * result;
			}
			return result;
		}
	}
}