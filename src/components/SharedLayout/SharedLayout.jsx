import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BodyContainer } from "./SharedLayout.styled";
import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <BodyContainer>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </BodyContainer>
  );
};

export default SharedLayout;
