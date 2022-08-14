const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let toDos = []; // Array나 Object 자료형은 const로 선언해도 내부의 값을 할당하는것은 할 수 있습니다.
// 참조 자료형은 그 자료의 주소를 들고 있는 겁니다. const a = [1,2,3,4]; 하면 a는 [1,2,3,4]가 들어있는 배열의 시작지점 주소를 들고 있는 거예여. 이 상태에서 배열에 5가 추가 되던 6이 추가되던 a가 시작지점의 주소를 쥐고 있는 건 변하지 않는 상태에서 배열의 내용물만 달라지는 거예여. 다만 이때 a에 들어있는 주소를 바꾸려고 한다? 이것은 오류가 납니다. 말씀하신대로 const로 즉 상수로 선언했기 때문이죠.
//  arr = { name : "Kim" } 같이 자료형 자체를 새로 할당하는것은 const 특성상 되지 않습니다..
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Make a toDos array to a string.
}

function deleteToDo(event) {
	const li = event.target.parentElement; // event.target is the button clicked.
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDos();
}

function paintToDo(newToDo) {
	const li = document.createElement('li');
	li.id = newToDo.id;
	const span = document.createElement('span');
	span.innerText = newToDo.text;
	const button = document.createElement('button');
	button.innerText = '❌';
	button.addEventListener('click', deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.append(li);
	// append()가 추가할 수 있는 종류 더 많음. 문자열(DOMString), 여러 자식 요소 등. return 값 반환 X.
	// appendChild()로는 Node 객체만 추가할 수 있음. 문자열과 다중 값 허용 X. return값 반환 O.
}

function handleToDoSubmit(event) {
	event.preventDefault();
	const newToDo = toDoInput.value;
	toDoInput.value = '';
	const newTodoObj = {
		text: newToDo,
		id: Date.now()
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}
