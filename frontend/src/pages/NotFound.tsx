import { Link } from "react-router-dom";
import Seo from "../components/atoms/Seo/Seo";

function NotFound() {
  return (
    <section id="not-found">
      <Seo title="404 – Page Not Found" noIndex />
      <h1>404</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Back to main page</Link>
    </section>
  );
}

export default NotFound;
