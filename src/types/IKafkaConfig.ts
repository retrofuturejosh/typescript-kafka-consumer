export interface IKafkaConfig {
  bootstrap: {
    servers: string
  }
  sasl: {
    username: string
    password: string
    mechanisms: string
  }
  security: {
    protocol: 'plaintext' | 'ssl' | 'sasl_plaintext' | 'sasl_ssl'
  }
  dr_msg_cb: boolean
  topic: string
  group: {
    id: string
  }
  auto: {
    offset: {
      reset: 'smallest' | 'earliest' | 'beginning' | 'largest' | 'latest' | 'end' | 'error'
    }
  }
}
