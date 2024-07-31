import { AuthProvider, useAuth } from "./AuthContext";

const LoginComponent = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const token = "dummy-jwt-token";
    const user = {
      username: "john_doe",
      firstName: "John",
      lastName: "Doe",
      userId: "12345",
    };
    login(token, user);
  };

  return <button onClick={handleLogin}>Login</button>;
};

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const App2 = () => (
  <AuthProvider>
    <LoginComponent />
    <UserProfile />
  </AuthProvider>
);

export default App2;
