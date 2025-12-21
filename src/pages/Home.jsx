// import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Collection from "../components/Collection"
import Trending from "../components/Trending"
// import ProjectModel from "../components/ProjectModel"
import Footer from "../components/Footer";

const Home = () => {
  // const [collections, setCollections] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  // const [query, setQuery] = useState("");
  // const [city, setCity] = useState("All");
  // const [selectedProject, setSelectedProject] = useState(null);


  const ProjectData = [
    {
      id: 1,
      city: "noida",
      title: "Noida Luxury Heights",
      price: "₹75 Lac",
      image: "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      city: "noida",
      title: "Elite Noida Residency",
      price: "₹92 Lac",
      image: "https://media.istockphoto.com/id/838476004/photo/silhouette-of-engineer-and-construction-team-working-safely-work-load-concrete-on-scaffolding.webp?a=1&b=1&s=612x612&w=0&k=20&c=xXLKeqSFDdox0mTueiK01FcN-GEQmycwYpIYhis0nBg=",
    },
    {
      id: 3,
      city: "faridabad",
      title: "Faridabad Smart Living",
      price: "₹65 Lac",
      image: "https://media.istockphoto.com/id/493107912/photo/dubai-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=u7yIrxjEzozjt-ULCVvjIWX7c-eR5d1ghQubLBxccYk=",
    },
    {
      id: 4,
      city: "delhi",
      title: "Delhi Urban Homes",
      price: "₹1.2 Cr",
      image: "https://media.istockphoto.com/id/1203504375/photo/construction-workers-in-india-standing-on-a-rebar-reinforcing-bar-platform-making-a-pillar.webp?a=1&b=1&s=612x612&w=0&k=20&c=0xoRIrbjbpgNJMC_IeeW_h1n8cor_viO_7DkEK0ZzHA=",
    },
  ];


  // useEffect(() => {
  //   fetch("/projects.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCollections(data);
  //       setFiltered(data);
  //     });
  // }, []);

  // useEffect(() => {
  //   setFiltered(
  //     city === "All"
  //       ? collections
  //       : collections.filter((i) => i.city === city)
  //   );
  // }, [city, collections]);

  // const handleSearch = () => {
  //   const value = query.toLowerCase();
  //   setFiltered(
  //     collections.filter(
  //       (i) =>
  //         i.title.toLowerCase().includes(value) ||
  //         i.city.toLowerCase().includes(value)
  //     )
  //   );
  // };

  // const trending = Collection.filter((i) => i.trending);

  return (
    <>
      <Navbar />
      <Hero />
      <Collection data={ProjectData} />





      <Trending data={ProjectData} />

      <Footer />
      {/* <ProjectModel
        project={selectedProject}
        close={() => setSelectedProject(null)}
      /> */}
    </>
  );
};

export default Home;
