import { FaGithub } from "react-icons/fa";

const GitHubSignIn = () => {
    return (
        <div>
            <div>
                  <button
                    
                    className="btn btn-block border border-black"
                  >
                    <FaGithub className="text-xl" />
                    Sign Up With Github
                  </button>
                </div>
        </div>
    );
};

export default GitHubSignIn;