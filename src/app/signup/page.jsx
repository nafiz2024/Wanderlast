"use client";

import Link from "next/link";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
});

const inputClassName =
  "h-11 w-full border border-[#efefef] bg-[#f8f8f8] px-4 pl-[38px] text-sm text-[#1d1d1d] outline-none placeholder:text-[#818181] focus:border-[#19a7c9] focus:bg-white autofill:shadow-[inset_0_0_0px_1000px_#f8f8f8] autofill:[-webkit-text-fill-color:#1d1d1d] autofill:[caret-color:#1d1d1d] focus:autofill:shadow-[inset_0_0_0px_1000px_#ffffff]";

const SignUpPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      setSubmitError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
    });

    setIsSubmitting(false);

    if (data) {
      redirect("/");
    }

    if (error) {
      toast.error(`Email or Password is wrong`, {
        position: "top",
        autoClose: 3000,
      });
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <section className="min-h-[calc(100vh-56px)] bg-linear-to-b from-[#f8f8fa] to-[#f3f4f6] px-4 py-14">
      <div className="mx-auto w-full max-w-[558px]">
        <header className="text-center">
          <h1
            className={`${headingFont.className} text-[2.8rem] leading-[0.95] tracking-[-0.04em] text-[#161616] sm:text-[4.5rem]`}
          >
            Create Account
          </h1>
          <p className="mt-3 text-base text-[#7a7a7a]">
            Start your adventure with Wanderlust
          </p>
        </header>

        <div className="mt-[26px] border border-[#ececec] bg-white px-[18px] py-6 shadow-[0_2px_4px_rgba(15,23,42,0.04),0_10px_28px_rgba(15,23,42,0.06)] sm:px-[34px] sm:py-[30px]">
          <form onSubmit={onSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Full Name
              </label>
              <div className="relative">
                <FiUser className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  name="name"
                  id="fullName"
                  type="text"
                  placeholder="Enter your name"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Email Address
              </label>
              <div className="relative">
                <FiMail className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Password
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-[#151515]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <FiLock className="pointer-events-none absolute top-1/2 left-4 h-[18px] w-[18px] -translate-y-1/2 text-[#6f6f6f]" />
                <input
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className={inputClassName}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-[14px] inline-flex h-[50px] w-full items-center justify-center bg-[#16a8c8] text-sm font-medium text-white transition-colors hover:bg-[#1096b3] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </button>

            {submitError ? (
              <p className="mt-3 text-sm text-[#d14343]">{submitError}</p>
            ) : null}

            <div className="my-4 flex items-center gap-3 text-[#717171] before:h-px before:flex-1 before:bg-[#ececec] before:content-[''] after:h-px after:flex-1 after:bg-[#ececec] after:content-['']">
              Or sign up with
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

          <p className="mt-[18px] text-center text-[15px] text-[#767676]">
            Already have an account?{" "}
            <Link href="/signin" className="font-semibold text-[#16a8c8]">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
