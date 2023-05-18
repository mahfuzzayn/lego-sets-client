import React from "react";

const ThirdPartyLogIn = () => {
    const handleGoogleSignIn = () => {};

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
