import { useRouter } from "next/router";

const Developer =()=>{
    const router = useRouter();
    const devId = router.query.devId;
     const details = [
       { id: 1, name: "Yash", role: "Senior Developer" },

       { id: 2, name: "Vaibhav", role: "Backend Developer" },

       { id: 3, name: "Suresh", role: "Frontend Developer" },
     ];
     const filterData = details.filter((dev)=> dev.id == devId)
    
    return(
        <>
        {filterData.map((dev)=> {
            return(<div key={dev.id}>
                <h1>{dev.name}</h1>
                <h3>{dev.role}</h3>
                </div>
            )
        })}
        </>
    )
};
export default Developer;