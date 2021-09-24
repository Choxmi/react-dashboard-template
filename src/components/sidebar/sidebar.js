import { useContext, useState } from "react";
import GlobalContext from "../../global";

const Sidebar = () => {
    const { primary_color_background,expanded } = useContext(GlobalContext);

    const sidebarOptions = [
        { "title": "Reports", "url": "/Reports", "icon": "/assets/icons/archive.png", "child": [
            {"title": "Sub Report", "url": "/Reports",}
        ] },
        { "title": "Reports", "url": "/Reports", "icon": "/assets/icons/archive.png", "child": [
            {"title": "Sub Report", "url": "/Reports",}
        ] },
    ];

    const [sideOptionStates,setSideOptionStates] = useState(Array(sidebarOptions.length).fill(false));

    return <div className={`sidebar-wrapper`}><div className={`sidebar-container ${primary_color_background} ${expanded ? 'expanded' : ''}`}>
        {
            sidebarOptions.map((item,index)=>{
                return <div className={`sidebar-item-container`}><div className={`sidebar-item`} key={index}>
                        <a href={item.url}>
                            <img src={item.icon} alt={item.title}/>
                            <div className={`sidebar-item-text`}>
                                <label>{item.title}</label>
                            </div>
                        </a>
                        {item.child !== null ? <span onClick={()=>{let opt = [...sideOptionStates]; opt[index] = !sideOptionStates[index]; setSideOptionStates(opt)}}>V</span> : null}
                    </div>
                    {
                        sideOptionStates[index] === true ?
                            (sidebarOptions[index].child !== null ? sidebarOptions[index].child.map((sub, pos)=>{
                                return <div><a href={sub.url} key={pos}>
                                    <div className={`sidebar-sub-text`}>
                                        <label>{sub.title}</label>
                                    </div>
                                </a></div>
                            }) : null) : null
                    }
                    </div>
            })
        }
    </div>

    <div className={"sidebar-toggle"}>
            toggle
    </div>
    </div>
}

export default Sidebar;