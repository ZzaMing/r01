import { useEffect, useState } from "react";
import Todo1List from "./Todo1List";
import Todo1Input from "./Todo1Input";
import Todo1Read from "./Todo1Read";
import uuid from "react-uuid"

const Todo1 = () => {

  const [todos, setTodos] = useState([])
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const jsonStr = localStorage.getItem("todos")
    if(jsonStr){
      setTodos(JSON.parse(jsonStr))
    }
  }, [])

  const sallAll = () => {
    const str = JSON.stringify(todos)
    localStorage.setItem("todos", str)
  }

  const addTodo = (todoObj) => {
    console.log(uuid(), todoObj)
    setTodos([...todos, { tno: uuid(), ...todoObj }])
  }

  const requestView = (tno) => {
    const target = todos.filter(todo => todo.tno === tno)[0]
    console.log("requestVie: ", target)
    setCurrent({ ...target })
  }

  const remove = (tno) => {
    setTodos(todos.filter((todo => todo.tno !== tno)))
    setCurrent(null)
  }

  const modify = (modifiedTodo) => {
    const target = todos.filter(todo => todo.tno === modifiedTodo.tno)[0]
    target.title = modifiedTodo.title // target은 원본 주소를 물고 있다.
    setTodos([...todos])
    setCurrent(null)
  }

  return (
    <>
      <div className="text-5xl">Todo 1</div>
      <div>
        <Todo1Input addTodo={addTodo}></Todo1Input>
        <Todo1Read current={current} remove={remove} modify={modify}></Todo1Read>
        <Todo1List requestView={requestView} todos={todos}></Todo1List>
        <div onClick={sallAll} className="text-center text-2xl bg-slate-300">Save ALL</div>
      </div>
    </>
  );
}

export default Todo1;