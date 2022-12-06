import { useContext } from "react";
import { MyContext } from "./context/Context";
import StageOne from "./comps/StageOne";
import StageTwo from "./comps/StageTwo";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./style/app.css";

const App = () => {
  const context = useContext(MyContext);
  return (
    <div
      style={{
        background: "linear-gradient(18deg, red, orange)",
      }}
      className="wrapper"
    >
      <div className="center-wrapper">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title
              style={{
                fontFamily: "Pacifico, cursive",
                color: "#db3eb1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Let's see
            </Card.Title>
            <Card.Text>
              <div className="">
                <div className="">
                  <h1>Who Pays The Bill ?</h1>
                  {context.state.stage === 1 ? <StageOne /> : <StageTwo />}
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default App;
