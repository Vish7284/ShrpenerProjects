import MeetDetail from "../../components/meetups/MeetDetail";

const MeetDetails = (props) => {
  return (
    <MeetDetail
      image="https://www.crafttrip.in/image/cache/catalog/radha-krishna/radha-krishna-painting-with-peacock-feather-and-krishna-flute-800x534w.jpeg"
      title="The First MeetUp"
      address="Some city near the village"
      description="The last and final meet"
    />
  );
};

export async function getStaticPaths(){
    return {
        fallback :false,
        paths:[
            {params : {meetupId:"m1"}},
            {params : {meetupId:"m2"}},
            {params : {meetupId:"m3"}}
        ]
    }
}
export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
  return {
    props: {
        meetUpData :{
        id:meetupId,
      image:"https://www.crafttrip.in/image/cache/catalog/radha-krishna/radha-krishna-painting-with-peacock-feather-and-krishna-flute-800x534w.jpeg",
      title:"The First MeetUp",
      address:"Some city near the village",
      description:"The last and final meet",
    },
}
  };
}
export default MeetDetails;
