import { ProtectedRoute } from './components/ProtectedRoute';
import GetUsers from './components/GetUsers';
import CreateUser from './components/CreateUser';

export const App = () => {
  return (
    <ProtectedRoute>
      <div>Access granted</div>
      <GetUsers />
      <CreateUser />
    </ProtectedRoute>
  );
};
