import React, { ChangeEvent, FormEvent, useState } from 'react';
import useAddTodo from '../hooks/useAddTodo';

function TodoInsert() {
  const [value, setValue] = useState('');
  const addTodo = useAddTodo();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="할 일을 입력하세요"
        onChange={onChange}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoInsert;
