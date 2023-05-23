import React, { useEffect } from 'react';
import AppRoutes from "./Routes"

function App() {
  useEffect(() => {
    console.log("execute app")
    localStorage.clear()
  },[])

  return (
    <div>
      <AppRoutes/>
    </div>
    )}
      
export default App;

