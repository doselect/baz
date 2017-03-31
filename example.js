exports.baz = function baz (req, res) {
  let wordCase = req.param('case')
  let genWord = require('./baz.js')(wordCase)
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end(JSON.stringify(
    {
      "var": genWord
    }
  ))
}
