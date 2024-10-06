"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Question from "@/app/images/Questions.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-10">
      <div className="w-full flex md:flex-row items-center flex-col justify-between gap-5">
        <div className="w-full text-center">
          <motion.h1
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1,
              duration: 2,
              stiffness: 200,
              type: "spring",
            }}
            className="text-6xl text-blue-500 font-bold mb-5"
          >
            Quiz <br /> Application
          </motion.h1>
          <motion.p
            initial={{ x: -800 }}
            transition={{
              delay: 2,
              duration: 2,
              type: "spring",
              stiffness: 200,
            }}
            animate={{ x: 0 }}
            className="text-blue-500 text-lg font-semibold"
          >
            A Dynamic quiz application using Nextjs
          </motion.p>
          <Link href={"https://tech-quiz-app-xi.vercel.app/"}>
            <motion.button
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                delay: 3,
                stiffness: 150,
                type: "spring",
              }}
              whileHover={{ scale: 1.1 }}
              className="bg-blue-500 px-24 mt-10 py-5 rounded-full text-white font-bold"
            >
              START QUIZ
            </motion.button>
          </Link>
        </div>
        <motion.div className="w-full  flex justify-center">
          <Image
            src={Question}
            width={100}
            height={100}
            alt="question"
            className="w-[50%] mt-10 animate-bounce"
          />
        </motion.div>
      </div>
      <div className="relative">
        <motion.p
          className="font-semibold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 3 }}
        >
          A quiz application is a dynamic and interactive tool designed to
          facilitate knowledge assessment across various topics. Built using
          modern web technologies like Next.js, a quiz app allows users to
          engage in a series of questions, receive feedback, and track their
          progress. One of the key advantages of such an application is its
          flexibility to support different question types, including multiple
          choice, true/false, and open-ended questions. The app can be
          customized to meet educational, professional, or entertainment needs,
          making it versatile for users ranging from students to corporate
          trainers. The app typically features user authentication, allowing for
          a personalized experience where users can create accounts, take
          quizzes, and review past performance. It can also include an admin
          panel for quiz creation and management, giving administrators the
          ability to update questions, set time limits, and define scoring
          systems. Modern quiz applications also incorporate real-time analytics
          and feedback mechanisms, providing insights into a user’s strengths
          and weaknesses. Additionally, responsive design ensures accessibility
          across devices, offering a seamless experience on desktops, tablets,
          and smartphones. In essence, a quiz app is a powerful platform that
          merges education with technology to create an engaging learning
          experience.
        </motion.p>
      </div>
    </div>
  );
}
