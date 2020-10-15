import React from "react";
import Terminal from "./components/Terminal";

function App() {
  const welcomeMessages = [
    "Hi there! My name is Dan.",
    "I'm a fullstack web developer that loves React.js",
    "I care too much about cross-platform applications and building a decentralized future",
    "but for now I'm just obsessed with Javascript.",
    "I've built software for a parking company,",
    "a gas station chain, a pharmaceutical technology company,",
    "my university, private individuals",
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

  return (
    <div className="App">
      <Terminal messages={welcomeMessages} />
    </div>
  );
}

export default App;
