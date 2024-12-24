import { useContext } from 'react';
import image from  '../../assets/others/authentication2.png'
import { AuthContext } from '../Auth/Providers/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { updateProfile } from 'firebase/auth';
import auth from '../Auth/firebase.config';


const SignUp = () => {

const {createUser} = useContext(AuthContext)
const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email, password);
        createUser(email, password)
        .then(result => {
          const user = result.user;
          console.log('user information', user)
          updateProfile(auth.currentUser, {
            displayName:name, photoURL: photo
          })
          .then(()=> console.log(''))
          .catch(error => console.log(error))
          Swal.fire({
            title: "Sign Up!",
            text: "User Sign Up Successfully.",
            imageUrl: "https://www.inturact.com/hubfs/From-Sign-up-to-Success-6-User-Onboarding-Best-Practices.jpg",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
          navigate('/')
        })
        .catch(error => {
          console.log(error)
          Swal.fire({
            title: "Email already used!",
            text: "Try another email!",
            icon: "question"
          });
        })
      }

    return (
        <div>
           <div style={{
                   backgroundImage:
                     `url('https://s3-alpha-sig.figma.com/img/4e38/4d11/b068cd862e966bd80016bce98e0c320c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXpRUfjrajjUQuXvA5w7kYJ2CMeF15~XoIVVg5RKklfBRxdN~6HH-blvYhL~Pr~61OiE6bglA184SydzdZg98sjDoMvrw9-o2hnYURCWKMV~1EhfiJ-lMHrcR1o1UUe354DWADrXsBXB4xrzT2N~2lCJDw8Widq8UP~lDYSqN3PxW6hPf21~kImnGoUuAumi3-EPw3hvFp2GKV3NbhxxVzs3tTYI0A0C7Ag8785BM0B25eP9VGKniq-wHJ6IGVqI5PJj1710zznqnw45LtRXB1euOCfNzxfjGbda2QQzW~fA9XLbg6Ajqb7izOvhuU91NgiXfb0GGQ7s6ZVDb6s97Q__')`,
                 }} className="hero bg-base-200 min-h-screen">
                   <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
                     <div className="text-center lg:text-left">
                     <img src={image} alt="" className='w-[200px] md:w-full'/>
                     </div>
                     <div className="card  w-full max-w-md shrink-0">
                     <h1 className="text-5xl text-center mt-8 font-bold">Sign Up!</h1>
                       <form onSubmit={handleSignUp} className="card-body">
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Name</span>
                           </label>
                           <input
                             type="text"
                             name='name'
                             placeholder="name"
                             className="input input-bordered"
                             required
                           />
                         </div>
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Email</span>
                           </label>
                           <input
                             type="email"
                             name='email'
                             placeholder="email"
                             className="input input-bordered"
                             required
                           />
                         </div>
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Password</span>
                           </label>
                           <input
                             type="password"
                             name='password'
                             placeholder="password"
                             className="input input-bordered"
                             required
                           />
                         </div>
                         <div className="form-control">
                           <label className="label">
                             <span className="label-text">Photo URL</span>
                           </label>
                           <input
                             type="text"
                             name='photo'
                             placeholder="photo url"
                             className="input input-bordered"
                             required
                           />
                         </div>
                         <div className='mt-5'>
                            <p className='text-yellow-600 text-center font-semibold'>Already registered? <Link className='text-blue-500' to="/login">Go to log in</Link></p>
                         </div>
                         <div className="form-control mt-6">
                           <input type="submit" value="Sign Up" className="btn text-white bg-yellow-700"/>
                         </div>
                       </form>
                     </div>
                   </div>
                 </div> 
        </div>
    );
};

export default SignUp;