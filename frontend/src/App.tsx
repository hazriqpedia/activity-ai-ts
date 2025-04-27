import Home from "./pages/Home";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <Home />
      </main>

      <footer className="bg-light text-center py-3 mt-auto">
        <small>
          &copy; 2025 Activity AI - <em>Hazriq Ishak</em>
        </small>
      </footer>
    </div>
  );
}

export default App;
