import React from "react";
  
const Synonym = ({ all }) => {
  return (
    <>
      {all.map((Val) => {
        return Val.meanings.map((Means) => {
          return Means.definitions.map((Def) => {
            return Def.synonyms.map((Syn) => {
              return (
                <>
                  <li className="text-sm text-start mx-4 my-2">
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
  
export default Synonym;