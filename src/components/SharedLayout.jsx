import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { Container } from "./Container/Container";

export const SharedLayout = () => {
  return (
    <>
    <AppBar />
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
// fallback={}