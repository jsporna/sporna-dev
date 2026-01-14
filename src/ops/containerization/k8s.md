# Kubernetes

Projektuję, wdrażam i utrzymuję klastry Kubernetes z naciskiem na izolację środowisk, kontrolę dostępu i niezawodność.

Buduję architekturę sieciową (CNI), polityki NetworkPolicy, a także konfiguruję ingress/egress z TLS i właściwym routingiem.

Stosuję RBAC i podział na namespaces, aby odzwierciedlić strukturę aplikacji i zespołów.

Wdrażam aplikacje przy użyciu Helm l, definiując Deployment/StatefulSet, HPA/VPA, PodDisruptionBudget i PodSecurityStandards.

Obserwowalność realizuję przez Prometheus/Grafana, logowanie EFK/Opensearch, tracing, a także health checks i alerty.

Dbam o requesty/limity, affinities/taints, zarządzanie storage (StorageClass, PVC),
rotację certyfikatów i upgrade’y klastrów z minimalnym downtime.

Wdrażam polityki bezpieczeństwa (image signing, skanowanie SBOM, admission controllers, secrets management z Vault/CSI).

Optymalizuję koszty poprzez autoskalowanie, właściwy rozmiar instancji i konsolidację workloadów.

Tworzę standardy pipeline’ów, testów, review chartów oraz dokumentację, aby zespół mógł budować i utrzymywać aplikacje
w sposób przewidywalny i skalowalny.

