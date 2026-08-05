import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section id="not-found">
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Back to main page</Link>
    </section>
  );
}

export default NotFound;
