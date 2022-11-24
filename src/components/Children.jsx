import React from "react";

export default function Children(params) {



    return (
        <>
                <div className="kiddo" style={{margin:"2px", textAlign:"center", border:"2px solid blue"}}>
                    <h3>{params.childName}</h3>
                    <h4>{params.childAge}</h4>
                </div>
            
        </>
    );
}
