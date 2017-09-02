let add = function(a,b){
	return a+b;
}

let multiply = function (a,b){
	
	return a*b;
}

let calc = function (num1,num2,callback){
	if(typeof(callback)==="function")
	return callback(num1,num2);
};

console.log(calc(2,32,multiply));
/*console.log(calc(2,32,function(a,b){
	return 5+9;
	
}));*/

var myArr= [{
	num:5,
	str:'banana'
},
{
	num:9,
	str:'cabbage'
},

{
	num:0,
	str:'apple'
}];

myArr.sort(myArr.str);

console.log(myArr);