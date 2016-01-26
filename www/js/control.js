var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        Parse.initialize("i28LhssSuliksLKvmD30lSEjQo57IAntkornBmlc", "cEptopkDWBHbeod3eaQRcPDS0okBx8JM9Jy6AaFS");
    },
    printFirstPage: function () {
        login = new Login();
        login.print();
    }
};

window.onload = function () {
    app.initialize();
    app.printFirstPage();
};