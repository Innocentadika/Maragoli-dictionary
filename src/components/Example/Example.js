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
                  <li className="text-sm text-start p-1">
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