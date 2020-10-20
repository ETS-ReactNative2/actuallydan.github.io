import React from "react";

export default function Terminal({
  children,
  style = {},
  title = "",
  center = false,
}) {
  return (
    <div className="app-chrome" style={style}>
      <div className={`flex flex-row items-center justify-between app-bar pa2`}>
        <div className={`flex flex-row items-center`}>
          <div className="traffic-light red" />
          <div className="traffic-light yellow" />
          <div className="traffic-light green" />
        </div>
        <div className="theme-blue window-title">{title}</div>
        {center && (
          <div className={`flex flex-row items-center vb-hidden`}>
            <div className="traffic-light red" />
            <div className="traffic-light yellow" />
            <div className="traffic-light green" />
          </div>
        )}
      </div>

      {children}
    </div>
  );
}
