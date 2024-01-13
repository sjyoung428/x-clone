import React from "react";

interface BeforeLoginLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const BeforLoginLayout = ({ children, modal }: BeforeLoginLayoutProps) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default BeforLoginLayout;
