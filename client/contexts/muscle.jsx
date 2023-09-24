import { createContext, useState, useEffect } from "react";

// Create a new context for managing authorization state
const MuscleContext = createContext();

// Component to provide authorization context to child components
const MuscleProvider = ({ children }) => {
  const [muscle, setMuscle] = useState("");

  // Props to be passed down to components
  const passedProps = {
    muscle,
    setMuscle,
  };

  // Provide context value to child components
  return (
    <MuscleContext.Provider value={passedProps}>
      {children}
    </MuscleContext.Provider>
  );
};

// Export the authorization context and provider for usage
export { MuscleContext, MuscleProvider };
