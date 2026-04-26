import React from "react";
import AdminNavBar from "../../../Components/adminComponents/AdminNavBar";

function Layout({ children }) {
  return (
    <>
      <AdminNavBar />
      <div className="w-full mainBg">{children}</div>
    </>
  );
}

export default Layout;
