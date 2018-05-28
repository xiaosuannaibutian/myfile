define(["js/doWindow","js/doNav","js/doFalls","js/doModel"],function(a,b,c,d){
	function exec(){
		a.doWindow();
		b.doNav();
		c.doFalls();
		d.doModel();
	}
	exec();
})