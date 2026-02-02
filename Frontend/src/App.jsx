import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDepartments from "./pages/AdminDepartments";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/departments"
          element={<AdminDepartments />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
