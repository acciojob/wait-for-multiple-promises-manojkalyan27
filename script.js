//your JS code here. If required.
function getPromise1(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Promise 1", "2");
		},2000);
	})
}

function getPromise2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Promise 2", "1");
		},1000);
	})
}

function getPromise3(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Promise 3" , "3");
		},3000);
	})
}

const p = Promise.all([getPromise1(),getPromise2(),getPromise3()]);

p.then((values)=>{
	values.map((value)=>{
		va
	})
})

