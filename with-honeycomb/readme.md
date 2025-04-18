# How to export telemetry data to Honeycomb.io

This code accompanies tutorial
["How to export telemetry data to Honeycomb.io"](http://docs.deno.com/examples/honeycomb_tutorial).

## Run the app

Make sure `.env` is populated with
[an OpenAI API key](https://platform.openai.com/api-keys).

```bash
$ deno task otel
```

## Run OpenTelemetry collector

To run the separate OTel collector service:

```
$ docker build -t otel-collector . && docker run -p 4317:4317 -p 4318:4318 otel-collector
```

For more information about Honeycomb,
[please refer to their documentation](https://docs.honeycomb.io/send-data/opentelemetry/collector/).
