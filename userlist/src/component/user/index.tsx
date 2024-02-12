import React, { useEffect, useState } from 'react'
import { getUsers } from '../graphql'

export default function User() {
    const [ users, setUsers ] = useState([])
    useEffect(()=> {
        getUsers().then((res: any)=> {
            console.log("Response::", res)
            if(res && res.data.data.getUsers) {
                setUsers(res.data.data.getUsers)
            }
        })
    })
  return (
    <div>
        <ul>
            {
                users.map((data: { name: string }) => <li key={data.name}>{data.name}</li>)
            }
        </ul>
    </div>
  )
}
