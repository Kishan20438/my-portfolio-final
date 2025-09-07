import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`min-h-screen ${
                darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
            }`}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL + "/background.jpg"})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Navbar */}
            <header
                className={`fixed top-0 w-full z-50 ${
                    darkMode ? "bg-gray-800 bg-opacity-80" : "bg-white bg-opacity-80"
                } shadow-md`}
            >
                <div className="container mx-auto flex justify-between items-center p-4">
                    <h1
                        className={`text-xl font-bold drop-shadow-md ${
                            darkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        MyPortfolio
                    </h1>
                    <div className="flex items-center space-x-6">
                        <nav className="space-x-6 hidden md:block">
                            <button
                                onClick={() => handleScroll("about")}
                                className="hover:text-blue-600 drop-shadow-md"
                            >
                                About
                            </button>
                            <button
                                onClick={() => handleScroll("projects")}
                                className="hover:text-blue-600 drop-shadow-md"
                            >
                                Projects
                            </button>
                            <button
                                onClick={() => handleScroll("contact")}
                                className="hover:text-blue-600 drop-shadow-md"
                            >
                                Contact
                            </button>
                        </nav>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            {darkMode ? <Sun /> : <Moon />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen px-6 pt-20 space-y-8 md:space-y-0 md:space-x-12">
                {/* Profile Picture */}
                <motion.img
                    src={process.env.PUBLIC_URL + "/picture.jpg"}
                    alt="Profile"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-200 shadow-2xl object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className={`text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg ${
                            darkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        Hi, I'm <span className="text-blue-600">KISHAN VERMA</span>
                    </h2>
                    <p
                        className={`mb-6 text-lg md:text-xl font-semibold drop-shadow-md ${
                            darkMode ? "text-white" : "text-gray-800"
                        }`}
                    >
                        A Full Stack Developer passionate about building user-friendly
                        applications.
                    </p>
                    <button
                        onClick={() => handleScroll("projects")}
                        className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg"
                    >
                        View My Work
                    </button>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="container mx-auto py-20 px-6">
                <h3
                    className={`text-3xl font-bold text-center mb-10 drop-shadow-lg ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    About Me
                </h3>
                <p
                    className={`text-center max-w-3xl mx-auto text-lg md:text-xl font-semibold drop-shadow-md ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    I’m Kishan Verma, a passionate Full-Stack Developer skilled in React.js,
                    Node.js, MongoDB, and cloud technologies. I focus on building scalable,
                    user-friendly applications with real-time features and API integrations.
                    My goal is to create innovative solutions that solve real-world problems
                    by merging technology with creativity.
                </p>
            </section>

            {/* Projects Section */}
            {/* Projects Section */}
            <section id="projects" className="container mx-auto py-20 px-6">
                <h3
                    className={`text-3xl font-bold text-center mb-10 drop-shadow-lg ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    Projects
                </h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Project 1 */}
                    <div
                        className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition ${
                            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        <h4 className="text-xl font-semibold mb-2 drop-shadow-md">
                            Job Portal Website
                        </h4>
                        <p className="mb-4 text-lg md:text-xl font-semibold drop-shadow-md">
                            Built a full-stack job listing portal using MERN stack for easy posting
                            and application of jobs.
                        </p>
                        <a
                            href="https://github.com/your-username/job-portal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center border border-gray-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            View Details
                        </a>
                    </div>

                    {/* Project 2 */}
                    <div
                        className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition ${
                            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        <h4 className="text-xl font-semibold mb-2 drop-shadow-md">
                            Ride Sharing App
                        </h4>
                        <p className="mb-4 text-lg md:text-xl font-semibold drop-shadow-md">
                            Built an App for Ride sharing with end-to-end AWS cloud web applications.
                        </p>
                        <a
                            href="https://github.com/Kishan20438/Ride-Sharing-App"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center border border-gray-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            View Details
                        </a>
                    </div>

                    {/* Project 3 */}
                    <div
                        className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition ${
                            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        <h4 className="text-xl font-semibold mb-2 drop-shadow-md">
                            Digital Guardian App
                        </h4>
                        <p className="mb-4 text-lg md:text-xl font-semibold drop-shadow-md">
                            Developed an Android app to monitor children’s smartphone activity.
                        </p>
                        <a
                            href="https://github.com/your-username/digital-guardian-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center border border-gray-400 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                        >
                            View Details
                        </a>
                    </div>
                </div>
            </section>



            {/* Contact Section */}
            <section id="contact" className="container mx-auto py-20 px-6 text-center">
                <h3
                    className={`text-3xl font-bold mb-6 drop-shadow-lg ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    Get In Touch
                </h3>
                <p
                    className={`mb-6 text-lg md:text-xl font-semibold drop-shadow-md ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    Feel free to reach out to me for collaborations or opportunities.
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="mailto:itsmekishanverma@gmail.com" className="hover:text-blue-600">
                        <Mail />
                    </a>
                    <a href="https://github.com/Kishan20438" className="hover:text-blue-600">
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/itsmekishan/" className="hover:text-blue-600">
                        <Linkedin />
                    </a>
                </div>
            </section>

            {/* Profile Info Section */}
            <section id="profile-info" className="container mx-auto py-20 px-6 text-center">
                <h3
                    className={`text-3xl font-bold mb-6 drop-shadow-lg ${
                        darkMode ? "text-white" : "text-gray-800"
                    }`}
                >
                    My Details
                </h3>
                <p className="mb-2 text-lg md:text-xl font-semibold drop-shadow-md">
                    📧 Email: itsmekishanverma@gmail.com
                </p>
                <p className="mb-2 text-lg md:text-xl font-semibold drop-shadow-md">
                    📱 Phone: 7541047041
                </p>
                <p className="mb-2 text-lg md:text-xl font-semibold drop-shadow-md">
                    🌍 Nationality: Indian
                </p>
                <p className="text-lg md:text-xl font-semibold drop-shadow-md">
                    🎓 Graduation: Completed B.Tech in 2025, Computer Science Engineering
                </p>
            </section>

            {/* Footer */}
            <footer
                className={`text-center py-6 mt-10 ${
                    darkMode ? "bg-gray-800 text-white" : "bg-gray-900 text-white"
                }`}
            >
                <p className="text-lg font-semibold">© 2025 Kishan Verma. All rights reserved.</p>
            </footer>
        </div>
    );
}
