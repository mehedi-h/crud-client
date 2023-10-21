import { useLoaderData } from "react-router-dom";


const Update = () => {

    const lodedData = useLoaderData()
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
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