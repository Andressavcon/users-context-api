import { ChangeEvent, useState } from 'react';
import { useUser } from '../../hook/useNames';
import styles from './InputUser.module.css';

export const InputUser = () => {
  const { users, setUsers } = useUser();

  const [inputValue, setInputValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function handleAddUser() {
    if (inputValue.trim() !== '') {
      setUsers([...users, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div className={styles.inputContent}>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite o nome do usuário"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddUser} className={styles.button}>
        + Add User
      </button>
    </div>
  );
};
