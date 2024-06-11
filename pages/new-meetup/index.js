import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import { useRouter } from "next/router";
const NewMeetUp =()=>{
    const router = useRouter();
    const addingMeetup =async(meetUpdata)=>{
        const response = await fetch("/api/new-meetup",{
            method:"POST",
            body:JSON.stringify(meetUpdata),
            headers:{
                "Content-Type":"application/json",
            }
        });
        const data = await response.json();
        console.log(data);

        router.push("/");

    }
    return <NewMeetupForm onAddMeetup ={addingMeetup}/>;
};
export default NewMeetUp;