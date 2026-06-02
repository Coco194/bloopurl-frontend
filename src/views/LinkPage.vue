<template>

<div class="container pageContainer pb-0">
    <div class="row">
        <div class="col-12">
            <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '/';">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" aria-current="page">Dashboard</li>
                    <li class="breadcrumb-item" aria-current="page">Link</li>
                    <li class="breadcrumb-item active">{{ this.urls.short_url }}</li>
                </ol>
            </nav>
        </div>
    </div>

</div>


<div class="container pageContainer">
    <div class="row">
        <div class="col-12" >
            <div class="rounded-3 p-4 w-100 shadow-sm" style="border: 1px solid lightgray; box-shadow: 0px 0px 6px rgb(200, 200, 200);">
                <div class="d-flex justify-content-between align-items-center pb-3">
                    <a href="" class="router-link-active nav-link" style="overflow: auto;">
                        <div class="d-flex align-items-center gap-2" >
                            <img src="../assets/logo.png" alt="" width="5% ">
                            <p class="short-url m-0">http://localhost:8000/api/{{ this.urls.short_url }}</p>
                            <span v-if="this.urls.status === 'active'" class="badge text-bg-success">{{ this.urls.status }}</span>
                            <span v-else class="badge text-bg-danger">{{ this.urls.status }}</span>
                        </div>
                    </a>

                    <div class="d-flex align-items-center gap-3">
                        <button class="btn button-option d-flex align-items-center" title="Copy link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                            </svg>           
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg d-none" viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
                            </svg>         
                        </button>

                        <button class="btn button-option d-flex align-items-center" title="Edit link" data-bs-toggle="modal" data-bs-target="#editModal" @click="editUrl(urls)">
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

                                <ul class="dropdown-menu">
                                    <li><button class="dropdown-item">Share</button></li>
                                    <li v-if="this.urls.status === 'active'"><button class="dropdown-item" @click="updateStatus(url)">Deactivate</button></li>
                                    <li v-else><button class="dropdown-item" @click="updateStatus(url)">Activate</button></li>
                                    <li><button class="dropdown-item" @click="afterDeleteUrl(url)">Delete</button></li>
                                </ul>   
                            </div>  
                        </button>
                    </div>
                </div>

                <div class="d-flex justify-content-between align-items-center ps-4" style="border-left: 4px solid #e3e3e3;">
                    {{this.urls.comment}}
                </div>

                <div class="d-flex justify-content-between align-items-center pt-4">
                    <div class="d-flex align-items-center gap-1" style="overflow: auto;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                        </svg>
                        <p class="long-url m-0">
                            <a href="#" target="_blank">{{ this.urls.long_url }}</a>
                        </p>
                    </div>
                    
                    <p class="m-0 p-date">{{ this.urls.created_at }}</p>
                    
                </div>
            </div>
        </div>
    </div>

    <!-- summary stats -->
    <div class="row g-4 mb-4"> 
        <h3 class="pt-5">Summary statistics</h3>
        <div class="col-12 col-md-4">
            <div class="card rounded-3 p-2">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <p class="card-title mb-0">Visitors</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"/>
                        </svg>
                    </div>
                    <h2 class="fw-bold">↑{{ this.urls.visit_count }}</h2>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card rounded-3 p-2">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <p class="card-title mb-0">Clicks</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hand-index-thumb" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025"/>
                        </svg>
                    </div>                    
                    <h2 class="fw-bold">↑928</h2>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4">
            <div class="card rounded-3 p-2">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <p class="card-title mb-0">Referers</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                        </svg>
                    </div>                    
                    <h2 class="fw-bold">↑{{ stats.referer_count }}</h2>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row mb-4">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <lineChart v-if="loaded" :dates="dates" :data="data" class="rounded-3" style="border: 1px solid lightgray;">Chart couldnt be loaded</lineChart>
                </div>
            </div>
        </div>
    </div>

    <div class="row mb-4">
        <div class="col-6 d-flex">
            <div class="card rounded-3 p-4 w-100">
                <table class="table table-hover caption-top">
                    <caption>Languages</caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col" class="text-end">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in stats.languages" :key="i.language">
                            <td>{{ i.language }}</td>
                            <td class="text-end">{{ i.total }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-6 d-flex">
            <div class="card rounded-3 p-4 w-100 ">
                <table class="table table-hover caption-top">
                    <caption>Browsers</caption>
                    <thead>
                        <tr>
                            <th scope="col">Browser</th>
                            <th scope="col" class="text-end">Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in stats.browsers" :key="i.user_agent">
                            <td>{{ i.user_agent }}</td>
                            <td class="text-end">{{ i.total }}</td>
                        </tr>
                    </tbody>
                </table>
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
                        <input type="text" class="form-control" id="ModalUrl" :placeholder="this.urls.long_url" style="font-size: 0.875rem;" v-model="url">
                    </div>
                    <div class="mb-3">
                        <label for="ModalAlias" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Slug</label>
                        <input type="text" class="form-control" id="ModalAlias" :placeholder="this.urls.short_url" style="font-size: 0.875rem;" readonly>
                    </div>
                    <div class="mb-3">
                        <label for="ModalComment" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Comment</label>
                        <textarea class="form-control" id="ModalComment" :placeholder="this.urls.comment" style="font-size: 0.875rem;" v-model="comment"></textarea>
                    </div>
                    <div class="mb-0">
                        <label for="ModalExpiration" class="form-label" style="font-size: 0.875rem; color: #0a0a0a;">Expiration (yy-mm-dd)</label> 
                        <input class="form-control" id="ModalExpiration" placeholder="Enter a date" style="font-size: 0.875rem; color: #0a0a0a;" v-model="expires_at">
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button class="btn btn-light " data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;">Close</button>
                <button class="btn btn-dark" data-bs-dismiss="modal" style="border: 1px solid lightgray; font-size: 0.875rem;" @click="afterUpdateUrl()">Update</button>
            </div>
        </div>
    </div>
</div>
</template>


<script>

import lineChart from '../components/lineChart.vue';

export default{
    mounted(){
        this.refreshUrl();
        this.getStatistics();
    },
    components: {
        lineChart
    },
    data(){
        return{
            // store the short_url (not decoded)
            id : this.$route.params.id,
            // stores the api response as an js object
            urls: {},     

            // statistics
            stats: String,
            
            // for the edit link modal
            url: "",
            slug: "",
            comment: "",
            expires_at: "",

            // chart data
            loaded: false,
            dates: [],
            data: []
        }
    },
    methods:{
        async afterUpdateUrl(){
            await this.updateUrl();
            await this.refreshUrl();
        },
        async refreshUrl(){
            try{
                await fetch("http://localhost:8000/api/urls/filter?url=" + this.id, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                    }
                })
                .then(response => response.json())
                .then(data => this.urls = data)
                .then(data => console.log(data));

                console.log(this.urls.long_url);
            }catch(e){
                console.log(e);
            }

        },
        async getStatistics(){
            try{
                await fetch("http://localhost:8000/api/" + this.id + "/statistics", {
                    method: "GET"
                })
                .then(response => response.json())
                .then(data => this.stats = data)
                .then(data => console.log(data));

                this.dates = this.stats.dates;
                this.data = this.stats.data;
            }catch(e){
                console.log(e);
            }finally{
                this.loaded = true;
            }

            //console.log(this.stats);
            //console.log(this.stats.datasets);
        },
        async updateUrl(){

            try{
                const token = decodeURIComponent(
                    document.cookie
                        .split('; ')
                        .find(row => row.startsWith('XSRF-TOKEN='))
                        .split('=')[1]
                )

                const endpoint = "http://localhost:8000/api/urls/" + this.id;

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
        async updateStatus(){
            try{
                const token = decodeURIComponent(
                    document.cookie
                        .split('; ')
                        .find(row => row.startsWith('XSRF-TOKEN='))
                        .split('=')[1]
                )

                const endpoint = "http://localhost:8000/api/urls/" + this.urls.short_url;

                await fetch(endpoint, {
                    method: "PATCH",
                    credentials: "include",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-XSRF-TOKEN": token
                    },
                    body: JSON.stringify({
                        shortUrl: this.urls.short_url,
                        status: this.urls.status
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
        // Set the field inside edit url according to the API response data 
        editUrl(url){
            this.url = url.long_url;
            this.slug = url.short_url;
            this.comment = url.comment ?? "No comment set...";
            this.expires_at = url.expires_at ?? "Date not set...";
        },
        myVueMethod(){
            console.log("Hello");
            console.log(this.id);
            console.log(this.$route.params.id);
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
        padding: 2rem 2rem;
    }
}

/* text styles */
.short-url{
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>