import React from 'react';
import './App.css';
import Header from "./header/Header";
import AllRoutes from "./routes/AllRoutes";

function App() {
    return (
        <div className="App">
            <Header/>
            <AllRoutes/>
            {/* <Main/>*/}
        </div>
    );
}

export default App;
