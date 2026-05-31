import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-violet-400">PrepWise</h2>

          <p className="text-slate-400 text-sm mt-1">
            Learn Smart. Rank Higher.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm text-slate-300 mb-2">Contact Me</p>

          <div className="flex gap-5 text-xl text-slate-400">
            <a
              href="https://github.com/Surbhikumari-2109"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/surbhi-kumari-194046316/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:surbhipriya2109@gmail.com"
              className="hover:text-violet-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm pb-6">
        © {new Date().getFullYear()} PrepWise. All Rights Reserved.
        <br />
        Made with ❤️ by Surbhi Kumari
      </div>
    </footer>
  );
};

export default Footer;
