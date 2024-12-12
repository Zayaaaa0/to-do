const containerItems = [
    {
      title: "To do",
      count: 5,
      color: "white",
      id: "todo",
    },
    {
      title: "In progress",
      count: 5,
      color: "yellow",
      id: "in-progress",
    },
    {
      title: "Done",
      count: 5,
      color: "green",
      id: "done",
    },
    {
      title: "Blocked",
      count: 5,
      color: "red",
      id: "blocked",
    },
  ];
  const todoData = [
    {
      title: "Geree tseverleh",
      date: "2024-12-09",
      state: "blocked",
    },
    {
      title: "Shine jildee yvah",
      date: "2024-12-09",
      state: "done",
    },
    {
      title: "Huvtssaa beldeh",
      date: "2024-12-09",
      state: "done",
    }, 
    {
      tittle: "Hicheelee hiih",
      state: "In-progress",
    },
    {
      title: "Ert untah",
      state: "todo",
    },
  ];
  
  function addTaskList(title, color, count, id) {
    //html div iig bariad avsan
    const taskContainer2 = document.querySelector("#taskContainer");
  
    //todoList = <div class="todoList">
    //   <div class="title"></div>
    // </div>
    const todoList = document.createElement("div");
    todoList.setAttribute("class", "todoList");
    todoList.setAttribute("id", id);
  
    // title = <div class="title"></div>
    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "title");
  
    todoList.appendChild(titleDiv);
    // <h2>To do</h2>
    const h2 = document.createElement("h2");
    h2.innerText = title;
  
    // <div style={backgroundColor:"white" } class="circle"></div>
    const cirlce = document.createElement("div");
    cirlce.setAttribute("class", "circle");
    cirlce.style.backgroundColor = color;
  
    // <p class="count"></p>
    const para = document.createElement("p");
    para.setAttribute("class", "count");
    para.innerText = count;
  
    titleDiv.appendChild(cirlce);
    titleDiv.appendChild(h2);
    titleDiv.appendChild(para);
    taskContainer2.appendChild(todoList);
  }
  
  containerItems.map((item) => {
    addTaskList(item.title, item.color, item.count, item.id);
  });

  const renderTodoItems = (tittle, color, count, id) => {
    const container = document.getElementById(state);
    const listItem = document.createElement("div");
    text.innerText
    listItem.setAttribute("class", "listItem")
    container.appendChild(listItem)
  };
  todoData.map((item) => {
    renderTodoItems(item.title, item.date , item.state)
  })

  
  