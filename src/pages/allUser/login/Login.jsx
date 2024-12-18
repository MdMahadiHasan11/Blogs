import { Tooltip } from 'react-tooltip';
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAuth, } from "firebase/auth";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import app from "../../../../firebase.config";
import { AuthContext } from "../../../routes/authProvider/AuthProvider";
//import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const Login = () => {

    //const axiosPublic = useAxiosPublic();
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
 

    //const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);


    // const googleProvider = new GoogleAuthProvider();

    //const { googleSignIn } = useContext(AuthContext);

    // const HandleGoogleLogin = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const loginUser = result.user;
    //             // user store api
    //             const userInfo = {
    //                 email: result.user?.email,
    //                 image: result.user?.photoURL,
    //                 name: result.user?.displayName,
    //                 role: 'user'
    //             }
    //             axiosPublic.post('/user', userInfo)
    //                 .then(res => {
    //                     console.log(res.data)
    //                 })


    //             toast.success("Successfully Login");

    //             setUser(loginUser);

    //             navigate(location?.state ? location.state : '/')
    //         })
    //         .catch(error => {
    //             console.log('error', error.message)
    //         })
    // }


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')

        // console.log(email)
        // console.log(password)



        signIn(email, password)
            .then(result => {
                toast.success("Successfully Login");
                // console.log(result.user)
                navigate(location?.state ? location.state : '/')
                // navigate(from,{replace:true});
            })
            .catch(error => {
                console.error(error);
                toast.success("password or email not matching!!");
            })

    }



    useEffect(() => {
        loadCaptchaEnginge(3);
    }, [])
    const handleValidateCaptcha = (e) => {
        // const user_captcha_value = captchaRef.current.value;
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value) == true) {
            setDisable(false);
        }

        else {
            setDisable(true);
        }
    }


    return (
        // <Fade>Login now!</Fade>
        <div className="min-h-screen hero-overlay bg-opacity-60" style={{ backgroundImage: 'url(https://i.ibb.co/SNC9bdz/login.jpg)' }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            {/* title */}
            <div className=''>
                <p className="text-3xl font-bold  text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-9 md:py-12  mb-2 text-white"></p>
            </div>
            <div className="  mt-10 pb-10 justify-center items-center min-h-[calc(100vh-306px)] w-full">
                <div className=" p-2 md:p-6 mx-auto bg-white rounded-md w-1/2 shadow-2xl ">

                    <p className="text-center text-4xl font-bold">Login</p>
                    <div className="text-center lg:text-left">
                        <div className="flex justify-center items-center"
                        ><h1 className="text-5xl font-bold"></h1>
                            {/* <Lottie animationData={groovyWalkAnimation} loop={true} />; */}
                        </div>



                        <form onSubmit={handleLogin} className="w-3/4 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"><LoadCanvasTemplate /></span>
                                </label>
                                <input ref={captchaRef} onBlur={handleValidateCaptcha} type="text" name="recaptcha" placeholder="Type captcha" className="input input-bordered" required />
                                <button className="btn btn-sm">Validate</button>
                            </div>

                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary font-bold">Login</button>
                            </div>
                        </form>
                        <div className="flex justify-center items-center"
                        ><p>Don`t have an account ? <Link to="/signUp" className="text-blue-500 font-bold" >Sign Up</Link></p></div>

                        <div>

                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"

                            />
                            {/* Same as */}
                            <ToastContainer />
                        </div>
                    </div>
                    <hr className="border-t border-gray-300 my-4" />

                    <div className="text-center">
                        <div>
                            <p className="mt-5 mb-3">Or Sign up using</p>
                        </div>
                        {/* <button onClick={HandleGoogleLogin} data-tooltip-id="my-tooltipp" className=" text-3xl btn m-4">
                            <FcGoogle />
                        </button> */}
                        <Tooltip
                            id="my-tooltipp"
                            content="Google Login"
                            events={['hover']}
                        />
                        {/* <button onClick={HandleGithubLogin} data-tooltip-id="my-tooltip" className=" text-3xl btn ">
                        <BsGithub />

                    </button> */}
                        <Tooltip
                            id="my-tooltip"
                            content="GitHub Login"
                            events={['hover']}
                        />
                        {/* {user && <div>
                        <p>user: {user.displayName}</p>
                    </div>} */}

                    </div>

                </div>




            </div>


        </div>
    );
};
export default Login;