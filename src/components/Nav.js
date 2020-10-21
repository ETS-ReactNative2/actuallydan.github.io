import React, { useEffect, useState, useCallback } from "react";
import { GitHub, Linkedin, Terminal } from "react-feather";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [top, setTop] = useState(0);

  const handleUpdate = useCallback(() => {
    // console.log({ e, top });
    const { scrollY } = window;
    if (top !== scrollY) {
      setScrolled(scrollY > 30);
      setTop(scrollY);
    }
  }, [top]);

  useEffect(() => {
    window.addEventListener("scroll", handleUpdate);

    return () => {
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [handleUpdate]);

  const textColorClass = scrolled ? "white" : "dark-gray";

  const backgroundColorClass = !scrolled ? "" : "bg-dark-gray";

  return (
    <nav
      className={`w-100 fixed flex justify-between items-center ${backgroundColorClass}`}
    >
      <div className="flex justify-between items-center">
        <a
          className="link white-70 hover-white no-underline flex items-center pa3"
          href="https://linkedin.com/in/actuallydan"
        >
          <Terminal className={textColorClass} />
          <title>linkedin.com/in/actuallydan</title>
        </a>

        <a
          className={`link dim ${
            scrolled ? "white" : "near-black"
          } b f6 f5-ns dib mr3`}
          href="https://github.com/actuallydan"
          title="Home"
        >
          Dan Kral
        </a>

        <a
          className={`link dim ${textColorClass} f6 f5-ns dn dib-ns`}
          href="mailto:dankral01@gmail.com"
          title="dankral01@gmail.com"
        >
          Contact
        </a>
      </div>
      <div className="flex justify-between items-center">
        <a
          className="link hover-white no-underline flex items-center pa3"
          href="https://github.com/actuallydan"
          title="actuallydan"
        >
          <GitHub className={textColorClass} />
        </a>
        <a
          className="link hover-white no-underline flex items-center pa3"
          href="https://www.linkedin.com/in/actuallydan/"
          title="linkedin.com/in/actuallydan"
        >
          <Linkedin className={textColorClass} />
        </a>
      </div>
    </nav>
  );
}
