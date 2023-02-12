import React from "react";
  
const Example = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return (
              <>
                {Def.example ? (
                  <li className="text-capitalize fs-5 text-start px-3">
                    {Def.example}
                  </li>
                ) : (
                 ""
                )}
              </>
            );
          });
        });
      })}
    </>
  );
};
  
export default Example;