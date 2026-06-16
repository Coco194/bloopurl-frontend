<template>

    <div class="container">
        <div class="row d-flex flex-column justify-content-center align-items-center mt-5">
            <div class="col-12 col-lg-4">
                <div class="card p-4" style="border: 0px solid red;">
                    <router-link class="link-dark mb-3 d-flex align-items-center gap-1" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                        </svg>
                        Back
                    </router-link>
                    <h2 class="m-0 mt-0 mb-2 fw-bold">Sign in</h2>
                    <p class="mb-4" style="font-size: 0.875rem; color: #6a6a6a;">Login to your BloopUrl account</p>
                    <div class="alert alert-light d-flex align-items-center gap-2" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>                   
                        <div>
                            <span style="font-size: 0.875rem;">coco@gmail.com and 11</span>
                            
                        </div>
                    </div>
                    <form method="POST">
                        <div class="mb-2">
                            <label for="email" class="form-label" style="font-size: 0.875rem;">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="coco@example.com" v-model="email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label" style="font-size: 0.875rem;">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
                            <p v-if="error === true" style="font-size: 0.875rem; color: red;">Email or password is incorrect</p>
                        </div>    
                        <div class="mb-4 form-check">
                            <input type="checkbox" class="form-check-input" id="check">
                            <label class="form-check-label" for="check" style="font-size: 0.875rem;">Remember me</label>
                        </div>
                    </form>

                    <button class="btn btn-dark mb-3" @click="login()">Login</button>
                    <p style="font-size: 0.875rem; text-align: center;">
                        Don't have an account? 
                        <router-link to="/register">sign up</router-link>
                    </p>
                    
                </div>
            </div>

        </div>
    </div>
    


</template>

<script>

export default{
    data(){
        return{
            email: "",
            password: "",

            error: false
        }
    },
    components: {

    },
    methods: {
        async login() {
            try{
                await fetch("http://192.168.8.161:8000/sanctum/csrf-cookie", {
                    method: "GET",
                    credentials: "include"
                });   
                
                const token = decodeURIComponent(
                    document.cookie
                        .split('; ')
                        .find(row => row.startsWith('XSRF-TOKEN='))
                        .split('=')[1]
                )            

                const response = await fetch("http://192.168.8.161:8000/api/login", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        email: this.email,
                        password: this.password
                    })
                });

                const data = await response.json();
                console.log("Response:", data);

                const message = data.message;

                if (response.ok) {
                    // get the logged user instance
                    let user = await fetch("http://192.168.8.161:8000/api/user", {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                            "Accept": "application/json",
                            "X-XSRF-TOKEN": token
                        }
                    });

                    user = await user.json();
                    console.log(user);

                    // check if user is logged in, and show the profile icon
                    localStorage.setItem("logged_in", true);
                    localStorage.setItem("username", user.name);
                    localStorage.setItem("email", user.email);
                    this.$router.push("/dashboard");
                    return;
                }

                // If login failed
                this.error = true; 
                console.log("Login failed:", message);
            }catch(e){
                console.log(e);
            }
        }
    }
}
</script>

<style scoped>
.navContainer{
    padding: 1rem 2rem;
    background-color: rgb(255, 255, 255);
}

.pageContainer{
    padding: 0rem 2rem;
}

/* applied when screen is larger than 1280px */
@media (min-width: 1280px) {
    .navContainer {
        padding: 2rem 2rem;
    }
    .pageContainer {
        padding: 2rem 2rem;
    }
}

.btn {
  border: none;
}

.long-url{
    font-size: 0.875rem; 
}

</style>
