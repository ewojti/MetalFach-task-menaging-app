import React from "react";
import { useParams } from 'react-router-dom'

const TaskItem = () => {
  const {id} = useParams()
  return (
    <div>
      <div>
        <h2>Tytuł</h2>
      </div>
      <div>
        <div>
          <h3>Członkowie</h3>
          <h3>Opis</h3>
          <p>Teskt opisu</p>
        </div>
        <div>
          <h3>Lista zdań</h3>
          <ul>
            <li>zadanie 1</li>
            <li>zadanie 2</li>
            <li>zadanie 3</li>
          </ul>
          <button>dodaj element</button>
        </div>
        <div>
          <h3>Dodaj do karty</h3>
          <button>Członkowie</button>
          <button>Lista zadań</button>
          <button>Załącznik</button>
        </div>
      </div>
      <div>
        <h2>Aktywność</h2>
        <form action="submit">
        </form>
      </div>
    </div>
  );
};

export default TaskItem;
