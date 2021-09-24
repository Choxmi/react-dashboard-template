import React, { useContext } from "react";
import GlobalContext from "../../global";
import Switch from "react-switch";

const Settings = () => {
    const { theme, toggleTheme, primary_text_color, text, locale } = useContext(GlobalContext);

    return <div>
        <h1 className={primary_text_color}>{text.title[locale]}</h1>
        <Switch onChange={toggleTheme} checked={theme}/>
    </div>
}

export default Settings;