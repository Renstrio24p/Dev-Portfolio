import React from "react";
import './Layout.scss'
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout(){

    return (
        <div className="App">
            <Sidebar />
            <div className="Page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Outlet />
                <span className="tags bottom-tags">&lt;/body&gt;</span>
                <br />
                <span className="bottom-tag-html">&lt;/html&gt;</span>
            </div>
        </div>
    )

}