let routeMap = {};

var encode = function(longUrl) {

    if(longUrl==null || longUrl.length<4){
        return "invalid url"
    }

    let randStr = parseInt(Math.random() * 10000).toString(32);
    let route = '';
    while(route.length<6){
        route += randStr;
    }
    
    while (routeMap[route]) route = parseInt(Math.random() * 10000).toString(32)
    
    routeMap[route] = longUrl;
    return ('https://bit.ly/' + route);
};

var decode = function(shortUrl) {
    return routeMap[shortUrl.substr(15)];
};