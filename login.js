
var userObj = []
function setData() {
    var users = localStorage.getItem("USERDATA")
    console.log(users)
    console.log(JSON.parse(users))
    userObj = JSON.parse(users) || []
}
setData()

function login() {

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
        var selectedIndex;
        for (let i = 0; i < userObj.length; i++) {

            console.log(userObj[i]["email"])
            if (userObj[i]["email"] == email) {
                userExist = true
                break

            }
        }
        if (userExist == true) {
            if (userObj[selectedIndex][password] == password.value) {

                Toastify({
                    text: "Login Successful",
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
                }).showToast()
                window.location.href = "./dashboard.html"


            }
            else {
                Toastify({
                    text: "invalid password",
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
                }).showToast()

            }


        }
        else {
            Toastify({
                text: "Email not registered",
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
    }
}






