// Example - 1

// import React from 'react'

// const ListRendering = () => {
//   const numbers = [1,2,3,4,5];
//   return (
//     <div>
//       {numbers.map((number) => (
//         <ul key={Math.random()}>
//           <li>{number}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default ListRendering

// Example - 2

// import React from 'react'

// const ListRendering = () => {
//   const userInfo = [
//     {
//       username : "Abinash@12",
//       email : "pat@12gmail.com",
//       location : "Delhi"
//     },
//     {
//       username : "Abinash@13",
//       email : "pat@13gmail.com",
//       location : "Mumbai"
//     },
//     {
//       username : "Abinash@14",
//       email : "pat@14gmail.com",
//       location : "Kolkata"
//     }
//   ]
//   return (
//     <div>
//       {userInfo.map(({username,email,location}) => (
//         <ul key={Math.random()}>
//           <li>{username}</li>
//           <li>{email}</li>
//           <li>{location}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default ListRendering

// Example - 3

import React from 'react'

const ListRendering = ({items}) => {
  return (
    <div>
      {items.map((data,index) => (
        <li key={index}>{data}</li>
      ))}
    </div>
  )
}

export default ListRendering