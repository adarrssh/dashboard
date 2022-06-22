import React from 'react'
import "./user.css"

import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@material-ui/icons'

import { Link } from  "react-router-dom";

function User() {
    return (
        <div className='user'>
            <div className="usertitleContainer">
                <h1 className='userTitle'>Edit user</h1>
                <Link to="/newUser">
                <button className="userAddButton">create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" className='userShowImg' />

                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Ann Becker</span>
                            <span className="userShowUserName">software engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span >
                            Account Details
                        </span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck349</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck349</span>
                        </div>

                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck349</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck349</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">annabeck349</span>
                        </div>
                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck' className='userUpdateInput' />
                            </div>

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='annabeck' className='userUpdateInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className='userUpdateImg' src="" alt="" />
                                <label htmlFor="file"><Publish className='userUpdateIcon' /></label>
                                <input type="file" id='file' style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User