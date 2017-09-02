/*
// Factory Pattern Javascript

var peopleFactory = function(name,age,state){
	
	var temp = {};
	
	temp.age =	age;
	temp.name =	name;
	temp.state =state;
	
	temp.printPerson =  function(){
		console.log(this.name + "," + this.age+ "," +this.state);
	}
	
	return temp;
}

var person1= peopleFactory('shajib','25','Dhaka');
var person2= peopleFactory('shajib2','25','Chittagong');

person1.printPerson();
person2.printPerson();
*/
/*//Constructor Pattern
var peopleConstructor = function(name,age,state){
	
	this.name = name;
	this.age = age;
	this.printPerson = function(){
		console.log(this.name + "," + this.age+ "," +this.state);
	};
	
	
	
};

var person1 = new peopleConstructor('Jhon' ,23, 'CA');
var person2 = new peopleConstructor('KIM' ,23, 'SC);
person1.printPerson();*/

//Prototype  Pattern

var peopleProto = function(){
	
};

peopleProto.prototype.age =0;
peopleProto.prototype.name ="no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function(){
		console.log(this.name + "," + this.age+ "," +this.city);
}

var person1= new peopleProto();
person1.name = "Jhon" ;
person1.age = 21 ;
person1.city = 'california' ;

person1.printPerson();
