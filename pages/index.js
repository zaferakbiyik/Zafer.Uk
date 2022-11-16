import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";

import ProjectCard from "../components/ProjectCard";
import ArrowLeftIcon from "../components/icons/ArrowLeft";

import GithubIcon from "../components/icons/Github.js";
import TwitterIcon from "../components/icons/Twitter.js";
import LinkedinIcon from "../components/icons/Linkedin.js";
import { getAllProjects } from "../functions/getAllProjects";
import { getAllProjectss } from "../functions/getAllProjectss";
import { zafer } from "../functions/zafer";
const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Web Developer",
          2000,
          "Data Science",
          2000,
          "Moldova",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);
export default function Home({ projects, blogs, zaferr }) {
  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      {/* <motion.img
        src="/images/ball-1.svg"
        alt="ball-1"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <motion.img
        src="/images/ball-2.svg"
        alt="ball-2"
        className="hidden md:block h-auto absolute bottom-10 right-10 z-[1]"
        whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 50 }}
      /> */}
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-0">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Zafer Akbiyik
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/zaferakbiyik"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://twitter.com/zaferiwa"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <TwitterIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/zaferakbiyik/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          {/* Code Area */}
          <article className="flex justify-center prose dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  {/* <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span>  🎈🎈
                  </p> */}

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C5603AQHW4W7u_2S6QA/profile-displayphoto-shrink_800_800/0/1630572273378?e=2147483647&v=beta&t=UWNQMibVMJzOBt0xdh6EcqMMiZ7MVlJVQJyK2sRDp5o"
                      alt="Me"
                      className="w-20 h-30 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-pink-300"> {">"} </span> const
                        skills
                        {/* <span className="font-bold text-pink-300">2</span> */}=
                        ["Html", "Css", "JS", "Wordpress"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    {/* <Link href="/projects">
                      <a className="transition duration-300">Projects</a>
                    </Link> */}

                    {/* <a
                      href=""
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a> */}
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
        <div className="flex justify-center">
          <h1 className="text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-2xl md:mt-3 dark:text-white">
            Projects</h1></div>
        <section className="h-full max-w-5xl pt-4 mx-auto mb-8 md:pt-8">

          {/* Projects.. */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <h1 className="text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-2xl md:mt-3 dark:text-white">
            Blogs</h1></div>
        <section className="h-full max-w-5xl pt-4 mx-auto mb-8 md:pt-8">

          {/* Blogs.. */}


          <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            {blogs.map((project) => (
              <ProjectCard key={project.id} project={project} />

            ))
            }

          </div>
        </section>

      </main>
    </Layout>
  );
}


export const getStaticProps = async () => {
  const projects = await getAllProjects();
  const blogs = await getAllProjectss();
  const zaferr = await zafer();
  return {
    props: {
      projects,
      blogs,
      zaferr,
    },
  };
};
