import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
    { id: 4, text: 'Item 4' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([
        ...items,
        { id: Date.now(), text: inputValue.trim() }
      ]);
      setInputValue('');
    }
  };

  const handleDeleteItem = () => {
    if (selectedId !== null) {
      setItems(items.filter(item => item.id !== selectedId));
      setSelectedId(null);
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
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`list-item ${selectedId === item.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              {item.text}
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
          <button 
            className="btn-secondary" 
            onClick={handleDeleteItem}
            disabled={selectedId === null}
          >
            DELETE
          </button>
          <button className="btn-primary" onClick={handleAddItem}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
