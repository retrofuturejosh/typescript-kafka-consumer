# Example Typescript Kafka Consumer
This was built based off of [an example from Confluent](https://github.com/confluentinc/examples/blob/6.2.1-post/clients/cloud/nodejs/consumer.js)

This is a companion application with [Example Typescript Kafka Producer](https://github.com/retrofuturejosh/typescript-kafka-producer)

## Getting Started

### Step 1
Follow directions for [producer application](https://github.com/retrofuturejosh/typescript-kafka-producer)

### Step 2
Clone repo and `npm install`

### Step 4
Create .env file in root folder of project with the following properties
```
BOOTSTRAP_SERVERS=<FOUND_IN_CONFLUENT_UI>
SECURITY_PROTOCOL=SASL_SSL
SASL_MECHANISMS=PLAIN
SASL_USERNAME=<API_KEY>
SASL_PASSWORD=<API_SECRET>
TOPIC=testTopic
GROUP_ID=testGroup2
AUTO_OFFSET_RESET=earliest
```

### Step 5
Run [producer application](https://github.com/retrofuturejosh/typescript-kafka-producer)

Run consumer application

``` npm start ```

### Step 5

Watch the messages in applications' logs
