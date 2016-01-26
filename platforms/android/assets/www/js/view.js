View = function () {
    View.prototype.mainFrame = document.getElementById("mainFrame");
};

/**
 * Clean the page erasing every elements.
 */
View.prototype.clean = function () {
    document.body.innerHTML = "";
};

Login = function () {
    View.call();
};

Login.prototype = Object.create(View.prototype);

Login.prototype.constructor = Login;

Login.prototype.print = function () {
    var form = document.createElement("form");
    var sectionGridBlock = document.createElement("section");
    sectionGridBlock.className += "grid-block";
    var sectionContainer = document.createElement("section");
    sectionContainer.className += "grid-container";
    var inputUserName = document.createElement("input");
    inputUserName.setAttribute("type","text");
    inputUserName.setAttribute("placeholder","username");
    var loginButton = document.createElement("button");
    loginButton.className += "button";
    loginButton.innerHTML = "Login";
    sectionGridBlock.appendChild(sectionContainer);
    sectionContainer.appendChild(form);
    form.appendChild(inputUserName);
    form.appendChild(loginButton);
    this.mainFrame.appendChild(sectionGridBlock);
};

