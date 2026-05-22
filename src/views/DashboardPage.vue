<template>

<div class="container pageContainer">
    
    <div class="row mb-4">
        <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '/';">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#" class="link-underline link-underline-opacity-0">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </nav>
    </div>
    <div class="row mb-2">
        <div class="col-6 col-md-5 d-flex justify-content-between align-items-center pb-3 pb-md-0">
            <button class="btn btn-dark d-flex align-items-center gap-2" title="Create link" data-bs-toggle="modal" data-bs-target="#createModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                Create link                
            </button>
        </div>
        <div class="col-6 col-md-4 d-flex justify-content-end px-auto px-md-0 pb-3 pb-md-0">
            <div class="dropdown">
                <button class="btn btn-light d-flex align-items-center gap-2" title="Other options" type="button" data-bs-offset="-80, 0" data-bs-toggle="dropdown" aria-expanded="false" style="border: 1px solid lightgray;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    {{ sortOption }}
                </button>

                <!-- dropdown button -->
                <ul class="dropdown-menu dropdown-menu-start">
                    <li><h6 class="dropdown-header">Options</h6></li>
                    <li><a href="#" class="dropdown-item" @click.prevent="setSort('asc')">Ascending</a></li>
                    <li><a href="#" class="dropdown-item" @click.prevent="setSort('desc')">Descending</a></li>
                </ul>   
            </div>  
        </div>
        
        <div class="col-12 col-md-3 d-flex justify-content-between">
            <input class="form-control" id="search" list="options" placeholder="Search links..." v-model="searchBar" @change="searchUrl()">
            <!--<datalist id="options">
                <option v-for="url in urls" :key="url.id" :value="url.short_url">{{ "https://localhost/api/urls/" + url.short_url }}</option>
            </datalist> -->           
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-12">
            <hr>
        </div>
    </div>

    <!-- skeleton loader -->
     <div class="row g-4" v-if="isSkeletonLoading">
        <skeleton v-for="n in 9" :key="n"></skeleton>        
     </div>

    <!-- spinner loader -->
    <div class="d-flex justify-content-center py-5" v-if="isSpinnerLoading">
        <spinner></spinner>
    </div>

    <!-- Cards UI -->
    <div class="row g-4" v-if="urls.length >= 1">        
        <div class="col-12 col-lg-6 col-xl-4" v-for="url in urls" :key="url.id">
            <div class="p-4" style="border: 1px solid rgb(214, 214, 214); border-radius: 1rem; box-shadow: 0 1px 3px rgb(200, 200, 200);">
                <!--
                <div class="d-flex justify-content-start align-items-center pb-2">
                    <span v-if="url.status === 'active'" class="badge text-bg-success">{{ url.status }}</span>
                    <span v-else class="badge text-bg-danger">{{ url.status }}</span>
                </div>
                -->
                <!-- long url and buttons section -->
                <div class="d-flex justify-content-between align-items-center pb-3" >
                    <router-link :to="{ name: 'linkPage', params: { id: url.id } }" class="router-link-active nav-link">
                        <div class="d-flex align-items-center gap-2" style="overflow: auto;">
                            <!--<img src="../assets/logo.png" alt="" width="6% ">-->
                            <p class="short-url m-0" style="text-decoration: none;">{{ "http://localhost/api/" + url.short_url }}</p>
                            <span v-if="url.status === 'active'" class="badge text-bg-success">{{ url.status }}</span>
                            <span v-else class="badge text-bg-danger">{{ url.status }}</span>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>                 
                        </button>
                        
                        <button class="btn button-option d-flex align-items-center" title="Other options" type="button" data-bs-offset="-70, 0" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="dropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="gray" class="bi bi-three-dots" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                                    </svg>

                                <!-- dropdown -->
                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item" @click="afterDeleteUrl(url)">Delete</button></li>
                                    <li><button class="dropdown-item">Share</button></li>
                                    <li><button class="dropdown-item">Some option</button></li>
                                </ul>   
                            </div>  
                        </button>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center ">
                    <div class="d-flex align-items-center gap-1" style="overflow: auto;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                        </svg>
                        <p class="long-url m-0">
                            <a :href="url.longUrl" target="_blank" >{{ url.long_url }}</a>
                            <!--<a href="">{{ url.URL }}</a>-->
                        </p>
                    </div>
                    
                    <p class="m-0 p-date">{{ url.created_at }}</p>
                    
                </div>
            </div>
        </div>
    </div>
    <div class="row g-4" v-if="urls.length <= 0 && !isSpinnerLoading">
        <div class="col-12" style="text-align: center;">
            <p>Hmm looks empty</p>    
        </div>
        
    </div>
</div>


<!-- create modal -->
<div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModal" aria-hidden="true">
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
                        <input type="text" class="form-control" id="ModalUrl" placeholder="https://example.com" style="font-size: 0.875rem;" v-model="url">
                    </div>
                    <div class="mb-3">
                        <label for="ModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Slug</label>
                        <input type="text" class="form-control" id="ModalSlug" placeholder="instapost124" style="font-size: 0.875rem;" v-model="slug">
                    </div>
                    <div class="mb-3">
                        <label for="ModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                        <textarea class="form-control" id="ModalComment" placeholder="Some comment ..." style="font-size: 0.875rem;" v-model="comment"></textarea>
                    </div>
                    <div class="mb-0">
                        <label for="ModalExpiration" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Expiration (yy-mm-dd)</label> 
                        <input class="form-control" id="dateInput" placeholder="Enter a date" style="font-size: 0.875rem; color: #0a0a0a;" v-model="expires_at">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button class="btn btn-light" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;">Close</button>
                <button class="btn btn-dark"  data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="afterInsertUrl()">Save</button>
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
                        <input type="text" class="form-control" id="ModalUrl" :placeholder="this.url" style="font-size: 0.875rem;" v-model="url">
                    </div>
                    <div class="mb-3">
                        <label for="ModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Slug</label>
                        <input type="text" class="form-control" id="ModalAlias" placeholder="instapost124" style="font-size: 0.875rem;" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="ModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                        <textarea class="form-control" id="ModalComment" :placeholder="this.comment" style="font-size: 0.875rem;" v-model="comment"></textarea>
                    </div>
                    <div class="mb-0">
                        <label for="ModalExpiration" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Expiration (yy-mm-dd)</label> 
                        <input class="form-control" id="ModalExpiration" placeholder="Enter a date" style="font-size: 0.875rem; color: #0a0a0a;" v-model="expires_at">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button class="btn btn-light " data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;">Close</button>
                <button class="btn btn-dark" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="afterUpdateUrl()">Save</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import skeleton from "../components/skeletonComponent.vue"
import spinner from "../components/spinnerComponent.vue"


export default{
    mounted(){
        this.refreshUrl();
    },
    components: {
        skeleton,
        spinner
    },
    data(){
        return {
            // stores the state of the api (received or not received)
            isSkeletonLoading: true,
            isSpinnerLoading: false,

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
                await fetch("http://localhost:8000/api/urls", {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => this.urls = data)
                .then(data => console.log(data));
            }catch(e){
                console.log(e);
            }finally{
                // set loading as false to stop showing loading animation
                this.isSkeletonLoading = false;
            }
        },
        async insertUrl(){
            try{
                await fetch("http://localhost:8000/api/urls", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        url: this.url,
                        slug: this.slug,
                        comment: this.comment,
                        expires_at: this.expires_at
                    })
                })
                .then(response => response.json()) 
                .then(data => console.log("Response:", data))
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
                const endpoint = "http://localhost:8000/api/urls/" + this.selectUrl;

                await fetch(endpoint, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
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

            this.isSpinnerLoading = true;

            try{
                await fetch("http://localhost:8000/api/urls/filter?url=" + this.searchBar, {
                    method: "GET"
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
                this.isSpinnerLoading = false;
            }
        },
        async deleteUrl(url){
            try{
                const endpoint = "http://localhost:8000/api/urls/" + url.short_url;
                
                await fetch(endpoint, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
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
                    method: "GET"
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
            this.comment = url.comment ?? "Hmm no comment here";
            this.expires_at = url.expires_at ?? null;
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
    color: #6a6a6a;
}

</style>