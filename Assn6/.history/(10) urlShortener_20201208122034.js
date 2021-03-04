let routeMap = {};

var encode = function(longUrl) {
    let route = parseInt(Math.random() * 10000).toString(32);
    
    while (routeMap[route]) route = parseInt(Math.random() * 10000).toString(32)
    
    routeMap[route] = longUrl;
    return ('https://' + route);
};

var decode = function(shortUrl) {
    return routeMap[shortUrl.substr(19)];
};