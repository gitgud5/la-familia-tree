import React from "react";

import { data } from "./family_data";
import Parents from "./Parents";

const stale = {
    display: "flex",
    justifyContent: "space-around",
    border: "2px solid black",
    margin: "20px 0px",
};

const parentsContainer = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
}

console.log(data.parents)

export default function Family_tree() {
    return (
        <>
            <div className="grandParents" style={stale}>
                <div className="grandPA">
                    <h1>I am grandFather</h1>
                </div>
                <div className="grandMA">
                    <h1>I am GrandMother</h1>
                </div>
            </div>
            <div
                className="parentsContainer"
                style={parentsContainer}
            >
                <Parents parents={data.parents} />
            </div>
        </>
    );
}
