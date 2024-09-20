import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const GoogleLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID, // Your Google Client ID
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleSignInButton"),
      { theme: "outline", size: "large" }
    );
  }, []);

  const handleCredentialResponse = (response) => {
    const userObject = jwtDecode(response.credential);
    console.log("User:", userObject);
    localStorage.setItem("username", userObject.given_name);
    navigate("/form");
  };

  return (
    <>
      <div></div>
      <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col justify-center">
        <header className="bg-purple-700 text-white py-8 mb-8">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-2">Resume Builder</h1>
            <p className="text-xl">
              Create your <strong>ATS friendly </strong>professional resume in
              minutes
            </p>
          </div>
        </header>
        <main className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-700 mb-6 text-center">
                Log in to Resume Builder
              </h2>
              <p className="text-gray-600 mb-6 text-center">
                Use your Google account to log in and start building your
                professional resume.
              </p>
              <div
                className="flex justify-center items-center"
                id="googleSignInButton"></div>
            </div>
          </div>
        </main>

        <footer className="bg-purple-800 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Resume Builder. All rights
              reserved.
            </p>
            <p className="mt-2">Create your professional resume with ease.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default GoogleLogin;
