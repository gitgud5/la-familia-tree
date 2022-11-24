import React from "react";
import Children from "./Children";

const leStyle = {
  flexDirection: "column",
  border: "2px solid black",
  padding: "3px",
};


const childContainerStyle = { border: "2px solid black", flexDirection: "row", display: "flex" };

export default function Parents(params) {
  let parents = params.parents;

  return (
    <>
      {parents.map((item) => {
        return (
          <div className="parents" style={leStyle}>
            <h2>{item.mother}</h2>
            <h2>{item.father}</h2>
            <div
              className="childContainer"
              style={childContainerStyle}
            >
              {item.childs.map((itemC) => {
                console.log(itemC);
                return (
                  <>
                    <Children childName={itemC.name} childAge={itemC.age} />
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
