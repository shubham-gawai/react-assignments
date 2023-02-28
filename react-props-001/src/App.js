import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <div className="App">
      <div className="row-1">
        <Card code="#FF6663" para="Pink" bgcolor="#FF6663" />
        <Card code="#333333" para="GRAY" bgcolor="#333333" />
        <Card code="#000000" para="BLACK" bgcolor="#000000" />
        <Card code="#38BB14" para="GREEN" bgcolor="#38BB14" />
        <Card code="##C90B0B" para="RED" bgcolor="#C90B0B" />
      </div>

      <div className="row-2">
        <Card code="#FF8000" para="ORANGE" bgcolor="#FF8000" />
        <Card code="#FFF500" para="YELLOW" bgcolor="#FFF500" />
        <Card code="#CCCCCC" para=" LIGHT GRAY" bgcolor="#CCCCCC" />
        <Card code="#7E41A2" para="PURPLE" bgcolor="#7E41A2" />
        <Card code="#C14911" para="BROWN" bgcolor="#C14911" />
      </div>
    </div>
  );
}

export default App;
