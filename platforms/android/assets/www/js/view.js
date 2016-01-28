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

HomePage = function () {
    View.call();
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
    var textArea = document.createElement("textarea");
    textArea.id = "postInputText";
    var submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.id = "submitButton";
    var line = document.createElement("hr");
    this.mainFrame.appendChild(logoutButton);
    this.mainFrame.appendChild(textArea);
    this.mainFrame.appendChild(submitButton);
    this.mainFrame.appendChild(line);
};