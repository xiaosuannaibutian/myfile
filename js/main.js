define(["js/doWindow","js/doNav","js/doFalls"],function(a,b,c){
	function exec(){
		a.doWindow();
		b.doNav();
		
		c.doFalls();
		//d.doModel();
	}
	exec();
})