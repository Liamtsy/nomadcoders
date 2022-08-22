const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'todos';

let toDos = []; // Array나 Object 자료형은 const로 선언해도 내부의 값을 할당하는것은 할 수 있습니다.
// 참조 자료형은 그 자료의 주소를 들고 있는 겁니다. const a = [1,2,3,4]; 하면 a는 [1,2,3,4]가 들어있는 배열의 시작지점 주소를 들고 있는 거예여. 이 상태에서 배열에 5가 추가 되던 6이 추가되던 a가 시작지점의 주소를 쥐고 있는 건 변하지 않는 상태에서 배열의 내용물만 달라지는 거예여. 다만 이때 a에 들어있는 주소를 바꾸려고 한다? 이것은 오류가 납니다. 말씀하신대로 const로 즉 상수로 선언했기 때문이죠.
//  arr = { name : "Kim" } 같이 자료형 자체를 새로 할당하는것은 const 특성상 되지 않습니다..
function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Make a toDos array to a string. Becuase localStorage only accepts strings.
}

function deleteToDo(event) {
	const li = event.target.parentElement; // event.target is the button clicked.
	li.remove();
	// li는 삭제 됐으나, localStorage에는 toDos의 아이템이 삭제되지 않음.
	// li는 UI에서 삭제됐으나 우리는 여전히 변수에 접근이 가능함. 그래서 li.id 참조 가능
	// 그렇기 때문에 filter()를 사용하여 삭제해야함. 선택옵션이라고 보면 편함. forEach처럼 요소 하나씩 다 건드림. 요소 개수만큼 함수가 호출되는 것.
	// 선택옵션으로 제외된 아이템을 제외한 후, New Array를 줌. 기존 array를 변경해주는게 아님!!!
	// How to use filter() ?

	// const life = ["희망", "불안", "행복", "비꼬는 마음"]
	// function goodLife(item){return item !== "비꼬는 마음"}
	// life.filter(goodLife) // ["희망", "불안", "행복"] (결과값)
	// 아래는 Arrow fucntion 이용함.
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // != 사용하면 형변환 안 해도 됨. 그러나 권장X.
	// toDos item의 id가 li.id와 같지 않으면 새 배열에 추가(True). 같으면 추가 X(False).
	// 그래서 클릭한 버튼의 parent인 li의 아이디와 배열의 모든 요소를 하나씩 비교해서, 같은 아이디를 가진 요소를 찾아서 걔만 제외해주는 것임.
	saveToDos();
}

function paintToDo(newToDo) {
	const li = document.createElement('li');
	li.id = newToDo.id; // Give each li a unique id.
	//newTodo.id는 number이지만 li.id는 DOM을 직접 건드린거라 string으로 형변환해서 받아들임.
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
		id: Date.now() // This is for giving a unique id to each newToDo. Date.now() is a function that returns the current time in milliseconds.
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
	//if (savedToDos) {}
	const parsedToDos = JSON.parse(savedToDos); // Make a string to an array.
	toDos = parsedToDos; // toDos에게 이전 저장된 데이터를 기억하게 하기 위해서 업데이트 해줘야함.
	parsedToDos.forEach(paintToDo);
}
