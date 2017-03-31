const baz = require('./baz.js')

exports.baz = function (req, res) {
  let wordCase = req.param('case')
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(
    {
      "var": wordCase
    }
  ))
}
