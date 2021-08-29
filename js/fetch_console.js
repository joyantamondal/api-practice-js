const loadComment =()=>{
 fetch('https://jsonplaceholder.typicode.com/comments')
 .then(res=>res.json())
 .then(data=>displayLoadResults(data))
}
const displayLoadResults = comments =>{
    const commentsArea = document.getElementById('comments-area');
   comments.forEach(comment => {
      const div  =document.createElement('div');
        div.innerHTML= `
            <div class="comment mt-4 text-justify ">
                <h4>CN: <small>${comment.id}</small> </h4><br>
                <h4>Name: <small>${comment.name}</small> <h4><br>
                <h4>Email: <small>${comment.email}</small><h4><br>
                <p>Comment: <small>${comment.body}</small></p><br>
            </div> 
`;
        commentsArea.appendChild(div);
       
   });
}