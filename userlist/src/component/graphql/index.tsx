import axios from "axios"

const url = "http://localhost:5000/graphql"

const GET_USER = `
{
    getUsers {
        id
        name
    }
}` 

export const getUsers = () => {
    return axios(url, { method: "POST", data: { query: GET_USER } })
    // return postData(url, { query: GET_USER })
}

// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(data),
//     });
//     return response.json();
//   }

  