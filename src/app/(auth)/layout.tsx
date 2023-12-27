import React from "react";

type ClerkLayoutProps = {
  children: React.ReactNode;
};

const ClerkLayout: React.FC<ClerkLayoutProps> = ({ children }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};
export default ClerkLayout;
