import React, { useContext } from 'react';
import { LanguageContext, UserContext } from '../App';

const ComponentF = () => {
  const user = useContext(UserContext);
  const langage = useContext(LanguageContext);

  return (
    <div>
      <div>
        {user.name}: {langage}
      </div>
      {/* //   <UserContext.Consumer>
    //     {(user) => {
    //       return (
    //         <LanguageContext.Consumer>
    //           {(langage) => {
    //             return (
    //               <div>
    //                 {user.name}: {langage}
    //               </div>
    //             );
    //           }}
    //         </LanguageContext.Consumer>
    //       );
    //     }}
    //   </UserContext.Consumer> */}
    </div>
  );
};

export default ComponentF;
