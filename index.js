var AWS = require("aws-sdk");

console.log("Loading function");

exports.handler = function(event, context) {
    var body;
    if (event["body"] != undefined) {
     body = JSON.parse(event["body"]);   
    } else{
        body = JSON.parse(JSON.stringify(event, null, 2 ));
        console.log(body);
    }
    console.log("event " + body)
     
    console.log("value1: " + body.value1);
    console.log("value2: " + body.value2);
    const message = "Hello from Lambda! result is " + (parseInt(body.value1) + parseInt(body.value2));
    console.log("Sending event:", message);
    var sns = new AWS.SNS();
    var params = {
        Message: message, 
        Subject: "Test SNS From Lambda",
        TopicArn: "arn:aws:sns:us-east-1:073373201192:message"
    };

    sns.publish(params, context.done);
};
