import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';



const Headercontainer = () => {
    return (
        <div className="headerContainer">
            <ImageThumbnail />
       </div>
    );
};


export default Headercontainer;


// const Input = () => {
//     return (
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   };
  
//   export default Input;