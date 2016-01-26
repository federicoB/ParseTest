View = function () {
    View.prototype.mainFrame = document.getElementById("mainFrame");
};

/**
 * Clean the page erasing every elements.
 */
View.prototype.clean = function () {
    this.mainFrame.innerHTML = "";
};

Login = function () {
    View.call();
};

Login.prototype = Object.create(View.prototype);

Login.prototype.constructor = Login;

Login.prototype.print = function () {
    this.clean();
    var form = document.createElement("form");
    var sectionGridBlock = document.createElement("section");
    sectionGridBlock.className += "align-center grid-block";
    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("type","text");
    inputUserName.setAttribute("placeholder","username");
    var inputPassword = document.createElement("input");
    inputPassword.setAttribute("type","password");
    inputPassword.setAttribute("placeholder","password");
    var loginButton = document.createElement("button");
    loginButton.className += "button";
    loginButton.innerHTML = "Login";
    sectionGridBlock.appendChild(form);
    form.appendChild(inputUserName);
    form.appendChild(inputPassword);
    form.appendChild(loginButton);
    this.mainFrame.appendChild(sectionGridBlock);
};

