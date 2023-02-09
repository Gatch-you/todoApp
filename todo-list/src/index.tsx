//

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//↓rootの中に<App />コンポーネントをレンダリングしている>
root.render(
  <React.StrictMode>  
  {/* ↑これは直訳で厳格なモードという意味で脆弱性を発見したらエラーを出してくれる。 */}
    <App />
    {/* ↑これはAppコンポーネント　from App.tsx */}
  </React.StrictMode>
);

