// Local Storage

var browserStorage = {
    set: function(key, value) {
        localStorage.setItem(key, value);
    }
    , get: function(key) {
        return localStorage.getItem(key);
    }
    , remove: function(key) {
        localStorage.removeItem(key);
    }
    , clear: function() {
        localStorage.clear();
    }
    , getAll: function() {
        return localStorage;
    }
};


// Session Storage
var sessionStorage = {
    set: function(key, value) {
        sessionStorage.setItem(key, value);
    }
    , get: function(key) {
        return sessionStorage.getItem(key);
    }
    , remove: function(key) {
        sessionStorage.removeItem(key);
    }
    , clear: function() {
        sessionStorage.clear();
    }
    , getAll: function() {
        return sessionStorage;
    }
};

// Cookie Storage
var cookieStorage = {
    set: function(key, value, expiry) {
        if (expiry) {
            const date = new Date();
            date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));
            const expires  = ';expires=' + date.toUTCString();
            document.cookie = key + "=" + value + expires + ";path=/";
        } else {
            document.cookie = key + "=" + value;
        }
    }
    , get: function(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }
    , remove: function(key) {
        document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    }
    , clear: function() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    , getAll: function() {
        return document.cookie;
    }
};

// cookieStorage.set('name', 'John');
// console.log(cookieStorage.get('name'));
cookieStorage.set('name', 'priyajit', 30);
cookieStorage.set('surname', 'mukherjee', 7);
cookieStorage.set('address', 'some address');
cookieStorage.remove('name')
cookieStorage.clear();