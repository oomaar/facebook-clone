import Image from "next/image";
import { signIn } from "next-auth/client";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className="grid place-items-center w-96 text-center bg-white p-5 rounded-3xl">
                <Image
                    src="/facebook.png"
                    width={400}
                    height={400}
                    objectFit="contain"
                />
                <p className="text-2xl">Facebook helps you connect and share with people in your life</p>
                <button
                    onClick={signIn}
                    className="p-5 bg-blue-500 rounded-full text-white text-center mt-6">
                    LogIn With Facebook
                </button>
            </div>
        </div>
    );
};

export default Login;
