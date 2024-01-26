// for diplaying html


const postcontainer=document.querySelector('.posts');
function displayposts(posts){
    postcontainer.innerHTML=posts.map(items=> `
    <div class="post-item">
    <h3>${items.title}</h3>
    <p>${items.body}</p>
    </div>
    
    ` ).join('');

    }

    //using fetch method

    // fetch("https://jsonplaceholder.typicode.com/posts")
//     function fet(){
//          return fetch("https://jsonplaceholder.typicode.com/posts") 
//     };

//    fet()
//     .then((response)=>response.json())
//     .then((data)=>displayposts(data))
//     .catch((error)=>console.log((error)));




    //using async await

    // async function(){
    //     const res=fetch("https://jsonplaceholder.typicode.com/posts");
    //     const response =await res;
    //     try{
    //         response.json();
    //         displayposts(response)

    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    //above is my wrong code   syntax bhul gaya tha cry aa raha
  
    async function fetchData() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            // if (!response.ok) {
            //     throw new Error(`HTTP error! Status: ${response.status}`);
            // }

            //this if statement can be removed but its a good practice
            const data = await response.json();
            displayposts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    fetchData();
