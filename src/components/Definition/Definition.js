import React from "react";
  
const Definition = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                <li className="text-capitalize fs-5 text-start">
                  {Def.definition}
                </li>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};
  
export default Definition;