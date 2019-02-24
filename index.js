var http = require('http')
var httpProxy = require('http-proxy')


var proxy = httpProxy.createProxyServer({})

var server = http.createServer((req, res) => {
  console.log(req)
  proxy.web(req, res,{ target: "http://tdn/totvs.com"})
})

console.log("listening on port 5050")
server.listen(5050);
