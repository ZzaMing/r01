import { useState } from "react";

const Counter2 = () => {

  const [obj, setObj] = useState({ num: 10 })

  return (
    <div>
      {obj.num}
      <buttom onClick={() => {
        obj.num += 1
        console.log(obj.num)

        setObj({...obj})
      }}>INC</buttom>
    </div>
  );
}

export default Counter2;