import React from 'react';
import UserInfo from './UserInfo';

const Comment = (props) => {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formateDate(props.date)}
      </div>
    </div>
  );
};

const formateDate = (date) => {
  return date.toLocaleDateString();
};

export default Comment;
//  #1 
//Componente inicial, muy grande dificil de cambia y reutilizar
// const Comment = (props) => {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar" 
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formateDate(props.date)}
//       </div>
//     </div>
//   );
// };


// #2
//Simplificamos el componente Comment generando un componente del avatar.
// const Comment = (props) => {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formateDate(props.date)}
//       </div>
//     </div>
//   );
// };

// #3
// Simplificamos mas el componente Comment genrando como componente a UserInfoconst Comment = (props) => {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formateDate(props.date)}
//       </div>
//     </div>
//   );
// };