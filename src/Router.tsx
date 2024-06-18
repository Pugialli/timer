import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { History } from "./pages/History";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/timer" element={<DefaultLayout />}>
        <Route path="/timer" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
