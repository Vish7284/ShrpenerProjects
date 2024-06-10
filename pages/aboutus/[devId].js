import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Developer = () => {
  const router = useRouter();
  const { devId } = router.query;

  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    if (devId) {
      const details = [
        { id: 1, name: "Yash", role: "Senior Developer" },
        { id: 2, name: "Vaibhav", role: "Backend Developer" },
        { id: 3, name: "Suresh", role: "Frontend Developer" },
      ];
      const filterData = details.filter((dev) => dev.id == devId);
      setDeveloper(filterData[0]);
    }
  }, [devId]);

  if (!devId) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {developer ? (
        <div key={developer.id}>
          <h1>{developer.name}</h1>
          <h3>{developer.role}</h3>
        </div>
      ) : (
        <p>Developer doesn't exist</p>
      )}
    </>
  );
};

export default Developer;
