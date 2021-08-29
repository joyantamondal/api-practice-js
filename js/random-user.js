const loadUserData = ()=>{
  fetch('https://randomuser.me/api/')
  .then(res=>res.json())
  .then(data=>displayUser([data.results[0]]))
}
loadUserData()
const displayUser = users =>{
    // console.log(users.location);
    const userInfo= document.getElementById('users-info')
    users.forEach(userdata => {
        console.log(userdata.name)
        userInfo.innerHTML= `
        
        <div class="row">
        <div class="col-lg-4">
            <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="${userdata.picture.large}" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
                        <div class="mt-3">
                            <h4>${userdata.name.title} ${userdata.name.first} ${userdata.name.last}</h4>
                            <p class="text-secondary mb-1">${userdata.location.street.name}</p>
                        </div>
                    </div>
                    <hr class="my-4">
                </div>
            </div>
        </div>
        <div class="col-lg-8">
            <div class="card">
                <div class="card-body">
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" value="${userdata.name.title} ${userdata.name.first} ${userdata.name.last}">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" value="${userdata.email}">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" value="${userdata.phone}">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-3">
                            <h6 class="mb-0">Address</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            <input type="text" class="form-control" value="${userdata.location.street.number} ${userdata.location.street.name} ${userdata.location.city}${userdata.location.state} ${userdata.location.country}  ">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        `;      
        
    });
   
}