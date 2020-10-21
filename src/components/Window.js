import React, { useState } from "react";
import { Maximize2, X, Minus } from "react-feather";

export default function Terminal({
  children,
  style = {},
  title = "",
  center = false,
  noHover = false,
}) {
  // const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // function makeFullscreen() {
  //   setIsFullscreen(!isFullscreen);
  // }

  // function hideFullScreen() {
  //   setIsFullscreen(false);
  // }
  // const fs = isFullscreen ? "fullscreen" : "";

  function showIcon() {
    setIsVisible(true);
  }

  function hideIcon() {
    setIsVisible(false);
  }
  return (
    <div className={`app-chrome ${noHover ? "no-hover" : ""}`} style={style}>
      <div className={`flex flex-row items-center justify-between app-bar pa2`}>
        <div
          className={`flex flex-row items-center`}
          onMouseEnter={showIcon}
          onMouseMove={showIcon}
          onMouseLeave={hideIcon}
          onMouseOut={hideIcon}
        >
          <div className="traffic-light red flex justify-center items-center">
            <X color={isVisible ? "#222" : "#00000000"} size={10} />
          </div>
          <div className="traffic-light yellow flex justify-center items-center">
            <Minus color={isVisible ? "#222" : "#00000000"} size={10} />
          </div>
          <div className="traffic-light green flex justify-center items-center">
            <Maximize2 color={isVisible ? "#222" : "#00000000"} size={10} />
          </div>
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
