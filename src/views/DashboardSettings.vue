<template>

<div class="d-flex" style="height: 100dvh;">
    
    <!-- sidebar -->
    <side-navigation></side-navigation>

    <!-- canvas -->
    <div class="container overflow-scroll overflow-scroll-md my-2" style="overflow-x: hidden!important;">        

        <!-- Sidebar button and breadcrumb navigation -->
        <div class="d-flex flex-column flex-sm-row sticky-top bg-white py-3" style="min-height: 4.45rem; border-bottom: 0px solid lightgrey;">
            <div class="d-flex flex-grow-1 align-items-center justify-content-start">
                <!-- sidebar button -->
                <button type="button" class="btn btn-outline-light d-none d-md-flex" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#collapseExample" 
                        aria-expanded="false" 
                        aria-controls="#collapseExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-layout-sidebar" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z"></path>
                    </svg>
                    <span class="visually-hidden">Button</span>
                </button>

                <!-- offcanvas button -->
                <button type="button" class="btn btn-outline-light d-flex d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-layout-sidebar" viewBox="0 0 16 16">
                        <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z"></path>
                    </svg>
                </button>
 
                <div class="d-flex">
                    <span style="font-size: 0.875rem; color: #6a6a6a;">{{ this.$route.name }}</span>
                </div>

            </div>        
        </div>

        <div class="container g-3 m-0">
            <hr class="mt-0">
        </div>
        <!-- main grid -->
        <div class="row g-3 m-0 pb-5">       
            <div class="col-12 col-6-md mt-5">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5 class="fw-bold m-0">Profile</h5>
                        <p class="m-0 mt-1 mb-3 mt-md-1 mb-md-0" style="color: #4a4a4a;">Control your main account settings and manage login information</p>                        
                    </div>
                    <div class="col-12 col-md-6">
                        <form class="row g-3" d-flex align-items-start>                    
                            <div class="col-md-12">
                                <label for="inputName" class="form-label" style="font-size: 0.875rem;">Name</label>
                                <input type="text" class="form-control" placeholder="Enter your updated name..." id="inputName">
                            </div>                      
                            <div class="col-md-12">
                                <label for="inputEmail" class="form-label" style="font-size: 0.875rem;">Email</label>
                                <input type="email" class="form-control" placeholder="Enter your updated email..." id="inputEmail">
                            </div>               

                            <div class="col-md-12 d-flex justify-content-end gap-2">
                                <button type="button" class="btn btn-light" style="border: 1px solid lightgray;">
                                    Cancel
                                </button>                                          
                                <button type="button" class="btn btn-dark" style="border: 1px solid lightgray;">
                                    Update
                                </button>                                  
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <hr class="my-5">

            <div class="col-12 col-6-md m-0">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5 class="fw-bold m-0">Security</h5>
                        <p class="m-0 mt-1 mb-3 mt-md-1 mb-md-0" style="color: #4a4a4a;">Control your security</p>                        
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="row g-3">
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0 mb-1">Change password</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">Change your current password</p>
                                </div>        

                                <button type="button" class="btn btn-light" style="border: 1px solid lightgray;">
                                    Change
                                </button>   
       
                            </div>            
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0 mb-1">Password recovery</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">Update your recovery email</p>
                                </div>                 
                                <button type="button" class="btn btn-light" style="border: 1px solid lightgray;" data-bs-toggle="button">
                                    Update
                                </button>                                          
                            </div>                                    
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0 mb-1">Two-factor authentication</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">Enable two factor authentication</p>
                                </div>                 
                                <button type="button" class="btn btn-light" style="border: 1px solid lightgray;" data-bs-toggle="button">
                                    Enable 2FA
                                </button>                                          
                            </div>                                                       
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0 mb-1">Login notifications</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">Get notified of new login attempts</p>
                                </div>                 
                                <input class="form-check-input" type="checkbox" id="gridCheck1">                                       
                            </div>     
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0 mb-1">Login history</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">View login history to your account</p>
                                </div>                 
                                <button type="button" class="btn btn-light" style="border: 1px solid lightgray;" data-bs-toggle="button">
                                    View
                                </button>  
                            </div>     
                        </div>
                    </div>
                </div>
            </div>
            <hr class="my-5">    

            <div class="col-12 col-6-md m-0">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <h5 class="fw-bold text-danger m-0">Danger zone</h5>
                        <p class="m-0 mt-1 mb-3 mt-md-1 mb-md-0" style="color: #4a4a4a;">Think carefully before proceeding here</p>                        
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="row g-3"> 
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0">Log out from all the devices</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">Logs you out from all the logged in devices</p>
                                </div>                 
                                <button type="button" class="btn btn-light" style="border:1px solid lightgray;">
                                    Logout
                                </button>  
                            </div>     
                            <div class="col-md-12 d-flex justify-content-between align-items-center">
                                <div class="d-flex flex-column">
                                    <h6 class="m-0">Delete your account</h6>
                                    <p class="mb-0" style="font-size: 0.875rem; color: #888888;">This action cannot be reverted</p>
                                </div>                 
                                <button type="button" class="btn btn-danger" style="border: 1px solid lightgray;">
                                    Delete 
                                </button>  
                            </div>     

                        </div>
                    </div>
                </div>
            </div>  
        </div>
                
    </div>
</div>


<!-- offcanvas -->
<SideNavigationMobile></SideNavigationMobile>


</template>

<script>
import SideNavigation from '../components/sideNavigation.vue';
import SideNavigationMobile from "../components/sideNavigationMobile.vue";


export default{
    components: {

        SideNavigation,
        SideNavigationMobile
    },
    data(){
        return {
            // stores the state of the api (received or not received)
            isSkeletonLoading: true,
        }
    },
    methods :{

    }
}
</script>

<style scoped>
.navContainer{
    padding: 1rem 2rem;
    /*position: sticky; 
    top: 0; 
    z-index: 999; */
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



.button-option{
    padding: 0;
}

/* text styles */
.short-url{
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.long-url{
    font-size: 0.875rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 14rem;
}

.p-date{
    font-size: 0.875rem;
    white-space: nowrap;
    color: #8a8a8a;
}

</style>