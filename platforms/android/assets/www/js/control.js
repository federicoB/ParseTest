app = {
    // Application Constructor
    initialize: function () {
        app.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', app.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        Parse.initialize("i28LhssSuliksLKvmD30lSEjQo57IAntkornBmlc", "cEptopkDWBHbeod3eaQRcPDS0okBx8JM9Jy6AaFS");
    },
    showLogin: function () {
        app.loginView = new Login();
        app.loginView.print();
    },
    showSignUp: function () {
        app.signUpView = new SignUp();
        app.signUpView.print();
    },
    makeSignUp: function () {
        var user = new Parse.User();
        user.set("username", app.signUpView.inputUserName.value);
        user.set("password", app.signUpView.inputPassword.value);
        user.set("email", app.signUpView.inputEmail.value);
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                app.signUpView.inputUserName.value = "";
                app.signUpView.inputPassword.value = "";
                app.signUpView.inputEmail.value = "";
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                navigator.notification.alert("Error: " + error.code + " " + error.message, null, "Error");
            }
        });
    },
    makeLogin: function () {
        Parse.User.logIn(app.loginView.inputUserName.value, app.loginView.inputPassword.value, {
            success: function (user) {
                // Do stuff after successful login.
            },
            error: function (user, error) {
                // The login failed. Check error to see why.
                navigator.notification.alert("Error: " + error.code + " " + error.message, null, "Error");
            }
        });
    }
};

window.onload = function () {
    app.initialize();
    app.showLogin();
};