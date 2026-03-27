import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
// import Login from "./pages/Login";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("./pages/Login"));

function App(){
  return (
    <Router>
      <AppBar/>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        </Suspense>
      </main>
    </Router>
  )
}

export default App;