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
                        <div>
                            <span style="font-size: 0.875rem;">coco@gmail.com</span>                            
                        </div>
                    </div>
                    <hr style="color: #8a8a8a;">
                    <form @submit.prevent="login">

                        <div class="mb-4">
                            <label for="password" class="form-label" style="font-size: 0.875rem;">Access code</label>
                            <input type="password" class="form-control" id="password" placeholder="1234" v-model="password" required>
                            <p v-if="error === true" style="font-size: 0.875rem; color: red;">Incorrect access code, please try again</p>
                        </div>    
                    </form>

                    <button class="btn btn-dark mb-3" @click="login()">Enter page</button>

                    <p class="text-center" style="font-size: 0.875rem;">
                        Any issues? 
                        <router-link to="/">report</router-link>
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

                const endpoint = "http://192.168.8.161:8000/api/protected/" + this.$route.params.id;
                
                const response = await fetch(endpoint, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        passcode: this.password
                    })
                });
                
                const data = await response.json();
                
                // check if response in 400 range and if both user input and db hash match
                if(response.ok && data.hashMatch){
                    window.location.replace(data.url);
                }else{
                    this.error = true;
                }

                //console.log("Password incorrect, try again")

            }catch(e){
                console.log(e)
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
