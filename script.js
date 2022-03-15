console.clear();

const loginBtn = document.getElementById('login');
const signupBtn = document.getElementById('signup');

loginBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode.parentNode;
	Array.from(e.target.parentNode.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			parent.classList.remove('slide-up')
			signupBtn.parentNode.classList.add('slide-up')
		}
	});
});

signupBtn.addEventListener('click', (e) => {
	let parent = e.target.parentNode;
	Array.from(e.target.parentNode.classList).find((element) => {
		if(element !== "slide-up") {
			parent.classList.add('slide-up')
		}else{
			loginBtn.parentNode.parentNode.classList.add('slide-up')
			parent.classList.remove('slide-up')

		}
	});
});

function login(){
    var loginarr = new Array();
    userinfo1 = new Object();
    userinfo2 = new Object();
    
    userinfo1 = {
        email: "admin",
        password: btoa("admin"),
        username: admin
    };
    userinfo2 = {
        email: "user",
        password: btoa("123"),
        username: user
    }
    loginarr.push(userinfo1);
    loginarr.push(userinfo2);

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    sessionsStorage.setItem("Current Logged in", username);
    localStorage.setItem('all_users',JSON.stringify(loginarr));

    a=JSON.parse((localStorage.getItem("all_users")));
    a.push({name: username, password: password});
    localStorage.setItem('name',JSON.stringify(loginarr));
    for(var i=0; i<loginarr.length; i++)
        {
            var li = document.createElement("li");
            li.innerHTML=loginarr[i]['name'];
            document.getElementById("listuser").appendChild(li);
        }

    if(email == userinfo1.email && password == atob(userinfo1.password)){
        alert("Login Successful");
        window.location.href = "admin.html";
    }
}

//parentnode corresponds to the parent tag of the child node