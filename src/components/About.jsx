import Title from "./Title";
import myimg from "../assets/myimg.jpg"
import { TextInitial, CalendarSync, Paintbrush } from "lucide-react"

function About() {

    const aboutSection = [
        {
            id: 1,
            title: "Frontend Developer",
            description: "I am a Frontend Developer with a Good experience",
            icon: <TextInitial className="text-accent scale-150" />
        },
        {
            id: 2,
            title: "Backend Developer",
            description: "I am a Backend Developer with  Good years of experience I baser in backend developmendt for creating APIs.",
            icon: <CalendarSync className="text-accent scale-150" />
        },
        {
            id: 1,
            title: "Specialise in I'UI/UX",
            description: "Creating attractive user interface and functionalities is my priority",
            icon: <Paintbrush className="text-accent scale-150" />
        }
    ]
    return (
        <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
            <Title title="About" />

            <div className="md:h-screen flex justify-center items-center">
                <div className="hidden md:block">
                    <img src={myimg} alt="" className="w-96 h-96 object-cover rounded-xl" />
                </div>

                <div className="md:ml-4 space-y-4">
                    {aboutSection.map((section) => (
                        <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">

                            <div className="mb-2 md:mb-0 ">
                                {section.icon}
                            </div>
                            <div className="md:ml-4 text-center md:text-left">

                                <h2 className="text-xl  font-bold mb-1">
                                    {section.title}
                                </h2>
                                <p className="text-sm">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>

    )
}
export default About;