// CONTEXT
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface UsersContextProps {
  users: string[];
  setUsers: Dispatch<SetStateAction<string[]>>;
}

const UserContext = createContext<UsersContextProps>({} as UsersContextProps);

// PROVIDER
interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<string[]>([]);

  const values = {
    users,
    setUsers,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

// HOOK
export const useUser = () => {
  return useContext(UserContext);
};
