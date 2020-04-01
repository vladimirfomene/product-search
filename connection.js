const elasticSearch = require("elasticsearch");
const index = 'product-library'
const type = 'product'
const port = 9200
const host = process.env.ES_HOST || 'localhost'
const client = new elasticSearch.Client({ host: { host, port } })

module.exports = { client, index, type };
