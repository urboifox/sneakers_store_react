import { Link } from "react-router-dom";
import SectionHeadline from "./SectionHeadline";

const Profile = () => {
  return (
    <section className="flex flex-col items-center justify-start h-[calc(100vh-6rem)] bg-primary-100 px-10 max-sm:px-4">
      <SectionHeadline text={"Login"} />
      <article className="shadowMe bg-sec-100 p-10 max-sm:p-5 rounded-lg max-sm:w-full">
        <div className="flex flex-col gap-5 mb-2">
          <input
            type="text"
            name="username"
            className="w-full p-4 focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
            placeholder="Username"
          />
          <input
            type="password"
            className="w-full p-4 focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <Link className="text-sec-300 font-medium text-sm" to={null}>
            Forgot Password?
          </Link>
          <div className="flex items-center gap-5 mt-10 max-sm:flex-col">
            <button className="btn-primary max-sm:w-full">Login</button>
            <button className="btn-secondary max-sm:w-full">Sign Up</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
