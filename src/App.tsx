import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useTitle } from "./hooks/useTitle";

function App() {
  useAuth();
  useTitle();

  return <Outlet />;
}

export default App;
