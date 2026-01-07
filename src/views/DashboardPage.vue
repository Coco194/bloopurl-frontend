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
        <div class="col-6 col-md-5 d-flex justify-content-between pb-3 pb-md-0">
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create link                
            </button>
        </div>
        <div class="col-6 col-md-4 d-flex justify-content-end px-auto px-md-0 pb-3 pb-md-0">
            <div class="dropdown">
                <button class="btn btn-light d-flex align-items-center gap-2" title="Other options" type="button" data-bs-offset="-80, 0" data-bs-toggle="dropdown" aria-expanded="false" style="border: 1px solid lightgray;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                    Sort
                </button>

                <!-- dropdown button -->
                <ul class="dropdown-menu dropdown-menu-start">
                    <li><h6 class="dropdown-header">Options</h6></li>
                    <li><a href="#" class="dropdown-item" @click.prevent="setSort('ASC')">Newest first</a></li>
                    <li><a href="#" class="dropdown-item" @click.prevent="setSort('DESC')">Oldest first</a></li>
                </ul>   
            </div>  
        </div>
        
        <div class="col-12 col-md-3 d-flex justify-content-between">
            <input class="form-control" id="search" list="dataOptions" placeholder="Type to search..." v-model="searchBar" @input="searchUrl()">
            <datalist id="dataOptions">
                <option v-for="url in urls" :key="url.id" :value="url.shortURL">{{ url.shortURL }}</option>
            </datalist>            
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-12">
            <hr>
        </div>
    </div>

    <!-- create link modal -->
    <div class="row">
        <div class="col-12">
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="createLinkModalUrl" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">URL</label>
                                    <input type="text" class="form-control" id="createLinkModalUrl" placeholder="http://tinyurl.com" style="font-size: 0.875rem;" v-model="URL">
                                </div>
                                <div class="mb-3">
                                    <label for="createLinkModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Alias</label>
                                    <input type="text" class="form-control" id="createLinkModalAlias" placeholder="instapost124" style="font-size: 0.875rem;" readonly>
                                </div>
                                <div class="mb-0">
                                    <label for="createLinkModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                                    <input type="text" class="form-control" id="createLinkModalComment" placeholder="My comment ..." style="font-size: 0.875rem;" v-model="Comment">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="afterInsertUrl()">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- edit link modal -->
    <div class="row">
        <div class="col-12">
            <div class="modal fade" id="editLinkModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <label for="editLinkModalUrl" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">URL</label>
                                    <input type="text" class="form-control" id="editLinkModalUrl" :placeholder="this.editModalLink" style="font-size: 0.875rem;" v-model="URL">
                                </div>
                                <div class="mb-3">
                                    <label for="editLinkModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Alias</label>
                                    <input type="text" class="form-control" id="editLinkModalAlias" placeholder="instapost124" style="font-size: 0.875rem;" readonly>
                                </div>
                                <div class="mb-0">
                                    <label for="editLinkModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comments</label>
                                    <input type="text" class="form-control" id="editLinkModalComment" :placeholder="this.editModalComment" style="font-size: 0.875rem;">
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" @click="afterInsertUrl()">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- skeleton loader -->
    <div class="row g-4" v-if="loading">
        <div class="col-12 col-lg-6 col-xl-4" v-for="n in 9" :key="n">
            <div class="p-3" style="border: 1px solid rgb(214, 214, 214); border-radius: 1rem; box-shadow: 0 1px 3px rgb(200, 200, 200);">
                <p class="placeholder-glow mb-1">
                    <span class="placeholder placeholder-sm col-12"></span>
                </p>
                <p class="placeholder-glow mb-1">
                    <span class="placeholder placeholder-sm col-6"></span>
                </p>
                <p class="placeholder-glow mb-0">
                    <span class="placeholder placeholder-sm col-3"></span>
                </p>
            </div>
        </div>
    </div>

    <!-- spinner loader -->
    <div class="d-flex justify-content-center py-5" v-if="loading">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

    <!-- Cards UI -->
    <div class="row g-4">        
        <div class="col-12 col-lg-6 col-xl-4" v-for="url in urls" :key="url.id">
            <div class="p-4" style="border: 1px solid rgb(214, 214, 214); border-radius: 1rem; box-shadow: 0 1px 3px rgb(200, 200, 200);">

                <div class="d-flex justify-content-between align-items-center pb-3" >
                
                    <div class="d-flex align-items-center gap-2" style="overflow: auto;">
                        <img src="../assets/logo.png" alt="" width="6% ">
                        <p class="short-url m-0">{{ url.shortURL }}</p>
                    </div>

                    <!-- cards UI buttons -->
                    <div class="d-flex align-items-center gap-3">
                        <button class="btn button-option" title="Copy link" @click="copyUrl(url)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                            </svg>                    
                        </button>

                        <button class="btn button-option" title="Edit link" data-bs-toggle="modal" data-bs-target="#editLinkModal" @click="editUrl(url)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>                 
                        </button>

                        <button class="btn button-option" title="Other options" type="button" data-bs-offset="-70, 0" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="dropdown">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-three-dots" viewBox="0 0 16 16">
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

                <div class="d-flex justify-content-between ">
                    <div class="d-flex align-items-center gap-1" style="overflow: auto;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                        </svg>
                        <p class="long-url m-0">
                            <a :href="url.URL" target="_blank" >{{ url.URL }}</a>
                            <!--<a href="">{{ url.URL }}</a>-->
                        </p>
                    </div>
                    
                    <p class="m-0 p-date">{{ url.DATE }}</p>
                    
                </div>
            </div>
        </div>
    </div>
</div>



</template>

<script>

export default{
    mounted(){
        this.refreshUrl();
    },
    data(){
        return {
            // stores the state of the api (received or not received)
            loading: true,

            // stores the API response of refreshUrl() method
            urls: [],
            // stores the "URL" and "Comment" property in the "Create link" modal form
            URL: "",
            Comment: "",
            // "searchBar" stores search input and "selectedShortLink" stores the short link for modal edit link 
            searchBar: "",

            editModalLink: "",
            editModalComment: "No comment here ..."
        }
    },
    methods :{
        // "async" and "await" is used so that the page doesnt refresh before the deletion
        async afterInsertUrl(){
            // insert the url first, then refresh the page
            await this.insertUrl();
            await this.refreshUrl();
        },
        async afterDeleteUrl(url){
            await this.deleteUrl(url);
            await this.refreshUrl();
        },
        async refreshUrl(){
            await fetch("http://localhost/linktree-backend/urls", {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => this.urls = data);

            // set loading as false to stop showing loading animation
            this.loading = false;
        },
        async insertUrl(){
            await fetch("http://localhost/linktree-backend/urls", {
                method: "POST",
                body: JSON.stringify({
                    URL: this.URL,
                    Comment: this.Comment
                })
            })
            .then(response => response.json()) 
            .then(data => console.log("Raw response:", data))
            .catch(err => console.error(err));
        },
        async deleteUrl(url){
            const endpoint = url.shortURL;
            
            await fetch(endpoint, {
                method: "DELETE"
            })
            .then(response => response.json()) 
            .then(data => console.log("Raw response:", data))
            .catch(err => console.error(err));
        },
        setSort(method){
            this.newestUrlFirst(method);
        },
        // method for sorting option
        async newestUrlFirst(method){
            this.loading = true;
            const endpoint = "http://localhost/linktree-backend/urls?sort=" + method; 
            await fetch(endpoint, {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => this.urls = data);
            this.loading = false;
        },
        copyUrl(url){
            // copies text to the clipboard
            navigator.clipboard.writeText(url.shortURL);
        },
        editUrl(url){
            this.editModalLink = url.shortURL;

            // set url as null if empty
            if(url.Comments === ""){
                this.editModalComment = "";
            }

            this.editModalComment = url.Comments;
            
        },
        searchUrl(){
            //fetch("/linktree/links/" + this.searchBar)
            //console.log("/linktree/links/" + this.searchBar);
            //console.log(this.urls);
            
            for(let i=0; i < this.urls.length; i++){
                if(this.urls[i].shortURL == this.searchBar){
                    console.log(this.urls[i]);
                    break
                }
                
            }
        }
    }
}
</script>

<style>
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
    white-space: nowrap;
    color: #6a6a6a;
}

</style>