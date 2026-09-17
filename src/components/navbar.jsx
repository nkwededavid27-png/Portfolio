import { Container } from "lucide-react"

function Navbar() {
    return (
        <div className="flex justify-center md:justify-between items-center p-4">
            <a href="#"
                className="flex items-center font-bold text-3xl md:text-xl"
            >
                <Container className="mr-2" />
                KOR<span className="text-accent">DEV</span>
            </a>

            <ul
                className="hidden md:flex space-x-4">
                <li>
                    <a href="#Home" className="btn btn-sm btn-ghost font-bold">
                        Home
                    </a>
                </li>

                <li>
                    <a href="#About" className="btn btn-sm btn-ghost font-bold">
                        About
                    </a>
                </li>

                <li>
                    <a href="#Experience" className="btn btn-sm btn-ghost font-bold">
                        Services
                    </a>
                </li>

                <li>
                    <a href="#Project" className="btn btn-sm btn-ghost font-bold">
                        My project
                    </a>
                </li>

                <li>
                    <a href="#Contact" className="btn btn-sm btn-ghost font-bold">
                        Contact
                    </a>
                </li>

            </ul>
        </div>
    );
}
export default Navbar;
