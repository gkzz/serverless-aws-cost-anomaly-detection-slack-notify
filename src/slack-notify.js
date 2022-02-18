const request = require('request-promise-native');

const sendMessage = (message) => {
    return request({
        method: 'POST',
        url: process.env.SLACK_WEBHOOK_URL,
        body: message,
        json: true,
    })
        .then((body) => {
            if (body === 'ok') {
                return {};
            } else {
                throw new Error(body);
            }
        });
};

const processRecord = (record) => {
    console.log(`record: ${JSON.stringify(record)}`);
    return sendMessage({
        text: record.Sns.Subject,
        attachments: [{
            fields: [{
                title: 'Type',
                value: record.Sns.Type,
                short: true,
            }, {
                title: 'MessageId',
                value: record.Sns.MessageId,
                short: true,
            }, {
                title: 'Time',
                value: record.Sns.Timestamp,
                short: true,
            }, {
                title: 'Message',
                value: record.Sns.Message,
                short: true,
            }],
        }],
    });
};

/*
example event:
{
    "EventSource": "aws:sns",
    "EventVersion": "1.0",
    "EventSubscriptionArn": "arn:aws:sns:<REGION>:<xxxxxxxxx>:src-dev-snsTopic-<xxxxxxxxx>:<xxxxxxxxx>",
    "Sns": {
        "Type": "Notification",
        "MessageId": "<xxxxxxxxx>",
        "TopicArn": "arn:aws:sns:<REGION>:<xxxxxxxxx>:src-dev-snsTopic-<xxxxxxxxx>",
        "Subject": "<SUBJECT>",
        "Message": "<MESSAGE>",
        "Timestamp": "2022-02-17T17:33:07.585Z",
        "SignatureVersion": "1",
        "Signature": "<xxxxxxxxx>",
        "SigningCertUrl": "<xxxxxxxxx>",
        "UnsubscribeUrl": "<xxxxxxxxx>",
        "MessageAttributes": {}
    }
}
*/
module.exports.handler = (event, context, callback) => {
    console.log(`event received: ${JSON.stringify(event)}`);
    Promise.all(event.Records.map(processRecord))
        .then(() => callback(null))
        .catch((err) => callback(err));
};