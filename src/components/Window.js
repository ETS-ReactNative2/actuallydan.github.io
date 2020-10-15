import React from "react";

export default function Terminal({ children, style = {}, title = "" }) {
  return (
    <div className="app-chrome" style={style}>
      <div className={`flex flex-row items-center justify-between app-bar`}>
        <div className={`flex flex-row items-center`}>
          <div className="traffic-light red" />
          <div className="traffic-light yellow" />
          <div className="traffic-light green" />
        </div>
        <div className="theme-blue">{title}</div>
        <div>&nbsp;</div>
      </div>

      {children}
    </div>
  );
}
