import "./App.css";
import Badge from "./components/atoms/Badge";
function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px", padding: "20px" }}>
        <Badge variant="hot">Hot</Badge>
        <Badge variant="sale">Sale</Badge>
        <Badge variant="new">New</Badge>
        <Badge variant="discount">-14%</Badge>
      </div>
    </>
  );
}

export default App;
