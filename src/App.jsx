import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // State of Person
  const [person, setperson] = useState({
    fullName: "Oputu Eguonor",
    bio: "A streamer and a software engineer with 2 years experince",
    imgSrc: "/masco.jpg",
    profession: "Software Developer",
  });
  // set show state
  const [show, setShow] = useState(false);
  // Time since mount state
  const [timeSinceMount, setTimeSinceMount] = useState(0);
  //Toggle show state
  const toggleShow = () => {
    setShow(!show);
  };
  // component life cycle effect for time since mount
  useEffect(() => {
    // An if statement so the effect only takes place when the profile is set to show
    let intervalId;
    if (show) {
      intervalId = setInterval(() => {
        setTimeSinceMount((prevTime) => prevTime + 1);
      }, 1000);
    } // update every 1000 milisecond = 1 sec
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [show]); // Dependency Show state
  return (
    <div className="bg-gray-200 p-2 mx-auto max-w-80 space-y-2 rounded">
      <h1 className="font-bold text-3xl">Personal Profile</h1>
      <button className="px-4 py-2 bg-blue-600 rounded" onClick={toggleShow}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>
      <p>
        Time Since Mount: <strong>{timeSinceMount}</strong> seconds
      </p>
      {/* when show is set the show the profile will return  */}
      {show && (
        <div className="">
          <img className="rounded h-96 w-full" src={person.imgSrc} alt="" />
          <p className="font-bold">NAME: {person.fullName}</p>
          <p>PROFESSION: {person.profession}</p>
          <p>BIO: {person.bio}</p>
        </div>
      )}
    </div>
  );
}

export default App;
