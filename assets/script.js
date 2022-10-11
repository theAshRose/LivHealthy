/// steam key 6DCD8CE742C40D955C67CA739677F104
// steam id 76561198134108288

// http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=[MY_SECRET_KEY]&steamid=76561197960435530&relationship=friend

//fetching test for steam


let getUserStats = function () {
    let userSteamID = "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=6DCD8CE742C40D955C67CA739677F104&steamid=76561197960435530&relationship=friend"
    fetch(userSteamID, { 
        
        'Access-Control-Allow-Headers': '*'
    })
        .then(function (stats) {
            console.log(stats);
            return stats.json();
         })}
        //  .then(function(bigStats){
        //     console.log(bigStats);
        // })

getUserStats();
        