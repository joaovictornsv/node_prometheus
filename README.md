#### Prometheus
docker run -d --network="host" --name prometheus -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

#### Alert Manager
docker run -d --network="host" --name alertmanager -p 9093:9093 -v ./alert-manager.yml:/prometheus/alertmanager.yml prom/alertmanager '--config.file=/prometheus/alertmanager.yml'

#### Grafana
docker run -d -p 3000:3000 --name=grafana --network="host" grafana/grafana
