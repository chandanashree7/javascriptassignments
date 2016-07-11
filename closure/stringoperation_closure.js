function concatString(placeholder,name){
	var val = '';
	return {
		setName : function(name1,name2){
			if(placeholder === 'F') {
				val = name + ' '+name1+' '+name2;
			} else if(placeholder === 'M') {
				val = name1+' '+name+' '+name2;
			} else if(placeholder === 'L') {
				val = name1+' '+name2+' '+name;
			}
		},
		getName : function(){
			return val;
		}
	}
}