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
                    <h2 class="m-0 mt-0 mb-2 fw-bold">Sign up</h2>
                    <p class="mb-4" style="font-size: 0.875rem; color: #6a6a6a;">Register to your BloopUrl account</p>
                    <form method="POST">
                        <div class="mb-2">
                            <label for="name" class="form-label" style="font-size: 0.875rem;">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="coco" v-model="name" required>
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label" style="font-size: 0.875rem;">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="coco@example.com" v-model="email" required>
                        </div>
                        <div class="mb-2">
                            <label for="password" class="form-label" style="font-size: 0.875rem;">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" v-model="password" required>
                        </div>    
                        <div class="mb-4">
                            <label for="password_confirmation" class="form-label" style="font-size: 0.875rem;">Confirm password</label>
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Confirm password" v-model="password_confirmation" required>
                        </div>    
                    </form>

                    <button class="btn btn-dark mb-3" @click="register()">Login</button>
                    <p style="font-size: 0.875rem; text-align: center;">
                        Already have an account? 
                        <router-link to="/login">sign in</router-link>
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
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
    },
    methods: {
        async register() {

            await fetch("http://192.168.8.161:8000/sanctum/csrf-cookie", {
                credentials: "include"
            });

            // Extract XSRF token from cookies
            const token = decodeURIComponent(
                document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
            );

            const response = await fetch("http://192.168.8.161:8000/api/register", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": token
                },
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
            });

            const data = await response.json();
            console.log("Response:", data);

            const message = data;

            if (response.ok) {
                this.$router.push("/login");
                return;
            }

            // If login failed
            console.log("Login failed:", message);
        }
    }
}
</script>

<style>
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
        padding: 0rem 2rem;
    }
}

.btn {
  border: none;
}

.long-url{
    font-size: 0.875rem; 
}

</style>
