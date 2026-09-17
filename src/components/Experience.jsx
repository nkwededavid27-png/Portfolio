import Title from "./Title";

import imgCSS from "../assets/techno/css.png"
import imgREACT from "../assets/techno/react.png"
import imgHTML from "../assets/techno/html.png"
import imgNEXT from "../assets/techno/next-js.webp"
import imgNODE from "../assets/techno/node-js.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgPRISMA from "../assets/techno/prisma.webp"
import imgJS from "../assets/techno/js.png"

import google from "../assets/companies/google.png"
import meta from "../assets/companies/meta.webp"
import amazon from "../assets/companies/amazon.png"

function Experience(){
    const Skills =[
        {id: 1, name:"HTML", image: imgHTML},
        {id: 2, name:"CSS", image: imgCSS},
        {id: 3, name:"Javascript", image: imgJS},
        {id: 4, name:"React", image: imgREACT},
        {id: 5, name:"Node.js", image: imgNODE},
        {id: 6, name:"Tailwind CSS", image: imgTAILWIND},
        {id: 7, name:"TYpscript", image: imgTYPE},
        {id: 8, name:"Next.js", image: imgNEXT},
        {id: 9, name:"Prisma", image: imgPRISMA},
    ]

    const experience = [
        {
            id: 1,
            role: "software Engineer",
            company: "Google",
            period: "sep 2022 - present",
            description: [
                "Development of new functionalities for Google Maps.",
                "Optimisation of Application Performance.",
            ],
            image:google,
        },
        {
            id: 2,
            role: "Fullstack Developer",
            company: "Meta",
            period: "jan 2021 - August 2022",
            description: [
                "Creation of an internal collaboration platform for teams.",
                "Implementation of a scalable and optimized architecture.",
            ],
            image:meta,
        },
        {
            id: 3,
            role: "Frontend Developer",
            company: "Amazon",
            period: "May 2019 - Dec 2020",
            description: [
                "Development of user interface for Amazon Web Services.",
                "Implementation of unitary tests at E2E.",
            ],
            image:amazon,
        },

    ]
    return(
        <div id="Experience">
           <Title title="Experience" />
           <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {Skills.map((skill) =>(
                        <div key={skill.id} className="flex justify-center items-center flex-col">

                            <div className="w-24 h-24 p-2 roounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}  className="object-contain rounded-full h-full w-full"/>
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experience.map((experience) =>(
                        <div
                        key={experience.id}
                        className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img src={experience.image} 
                                alt={experience.company} 
                                className="object-cover h-10 w-10"
                                />
                                <div className="ml-4 ">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role} , {experience.company}
                                    </h1>
                                    <span className="text-sm">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) =>
                                (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
           </div>
        </div>
    )
}
export default Experience;