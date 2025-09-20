import React, { useState, FormEvent, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Header from "../components/Header";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div ><Header /></div>
      <div className=" p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Մուտք
        </h2>

        {error && (
          <div className="mb-4 text-red-500 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Էլ. հասցե
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              required
              placeholder="example@mail.com"
              className="mt-1 w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Գաղտնաբառ
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              required
              placeholder="********"
              className="mt-1 w-full p-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-yellow-500 rounded-3xl  text-white font-bold hover:scale-105 transform transition"
          >
            Մուտք
          </button>

          <p className="text-center text-sm text-gray-300">
            Չունե՞ս հաշիվ։{" "}
            <Link
              to="/register"
              className="text-yellow-400 hover:text-orange-400 font-semibold"
            >
              Գրանցում
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
