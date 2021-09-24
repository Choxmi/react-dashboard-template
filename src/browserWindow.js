import { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import GlobalContext from "./global";
import Translations from "./translations.json";

const BrowserWindow = (props) => {
    const [dark,setDark] = useState(window.localStorage.getItem("theme") === "dark");
    const [locale,setLocale] = useState(window.localStorage.getItem("locale") !== null && window.localStorage.getItem("locale") !== undefined ? window.localStorage.getItem("locale") : 0);
    const toggleTheme = ()=> {
        window.localStorage.setItem("theme",!dark?"dark":"light");
        setDark(!dark);
        window.location.reload();
    };
    const [expanded,setExpanded] = useState(false);
    let global = {
        theme: dark,
        toggleTheme: toggleTheme,
        locale: locale,
        setLocale: setLocale,
        expanded: expanded,
        setExpanded: setExpanded,
        primary_color: dark ? 'primary-dark' : 'primary-light',
        primary_color_background: dark ? 'primary-dark-background' : 'primary-light-background',
        background_color: dark ? 'background-dark' : 'background-light',
        primary_text_color: dark ? 'primary-text-dark' : 'primary-text-light',
        secondary_text_color: dark ? 'secondary-text-dark' : 'secondary-text-light',
        sub_text_color: dark ? 'sub-text-dark' : 'sub-text-light',
        card_color: dark ? 'card-dark' : 'card-light',
        text: Translations
    }
    return <div className={expanded? "app expanded" : "app"}>
        <GlobalContext.Provider value={global}>
            <Header/>
            <Sidebar/>
            <div className={"app-body"}>
                {props.children}
            </div>
        </GlobalContext.Provider>
    </div>
}

export default BrowserWindow;