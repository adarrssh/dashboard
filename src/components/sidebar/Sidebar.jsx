import "./sidebar.css"
import{LineStyle,Timeline, TrendingUp} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarItem"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarItem"/>
                        Analytics
                        </li> <li className="sidebarListItem">
                        <TrendingUp className="sidebarItem"/>
                        Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarItem"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarItem"/>
                        Analytics
                        </li> <li className="sidebarListItem">
                        <TrendingUp className="sidebarItem"/>
                        Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarItem"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarItem"/>
                        Analytics
                        </li> <li className="sidebarListItem">
                        <TrendingUp className="sidebarItem"/>
                        Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarItem"/>
                        Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarItem"/>
                        Analytics
                        </li> <li className="sidebarListItem">
                        <TrendingUp className="sidebarItem"/>
                        Sales
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
