import React from "react";
import "./git.css";
export const Tool = () => {
  return (
    <>
      <div className="gtitle"><span>Tools</span></div>
      <div className="divtool">
        <span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3znC2phPtraIt6OG2Ej8QRb515gFyhK8H5yDgg37KcKLTlKGAbclzKOnF_0W7Y5p-DtY&usqp=CAU"
            alt=""
          />
          <h3>POSRMAN</h3>
        </span>
        <span>
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            alt=""
          />
            <h3>VS-CODE</h3>
        </span>
        <span>
          <img
            src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
            alt=""
          />
          <h3>CHAKRA-UI</h3>
        </span>
        <span>
          {" "}
          <img src="https://mui.com/static/logo.png" alt="" />
        <h3>MATERIAL-UI</h3>
        </span>
      </div>
    </>
  );
};
