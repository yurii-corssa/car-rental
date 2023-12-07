import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={null} />
        <Route path="/catalog" element={null} />
        <Route path="/favorites" element={null} />
      </Route>
    </Routes>
  );
};
