import React from "react";

export default function Children(params) {



    return (
        <>
            <div className="childContainer" style={{ border: "2px solid black" }}>
                <div className="kiddo">
                    <h3>{params.childName}</h3>
                    <h4>{params.childAge}</h4>
                </div>
            </div>
        </>
    );
}
