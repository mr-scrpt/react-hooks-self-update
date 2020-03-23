import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./testAnimation.css";
export const TestAnimation = () => {
  const [list, setList] = useState(["Первый", "Второй", "Третий"]);

  return (
    <div className="container">
      <TransitionGroup className="todo-list" component="ul">
        {list.map(item => (
          <CSSTransition key={item} timeout={1000} classNames="a-item">
            <li className="item">{item}</li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <form
        onSubmit={e => {
          e.preventDefault();
          setList([...list, e.target.item.value]);
          e.target.item.value = "";
        }}
      >
        {/* <input type="text" name="item" />
        <button type="submit">Добавить</button> */}
      </form>

      <ul className="todo-list-2">
        {list.map(item => (
          <CSSTransition
            key={item}
            timeout={1000}
            classNames="a-item-2"
            appear={true}
            in={true}
          >
            <li className="item-2">{item}</li>
          </CSSTransition>
        ))}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault();
          setList([...list, e.target.item2.value]);
          e.target.item2.value = "";
        }}
      >
        <input type="text" name="item2" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};
