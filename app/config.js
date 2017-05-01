// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "mongolab",
        url: "mongodb://BigCoder:BigCoder!@ds139817.mlab.com:39817/heroku_cnkn5vpn",
        port: 27017
    },

    local:
    {
        name: "user-map-local",
        url: "mongodb://localhost/MapApp",
        port: 27017
    },

    localtest:
    {
        name: "user-map-local",
        url: "mongodb://localhost/MapAppTest",
        port: 27017
    }

};
