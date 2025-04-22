FROM otel/opentelemetry-collector-contrib:latest

# Copy the OTel Collector config into the container
COPY otel-collector.yml /otel-config.yml

# Run the OTel Collector with the provided config
CMD ["--config", "/otel-config.yml"]