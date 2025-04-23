import { GiCheckMark, FaCheck } from "react-icons/fa";

function SupervisionPara({ children }) {
  return (
    <div className="flex  ">
      <div className="pt-3 pl-2">
        <FaCheck />
      </div>

      <p className="pl-2 pb-2 ">{children}</p>
    </div>
  );
}

export default SupervisionPara;
