import React from 'react';
import css from './Loader.module.css';

function Loader() {
  //   const wrapper = params => {
  //     return (
  //       <div class="wrapper">
  //         <div class="background"></div>
  //         <div class="foreground"></div>
  //       </div>
  //     );
  //   };
  //   return (
  //     <div className={css.spinnerContainer}>
  //       <div className={css.spinner}>
  //         <div className={css.spinner}>
  //           <div className={css.spinner}>
  //             <div className={css.spinner}>
  //               <div className={css.spinner}>
  //                 <div className={css.spinner}></div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  // var 2
  //   return (
  //     <div className={css.cssloadContainer}>
  //       <ul className={css.cssloadFlexContainer}>
  //         <li>
  //           <span className={`${css.cssloadLoading} ${css.cssloadOne}`}></span>
  //           <span className={`${css.cssloadLoading} ${css.cssloadTwo}`}></span>
  //           <span className={css.cssloadLoadingCenter}></span>
  //         </li>
  //       </ul>
  //     </div>
  //   );
  // var 3
  return <div className={css.loader}></div>;
}

export default Loader;
