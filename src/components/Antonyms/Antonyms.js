import React from "react";
  
const Antonyms = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.antonyms.map((Syn) => {
              return (
                <>
                  <li className="text-sm text-start p-1 mx-4 my-2">
                    {Syn}
                  </li>
                </>
              );
            });
          });
        });
      })}
    </>
  );
};
  
export default Antonyms;