const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();
const port = 3000;

const searchController = require("./controllers/searchcontroller");

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static(path.join( __dirname, 'public')));


router.route("/")
		.get(function(req, res) {
		res.sendFile('index.html', {
     root: path.join( __dirname, 'public' )
   });
});

router.route("/search")
  .get(searchController.search)

// Mount router
app.use("/", router);

app.listen(port, () => {
  console.log(`Product-Search-API is running on port ${port}`);
});
