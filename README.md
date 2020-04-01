# App Setup

Start up an instance of an Elastic Search server with the following command:

```sh
sudo docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:6.8.7
```

Once you have Elastic Server running, load the data into the server by running the following 
command:

```sh
node load_product.js
```

# Install Dependencies

Install your Node.js dependencies by running the following command in your terminal.

```sh
npm install
```

# Test Application

Start the project by executing `npm run start` in your commandline.