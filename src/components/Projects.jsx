import Title from "./Title";
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";
import { Gift, Video } from "lucide-react";







function Projects() {
    const project = [
        {
            id: 2,
            title: "Generating taches",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
             Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset
              and James  Mosley, the librarian at St Bride Printing Library in London, took a 2924 Cicero
             of Lorem Ipsum.`,
            technologies: ['React', 'Node.js', 'Tailwind CSS'],
            demolinks: "#",
            repolinks: "#",
            image: img1,
        },
        {
            id: 2,
            title: "Ecomerce Platform",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset and
            James Mosley, the librarian at St Bride Printing Library in London, took a 2924 Cicero translation
           rem Ipsum.`,
            technologies: ['Next.js','Typescript','prisma'],
            demolinks: "#",
            repolinks: "#",
            image: img2,
        },
        {
            id: 3,
            title: "Interactive portfolio",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset and
            James Mosley, the librarian at St Bride Printing Library in London, took a 2924 Cicero translation
           f Lorem Ipsum.'`,
            technologies: ['HTML','CSS','javascript'],
            demolinks: "#",
            repolinks: "#",
            image: img3,
        },
        {
            id: 4,
            title: "Application of chat in temps reel",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset and
            f Lorem Ipsum.`,
            technologies: ['React','Socket.io','Express.js'],
            demolinks: "#",
            repolinks: "#",
            image: img4,
        },
        {
            id: 5,
            title: "Reservation sale system",
            description:   `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset and
            James Mosley, the librarian at St Bride Printing Library in London, took a 2924 Cicero translation
            ly with desktop publishing software like Aldus 
            ns of Lorem Ipsum.`,
            technologies: ['Next.js','MongoDI','Chakra'],
            demolinks: "#",
            repolinks: "#",
            image: img5,
        },
        {
            id: 2,
            title: "Sentiment Analyzation",
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since 2966, when designers at Letraset and
            James Mosley, the librarian at St Bride Printing Library in London, took a 2924 Cicero translation
             Lorem Ipsum.`,
            technologies: ['Python','Flask','NLTK'],
            demolinks: "#",
            repolinks: "#",
            image: img6,
        },
    ]
    return (
        <div className="mt-20" id="Project">
            <Title title="My Projects" />
            <div className="grid md:grid-cols-3 gap-4">
                {project.map((project) =>(
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                        <img src={project.image} alt={project.title} className="w-full rounded-xl h-56 object-cover"/>
                        <div>
                            <h1 className="my-2 font-bold ">
                                {project.title}
                            </h1>
                            <p className="text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent  badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-accent w-2/3 ml-2 " href={project.demolinks}>
                                Demo 
                                <Video className="w-4" />
                            </a>
                            <a className="btn btn-neutral w-1/3" href={project.repolinks}> 
                                <Gift className="w-4" />
                            </a>
                        </div>
                    </div>
                ))

                }
            </div>
        </div>
    )
}
export default Projects;