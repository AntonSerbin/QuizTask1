let pauseCounter = false;
let timeTable = document.querySelector("#timeTable");
const parrent= document.querySelector(".parrent"); //поле чтобы останавливать и др счетчик

let gong = document.getElementById("myAudio");  gong.volume=0.03;//звук гонга
let fieldTaskNumber = document.querySelector("#fieldTaskNumber");
let stringTask = document.querySelector("#stringTask");
let fieldAnswerFormat = document.querySelector("#fieldAnswerFormat");


//задания на уровень
const tasks = [
 	task1 = {task:`<span class="colorBlue">365</span> Д в Г`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task2 = {task:`<span class="colorBlue">26</span> Б в А А`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task3 = {task:`<span class="colorBlue">12</span> З З`,			sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task4 = {task:`<span class="colorBlue">9</span> Ж у К `,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task5 = {task:`<span class="colorBlue">3</span> Т <span class="colorBlue">3</span> В Д`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task6 = {task:`<span class="colorBlue">90</span> Г в П У`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task7 = {task:`<span class="colorBlue">15</span> Ч н С М`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task8 = {task:`<span class="colorBlue">64</span> К в Ш Д`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task9 = {task:`О <span class="colorBlue">3</span> Г Ж`,			sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task10 = {task:`<span class="colorBlue">36</span> К в К`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"}
			];

console.table(tasks);
//функция счетчик
let counerOfTasks = 0;
function CountdownTimer(arr){
	//считаем общее количество заданий
	  	let stepOfTimer = 1000; let sec=0;
		console.log(pauseCounter,counerOfTasks );

		//добавляем секунду
		  	function plusSecond(){
		  			let time=0; 
					if (sec>0){
			  			console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counerOfTasks);
				   		setTimeout(()=>plusSecond(),stepOfTimer);
				   		time = `<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(Math.floor(sec/60))}</span></span>`;
				   		time +=`<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(sec%60)}</span></span>`;
				   		timeTable.innerHTML = time;
				   		if (pauseCounter===false) sec-- //если не пауза то вычитаем секунду
				   					else timeTable.innerHTML = "pause"; 
				  		}
					else {
						
						if(!arr[counerOfTasks]) {return};
						fieldTaskNumber.innerHTML = `Задание №${counerOfTasks+1}`;
						stringTask.innerHTML = arr[counerOfTasks].task;
						fieldAnswerFormat.innerHTML = arr[counerOfTasks].formatAnswer;
						sec=arr[counerOfTasks].sec; 
						counerOfTasks++;
						console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counerOfTasks);
						plusSecond();
		   			};
	   		// звук гонга
	   		if ((sec==5)&&(stepOfTimer>=1000)) gong.play(); //запускаем гонг если шаг 1секунда или более
			};
			//функция добавляет 0 в циферблат при однозначном числе
			function addZero (num){ return ('0'+num).slice(-2)};
			//запускаем таймер
		  	plusSecond();
			

  	//блок для паузы таймера, ускорения, замедления
  	parrent.addEventListener("click",()=>{
  		return pauseCounter=!pauseCounter;
		});
	parrent.addEventListener("dblclick",(event)=>
		{event.preventDefault();
		stepOfTimer=stepOfTimer*2
		});
	parrent.addEventListener("contextmenu",(event)=>{
		event.preventDefault();
		stepOfTimer=stepOfTimer/2;
		});
	
}; // конец функции CountdownTimer

window.onload=function(){;
let counerTasks= CountdownTimer(tasks); //START HERE где часы, 
}
