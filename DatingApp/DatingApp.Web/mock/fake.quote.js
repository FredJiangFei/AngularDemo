
var faker = require('faker')

function generateQuotes () {
  var quotes = []

  for (var id = 0; id < 50; id++) {
    var title = faker.name.title()
    var desc = faker.name.jobDescriptor()

    quotes.push({
      "id": id,
      "title": title,
      "desc": desc
    })
  }

  return { "quotes": quotes }
}

module.exports = generateQuotes