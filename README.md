# AWS Cost Anomaly Detection to Notify to Slack

https://github.com/cplankey/lambda-errors-to-slack-sar/blob/master/alerter/index.js

https://chaika.hatenablog.com/entry/2020/10/08/083000

https://dev.classmethod.jp/articles/sns-messaging-slack/

```
$ sls deploy
DOTENV: Loading environment variables from .env:
	 - REGION
	 - SLACK_WEBHOOK_URL

Deploying src to stage dev (ap-northeast-1)

✔ Service deployed to stack src-dev (164s)

functions:
  slack-notify: slack-notify (1.3 MB)
layers:
  layerName: arn:aws:lambda:<REGION>:<xxxxxxxxx>:layer:layerName:8

1 deprecation found: run 'serverless doctor' for more details
```
