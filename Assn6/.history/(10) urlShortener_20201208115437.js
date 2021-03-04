let routeMap = {};

var encode = function(longUrl) {
    let randStr = parseInt(Math.random() * 10000).toString(32);
    let route = '';
    while(route.length<6){
        route += randomStr;
    }
    
    while (routeMap[route]) route = parseInt(Math.random() * 10000).toString(32)
    
    routeMap[route] = longUrl;
    return ('http://tinyurl.com/' + route);
};

var decode = function(shortUrl) {
    return routeMap[shortUrl.substr(19)];
};