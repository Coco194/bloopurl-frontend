<template>
    <div class="container pageContainer">
        <div class="row">
            <div class="col-12 d-flex flex-column justify-content-center align-items-center" style="border: 0px solid red;">
                <div class="card p-5" >
                    <h1 class="m-0 mt-0 mb-1">Welcome back!</h1>
                    <p class="mb-3" style="font-size: 0.875rem;">Create your account</p>
                    <form method="POST">
                        <div class="mb-2">
                            <label for="name" class="form-label" style="font-size: 0.875rem;">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="coco" v-model="name" required>
                        </div>
                        <div class="mb-2">
                            <label for="email" class="form-label" style="font-size: 0.875rem;">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email" required>
                        </div>
                        <div class="mb-2">
                            <label for="password" class="form-label" style="font-size: 0.875rem;">Password</label>
                            <input type="password" class="form-control" name="password" placeholder="Password" v-model="password" required>
                        </div>    
                        <div class="mb-2">
                            <label for="password_confirmation" class="form-label" style="font-size: 0.875rem;">Confirm password</label>
                            <input type="password" class="form-control" name="password_confirmation" placeholder="Password" v-model="password_confirmation" required>
                        </div>    
                    </form>

                    <button class="btn btn-dark mb-3" @click="register()">Register</button>
                    <p style="font-size: 0.875rem;">
                        Already have an account? 
                        <router-link to="/login">log in</router-link>
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

            await fetch("http://localhost:8000/sanctum/csrf-cookie", {
                credentials: "include"
            });

            // Extract XSRF token from cookies
            const token = decodeURIComponent(
                document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
            );

            const response = await fetch("http://localhost:8000/api/register", {
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
