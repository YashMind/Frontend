import HomeFooter from "@/components/Common/footer/footer";
import HomeHeader from "@/components/Common/header/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(89.97deg, #002b58 -37.97%, #3b0459 99.97%), linear-gradient(#1f064a33 0%, #0003 100%)",
      }}
    >
      {" "}
      {/* header */}
      <HomeHeader />
      {children}
      {/* footer */}
      <HomeFooter />
    </div>
  );
};

export default Layout;
