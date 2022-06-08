import React from 'react'
import './topbar.css'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">lammadev</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                <NotificationsNone/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                <Language/>
                <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                <Settings/>
                <span className="topIconBadge">2</span>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
