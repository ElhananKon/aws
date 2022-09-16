# aws

Instructions: 
1. To use this lamda you need to send a JSON string to file in the following format:
{
    "value1": "14",
    "value2": "54"
}
2. To access the lamda from aws cli use the following command:
payload=`echo '{"body": {"value1": "100", "value2": "200" } }' | openssl base64`  aws lambda invoke --function-name calculateSum --log-type "Tail" --payload "$payload" SomeOutFile

Yow can see some logs in SomeOutFile

3. to access the lamda to recive the email yoy can use the endpoint:
https://lgwjbdxw54diqt3qysutniz2zu0yurib.lambda-url.us-east-1.on.aws/

4. You can also use the following endpoint:
https://go1m2xbg2d.execute-api.us-east-1.amazonaws.com/default/calculateSum


