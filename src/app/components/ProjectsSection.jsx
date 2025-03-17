"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";


const projectsData = [
  {
    id: 24,
    title: "Reliable Personal Loans",
    description: "Online Loan application portal",
    image: assets.rpl.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://reliablepersonalloans.com/",
  },
  {
    id: 14,
    title: "Solar Insure",
    description: "Solar Products Warranty Provider",
    image: assets.solarinsure.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://www.solarinsure.com/",
  },
  {
    id: 15,
    title: "Hybrid Employment",
    description: "Remote work System",
    image: assets.hybridemployment.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://hybridemployment.com/",
  },
  {
    id: 25,
    title: "1st Class Platform",
    description: "Online Real Estate platform",
    image: assets.firstClass.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://1stclassplatform.com/",
  },
  {
    id: 26,
    title: "Monarch Environmental",
    description: "Platform that offer water management, contract management services.",
    image: assets.monarchu.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "http://monarchu.com/",
  },
  {
    id: 27,
    title: "BigWig ERP",
    description: "Online ERP system with CRM and POS.",
    image: assets.bigwig.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://bigwigerp.com/",
  },
  {
    id: 16,
    title: "Katchery",
    description: "File court casees online",
    image: assets.katchery.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://katchery.com/",
  },
  {
    id: 18,
    title: "Seekooh",
    description: "Online learning platform",
    image: assets.seekooh.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "https://seekooh.com/",
  },
  {
    id: 1,
    title: "Student Record Management System",
    description: "University record management system. Students can view their results online.",
    image: assets.srms.src,
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Stock Management System",
    description: "Platform where farmers can sell their wheat as well as cotton at best prices",
    image: assets.stock.src,
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Online Story App",
    description: "Users can read stories online, as well can post stories of their interest.",
    image: assets.story.src,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Online Gaming Website",
    description: "Build for any organization/school/university. Users can schedule different games and share the link with others",
    image: assets.gaming.src,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Academy Management System",
    description: "Online academic management system, where teachers can upload assignments and lectures for students. Students can login their account view all the lecture details",
    image: assets.oams.src,
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Doctors Appointment System",
    description: "An online doctors appointment system, where patients can see list of doctors and book appointments",
    image: assets.doctors.src,
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Online Dental Store",
    description: "An online ecommerece store related to buying and selling medical and dental products",
    image: assets.multiDental.src,
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "http://multidental.pk/",
  },
  {
    id: 8,
    title: "Universal Real Estate",
    description: "Online property management system",
    image: assets.Universal_Real_Estate.src,
    tag: ["All", "PHP"],
    gitUrl: "/",
    previewUrl: "https://universal-realestates.com/",
  },
  {
    id: 9,
    title: "Doobert ASPCA",
    description: "American Society for the Prevention of Cruelty to Animals",
    image: assets.aspca.src,
    tag: ["All", "Laraval"],
    gitUrl: "/",
    previewUrl: "https://www.aspca.org/",
  },
  {
    id: 10,
    title: "Jadid Khata",
    description: "Online POS System",
    image: assets.jadidkhata.src,
    tag: ["All", "Laraval"],
    gitUrl: "/",
    previewUrl: "https://jadidkhata.com/",
  },
  {
    id: 11,
    title: "Ayaan Health Care",
    description: "Online Hospital Management System",
    image: assets.ahc.src,
    tag: ["All", "Laraval"],
    gitUrl: "/",
    previewUrl: "https://www.ayaanhealthcenter.com/",
  },
  {
    id: 12,
    title: "Burger Point",
    description: "Point of Sale System",
    image: assets.BurgerStation.src,
    tag: ["All", "Laraval"],
    gitUrl: "/",
    previewUrl: "http://burgetstation.pk/",
  },
  {
    id: 13,
    title: "Shoab Kanwal Academy",
    description: "Online learning management system",
    image: assets.ska.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "http://shoaibkanwalacademy.com/",
  },
  {
    id: 17,
    title: "Sabzi Express",
    description: "Online Grocery delivery service",
    image: assets.sabziexpress.src,
    tag: ["All", "Laravel"],
    gitUrl: "/",
    previewUrl: "http://sabziexpress.com/",
  },
  {
    id: 19,
    title: "Aptive Fitness App",
    description: "Online Fitness App",
    image: assets.aaptive.src,
    tag: ["All", "Node js"],
    gitUrl: "/",
    previewUrl: "https://aaptiv.com/",
  },
  {
    id: 20,
    title: "Car glow detaling",
    description: "Online car detailing system",
    image: assets.carGlow.src,
    tag: ["All", "Node js"],
    gitUrl: "/",
    previewUrl: "https://carglow.com.pk/",
  },
  {
    id: 21,
    title: "Aam Click",
    description: "Online earning platform, where you can earn money through investment with one click",
    image: assets.AamClick.src,
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "https://aamclick.com/",
  },
  {
    id: 22,
    title: "The Black Academy",
    description: "",
    image: assets.BlackAcademy.src,
    tag: ["All", "WordPress"],
    gitUrl: "/",
    previewUrl: "https://theblackacademy.com/",
  },
  {
    id: 23,
    title: "Laa Fee des Boites",
    description: "",
    image: assets.desboites.src,
    tag: ["All", "WordPress"],
    gitUrl: "/",
    previewUrl: "https://lafeedesboites.fr/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Laravel"
          isSelected={tag === "Laravel"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PHP"
          isSelected={tag === "PHP"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Node js"
          isSelected={tag === "Node js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Python"
          isSelected={tag === "Python"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WordPress"
          isSelected={tag === "WordPress"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;