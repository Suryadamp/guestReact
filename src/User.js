import React from 'react';

function User({users}) {

    console.log(users)
  return <div> 
 {users.map( (data) => {
     return <div>
        <h1>{data?.id}</h1>
        <h1>{data?.name}</h1>
        <h1>{data?.email}</h1>

        <button>Edit</button>
        <button>Delete</button>
         </div>
 })}


  </div>
}

export default User;
