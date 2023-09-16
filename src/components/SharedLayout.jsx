import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <>
    <AppBar />
      <Suspense >
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
// fallback={}