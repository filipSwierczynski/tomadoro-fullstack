import {FcGoogle} from 'react-icons/fc';
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import {auth} from "../../utils/firebase";

export default function Login (){

// sign in with google
const googleProvider = new GoogleAuthProvider();
const GoogleLogin = async() => {
    try {
        const results = await signInWithPopup(auth,googleProvider);
    } catch(error){

    }
}
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700 rounded-lg">
            <h2 className="text-2xl font-medium">Join Today</h2>
            <div className="py-4">
                <h3 className="py-4">Sign in with one of the provides</h3>
                <button onClick={GoogleLogin} className="text-white bg-gray-700 w-full p-2
                rounded-lg align-middle flex justify-center gap-2"><FcGoogle className='text-2xl'/>Sign in with Google</button>
            </div>
        </div>
    )
}