import React, { useState } from 'react';
import DataFetchingComponent from './components/DataFetchingComponent';

import './App.css'; // Якщо потрібно використовувати стилі

function App() {
  const [id, setId] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Асинхронне завантаження даних в React</h1>
        <DataFetchingComponent id={id} />
        <button onClick={() => setId(id + 1)}>Завантажити наступний пост</button>
      </header>
    </div>
  );
}

export default App;
