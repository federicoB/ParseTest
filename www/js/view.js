View = function () {
    View.prototype.mainFrame = document.getElementById("mainFrame");
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
    var sectionGridBlock = document.createElement("section");
    sectionGridBlock.className += "align-center grid-block";
    var sectionContainer = document.createElement("section");
    sectionContainer.className += "grid-container mediumMarginTop";
    this.inputUserName = document.createElement("input");
    this.inputUserName.setAttribute("type","text");
    this.inputUserName.setAttribute("placeholder","username");
    this.inputPassword = document.createElement("input");
    this.inputPassword.setAttribute("type","password");
    this.inputPassword.setAttribute("placeholder","password");
    var loginButton = document.createElement("button");
    loginButton.className += "button";
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click",app.makeLogin);
    var signUpButton = document.createElement("button");
    signUpButton.className += "button";
    signUpButton.innerHTML = "Sign up";
    signUpButton.addEventListener("click",app.showSignUp);
    sectionGridBlock.appendChild(sectionContainer);
    sectionContainer.appendChild(this.inputUserName);
    sectionContainer.appendChild(this.inputPassword);
    sectionContainer.appendChild(loginButton);
    sectionContainer.appendChild(signUpButton);
    this.mainFrame.appendChild(sectionGridBlock);
};

SignUp = function () {
    View.call();
};

SignUp.prototype = Object.create(View.prototype);

SignUp.prototype.constructor = Login;

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
    this.inputEmail.setAttribute("type","text");
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