import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const ThirdPartyLogIn = ({ setSuccess, setError, from }) => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setSuccess("User successfully signed in using Google.");
                // console.log(user);
                {
                    from && navigate(from, { replace: true });
                }
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
