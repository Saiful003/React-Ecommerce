import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}

export default Layout;
