import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Container } from "./Common/Container/Container";
import Loader from "./Common/Loader/Loader";

export const SharedLayout = () => {
  return (
    <>
    <AppBar fallback={<Loader />}/>
      <Suspense >
        <main>
           <Container>
            <Outlet />
            </Container>
        </main>
      </Suspense>
    </>
  );
};
// 
