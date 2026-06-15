<template>

<div class="d-flex" style="height: 100dvh;">
    
    <!-- sidebar -->
    <side-navigation></side-navigation>

    <!-- canvas -->
    <div class="container overflow-scroll overflow-scroll-md my-2" style="overflow-x: hidden!important;">
        <!--
        <div class="row sticky-top bg-white mt-4 mb-2" style="height: 3.5rem;">
            <div class="col-12 col-sm-6 d-flex align-items-center">
                <div class="d-flex align-items-center ">
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

            <div class="col-12 col-sm-6 d-flex align-items-center justify-content-end">
                <div class="d-flex align-items-center">
                    <button class="btn btn-dark d-flex align-items-center gap-1" type="button" data-bs-toggle="modal" data-bs-target="#createModal" style="border: 1px solid black;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                        <span style="font-size: 0.875rem;">Create link</span>
                    </button>
                    <div class="dropdown">
                        <button class="btn btn-light d-flex align-items-center gap-1" type="button" data-bs-offset="-80, 0" data-bs-toggle="dropdown" aria-expanded="false" style="border: 1px solid lightgrey;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                            </svg>
                            <span style="font-size: 0.875rem;">{{ sortOption }}</span>
                        </button>    
                            <ul class="dropdown-menu dropdown-menu-start">
                                <li><h6 class="dropdown-header">Options</h6></li>
                                <li><a href="#" class="dropdown-item" @click.prevent="setSort('asc')">Ascending</a></li>
                                <li><a href="#" class="dropdown-item" @click.prevent="setSort('desc')">Descending</a></li>
                            </ul>                                     

                    </div>
                    <div>
                        <input class="form-control" style="font-size: 0.875rem;" id="search" list="options" placeholder="Search for links..." v-model="searchBar" @change="searchUrl()">
                        <datalist id="options">
                            <option v-for="url in urls" :key="url.id" :value="url.short_url">{{ "https://localhost/api/urls/" + url.short_url }}</option>
                        </datalist>      
                    </div>  
                </div>
            </div>
        </div>
        -->

        <!-- desktop ui -->
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
            
            <div class="d-flex flex-column flex-sm-row px-2 pt-4 pb-0 py-sm-0 gap-2">
                <div class="d-flex gap-2 justify-content-between pb-1 pb-sm-0">
                    <button class="btn btn-dark d-flex align-items-center gap-1" type="button" data-bs-toggle="modal" data-bs-target="#createModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                        <span style="font-size: 0.875rem;">Create link</span>               
                    </button>
                    
                    <button class="btn btn-light d-flex align-items-center gap-1" type="button" data-bs-offset="-80, 0" data-bs-toggle="dropdown" aria-expanded="false" style="border: 1px solid lightgray;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                        </svg>
                        <span style="font-size: 0.875rem;">{{ sortOption }}</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-start">
                        <li><h6 class="dropdown-header">Options</h6></li>
                        <li><a href="#" class="dropdown-item" @click.prevent="setSort('asc')">Ascending</a></li>
                        <li><a href="#" class="dropdown-item" @click.prevent="setSort('desc')">Descending</a></li>
                    </ul>   
                </div>
                <div class="d-flex">
                    <input class="form-control" id="search" list="options" placeholder="Search for links..." v-model="searchBar" @change="searchUrl()">
                    <datalist id="options">
                        <option v-for="url in urls" :key="url.id" :value="url.short_url">{{ "https://localhost/api/urls/" + url.short_url }}</option>
                    </datalist>      
                </div>           
            </div>            
        </div>

        <div class="container g-3 m-0">
            <hr class="mt-0">
        </div>

        <!-- cards UI-->
        <div class="row g-3 m-0 pb-3" v-if="urls.length >= 1 && !isSkeletonLoading">       
            <div class="col-12 col-lg-6 col-xl-4" v-for="url in urls" :key="url.id">
                <div class="p-4 rounded-3" style="border: 1px solid rgb(214, 214, 214);">
                    
                    <!-- long url and buttons section -->
                    <div v-if="url.status === 'active'" class="badge bg-success-subtle text-success">
                        online
                    </div>
                    <div v-else class="badge bg-danger-subtle text-danger">
                        offline
                    </div>

                    <div class="d-flex justify-content-between align-items-center pb-2 pt-2 gap-3" >

                        <router-link :to="{ name: 'Link', params: { id: url.id } }" class="router-link-active nav-link" style="min-width: 0;">
                            <div class="d-flex align-items-center gap-2" style="overflow: hidden;">
                                <img src="../assets/logo.png" alt="" width="16rem">                                
                                <p class="short-url m-0" style="text-decoration: none;">{{ "http://localhost/api/" + url.short_url }}</p>
                            </div>
                        </router-link>

                        <!-- cards UI buttons -->
                        <div class="d-flex align-items-center gap-3">
                            <button class="btn button-option d-flex align-items-center" title="Copy link" @click="copyUrl(url)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                                </svg>           
                            </button>

                            <button class="btn button-option d-flex align-items-center" title="Edit link" data-bs-toggle="modal" data-bs-target="#editModal" @click="editUrl(url)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>                 
                            </button>
                            
                            <button class="btn button-option d-flex align-items-center" title="Other options" type="button" data-bs-offset="-70, 0" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="dropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                    </svg>

                                    <!-- dropdown -->
                                    <ul class="dropdown-menu ">             
                                        <li @click="updateStatus(url)">
                                            <div class="d-flex align-items-center dropdown-item gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                                                    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
                                                </svg>                                        
                                                <span style="font-size: 0.875rem; font-weight: 400;">Share</span>
                                            </div>
                                        </li>                   
                                        <li v-if="url.status === 'active'" @click="updateStatus(url)">
                                            <div class="d-flex align-items-center dropdown-item gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M7.5 1v7h1V1z"/>
                                                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                                                </svg>                                            
                                                <span style="font-size: 0.875rem; font-weight: 400;">Deactivate</span>
                                            </div>
                                        </li>      
                                        <li v-else @click="updateStatus(url)">
                                            <div class="d-flex align-items-center dropdown-item gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M7.5 1v7h1V1z"/>
                                                    <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                                                </svg>                                            
                                                <span style="font-size: 0.875rem; font-weight: 400;">Activate</span>
                                            </div>
                                        </li>                
                                        <li @click="afterDeleteUrl(url)">
                                            <div class="d-flex align-items-center dropdown-item gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-trash text-danger" viewBox="0 0 16 16" style="stroke-width: 0.25px; stroke: #D22B2B;">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                                </svg>                                            
                                                <span style="font-size: 0.875rem; font-weight: 400; color: #de5d5d;">Delete</span>
                                            </div>
                                        </li>
                                    </ul>   
                                </div>  
                            </button>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center ">
                        <div class="d-flex align-items-center gap-1" style="overflow: auto;">
                            <!--
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                            </svg>
                            -->
                            <p class="long-url m-0 me-2">
                                <a :href="url.longUrl" target="_blank" style="color: #6a6a6a;">{{ url.long_url }}</a>                                
                            </p>
                        </div>
                        <div class="d-flex align-items-center">
                            <p class="m-0 p-date" style="color: #8a8a8a;">{{ url.created_at }}</p>                      
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- empty state -->
        <div class="row g-3 m-0" v-if="urls.length == 0 && !isSkeletonLoading">
            <div class="position-relative p-4 text-center text-muted bg-body"> 
                <h1 class="text-body-emphasis">Nothing to see here yet</h1> 
                <p class="col-lg-6 mx-auto mb-4">
                    You haven't created any short links. Create a short link to get started by clicking the button below
                </p> 
                <button class="btn btn-primary px-4 mb-5" type="button" data-bs-toggle="modal" data-bs-target="#createModal">
                    Create link
                </button> 
            </div>
        </div>    

        <!-- skeleton loader -->
        <div class="row g-4" v-if="urls.length <= 0 && isSkeletonLoading">
            <skeleton v-for="n in 12" :key="n"></skeleton>        
        </div>
    </div>
</div>


<!-- offcanvas -->
<SideNavigationMobile></SideNavigationMobile>

<!-- create modal -->
<div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="createModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header pb-0 border-0">
                <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel">Create link</h1>               
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p style="font-size: 0.875rem; color: #6a6a6a;">This preview link is valid only for 24hours.</p>
                <form action="/" method="POST">
                    <div class="mb-3">
                        <label for="ModalUrl" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Url</label>
                        <input type="text" class="form-control" id="ModalUrl" placeholder="Enter a link..." style="font-size: 0.875rem;" v-model="url">
                    </div>
                    <div class="mb-3">
                        <label for="ModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Slug</label>
                        <input type="text" class="form-control" id="ModalSlug" placeholder="Enter a slug..." style="font-size: 0.875rem;" v-model="slug">
                    </div>
                    <div class="mb-3">
                        <label for="ModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                        <textarea class="form-control" id="ModalComment" placeholder="Enter a comment..." style="font-size: 0.875rem;" v-model="comment"></textarea>
                    </div>
                    <div class="mb-0">
                        <label for="ModalExpiration" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Expiration (yy-mm-dd)</label> 
                        <input class="form-control" id="dateInput" placeholder="Enter an expiration date..." style="font-size: 0.875rem; color: #0a0a0a;" v-model="expires_at">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button class="btn btn-light" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="clearForm()">Cancel</button>
                <button class="btn btn-dark" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="afterInsertUrl()">Create link</button>
            </div>
        </div>
    </div>
</div>

<!-- edit modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header pb-0 border-0">
                <h1 class="modal-title fs-5 fw-semibold" id="exampleModalLabel">Edit link</h1>               
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p style="font-size: 0.875rem; color: #6a6a6a;">This preview link is valid only for 24hours.</p>
                <form action="/" method="POST">
                    <div class="mb-3">
                        <label for="ModalUrl" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Url</label>
                        <input type="text" class="form-control" id="ModalUrl" placeholder="this.url" style="font-size: 0.875rem;" v-model="url">
                    </div>
                    <div class="mb-3">
                        <label for="ModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Slug</label>
                        <input type="text" class="form-control" id="ModalSlug" placeholder="this.slug" style="font-size: 0.875rem;" v-model="slug" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="ModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                        <textarea class="form-control" id="ModalComment" placeholder="Comment not set..." style="font-size: 0.875rem;" v-model="comment"></textarea>
                    </div>
                    <div class="mb-0">
                        <label for="ModalExpiration" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Expiration (yy-mm-dd)</label> 
                        <input class="form-control" id="ModalExpiration" placeholder="Date not set..." style="font-size: 0.875rem; color: #0a0a0a;" v-model="expires_at">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button class="btn btn-light " data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="clearForm()">Cancel</button>
                <button class="btn btn-dark" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="afterUpdateUrl()">Update</button>
            </div>
        </div>
    </div>
</div>


</template>

<script>
import skeleton from "../components/skeletonComponent.vue"
import SideNavigation from '../components/sideNavigation.vue';
import SideNavigationMobile from "../components/sideNavigationMobile.vue";


export default{
    mounted(){
        this.refreshUrl();
    },
    components: {
        skeleton,
        SideNavigation,
        SideNavigationMobile
    },
    data(){
        return {
            // stores the state of the api (received or not received)
            isSkeletonLoading: true,

            // stores the API response of refreshUrl() method
            urls: [],
            
            // "searchBar" stores search input and "selectedShortLink" stores the short link for modal edit link 
            searchBar: "",
            selectUrl: "", // for update() 
            sortOption: "asc",

            // for the create link modal
            url: "",
            slug: "",
            comment: "",
            expires_at: ""
        }
    },
    methods :{
        // "async" and "await" is used so that the page doesnt refresh before the deletion
        async afterInsertUrl(){
            // insert the url first, then refresh the page
            await this.insertUrl();
            await this.refreshUrl();
        },
        async afterUpdateUrl(){
            await this.updateUrl();
            await this.refreshUrl();
        },
        async afterDeleteUrl(url){
            await this.deleteUrl(url);
            await this.refreshUrl();
        },
        async refreshUrl(){
            try{
                const response = await fetch("http://localhost:8000/api/urls", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                    }
                });

                this.urls = await response.json();
                
                console.log(this.urls);
                // console.log(this.$route.meta.requiresAuth)
                // authentication 
                if(response.ok){
                    return;
                }else{                    
                    localStorage.setItem("logged_in", false);
                    //this.$router.push("/login");
                    return;
                }
            }catch(e){
                console.log(e);
            }finally{
                // set loading as false to stop showing loading animation
                this.isSkeletonLoading = false;
            }
        },
        async insertUrl(){
            try{
                const token = decodeURIComponent(
                document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
                )
            
                await fetch("http://localhost:8000/api/urls", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        url: this.url,
                        slug: this.slug,
                        comment: this.comment,
                        expires_at: this.expires_at
                    })
                })
                .then(response => response.json()) 
                .then(data => console.log("Response:", data));

            }catch(e){
                console.log(e);
            }finally{
                this.url = "";
                this.slug = "";
                this.comment = "";
                this.expires_at = "";

                console.log("Cleared the form after submitting");
            }
        },
        async updateUrl(){
            try{
                const token = decodeURIComponent(
                document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
                )

                const endpoint = "http://localhost:8000/api/urls/" + this.selectUrl;

                await fetch(endpoint, {
                    method: "PUT",
                    credentials: "include", 
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        longUrl: this.url,  
                        comments: this.comment,
                        expires_at: this.expires_at
                    })
                })
                .then(response => response.json()) 
                .then(data => console.log("Response:", data))
            }catch(e){
                console.log(e);
            }
        },
        async searchUrl(){
            // clear the contents inside urls array
            this.urls = [];

            // stop executing if there is no user input in the search bar
            if(this.searchBar == ""){
                this.refreshUrl();
                return;
            }

            this.isSkeletonLoading = true;

            try{
                await fetch("http://localhost:8000/api/urls/filter?url=" + this.searchBar, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                    }
                })
                .then(response => response.json())
                .then(data => {
                    // if there are no "keys" in the api response then do nothing (urls array is made empty initially)
                    if(Object.keys(data).length === 0){
                        //this.urls = [];
                        return;
                    }
                    this.urls.push(data);
                });  
            }catch(e){
                console.log(e);
            }finally{
                this.isSkeletonLoading = false;
            }
        },
        async deleteUrl(url){
            try{

                const token = decodeURIComponent(
                document.cookie
                    .split('; ')
                    .find(row => row.startsWith('XSRF-TOKEN='))
                    .split('=')[1]
                )

                const endpoint = "http://localhost:8000/api/urls/" + url.short_url;
                
                await fetch(endpoint, {
                    method: "DELETE",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                })
                .then(response => response.json()) 
                .then(data => console.log("Raw response:", data))

                console.log("Deleted: ", url);
            }catch(e){
                console.log(e);
            }

        },
        async setSort(method){
            this.loading = true;

            try{
                const endpoint = "http://localhost:8000/api/urls?sort=" + method; 

                await fetch(endpoint, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => this.urls = data);
            }catch(e){
                console.log(e);
            }finally{
                this.sortOption = method;
                this.loading = false;
            }
        },
        async updateStatus(url){
            try{
                const token = decodeURIComponent(
                    document.cookie
                        .split('; ')
                        .find(row => row.startsWith('XSRF-TOKEN='))
                        .split('=')[1]
                )

                const endpoint = "http://localhost:8000/api/urls/" + url.short_url;

                await fetch(endpoint, {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        shortUrl: url.short_url,
                        status: url.status
                    })
                })
                .then(response => response.json())
                .then(data => console.log("Response:", data))

                // refresh to update the status field
                this.refreshUrl();
            }catch(e){
                console.log(e);
            }
            
        },
        copyUrl(url){
            // copies text to the clipboard 
            navigator.clipboard.writeText("http://localhost:8000/api/" + url.short_url);
        },
        createUrl(){
            // clear out the placeholders if we opened 'edit' modal beforehand
            this.url = null;
            this.selectUrl = null;
            this.comment = null;
            this.expires_at = null;
        },
        editUrl(url){
            this.url = url.long_url;
            this.selectUrl = url.short_url ?? null;
            // set url as null if empty
            this.slug = url.short_url;
            this.comment = url.comment;
            this.expires_at = url.expires_at;
        },
        clearForm(){
            this.url = "";
            this.slug = "";
            this.comment = "";
            this.expires_at = "";
        }
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
    color: #8a8a8a;
}

</style>