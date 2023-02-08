const rp = require('request-promise');

module.exports = {
    getReleaseBody :async (tag)=>{
        return new Promise(function (resolve,reject){

            var options = {
                uri: `https://api.github.com/repos/prashant9428/test-package/releases/tags/${tag}`,
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'user-agent': 'node.js'
                   // 'Authorization': 'token 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'
                },
                json: true // Automatically parses the JSON string in the response
            };
             
            rp(options)
                .then(function (repos) {
                    //console.log('result', repos);
                    resolve(repos)
                })
                .catch(function (err) {
                    // API call failed...
                    console.log('something went wrong',err)
                    reject(err)
                });

        })

    }
}