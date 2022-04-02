import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const arr = [
  {
    id: 1,
    name: 'ReactJS'

  },
  {
    id: 2,
    name: 'VuJS'

  },
  {
    id: 3,
    name: 'Angular'

  },
]

function App() {
  const [text, setText] = useState();
  const [lstToDo, setLstToDo] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem("lstJobs"))

    return storageJobs
  });

  // console.log(lstToDo)

  const handleSubmit = () => {
    setLstToDo(prev => {
      const newArr = [...prev, text]

      const jsonJob = JSON.stringify(newArr)
      localStorage.setItem("lstJobs", jsonJob)

      return newArr

    })

    setText('');
  }
  const handleDelete = (item) => {
    const isCheck = lstToDo.includes(item)
    if (isCheck) {
      const newArr = lstToDo.filter(i => i !== item)
      console.log(newArr)
      setLstToDo(newArr)
    }
  }


  return (
    <div className="App">
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <br></br>
      <ul>
        {lstToDo.map((item, index) => {
          return (
            <li key={index}>
              <span style={{ margin: 20 }}>{item}</span>
              <button onClick={()=>handleDelete(item)}>x</button>
            </li>
          )
        })
        }
      </ul>

    </div>
  );
}

export default App;
