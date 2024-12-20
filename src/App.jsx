import "./App.css";

function App() {
  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <div
          tabIndex={0}
          className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow"
        >
          <div className="card-body">
            <h3 className="card-title">Card title!</h3>
            <p>you can use any element as a dropdown.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
