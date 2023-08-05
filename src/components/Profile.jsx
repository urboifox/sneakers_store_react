import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  return (
    <section className="flex lg:py-10 flex-col items-center justify-center h-[calc(100vh-6rem)] bg-primary-100 px-10 max-sm:px-4">
      <article className=" shadowMe overflow-hidden lg:flex items-center bg-sec-100  max-sm:p-5 rounded-lg max-sm:w-full">
        <div className="h-full hidden lg:block">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div className=" sm:p-10">
          <h2 className="text-center font-bold mb-10 text-sec-400 text-3xl">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-5 mb-2">
            <input
              type="text"
              name="username"
              className="w-full rounded-sm p-4  focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
              placeholder="Username"
            />
            <input
              type="password"
              className="w-full p-4 rounded-sm  focus:outline-primary-200 bg-primary-100 shadow-sm shadow-[#00000015]"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <Link
              onClick={() =>
                toast("Take a breath! and remember your password.", {
                  position: "bottom-right",
                  progressStyle: { background: "hsl(26, 100%, 55%)" },
                })
              }
              className="text-sec-300 font-medium text-sm"
              to={null}
            >
              Forgot Password?
            </Link>
            <div className="flex items-center gap-5 mt-10 max-sm:flex-col">
              <button className="btn-primary max-sm:w-full">Login</button>
              <button className="btn-secondary max-sm:w-full">Sign Up</button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Profile;
