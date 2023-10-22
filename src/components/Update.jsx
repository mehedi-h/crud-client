import { useLoaderData } from "react-router-dom";


const Update = () => {

    const lodedData = useLoaderData()
    // console.log(lodedData._id);
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email}
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${lodedData._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('User info updated successfully.')
            }
        })
    }

    return (
        <div>
            <h2>Updated Information of {lodedData.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={lodedData?.name} />
                <br />
                <input type="email" name="email" defaultValue={lodedData?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>        
        </div>
    );
};

export default Update;