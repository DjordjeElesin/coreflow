import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function App() {
  useAuth();

  return <Outlet />;
}

export default App;
