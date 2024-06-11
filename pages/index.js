import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { title } from "process";

const DummyMeetup = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://i.pinimg.com/originals/7e/76/11/7e7611330ca1c2bc121e14bb594f9a7c.jpg",
    address: "xyz cafe",
    description: "The Last Meet",
  },
  {
    id: "m2",
    title: "second Meetup",
    image:
      "https://www.crafttrip.in/image/cache/catalog/radha-krishna/radha-krishna-painting-with-peacock-feather-and-krishna-flute-800x534w.jpeg",
    address: "xyz && luv cafe",
    description: "The Last Meet",
  },
];
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
