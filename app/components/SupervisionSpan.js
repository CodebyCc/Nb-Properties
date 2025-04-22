import { Children } from "react";

function SupervisionSpan({ children }) {
  return (
    <>
      <span className="text-amber-400">{children} </span> <span> : </span>
    </>
  );
}

export default SupervisionSpan;
