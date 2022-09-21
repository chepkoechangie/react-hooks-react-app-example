import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>{format(new Date(), "MMMM do yyyy, h:mm:ss a")}</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
  );
}

export default App;

</div>
);
}
function About() {
return (
  <div id="about">
    <h2>About</h2>
  </div>
);
}

{/* write an <About> component here */}

{
/* write an <About> component here */
}

function App() {
return (
  <div>
    <NavBar />
    {/* add the <Home> component here */}
    {/* add your <About> component here */}
    <Home />
    <About />
  </div>
);
}









