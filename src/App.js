import React from "react";
import Window from "./components/Window";
import Terminal from "./components/Terminal";
import Nav from "./components/Nav";
import { GitHub } from "react-feather";

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
      href: "https://www.athar.es",
      img: "./images/athares-1.png",
      repo: "https://github.com/atharesinc/athares",
      fullName: "Athares",
      description:
        "Athares is a Distributed Democracy Platform where users can form groups with Chat and Governance without a group admin.",
    },
    {
      name: "tadu",
      img: "./images/tadu-2.png",
      fullName: "Tadu",
      repo: "https://github.com/actuallydan/tadu",
      description:
        "Tadu is a task organizer that uses Machine Learning to help you schedule tasks when you're likely to complete them.",
    },
    {
      name: "bradysgolfcarts.com",
      href: "https://bradysgolfcarts.com",
      img: "./images/brady-carts.png",
      fullName: "Scott Brady's Used Golf Carts",
      description:
        "Client work for the owner of a full-service golf cart repair and service company.",
    },
    {
      name: "natureatlas.org",
      href: "https://natureatlas.org/plants/earth/",
      img: "./images/nature-atlas-2.png",
      fullName: "Nature Atlas",
      description:
        "Led by Millersville University's Dr. Chris Hardy, I helped migrate Nature Atlas to AWS and integrate image upload to their bio-statistic research app, as well as integrate a live-poll tracker for observations made in the field.",
    },
    {
      name: "transient-composer",
      href: "https://actuallydan.github.io/transient/",
      repo: "https://actuallydan.github.io/transient/",
      img: "./images/transient-1.png",
      fullName: "Transient Composer",
      description:
        "An experiment with Pizzicato.js and procedurally generated audio, transient-composer uses 4-part voice writing to endlessly play in 4/4 C Major.",
    },
  ];

  return (
    <>
      <Nav />
      <div className="App">
        <Window title={"hello.txt"} center noHover>
          <Terminal messages={welcomeMessages} />
        </Window>

        <div className="w-100 center mt4">
          <section className="flex flex-wrap">
            {projects.map((p) => (
              <div key={p.name} className=" w-100 w-50-ns pa2-ns">
                <div className="pv2">
                  <a href={p.href} className="ph2 ph0-ns pb3 link db">
                    <Window key={p.name} title={p.name}>
                      <img src={p.img} alt={"screenshot of " + p.name} />
                    </Window>
                  </a>

                  {p.href ? (
                    <a href={p.href} className="ph2 ph0-ns pb3 link db">
                      <Window key={p.name} title={p.name}>
                        <img src={p.img} alt={"screenshot of " + p.name} />
                      </Window>
                    </a>
                  ) : (
                    <Window key={p.name} title={p.name}>
                      <img src={p.img} alt={"screenshot of " + p.name} />
                    </Window>
                  )}
                  <div className="flex items-center">
                    {p.repo && (
                      <a
                        className="link hover-white no-underline mr2"
                        href={p.repo}
                        title={p.repo}
                      >
                        <GitHub
                          className={"link near-black hover-white"}
                          size={18}
                        />
                      </a>
                    )}
                    <h3 className="f5 f4-ns near-black">{p.fullName}</h3>
                  </div>
                  <h3 className="f6 f5 fw4 mt1 near-black">{p.description}</h3>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
