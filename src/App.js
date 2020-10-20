import React from "react";
import Window from "./components/Window";
import Terminal from "./components/Terminal";
import Nav from "./components/Nav";

function App() {
  const welcomeMessages = [
    "Hi there! My name is Dan.",
    "I'm a fullstack web developer who loves React.js",
    "I care too much about cross-platform applications and building a decentralized future",
    "but for now I'm just obsessed with Javascript.",
    "I've built software for a parking company,",
    "a gas station chain,",
    "a pharmaceutical technology company,",
    "my university,",
    "private individuals,",
    "and now I'm teaching others in my free-time at [Trilogy Education Services](https://www.trilogyed.com/).",
    " ",
    "I'm also on the hunt for a new full-time career move,",
    "feel free to checkout [my portfolio](https://actuallydan.github.io),",
    "or send me an email at dankral01@gmail.com!",
    " ",
    "🔭 I’m currently building [athar.es](https://github.com/atharesinc/athares)",
    "💬 Ask me about React, GraphQL, economics, and completely hypothetical governments",
    // `👯 I’m looking to collaborate on: your next project?`,
    "📫 How to reach me: dankral01@gmail.com",
    "😄 Pronouns: he/him/his",
  ];

  const projects = [
    {
      name: "athar.es",
      href: "https://athar.es",
      img: "./images/athares-1.png",
    },
    {
      name: "tadu.herokuapp.com",
      href: "https://tadu.herokuapp.com",
      img: "./images/tadu-2.png",
    },
    {
      name: "bradysgolfcarts.com",
      href: "https://bradysgolfcarts.com",
      img: "./images/brady-carts.png",
    },
  ];

  return (
    <>
      <Nav />
      <div className="App pt5">
        <Window title={"hello.txt"} center>
          <Terminal messages={welcomeMessages} />
        </Window>

        {/* <div className="w-100 mt4 flex items-center justify-center">
        {projects.map((p) => (
          <Window key={p.name} title={p.name}>
            <img src={p.img} />
          </Window>
        ))}
      </div> */}

        <div className="w-100 center mt4">
          <div className="cf ph2-ns">
            {projects.map((p) => (
              <div key={p.name} className="fl w-100 w-50-m w-third-l pa2-ns">
                <div className="pv2 pv4-ns">
                  <Window key={p.name} title={p.name}>
                    <img src={p.img} alt={"screenshot of " + p.name} />
                  </Window>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
