import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define the expected response shape (adjust to your API)
type LoginResponse = {
  role?: string;
  token?: string; // only if your API returns it; if you use httpOnly cookies, you won't need this here
  message?: string;
};

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Optional: If already authenticated (e.g., has session cookie or a validated token),
  // redirect to home
  useEffect(() => {
    // If you keep a client-side auth flag/token:
    // const token = localStorage.getItem("token");
    // if (token) navigate("/", { replace: true });
    // If you rely on httpOnly cookie, you might call a `/auth/me` endpoint here to check session
    // (not shown due to no network in this environment)
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // If you use cookies for auth, uncomment the next line and configure server/CORS accordingly:
        // credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      // Try to parse JSON even on non-OK to get server message
      let data: LoginResponse | { error?: string; message?: string } = {};
      try {
        data = await res.json();
      } catch {
        // If response isn't JSON, we'll handle below
      }

      if (!res.ok) {
        const serverMsg =
          (data as any)?.message ||
          (data as any)?.error ||
          (res.status === 401
            ? "Invalid email or password."
            : "Something went wrong. Please try again.");
        throw new Error(serverMsg);
      }

      // If your server sets an httpOnly cookie, you don't need to store token here.
      // If your server returns a token (not recommended for localStorage), you could:
      // localStorage.setItem("token", data.token!); // be cautious with XSS
      // Use role only for UI hints; do not rely on it for authorization
      if (data.role) {
        localStorage.setItem("role", data.role);
      }

      // Navigate to home (replace history to avoid back-navigation to login)
      navigate("/", { replace: true });
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Login failed. Please try again.";
      setError(msg);
      console.error("[Login] Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Either navigate to reset page or open a modal
    // navigate("/forgot-password");
    console.log("Forgot password clicked");
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left visual panel */}
      <div className="w-[70%] relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // In Vite, it's better to import the asset:
            // import bgImage from '../assets/image.png';
            // style={{ backgroundImage: `url(${bgImage})`}}
            backgroundImage: `url('/src/assets/image.png')`,
          }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-950/70 to-black/60" />
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] animate-[drift_20s_linear_infinite]" />
        </div>
      </div>

      {/* Right form panel */}
      <div className="w-[30%] flex items-center justify-center px-8 shadow-2xl bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Lab Login</h2>
          <p className="text-gray-600 mb-8">Please enter your details</p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-red-100 transition-all"
                aria-invalid={!!error}
                aria-describedby={error ? "login-error" : undefined}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black focus:ring-4 focus:ring-red-100 transition-all pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-2 my-auto px-2 text-gray-600 hover:text-gray-800"
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <div
                id="login-error"
                className="p-3 bg-red-50 border border-red-200 rounded-lg"
              >
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 bg-gradient-to-r from-black to-gray-900 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 ${
                isLoading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-gray-800 hover:text-gray-950 hover:underline transition-colors"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(30px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default Login;
``;
