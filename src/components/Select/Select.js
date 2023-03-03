import React from "react";
import Definition from "../Definition/Definition";
import Example from '../Example/Example'
import Synonym from "../Synonym/Synonym";
import Antonyms from '../Antonyms/Antonyms'
  
const Select = ({ all, main, audio }) => {
  return (
    <>
      <div className="p-4 bg-gray-700">
        <div className="flex-row dark-theme dark:text-white">
          <div className="col-12 text-center text-2xl font-bold text-decoration-underline">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="color m-4 text-center col-10"
              src={audio}
            ></audio>
          ) : (
            <div className="text-green-600  text-center">Audio unavailable</div>
          )}
          <div className="col-12 text-start my-3 font-extrabold">
            meaning & definitions :
          </div>
          <div>
            <ol>
              <Definition all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 font-extrabold">
            examples :
          </div>
          <div>
            <ol>
              <Example all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 font-extrabold">
            synonyms :
          </div>
          <div>
            <ol className="col-12 li">
              <Synonym all={all} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 font-extrabold">
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