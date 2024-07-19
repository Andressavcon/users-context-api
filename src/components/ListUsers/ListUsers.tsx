import { useUser } from '../../hook/useNames';
import styles from './ListUsers.module.css';

export const ListUsers = () => {
  const { users, setUsers } = useUser();

  function handleDeleteUser(index: number) {
    const newList = users.filter((_, i) => i !== index);
    setUsers(newList);
  }

  return (
    <div>
      <h3 className="title2">ListUsers</h3>
      <ul className={styles.card}>
        {users.map((user, index) => (
          <li className={styles.cardUser} key={index}>
            {user}
            <div className={styles.icons}>
              <button onClick={() => handleDeleteUser(index)}>
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
