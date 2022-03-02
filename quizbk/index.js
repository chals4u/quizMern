var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var hostname  = '127.0.0.1';
var port      = 3000;

var app = http.createServer(function(req, res) {
            res.setHeader('Content-Type', 'application/json');

            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("quiz");
                dbo.collection("questions").find().toArray(function(err, result) {
                  if (err) throw err;
                  res.end(JSON.stringify(result));
                  console.log(result);
                  db.close();
                });
              });
           
           
           
           
            // res.end(
            //   JSON.stringify([
            //     {
            //         question: 'We can go for keys when there is possibility that our user could change the data?',
            //         answers: [
            //             'Keys',
            //             'Ref',
            //             'Both',
            //             'None of above'
            //         ],
            //         correct: 1
            //     },
            
            //     {
            //         question: 'JSX is typesafe?',
            //         answers: [
            //             'True',
            //             'False',
            //             'None of the Above',
            //             'Cannot Be Determined'
            //         ],
            //         correct: 1
            //     },    
            //     {
            //         question: 'React merges the object you provide into the current state using which of the following',
            //         answers: [
            //             'setState()',
            //             'State()', 
            //             'getState()', 
            //             'None of the Above'
            //         ],    
            //         correct: 1
            //     },    
            //     {
            //         question: 'Arbitrary inputs of components are called?',
            //         answers: [
            //             'Keys',
            //             'Props', 
            //             'Elements', 
            //             'Ref'
            //         ],    
            //         correct: 2
            //     },
            //     {
            //         question: '_____ can be done while more than one element needs to be returned from a component?',
            //         answers: [
            //             'Abstraction',
            //             'Packing', 
            //             'Insulation', 
            //             'Wrapping'
            //         ],    
            //         correct: 4
            //     },
            //     {
            //         question: 'Which of the following needs to be updated to achieve dynamic UI updates?',
            //         answers: [
            //             'State',
            //             'Props', 
            //             'Components', 
            //             'None of the Above'
            //         ],    
            //         correct: 1
            //     },
            //     {
            //         question: 'Lifecycle methods are mainly used _____',
            //         answers: [
            //             'To keep track of event history',
            //             'To enhance components', 
            //             'Free up resources', 
            //             'None of the Above'
            //         ],    
            //         correct: 3
            //     }
            // ])
            // );
          });

app.listen(port, hostname);