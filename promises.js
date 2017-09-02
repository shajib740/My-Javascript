/*let promiseCleanTheRoom = new Promise(function(resolve,reject){
	
	//cleaning the room
																			
let isclean = false;

if(isclean){
	resolve(' Clean');
}
else{
	reject(' Not Clean');
}

});

promiseCleanTheRoom.then(function(fromResolve){
	console.log('the room  is' + fromResolve);
}).catch(function(fromReject){
	console.log('the room  is' + fromReject);		
})*/

let CleanRoom = function(){
	return new Promise(function(resolve,reject){
		resolve('Cleaned The Room');
	});
};


let removeGarbage =function(message){
	return new Promise(function(resolve,reject){
		resolve(message + 'remove Garbage');
	});
};


let winIcecream = function(message){
	return new Promise(function(resolve,reject){
		resolve(message+'won Icecream');
	}
	);
}


CleanRoom().then(function(result){
return removeGarbage(result);
}).then(function(result){
	return winIcecream(result);
 }).then(function(result){
	console.log('finnished '+result);
})