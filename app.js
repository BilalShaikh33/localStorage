
var userObj = []
function setData() {
    var users = localStorage.getItem("USERDATA")
    console.log(users)
    console.log(JSON.parse(users))
    userObj = JSON.parse(users) || []
}
setData()



function signUp() {

    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    if (email === "" || password === "") {
        Toastify({
            text: "Please Enter",
            duration: 1000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();

    }

    else {
        var userExist = false
        for (let i = 0; i < userObj.length; i++) {
            console.log(userObj[i]["email"])
            if (userObj[i]["email"] == email) {
                userExist = true
                break

            }
        }
    }
    if (userExist == true) {
        Toastify({
            text: "This Email already exist",
            duration: 1000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
    else {
        userObj.push({
            email: email,
            password: password,
        })
        Toastify({
            text: "User sign Up successful",
            duration: 1000,
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            // close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
        email.value = ""
        password.value = ""
        localStorage.setItem("USERDATA", JSON.stringify(userObj))
    }
}

var userimg = document.getElementById("userimg")
var userImgUrl;

function uploadimg() {
    console.log(userimg.files[0].size)
    var imgSize = userimg.files[0].size / 1024 / 1024
    console.log(imgSize)

    if (imgSize > 2) {

        console.log("please select image less than 2 mb ")


    }
    else {
        const formdata = new FormData();
        formdata.append("file", userimg.files[0],);
        formdata.append("upload_preset", "Storage-admin-ecom");

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch("https://api.cloudinary.com/v1_1/da8cjlsun/image/upload", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.secure_url)
                userImgUrl = result.secure_url
            
        
            })
            
            .catch((error) => console.error(error));
    }


}




