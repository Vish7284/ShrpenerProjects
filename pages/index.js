import { title } from "process";
import MeetupList from "../components/meetups/MeetupList";

const DummyMeetup = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://i.pinimg.com/originals/7e/76/11/7e7611330ca1c2bc121e14bb594f9a7c.jpg",
    address: "xyz cafe",
    description:"The Last Meet",
  },
  {
    id: "m2",
    title: "second Meetup",
    image:
      "https://www.crafttrip.in/image/cache/catalog/radha-krishna/radha-krishna-painting-with-peacock-feather-and-krishna-flute-800x534w.jpeg",
    address: "xyz && luv cafe",
    description:"The Last Meet",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DummyMeetup} />;
};

export default HomePage;
