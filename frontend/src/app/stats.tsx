

async function getUsers() {
    const API = process.env.API ?? "http://127.0.0.1:3001";
    const response = await fetch(API + "/users", {
        next:{
            revalidate:10
        }
    });
    const data = await response.json();
    console.log(data);
    return data.length as number;
}

export default async function Stats() {

    const users = await getUsers();

    return <pre> you have {users} users</pre>

}