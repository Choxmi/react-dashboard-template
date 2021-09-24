import React, { useState } from 'react';
import { Route,Switch,BrowserRouter } from "react-router-dom";
import GlobalContext from './global';
import ScreeningRecordInput from './routes/screeningRecordInput';
import Translations from "./translations.json";

function App() {
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
  return (
    <GlobalContext.Provider value={global}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <ScreeningRecordInput/>
                </Route>
                <Route path="*">
                    <ScreeningRecordInput/>
                </Route>
            </Switch>
        </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;