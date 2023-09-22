import "./Signup.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "../../assets/img/img4.webp";
import { useState } from "react";
// import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { auth } from "../../firebase";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      return authUser.user
        .updateProfile({
          displayName: username,
        })
        .catch((error) => alert(error.message));
    });
    console.log("successful");
  };

  return (
    <section
      class="vh-100 bg-image"
      style={{ backgroundImage: "url(" + { background } + ")" }}
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style={{ borderRadius: "15px" }}>
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Username
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label class="form-label" for="form3Example3cg">
                        Your Email
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label class="form-label" for="form3Example4cg">
                        Password
                      </label>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in{" "}
                        <a href="#!" class="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        type="button"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={handleSignup}
                      >
                        Register
                      </button>
                    </div>

                    <p class="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" class="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
