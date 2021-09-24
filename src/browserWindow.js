import { useContext } from "react";
import Header from "./components/header/header";
import Settings from "./components/settings/settings";
import Sidebar from "./components/sidebar/sidebar";
import GlobalContext from "./global";

const BrowserWindow = (props) => {

    const { expanded } = useContext(GlobalContext);

    return <div className={expanded? "app expanded" : "app"}>
        <Header/>
        <Sidebar/>
        <div className={"app-body"}>
            {props.children}
        </div>
        <Settings/>
    </div>
}

export default BrowserWindow;