const loadComment = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayLoadResults(data));
};
loadComment();
const displayLoadResults = (comments) => {
  const commentsArea = document.getElementById("comments-area");

  comments.forEach((comment) => {
    const div = document.createElement("div");
    div.innerHTML = `
           <button onclick="loadCommentById('${comment.id}')">
               <div class="comment mt-4 text-justify  ">
                   <h4>CN: <small>${comment.id}</small> </h4><br>
                   <h4>Email: <small>${comment.email}</small><h4><br>
                   <p>Comment: <small>${comment.body}</small></p><br>
                    </button>
               </div> 
   `;
    commentsArea.appendChild(div);
  });
};
const loadCommentById = (commentid) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${commentid}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => commentDisplayDetails(data));
};
const commentDisplayDetails = (comments) => {
  const singleCOmment = document.getElementById("single-comment");
  singleCOmment.innerHTML = `
  <h4>Name: ${comments.name}</h4>
   <p>email:${comments.name} </p>
    <p>post id: ${comments.postId}</p>`;
  singleCOmment.innerText = ` email:${comments.name} <br> post id: ${comments.postId}`;
  singleCOmment.innerText = ` email:${comments.name} <br> post id: ${comments.postId}`;
  singleCOmment.appendChild(p);
};
