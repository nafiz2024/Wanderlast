
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiMail } from "react-icons/fi";

const inputClassName =
  "h-11 w-full border border-[#efefef] bg-[#f8f8f8] px-4 pl-[38px] text-sm text-[#1d1d1d] outline-none placeholder:text-[#818181] focus:border-[#19a7c9] focus:bg-white autofill:shadow-[inset_0_0_0px_1000px_#f8f8f8] autofill:[-webkit-text-fill-color:#1d1d1d] autofill:[caret-color:#1d1d1d] focus:autofill:shadow-[inset_0_0_0px_1000px_#ffffff]";

const SignInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
          password: user.password,
          email: user.email,
        });

        console.log({data, error})

        if (data) {
            redirect("/");
        }
    
        if (error) {
            toast.error(`Email or Password is wrong`, {
                position: "top",
                autoClose: 3000,
            });
        }
    }

    const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <section className="min-h-[calc(100vh-56px)] bg-linear-to-b from-[#f8f8fa] to-[#f3f4f6] px-4 py-14">
      <div className="mx-auto w-full max-w-[588px]">
        <header className="text-center">
          <h1 className="text-[2.9rem] font-bold leading-none tracking-[-0.04em] text-[#161616] sm:text-[4.1rem]">
            Welcome Back
          </h1>
          <p className="mt-3 text-base text-[#7a7a7a]">
            Resume your adventure with Wanderlust
          </p>
        </header>

        <div className="mt-[26px] border border-[#ececec] bg-white px-[18px] py-6 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_10px_28px_rgba(15,23,42,0.06)] sm:px-[34px] sm:py-[36px]">
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Email Address
              </label>
              <div className="relative">
                <FiMail className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-3.5">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Password
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className={inputClassName}
                />
              </div>
            </div>

           {/* <div className="mt-3.5 flex items-center justify-between gap-4">
              <label className="inline-flex items-center gap-2.5 text-[14px] text-[#666666]">
                <input
                  type="checkbox"
                  className="h-[15px] w-[15px] appearance-none rounded-[2px] border border-[#8b8b8b] bg-white checked:border-[#16a8c8] checked:bg-[#16a8c8] focus:outline-none focus:ring-0"
                />
                Remember me
              </label>

              <Link
                href="#"
                className="text-[14px] font-medium text-[#0ea5c6] hover:text-[#0d97b5]"
              >
                Forgot password?
              </Link>
            </div> */}

            <button
              type="submit"
              className="mt-[14px] inline-flex h-[50px] w-full items-center justify-center bg-[#16a8c8] text-sm font-medium text-white transition-colors hover:bg-[#1096b3]"
            >
              Sign In
            </button>

            <div className="my-5 flex items-center gap-3 text-[#717171] before:h-px before:flex-1 before:bg-[#ececec] before:content-[''] after:h-px after:flex-1 after:bg-[#ececec] after:content-['']">
              Or continue with
            </div>

            <button
            onClick={handleGoogleSignin}
              type="submit"
              className="inline-flex h-[50px] w-full items-center justify-center gap-[10px] border border-[#efefef] bg-white text-sm font-medium text-[#151515]"
            >
              <FcGoogle className="h-[18px] w-[18px] shrink-0" />
              Sign Up With Google
            </button>
          </form>

          <p className="mt-5 text-center text-[15px] text-[#767676]">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-semibold text-[#16a8c8]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
