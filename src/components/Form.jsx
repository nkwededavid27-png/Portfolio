import { useRef } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_fbaxvui",   // from EmailJS dashboard
                "template_hc8j4oc",  // from EmailJS dashboard
                form.current,
                "WSHKRW0y-Zokz6zni"    // from EmailJS account
            )
            .then(
                (result) => {
                    console.log("Message sent:", result.text);
                    alert("Message sent successfully!");
                },
                (error) => {
                    console.log("Error:", error.text);
                    alert("Failed to send message. Try again.");
                }
            );
    };

    return (
        <div id="Contact">
            <Title title="contact" className='mt-10'/>
            <form ref={form} onSubmit={sendEmail} className="mt-10 max-w-md mx-auto space-y-6 p-6 bg-base-200 rounded-xl shadow-md" >
                
                <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="input input-bordered w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="input input-bordered w-full"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone with country code */}
                <div>
                    <label htmlFor="tel" className="block mb-2 font-semibold">Phone Number</label>
                    <div className="flex space-x-2">
                        <select
                            name="countryCode"
                            id="countryCode"
                            className="select select-bordered w-28"
                            defaultValue="+229"
                        >
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+234">🇳🇬 +234</option>
                            <option value="+229">🇧🇯 +229</option>
                        </select>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            className="input input-bordered flex-1"
                            placeholder="812 345 6789"
                            required
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        className="textarea textarea-bordered w-full h-32"
                        placeholder="Write your message..."
                        required
                    />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-accent w-full">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default ContactForm;


