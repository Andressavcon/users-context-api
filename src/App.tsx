import { InputUser } from './components/InputUser/InputUser';
import { ListUsers } from './components/ListUsers/ListUsers';
import { UserProvider } from './hook/useNames';

export const App = () => {
  return (
    <UserProvider>
      <div className="container">
        <h2 className="title">Users Context API</h2>
        <InputUser />
        <ListUsers />
      </div>
    </UserProvider>
  );
};
