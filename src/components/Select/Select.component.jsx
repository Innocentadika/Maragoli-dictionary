import React from "react";
import Definition from "../Definition/Definition.component";
import Example from '../Example/Example'
import Synonym from "../Synonym/Synonym.component";
import Antonyms from '../Antonyms/Antonyms.component'
  
const Select = ({ all, main, audio }) => {
  return (
    <>
      <div className="p-4 bg-gray-700">
        <div className="flex-row dark-theme">
          <div className="col-12 text-center text-capitalize fs-1 font-bold text-decoration-underline">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          ) : (
            <div className="color fs-3 text-center">Audio not found</div>
          )}
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            examples :
          </div>
          <div>
            <ol>
              <Example all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            synonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Synonym all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            antonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Antonyms all={all} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
  
export default Select;