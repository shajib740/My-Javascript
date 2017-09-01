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