import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Container } from "./Container/Container";
import Loader from "./Loader/Loader";

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
