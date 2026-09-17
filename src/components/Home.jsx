import { Mail } from "lucide-react";
import myimg from "../assets/2ndmy.png"
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
            <div className=" flex flex-col justify-end md:justify-start">


                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Hello , <br /> I am {""}
                    <span className="text-accent">KORMANDEV</span>
                </h1>


                <p className="my-4 text-center md:text-left">
                    I am a  Fullstack <span className="text-accent">Developer</span>
                    <br />
                    With 5 years of experience, Using
                    React <br /> and Node.js.
                    Please <span className="text-accent"><Link to="/Contact">Contact</Link></span> me if you need me.
                </p>


                <a href="#Contact" className="btn btn-accent md:w-fit ">
                    <Mail className="w-5 h-5"/>
                    contact me
                </a>


            </div>

            <div className="md:ml-60">
                <img src={myimg} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl"
                style={{
                    borderRadius: "41% 59% 100% 0% / 48% 62% 38% 52% "
                }}
                />

            </div>
        </div>

    )
}
export default Home;