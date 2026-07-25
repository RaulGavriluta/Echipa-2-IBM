import "./App.css";
import Badge from "./components/atoms/Badge";
import Logo from "./components/atoms/Logo";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
        <Badge variant="hot">Hot</Badge>
        <Badge variant="sale">Sale</Badge>
        <Badge variant="new">New</Badge>
        <Badge variant="discount">-14%</Badge>
      </div>

      <div>
        <Logo src={logo} alt="Nest Mart & Grocery" size="sm" />
      </div>
      <div>
        <Logo src={logo} alt="Nest Mart & Grocery" size="md" />
      </div>
      <div>
        <Logo src={logo} alt="Nest Mart & Grocery" size="lg" />
      </div>
    </>
  );
}

export default App;
