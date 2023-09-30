import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./components/router";


export default function Start(){

    return (
        <div>
            <RouterProvider router={routes} />
        </div>
    )

}
