"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { assets } from "../assets/assets";


const projectsData = [
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
    description: "'Build for any organization/school/university. Users can schedule different games and share the link with others",
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
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
