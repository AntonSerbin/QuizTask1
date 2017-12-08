//задания на уровень
const tasks = [
 	task1 = {task:"", pict:"./images/1_say.jpg",		sec:60,formatAnswer:"Формат ответа: слово на русском языке"},
	task2 = {task:"", pict:"./images/2_annya.jpg",		sec:60,formatAnswer:"Формат ответа: слово на русском языке"},		
	task3 = {task:"", pict:"./images/3_marina.jpg",		sec:60,formatAnswer:"Формат ответа: слово на русском языке"},		
	task4 = {task:"", pict:"./images/4_toha.jpg",		sec:60,formatAnswer:"Формат ответа: слово на русском языке"},		
	task5 = {task:"", pict:"./images/5_nastya.jpg",		sec:60,formatAnswer:"Формат ответа: слово на русском языке"},		

	];


const answers = [
 	task1 = {task:``,pict:`./images/1_say.jpg`,			sec:10,formatAnswer:`<span class="colorBlue">Посейдон</span>`, sizeFormatAnswer: `12rem`},
	task2 = {task:``,pict:`./images/2_annya.jpg`,		sec:10,formatAnswer:`<span class="colorBlue">Занятость</span>`, sizeFormatAnswer: `12rem`},
	task3 = {task:``,pict:`./images/3_marina.jpg`,		sec:10,formatAnswer:`<span class="colorBlue">Синьорина</span>`,sizeFormatAnswer: `12rem`},
	task4 = {task:``,pict:`./images/4_toha.jpg`,		sec:10,formatAnswer:`<span class="colorBlue">Понтон</span>`,sizeFormatAnswer: `12rem`},
	task5 = {task:``,pict:`./images/5_nastya.jpg`,		sec:10,formatAnswer:`<span class="colorBlue">Растяжка</span>`, sizeFormatAnswer: `12rem`},
	
			];

//запуск функции задания первый аргумент = массив заданий, второй размер шрифта
tasksButton.addEventListener("click",()=> 
{if (!counterOfTasks) 
	CountdownTimer(tasks, '12rem')});
//запуск функции ответы, первый аргумент = массив заданий, второй размер шрифта
answersButton.addEventListener("click",()=> {
	if (confirm("Ответы уверен?")&&(!counterOfTasks)) CountdownTimer(answers, '10rem')
});

