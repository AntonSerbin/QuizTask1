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
	task9 = {task:`<span class="colorBlue">7</span> Р О <span class="colorBlue">1 1</span> O`,			sec:60,formatAnswer:"Формат ответа: фраза на русском языке"},
	task10 = {task:`<span class="colorBlue">36</span> К в К`,		sec:60,formatAnswer:"Формат ответа: фраза на русском языке"}
			];


const answers = [
 	task1 = {task:`<span class="colorBlue">365</span> ДНЕЙ в ГОДУ`,		sec:10,formatAnswer:""},
	task2 = {task:`<span class="colorBlue">26</span> БУКВ в АНГЛИЙСКОМ АЛФАВИТЕ`,		sec:10,formatAnswer:""},
	task3 = {task:`<span class="colorBlue">12</span> ЗНАКОВ ЗАДИАКА`,			sec:10,formatAnswer:""},
	task4 = {task:`<span class="colorBlue">9</span> ЖИЗНЕЙ у КОШКИ `,		sec:10,formatAnswer:""},
	task5 = {task:`<span class="colorBlue">3</span> ТАНКИСТА <span class="colorBlue">3</span> ВЕСЕЛЫХ ДРУГА`,		sec:10,formatAnswer:""},
	task6 = {task:`<span class="colorBlue">90</span> ГРАДУСОВ в ПРЯМОМ УГЛЕ`,		sec:10,formatAnswer:""},
	task7 = {task:`<span class="colorBlue">15</span> ЧЕЛОВЕК на СУНДУК МЕРТВЕЦА`,		sec:10,formatAnswer:""},
	task8 = {task:`<span class="colorBlue">64</span> КЛЕТКИ в ШАХМАТНОЙ ДОСКЕ`,		sec:10,formatAnswer:""},
	task9 = {task:`<span class="colorBlue">7</span> РАЗ ОТМЕРЬ <span class="colorBlue">1 1</span> OТРЕЖЬ`,			sec:10,formatAnswer:""},
	task10 = {task:`<span class="colorBlue">36</span> КАРТ в КОЛОДЕ`,		sec:10,formatAnswer:""}
			];

//запуск функции задания первый аргумент = массив заданий, второй размер шрифта
tasksButton.addEventListener("click",()=> 
{if (!counterOfTasks) 
	CountdownTimer(tasks, '12rem')});
//запуск функции ответы, первый аргумент = массив заданий, второй размер шрифта
answersButton.addEventListener("click",()=> {
	if (confirm("Ответы уверен?")&&(!counterOfTasks)) CountdownTimer(answers, '8rem')
});

