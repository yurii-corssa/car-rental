import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header></header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      ;
    </>
  );
};

export default SharedLayout;
