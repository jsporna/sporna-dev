# Hashicorp Vault

Wdrażam i administruję HashiCorp Vault w trybie HA, koncentrując się na bezpieczeństwie, niezawodności 
i ergonomii dla zespołów developerskich. 

Projektuję polityki ACL i przestrzenie nazw, które odzwierciedlają strukturę organizacji, separując dostęp 
między aplikacjami, zespołami i środowiskami. 

Konfiguruję mechanizmy auth (Kubernetes, AppRole, JWT/OIDC, LDAP), aby umożliwić bezpieczne, zautomatyzowane pobieranie 
sekretów przez workloady bez twardo zakodowanych haseł. 

Wykorzystuję silniki sekretów KV dla statycznych danych, PKI do wewnętrznego wystawiania certyfikatów, 
a także dynamiczne tymczasowe poświadczenia (AWS, bazy danych) z kontrolą TTL, minimalizując ryzyko nadużyć. 

Dokładam rotację kluczy i automatyzację odnowień, aby wpisywać się w wymagania compliance. 

Integruję Vault z CI/CD (injekcja sekretów w runtime, maskowanie logów), z systemami audytu oraz z obserwowalnością 
(telemetria, alerty), co pozwala szybko wykrywać anomalia. 

Dokumentuję wzorce użycia i tworzę SDK/CLI helpery, które ułatwiają developerom poprawne korzystanie z sekretów. 
Efektem jest spójny, skalowalny system zarządzania sekretami, który podnosi poziom bezpieczeństwa bez spowalniania delivery.
