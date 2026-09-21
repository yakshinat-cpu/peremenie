window.LESSONS=[
{id:"variables",icon:"🟢",title:"Переменные",short:"Учимся хранить информацию в программе.",description:"Имя, значение и первое знакомство с присваиванием.",status:"Доступно",
theory:["Переменная — это имя, которое помогает программе запомнить значение.","В Python значение записывают с помощью знака =. Например: age = 12.","После этого Python может использовать имя age в других командах."],
examples:[{code:"name = \"Маша\"\nage = 12\nprint(name)\nprint(age)",note:"В переменных name и age хранятся имя и возраст."},{code:"score = 10\nscore = 15\nprint(score)",note:"Значение переменной можно изменить."}],
tasks:[
{id:"v1",level:"easy",title:"Найди переменную",question:"Какая переменная хранит возраст?",type:"choice",options:["name","age","print"],answer:"age"},
{id:"v2",level:"medium",title:"Создай переменную",question:"Напиши строку кода, которая создаёт переменную age со значением 12.",type:"text",answer:"age=12",normalize:"code"},
{id:"v3",level:"hard",title:"Две переменные",question:"Напиши две строки: создай переменные name со значением \"Аня\" и age со значением 13.",type:"text",answer:"name=\"Аня\"\nage=13",normalize:"code"}]},
{id:"types",icon:"🔵",title:"Типы данных",short:"Разбираемся, какие значения умеет хранить Python.",description:"Числа, строки и логические значения.",status:"Скоро"},
{id:"linear",icon:"🟡",title:"Линейные алгоритмы",short:"Команды выполняются одна за другой.",description:"Ввод, вывод и арифметические операции.",status:"Скоро"},
{id:"conditions",icon:"🟠",title:"Условные алгоритмы",short:"Учимся принимать решения в программе.",description:"if, else, elif и логические условия.",status:"Скоро"},
{id:"loops",icon:"🔴",title:"Циклические алгоритмы",short:"Повторяем действия с помощью циклов.",description:"for, while и range().",status:"Скоро"}];