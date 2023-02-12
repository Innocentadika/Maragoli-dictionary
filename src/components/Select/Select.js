import React from "react";
import Definition from "../Definition/Definition";
import Example from '../Example/Example'
import Synonym from "../Synonym/Synonym";
import Antonyms from '../Antonyms/Antonyms'
  
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
            <div className="text-green-500 fs-3 text-center">Audio not found</div>
          )}
          <div className="col-12 text-start my-3 text-capitalize fs-4 font-bold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 font-bold">
            examples :
          </div>
          <div>
            <ol>
              <Example all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 font-bold">
            synonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Synonym all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 font-bold">
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