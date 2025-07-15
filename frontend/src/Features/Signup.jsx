import React from "react";
import { motion } from "framer-motion";

const Signup = ({ setLogin, isVisible }) => {
    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="Authenticate Yourself"
                onClick={(e) => e.stopPropagation()}
                className={` bg-white  shadow-2xl shadow-blue-200 rounded-3xl overflow-hidden
            w-full max-w-[440px] h-full  max-h-[562px] `}
            >
                <div className="relative flex items-center justify-between flex-col py-10 px-6 gap-8 h-full w-full ">
                    <header>
                        <h1 className="font-roboto text-3xl  font-semibold text-center ">
                            BE A Memeber
                        </h1>
                    </header>

                    <div className="w-full">
                        <form action="" method="POST" className="">
                            <div className="flex flex-col items-start gap-7">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="font-roboto border-b-1 border-black w-full p-2 outline-0 "
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="font-roboto border-b-1 border-black w-full p-2 outline-0 "
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Password"
                                    className="font-roboto border-b-1 border-black w-full p-2 outline-0 "
                                    required
                                />
                                <p className="font-roboto text-end w-full flex items-center justify-end gap-1">
                                    Already have an account?
                                    <button
                                        type="button"
                                        onClick={() => setLogin(true)}
                                        className="text-blue-500 underline underline-offset-4"
                                    >
                                        Access pulse
                                    </button>
                                </p>
                            </div>
                            <div className="flex flex-col items-start gap-5 pt-30">
                                <button
                                    type="submit"
                                    className="font-roboto bg-gradient w-full text-white py-2 rounded"
                                >
                                    Unlock Pulse
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </motion.div >
        </>
    );
};

export default Signup;
