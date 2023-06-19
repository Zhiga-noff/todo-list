import style from './App.module.css';
import {useEffect, useState} from "react";

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

 async function createNewTask(setTasks)   {
    try {
        const response = await fetch(TODOS_URL)
        const result = await response.json()
        setTasks(result)
    } catch (error) {
        console.error(error)
    }
}

export const App = () => {
const [tasks, setTasks]=useState([])

    useEffect(()=>{
        createNewTask(setTasks)
    },[])

  return (
    <div className={style.app}>
      <form action="#" className={style.form}>
        <p className={style.title}>Тут твои задачи</p>
        <div className={style.flexField}>
          <input
            className={style.field}
            type="text"
            name="fieldNewTask"
            placeholder={'Напишите что вы хотите сделать'}
          />
          <button className={style.button}>Добавить задачу</button>
        </div>
      </form>
      <ul className={style.taskList}>
        {tasks.map(({ id, title }) => (
          <li className={style.task} key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};
