var obj = {num:2};

var addToThis = function(a,b,c){
	return this.num +a+b+c;
};

//console.log(addToThis.call(obj,97,8));
var arr= [1,2,3]
//console.log(addToThis.apply(obj,arr));

var bound = addToThis.bind(obj);

console.log(bound(8,8,8));