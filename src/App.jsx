import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import AuthProviders from "./context/AuthProviders.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </ThemeProvider>
  );
};

export default App;
