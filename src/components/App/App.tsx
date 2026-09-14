import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";

import { type Votes } from "../../types/votes";

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <div className={css.app}>
      <CafeInfo
        title="Sip Happens Café"
        description="Please rate our service by selecting one of the options below."
      />
    </div>
  );
}

export default App;
