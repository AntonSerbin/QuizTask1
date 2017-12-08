let timeTable = document.querySelector("#timeTable");
const parrent= document.querySelector(".parrent"); //поле чтобы останавливать и др счетчик
let gong = document.getElementById("myAudio");  gong.volume=0.05;//звук гонга
let fieldTaskNumber = document.querySelector("#fieldTaskNumber");
let stringTask = document.querySelector("#stringTask");
let taskField = document.querySelector("#taskField");
let quizImage = document.querySelector("#quizImage");
let fieldAnswerFormat = document.querySelector("#fieldAnswerFormat");
let tasksButton = document.querySelector("#tasksButton");
let answersButton = document.querySelector("#answersButton");

let pauseCounter = false;
let counterOfTasks = false;


//функция счетчик
function CountdownTimer(arr, sizeFont){
	  	let stepOfTimer = 1000; 
	  	let sec=0;
	  	counterOfTasks = 0;
		console.log("Pause",pauseCounter,"counterOfTasks",counterOfTasks );

		//добавляем секунду
		  	function plusSecond(){
		  			let time=0; 
					if (sec>0){
			  			console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counterOfTasks);
				   		setTimeout(()=>plusSecond(),stepOfTimer);
				   		time = `<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(Math.floor(sec/60))}</span></span>`;
				   		time +=`<span class="number-wrapper"><div class="line"></div><span class="number">${addZero(sec%60)}</span></span>`;
				   		timeTable.innerHTML = time;
				   		if (pauseCounter===false) sec-- //если не пауза то вычитаем секунду
				   					else timeTable.innerHTML = "pause"; 
				  		}
					else {
						
						if(!arr[counterOfTasks]) {counterOfTasks=false; return};
						fieldTaskNumber.innerHTML = `Задание №${counterOfTasks+1}`;
						stringTask.style.fontSize = sizeFont;
						quizImage.src = arr[counterOfTasks].pict;
						if (arr[counterOfTasks].sizeFormatAnswer) fieldAnswerFormat.style.fontSize=arr[counterOfTasks].sizeFormatAnswer;
						stringTask.innerHTML = arr[counterOfTasks].task;
						fieldAnswerFormat.innerHTML = arr[counterOfTasks].formatAnswer;
						sec=arr[counterOfTasks].sec; 
						console.log(arr[counterOfTasks], arr[counterOfTasks].pict);
						counterOfTasks++;
						console.log("Seconds",sec,"stepOfTimer",stepOfTimer/1000,"counterofTasks",counterOfTasks);
						plusSecond();
		   			};
	   		// звук гонга
	   		// if ((sec==5)&&(stepOfTimer>=1000)) gong.play(); //запускаем гонг если шаг 1секунда или более
			};
			//функция добавляет 0 в циферблат при однозначном числе
			function addZero (num){ return ('0'+num).slice(-2)};
			//пускаем по кругу таймер
		  	plusSecond();
			

  	//блок для паузы таймера, ускорения, замедления
  	parrent.addEventListener("click",()=>{
  		return pauseCounter=!pauseCounter;
		});
	timeTable.addEventListener("contextmenu",(event)=>
		{event.preventDefault();
		return stepOfTimer=stepOfTimer/2;
		});
	taskField.addEventListener("contextmenu",(event)=>
		{event.preventDefault();
		return stepOfTimer=stepOfTimer*2;
		});
	
}; // конец функции CountdownTimer


// CountdownTimer(tasks);