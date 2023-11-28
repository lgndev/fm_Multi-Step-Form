import "./App.css";
import { css } from "@emotion/react";

const App = () => {
  return (
    <>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
        `}
      >
        form
      </div>
    </>
  );
};

export default App;
