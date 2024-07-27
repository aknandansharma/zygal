import Home from "./components/Home";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
    return (
        <div className='min-h-screen p-4'>
            <Home />
            <div className='my-8'>
                <Login />
            </div>
            <Main />
        </div>
    );
}

export default App;
