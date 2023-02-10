// //このファイルではアプリケーションをTodoListファイル等で作成したコンポーネントを
// <TodoList/>によって呼び出して使用、アプリケーションの土台のような仕様を書いてゆく。

import React from 'react';
import logo from './logo.svg';
import './App.css';
// ↑CSSをインポート
import TodoList from './TodoList';
import { useState } from "react";


function App() {
  const [todos, setTodos] = useState(["todo1", "todo2", "todo3"]);
//useStateは変数を監視、管理するために用いるReactの機能。ある状態を監視し、
//ページを再レンダリングする。引数の()には初期値を設定可能である。この引数はtodosに代入される。
//このtodosはTodoList.tsxの中で管理してゆく。よく復習！

  return (
    // classNameでAppにCSSを当てている
    <div className="App">
      <TodoList todos = {todos} />
      {/* //↑TodoList.tsxからエクスポートしたものを使っている
      //また、todosというprops名でTodoListにpropsを渡してくれという命令もしている。 */}
      <input type = "text"/>
      <button>タスクを追加</button>
      <button>完了タスクの削除</button>
      <div>残りのタスク数: 0</div>
    </div>
    //↑tsxフラグメントと呼ばれる

  );
};

export default App;
