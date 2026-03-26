import { useState } from 'react';

function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div className="page-container">
      <div className="card">
        <h1 className="title">List Manager</h1>
        <p className="description">Manage your items in this simple list container.</p>
        
        <div className="list-container">
          {items.map((item, index) => (
            <div key={index} className="list-item">
              {item}
            </div>
          ))}
        </div>

        <div className="input-group">
          <input
            type="text"
            className="text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new item..."
          />
        </div>

        <div className="actions">
          <button className="btn-primary" onClick={handleAddItem}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
