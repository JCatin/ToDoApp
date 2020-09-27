let inputField = document.querySelector('.inputField');
const taskList = document.querySelector('.taskList')
var nameUser = prompt('Привет, как твое имя?')

alert('Привет, ' + nameUser + '. Чтобы добавить задание после ввода нажми - Enter. Чтобы отметить выполнено - нажми один раз на задание, чтобы удалить - два');

inputField.addEventListener('keydown', function(event){
    if(event.code == 'Enter') {
        var task = document.createElement('p');
        task.innerText = inputField.value;
        taskList.appendChild(task);

        inputField.value = '';

        task.addEventListener('click', function(){
            task.style.textDecoration = 'line-through';
        })
        task.addEventListener('dblclick', function(){
            taskList.removeChild(task);
        })
    } 
})