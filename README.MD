## Geting started

1. Clone the repo
```
 $ git clone https://github.com/edalandete/axa-api-rest-node-assesment.git
```
2. Install dependencies
```
 npm install
```
3. Set environment variables following the example in ```.env.example```.
4. Run the server 
```
 $ npm start
```
## Test
1. Run test
```
 $ npm test
 ```
2. See the coverage file in folder ```lcov_report```

# Architecture

### Project folders organization
The project is organized in a folder structure so it can be easy to find all the files related to a component o redux feature and every file has his own purpose. Also If we want to use one endpoint for another middleware or api, disengage them is very fast and easy.

### Testing
JEST testing library: it's very fast and very intuitive to use. You don't need any extra libraries to mock modules, with jest is already included. Also allows you to see the status of your test with a simple --watch parameter.
--collect-coverage: by doing so, you have an HTML interface that gives you a fast snapshot of your tests and also you can see what parts of your code it's not tested yet.
