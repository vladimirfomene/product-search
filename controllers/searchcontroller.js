const { client, index, type } = require("../connection");

exports.search = async function(req, res){

		const { searchterm, offset } = req.query;
		try{
			const queryRes = await queryTerm(searchterm);
			return res.status(200).json(queryRes);
		} catch (err){
			console.error("Elastic Search Query failed: ", err);
		}

};


function queryTerm (q, offset = 0) {
		
    const body = {
      from: offset,
      query: { match: {
        name: {
          query: q,
          operator: 'and',
          fuzziness: 'auto'
        } } },
      highlight: { fields: { name: {} } }
    };

    return client.search({ index, type, body });
}
