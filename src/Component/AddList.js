import React from 'react';

function AddList({ input, onChange, onCreate }) {
  return (
    <div>
      <input
        className="input"
        name="input"
        placeholder="할 일 입력하시오"
        onChange={onChange}
        value={input}
      />
      <button onClick={onCreate}>+</button>
    </div>
  );
}

export default AddList;
