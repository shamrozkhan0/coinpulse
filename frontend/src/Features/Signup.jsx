const Signup = ({ setSignup, isVisible }) => {
  const port = "http://localhost:5000";
  return (
    <>
          <header>
            <h1 className="font-roboto text-3xl font-semibold text-center  ">
              Want To Be A <span className="text-gradient">Member</span> ?
            </h1>
          </header>

          <div className="w-full">
            <form
              action={`${port}/signup`}
              method="POST"
              className=""
            >
              <div className="flex flex-col items-start gap-7">
                <input
                  type="text"
                  placeholder="Username"
                  name="name"
                  className="font-roboto border-b  w-full p-2 outline-0 "
                  required
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="font-roboto border-b-1  w-full p-2 outline-0 "
                  required
                />
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="font-roboto border-b-1   w-full p-2 outline-0 "
                  required
                />
              </div>
              <div className="flex flex-col items-start gap-5 pt-30">
                <button
                  type="submit"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   alert(
                  //     "Currently The backend is not hosted yet so the form is not wokring "
                  //   );
                  // }}
                  className="font-roboto bg-secondary-gradient w-full text-white py-2 rounded cursor-pointer"
                >
                  Unlock Pulse
                </button>
                <p className="font-roboto text-end w-full flex items-center justify-end gap-1 ">
                  Already have an account?
                  <button
                    type="button"
                    onClick={() => setSignup(true)}
                    className="text-blue-500 underline underline-offset-4 cursor-pointer"
                  >
                    Access pulse
                  </button>
                </p>
              </div>
            </form>
          </div>
    </>
  );
};

export default Signup;
