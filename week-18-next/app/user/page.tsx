import axios from "axios";

export default async function User() {
    const response = await axios.get("");
    const data = response.data
    return <div>
        User Info 
        {data.name}
        {data.email}
    </div>
}