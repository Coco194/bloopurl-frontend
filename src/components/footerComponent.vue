<template>
<div class="container-fluid justify-content-center pageContainer">

    <footer class="container navContainer d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> 
        <div class="col-md-4 d-flex align-items-center"> 

            <span class="mb-3 mb-md-0 text-body-secondary">
                © 2025 BloopUrl, Inc
            </span> 
        </div> 
        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex"> 
            <li class="ms-3">
                <a class="text-body-secondary" href="#" aria-label="Instagram">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" style="max-width: 24px;">
                </a>
            </li> 
            <li class="ms-3">
                <a class="text-body-secondary" href="#" aria-label="Instagram">
                    <img src="../assets/logo.png" class="img-fluid rounded-start" style="max-width: 24px;">
                </a>
            </li> 
        </ul> 
    </footer> 
    
</div>
</template>

<script>
export default{

}
</script>

<style>
.footerImg{
    vertical-align: middle !important;
    width: 100%;
    height: auto;
    width: calc(17px + 6 * ((100vw - 320px) / 680)); 
}

.pageContainer{
    padding: 2rem 2rem;
}

</style>