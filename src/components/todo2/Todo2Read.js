import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../../api/todoAPI";


const initState = {
  tno: 0,
  title: ''
}

const Todo2Read = ({ target, changeView }) => {

  const [todo, setTodo] = useState(initState)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {

    getTodo(target).then(data => setTodo(data))

  }, [target, refresh])

  const handleClickDel = async () => {

    const { result } = await removeTodo(target)
    // {result: "success"}

    if (result === "success") {
      alert("삭제되었습니다.")
    }

    changeView("list")

  }

  const handleClickMod = async () => {

    const { result } = await putTodo(todo)

    if (result === "success") {
      alert("수정되었습니다..")
    }

    setRefresh(!refresh)

  }

  return (
    <div className="w-full h-[100vh] bg-green-400">
      <div>Todo Read</div>
      <div>{target}</div>
      <div>{todo.tno}</div>
      <div>
        <input
          type="text" value={todo.title}
          onChange={e => {
            todo.title = e.target.value
            setTodo({ ...todo })
          }}
        />
      </div>

      <div className="flex p-4">
        <button className="m-2 p-2 border-2" onClick={() => handleClickMod(todo)}>MOD</button>
        <button className="m-2 p-2 border-2" onClick={handleClickDel}>DEL</button>
      </div>
    </div>
  );
}

export default Todo2Read;