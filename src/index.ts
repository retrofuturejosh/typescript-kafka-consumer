import 'dotenv/config';
import Kafka, { KafkaConsumer, Message } from "node-rdkafka";

import { createConsumer } from "./functions/consumer";

import config from "./config";

async function consumerExample(): Promise<void> {
  console.log(`Let's read some records from topic ${config.topic}, okay?`);

  const consumer: KafkaConsumer = await createConsumer(Kafka.KafkaConsumer, config, onData)

  consumer.subscribe([config.topic]);
  consumer.consume();

  process.on('SIGINT', () => {
    console.log('\nDisconnecting consumer ...');
    consumer.disconnect();
  });
}

// callback to handle message delivery
function onData(data: Message): void {
  const messageDate: Date = new Date(<number>data.timestamp);
  const readableMessageDate: string = `${messageDate.toDateString()} ${messageDate.toTimeString()}`;
  console.log(`Consumed record with key ${data.key} and value ${data.value} of partition ${data.partition} @ offset ${data.offset}, sent at ${readableMessageDate}`);
};

// start application
consumerExample()
  .catch((err) => {
    console.error(`Something went wrong:\n${err}`);
    process.exit(1);
  });
