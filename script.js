function addTask(){
    task = document.getElementById("inp").value
    console.log(task)
    if (task==""){
        alert("Task cannot be empty!")
        return
    }
    let li = document.createElement('li')
    li.textContent = task
    
    let delBtn = document.createElement('button')
    delBtn.innerHTML = '<i class="fas fa-trash"></i>'
    delBtn.classList.add('del-btn')
    delBtn.addEventListener("click", function(){
        li.remove()
    })

    li.appendChild(delBtn)
    document.getElementById('taskList').prepend(li)

    document.getElementById('inp').value = ""//clear the inp field
}

