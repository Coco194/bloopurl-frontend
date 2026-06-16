<template>

<div class="d-flex" style="height: 100dvh;">
    
    <!-- sidebar -->
    <side-navigation></side-navigation>

    <!-- canvas -->
    <div class="container overflow-scroll overflow-scroll-md my-2" style="overflow-x: hidden!important;">
        
        <!-- Sidebar button and breadcrumb navigation -->
        <div class="d-flex flex-column flex-sm-row sticky-top bg-white pt-3 pb-3" style="min-height: 4.45rem; border-bottom: 0px solid lightgrey;">
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
        <div class="row g-3 m-0 pb-3">       
            <div class="col-12 col-lg-6 col-xl-6">
                <div class="card">
                    <div class="card-body p-4">
                        <h6 class="mb-2 text-body-primary fw-bold">Export a link</h6>
                        <p class="card-text" style="font-size: 0.875rem;">Download one of your links in JSON format</p>
                        <a href="http://localhost:8000/api/3/stats" style="text-decoration: none;">
                            <button class="btn btn-dark d-flex align-items-center gap-2" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                </svg>
                                <span style="font-size: 0.875rem; ">Download link</span>                
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-6">
                <div class="card">
                    <div class="card-body p-4">
                        <h6 class="mb-2 text-body-primary fw-bold">Export all links</h6>
                        <p class="card-text" style="font-size: 0.875rem;">Download all your links in JSON format</p>
                        <a href="http://localhost:8000/api/3/stats?download=all" style="text-decoration: none;">
                            <button class="btn btn-dark d-flex align-items-center gap-2" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                </svg>
                                <span style="font-size: 0.875rem; ">Download links</span>                
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-6">
                <div class="card">
                    <div class="card-body p-4">
                        <h6 class="mb-2 text-body-primary fw-bold">Import links</h6>
                        <p class="card-text" style="font-size: 0.875rem;">Import your links in JSON format</p>
                        <form>
                            <div class="input-group">
                                <input type="file" class="form-control" style="font-size: 0.875rem;" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                                <button type="reset" class="btn btn-light">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-6 col-xl-6">
                <div class="card">
                    <div class="card-body p-4">
                        <h6 class="mb-2 text-body-primary fw-bold">Export link analytics in JSON</h6>
                        <p class="card-text">Download all analytics related to a link in JSON</p>
                        <button class="btn btn-dark d-flex align-items-center gap-2" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                            </svg>
                            <span style="font-size: 0.875rem; ">Download analytics</span>                
                        </button>
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
import SideNavigationMobile from '../components/sideNavigationMobile.vue';


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
.btn {
    border: none;
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
    color: #6a6a6a;
}

</style>