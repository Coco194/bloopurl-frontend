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
                    <h2 class="m-0 mt-0 mb-2 fw-bold">Protected link</h2>
                    <p class="mb-4" style="font-size: 0.875rem; color: #6a6a6a;">This link is password protected, please enter the access code to access this link</p>
                    <div class="alert alert-light d-flex align-items-center gap-2" role="alert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>                   
                        <div>
                            <span style="font-size: 0.875rem;">coco@gmail.com</span>                            
                        </div>
                    </div>
                    <hr style="color: #8a8a8a;">
                    <form method="POST">

                        <div class="mb-4">
                            <label for="password" class="form-label" style="font-size: 0.875rem;">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required>
                            <p v-if="error === true" style="font-size: 0.875rem; color: red;">Email or password is incorrect</p>
                        </div>    
                    </form>

                    <button class="btn btn-dark mb-3" @click="login()">Enter page</button>

                    <p class="text-center" style="font-size: 0.875rem;">
                        Any issues? 
                        <router-link to="/protected">report problems</router-link>
                    </p>

                    <p class="text-center" style="font-size: 0.875rem; color: #8a8a8a;">
                        By clicking "Enter page" you agree to the Terms & Conditions and Privacy Policy
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
        
            console.log("Hello");
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
