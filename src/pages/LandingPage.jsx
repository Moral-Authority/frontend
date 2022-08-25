import CreateUser from '../components/CreateUser';
import GetUsers from '../components/GetUsers';

const LandingPage = () => {
  return (
    <div style={{ marginTop: 100 }}>
      <CreateUser />
      <h2>List of Users</h2>
      <GetUsers />
    </div>
  );
};

export default LandingPage;
