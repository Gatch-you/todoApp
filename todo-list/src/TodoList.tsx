//ここにコンポーネントを作成していく。
import React from 'react';
import Todo from './Todo';

interface Todo {
    todos: Todo[];
};

const TodoList: React.FC = ({todos}) => {
    //↑Appから渡されたprops。todosはpropsの名前
    return todos.map((todo) => <Todo todo = {todo} />);
    //.mapはtodosの中にある配列の要素を一つ一つ取り出す関数である。
};

export default TodoList;