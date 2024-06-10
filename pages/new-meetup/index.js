import NewMeetupForm from "../../components/meetups/NewMeetupForm"

const NewMeetUp =()=>{
    const addingMeetup =(meetUpdata)=>{
console.log(meetUpdata);
    }
    return <NewMeetupForm onAddMeetup ={addingMeetup}/>;
};
export default NewMeetUp;