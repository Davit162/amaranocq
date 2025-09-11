import "../components_css/Main.css";
import Qartez from "./Qartez";
import Info from "./Info";
import Nkar from "./Nkar";

export default function Main() {
  return (
    <div>
      <div className="newDiv">
        <div>
        <Info />
        </div>
        <div className="w-200px"> 
        <Qartez />
          <Nkar />
        </div>
        
      </div>
    </div>
  );
}
