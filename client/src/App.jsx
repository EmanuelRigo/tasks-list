import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";

import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>

            <Route element={<ProtectedRoute></ProtectedRoute>}>
              <Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
              <Route
                path="/add-task"
                element={<TaskFormPage></TaskFormPage>}
              ></Route>
              <Route
                path="/task/:id"
                element={<TaskFormPage></TaskFormPage>}
              ></Route>
              <Route
                path="/profile"
                element={<ProfilePage></ProfilePage>}
              ></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
};

export default App;
