import "./App.css";
import { useState } from "react";
import { chessBoard as ChessBoard } from "./components/chessboard.tsx";

type Page = "home" | "puzzles";

function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <main className="app-shell">
      <nav className="app-nav" aria-label="Primary">
        <button
          type="button"
          className={page === "home" ? "is-active" : ""}
          onClick={() => setPage("home")}
          aria-current={page === "home" ? "page" : undefined}
        >
          Home
        </button>
        <button
          type="button"
          className={page === "puzzles" ? "is-active" : ""}
          onClick={() => setPage("puzzles")}
          aria-current={page === "puzzles" ? "page" : undefined}
        >
          About
        </button>
      </nav>

      {page === "home" ? (
        <section className="page">
          <h1>Play Chess over the board</h1>
          <ChessBoard/>
        </section>
      ) : (
        <section className="page">
          <h1>About</h1>
        </section>
      )}
    </main>
  );
}

export default App;
