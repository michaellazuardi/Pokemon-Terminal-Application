
var results = {
    protocol: 'https',
    hostName: '://pokeapi.co',
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000, //100s
    timeout: 5 * 1000 //5s
}


results.setProtocol = newProtocol => {
    results.protocol = newProtocol;
}
results.setHostName = newHostName => {
    results.hostName = `://${newHostName}`;
}
results.setVersionPath = newVersionPath => {
    results.versionPath = newVersionPath;
}
results.setTimeout = newTimeout => {
    results.timeout = newTimeout;
}
results.setExpire = newExpire => {
    results.Expire = newExpire;
}

exports.results = results



