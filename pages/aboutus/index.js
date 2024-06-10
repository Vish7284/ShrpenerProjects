import Link from "next/link";

const AboutUs = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <p>Welocme to About uS</p>
      <ul>
        {details.map((dev)=>{
            return (
              <li key={dev.id}>
               <Link href={`/aboutus/${dev.id}`}> Name : {dev.name}</Link>
              </li>
            );
        })}
      </ul>
    </>
  );
};
export default AboutUs;
