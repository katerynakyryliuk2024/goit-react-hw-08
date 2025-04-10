import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}
