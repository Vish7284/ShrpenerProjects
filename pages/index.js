import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  // const [loadesMeet , setLoadedMeet] = useState([])
  //     useEffect(()=>{
  //         setLoadedMeet(DummyMeetup)
  //     },[])

  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {

//     const req = context.req;
//     const res = context.res;
//   return {
//     props: {
//       meetups: DummyMeetup,
//     },
//   };
// }
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://vishal:4eTKheKtErJmIBQd@cluster0.f8itl6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupCollection = db.collection("meetups");
const meetups = await meetupCollection.find().toArray();

client.close()
  return {
    props: {
      meetups: meetups.map(meet=> ({
        id : meet._id.toString(),
        title:meet.title,
        address:meet.address,
        description:meet.description,
        image:meet.image,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
