
async function getData(){
    const url = "http://localhost/linktree/urls?URL=R"
    try{
        const response = await fetch(url);
        console.log("Raw response:", response);
        if(!response.ok)
            throw new Error("Response status: ${response.status}");

        const result = await response.json();
        console.log(result);
    }catch(error){
        console.error(error.message);
    } 
}

getData();

/*
const data = {
    URL: "https://coco194.github.io/portfolio-vue/"
};

fetch("http://localhost/linktree/public/index.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(result => {
    console.log("shortened URL:", result.shortURL);
})
.catch(error => console.error("error:", error));*/