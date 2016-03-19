View = function () {
    View.prototype.mainFrame = document.body;
};

/**
 * Clean the page erasing every elements.
 */
View.prototype.clean = function () {
    while (this.mainFrame.firstChild) {
        this.mainFrame.removeChild(this.mainFrame.firstChild);
    }
};

Login = function () {
    View.call();
};

Login.prototype = Object.create(View.prototype);

Login.prototype.constructor = Login;

Login.prototype.print = function () {
    this.clean();
    this.inputUserName = document.createElement("input");
    this.inputUserName.setAttribute("type","text");
    this.inputUserName.setAttribute("placeholder","username");
    this.inputUserName.className += "centered";
    this.inputPassword = document.createElement("input");
    this.inputPassword.setAttribute("type","password");
    this.inputPassword.setAttribute("placeholder","password");
    this.inputPassword.className += "centered";
    var loginButton = document.createElement("button");
    loginButton.className += "button centered";
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click",app.makeLogin);
    var signUpButton = document.createElement("button");
    signUpButton.className += "button centered";
    signUpButton.innerHTML = "Sign up";
    signUpButton.addEventListener("click",app.showSignUp);
    this.mainFrame.appendChild(this.inputUserName);
    this.mainFrame.appendChild(this.inputPassword);
    this.mainFrame.appendChild(loginButton);
    this.mainFrame.appendChild(signUpButton);
};

SignUp = function () {
    View.call();
};

SignUp.prototype = Object.create(View.prototype);

SignUp.prototype.constructor = SignUp;

SignUp.prototype.print = function () {
    this.clean();
    var sectionGridBlock = document.createElement("section");
    sectionGridBlock.className += "align-center grid-block";
    var sectionContainer = document.createElement("section");
    sectionContainer.className += "grid-container mediumMarginTop";
    this.inputUserName = document.createElement("input");
    this.inputUserName.setAttribute("type","text");
    this.inputUserName.setAttribute("placeholder","username");
    this.inputEmail = document.createElement("input");
    this.inputEmail.setAttribute("type","email");
    this.inputEmail.setAttribute("placeholder","e-mail");
    this.inputPassword = document.createElement("input");
    this.inputPassword.setAttribute("type","password");
    this.inputPassword.setAttribute("placeholder","password");
    var signUpButton = document.createElement("button");
    signUpButton.className += "button";
    signUpButton.innerHTML = "Sign Up";
    signUpButton.addEventListener("click",app.makeSignUp);
    var backButton = document.createElement("button");
    backButton.className += "button";
    backButton.innerHTML = "Back";
    backButton.addEventListener("click",app.showLogin);
    sectionGridBlock.appendChild(sectionContainer);
    sectionContainer.appendChild(this.inputUserName);
    sectionContainer.appendChild(this.inputEmail);
    sectionContainer.appendChild(this.inputPassword);
    sectionContainer.appendChild(signUpButton);
    sectionContainer.appendChild(backButton);
    this.mainFrame.appendChild(sectionGridBlock);
};

HomePage = function (posts) {
    View.call();
    this.posts = posts;
};

HomePage.prototype = Object.create(View.prototype);

HomePage.prototype.constructor = HomePage;

HomePage.prototype.print = function () {
    this.clean();
    this.mainFrame.innerHTML += "Write something";
    var logoutButton = document.createElement("button");
    logoutButton.innerHTML = "Logout";
    logoutButton.id = "logoutButton";
    logoutButton.addEventListener("click",app.makeLogOut);
    this.textArea = document.createElement("textarea");
    this.textArea.id = "postInputText";
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "submitButton";
    submitButton.addEventListener("click",app.makePost);
    var line = document.createElement("hr");
    this.mainFrame.appendChild(logoutButton);
    this.mainFrame.appendChild(this.textArea);
    this.mainFrame.appendChild(submitButton);
    this.mainFrame.appendChild(line);
        for (var key in this.posts) {
        var postView = document.createElement("article");
        var post = this.posts[key];
        postView.innerHTML = post.get("Author").getUsername()+" ha scritto: " + post.get("text");
        postView.className += "post";
        this.mainFrame.appendChild(postView);
    }
};

PluginPage = function() {
    View.call();
};

PluginPage.prototype = Object.create(View.prototype);

PluginPage.prototype.constructor = PluginPage;

PluginPage.prototype.print = function () {
    this.clean();
    var cameraButton = document.createElement("button");
    cameraButton.innerHTML = "Camera";
    cameraButton.className += "centered";
    this.mainFrame.appendChild(cameraButton);
};