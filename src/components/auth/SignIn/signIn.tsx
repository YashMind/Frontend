import React from "react";

const SignIn = () => {
  return (
    <div>
      <div
        className="h-full lg:h-screen banner  bg-center bg-cover bg-no-repeat banner flex justify-center items-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container">
          <div className="flex lg:flex-row items-center justify-between custom-gap-margin">
            <div className="left">
              <img className="rounded:xl-custom" src="/images/robo.png" />
            </div>
            <div className="form-sec w-[460px]  rounded:xl-custom">
              <div className="  rounded-2xl max-w-md w-full text-white">
                <h1 className="text-[77.71px] font-bold text-center lg:text-left mob-text">
                  SIGN IN
                </h1>
                <p className="text-[15px] my-[20px] font-bold text-center lg:text-left">
                  Sign in with email address
                </p>

                <div className="mb-[20px]">
                  <label className="block relative">
                    <span className="absolute  px-[22px] top-1/2 transform -translate-y-1/2 text-gray-400 z-1">
                      <img src="/images/Vector.png" />
                    </span>
                    <input
                      type="email"
                      placeholder="Yourname@gmail.com"
                      className="w-full shadow-[inset_0px_0px_11.28px_0px_#00000029] backdrop-blur-[15.23668384552002px] backdrop-filter text-base font-medium  pl-14  px-[22px] py-4 rounded-lg bg-[#261046]  text-[#A4A4A4]  focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </label>
                </div>

                <button className="w-full py-3 rounded-[18px] bg-[linear-gradient(90.04deg,_#501794_0.03%,_#3E70A1_101.88%)] text-[22px]  font-medium hover:opacity-90 transition ">
                  Sign In
                </button>

                <div className="text-right mt-2">
                  <a
                    href="#"
                    className="text-xs font-semibold text-cyan-400 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
                <hr className="border border-[#727272] my-[20px] " />
                <div className="my-6 flex items-center ">
                  <span className="text-[#B6B6B6] text-xs font-semibold ">
                    Or continue with
                  </span>
                </div>

                <div className="flex gap-4 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-[#3B2063] text-[15px] font-medium text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg">
                    <img src="/images/google.png" />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-[#3B2063] text-[15px] font-medium  text-white px-4 py-3 rounded-[11px] w-full hover:shadow-lg">
                    <img src="/facebook.png" />
                    Facebook
                  </button>
                </div>

                <p className=" text-xs text-[#B6B6B6]  font-medium my-[20px] text-center lg:text-left ">
                  By registering you with our{" "}
                  <a href="#" className="text-[#9D5CE9] text-xs font-medium ">
                    Terms and Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
