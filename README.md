# AWS Cost Anomaly Detection to Notify to Slack

**This is an `experimental` repository to familiarize myself with Serverless Framework and Node.js**.

```mermaid
flowchart LR
AWS Cost Anomaly Detection --> Amazon SNS --> AWS Lambda --> Slack
```
- Serverless Frameworkでは `Amazon SNS --> AWS Lambda --> Slack` の繋ぎ込みを実装
- 残課題
  - AWS Cost Anomaly Detectionで使うSNSのarnの参照とアクセスポリシーの修正は手動

## TL;DR

```
$ sls deploy
DOTENV: Loading environment variables from .env:
	 - REGION
	 - SLACK_WEBHOOK_URL

Deploying src to stage dev (<REGION>)

✔ Service deployed to stack src-dev (164s)

functions:
  slack-notify: slack-notify (1.3 MB)
layers:
  layerName: arn:aws:lambda:<REGION>:<xxxxxxxxx>:layer:layerName:8

1 deprecation found: run 'serverless doctor' for more details
```


## Technology used

```
$ sls --version
Framework Core: 3.2.0
Plugin: 6.0.0
SDK: 4.3.1
$ npm --version
6.14.16
$ nodejs --version
v10.19.0
```

## References

https://github.com/cplankey/lambda-errors-to-slack-sar/blob/master/alerter/index.js

https://chaika.hatenablog.com/entry/2020/10/08/083000

https://dev.classmethod.jp/articles/sns-messaging-slack/

## License
Copyright (c) 2022 [gkz](https://gkz.mit-license.org/2022)

Licensed under the [MIT license](LICENSE).

Unless attributed otherwise, everything is under the MIT licence. Some stuff is not from me, and without attribution, and I no longer remember where I got it from. I apologize for that.