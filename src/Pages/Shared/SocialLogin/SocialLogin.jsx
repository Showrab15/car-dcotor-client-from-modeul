import React, { useContext } from 'react';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AuthProvider';

const SocialLogin = () => {

    const { loginInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        loginInWithGoogle()
            .then(result => console.log(result.user))
            .catch(error => console.log(error.message))
    }

    return (
        <div>
            <p className="text-center font-semibold">Or Sign In with</p>
            <div className="flex mt-6 justify-center gap-4">
                <button className="btn btn-circle btn-outline">
                    <FaFacebook className="text-[#3B5998]"></FaFacebook>
                </button>
                <button className="btn btn-circle btn-outline" >
                    <FaLinkedin className="text-[#0A66C2]"></FaLinkedin>
                </button>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle className="text-sky-600 "></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;