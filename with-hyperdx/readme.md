# How to export telemetry data to Hyperdx

This code accompanies tutorial
["How to export telemetry data to Hyperdx"](http://docs.deno.com/examples/hyperdx_tutorial).

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

For more information about Hyperdx,
[please refer to their documentation](https://www.hyperdx.io/docs/install/opentelemetry).
