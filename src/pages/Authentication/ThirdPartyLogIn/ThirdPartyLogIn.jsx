import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ThirdPartyLogIn = ({ setSuccess, setError }) => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess("User successfully signed in using Google.");
                console.log(user);
            })
            .catch((error) => {
                const message = error.message;
                setError(message);
                console.log(message);
            });
    };

    return (
        <div className="third-party-login">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn w-full">
                Sign in With Google
            </button>
        </div>
    );
};

export default ThirdPartyLogIn;
