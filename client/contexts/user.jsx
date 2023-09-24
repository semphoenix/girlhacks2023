import { createContext, useState, useEffect } from "react";

// Create a new context for managing authorization state
const AuthorizeContext = createContext();

// Component to provide authorization context to child components
const AuthorizeProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
  });

  // Props to be passed down to components
  const passedProps = {
    authState,
    setAuthState,
  };

  // Provide context value to child components
  return (
    <AuthorizeContext.Provider value={passedProps}>
      {children}
    </AuthorizeContext.Provider>
  );
};

// Export the authorization context and provider for usage
export { AuthorizeContext, AuthorizeProvider };
