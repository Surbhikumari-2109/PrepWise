import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <h2 className="text-xl font-bold text-violet-400">
            PrepWise
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Learn Smart. Rank Higher.
          </p>
        </div>

        <div className="flex gap-5 text-xl text-slate-400">
          <a href="#" className="hover:text-violet-400">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-violet-400">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-violet-400">
            <FaEnvelope />
          </a>
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