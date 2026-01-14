# Hashicorp Terraform

Projektuję i utrzymuję infrastrukturę jako kod z wykorzystaniem HashiCorp Terraform, stawiając na modularność, 
powtarzalność i kontrolę zgodności. Tworzę biblioteki modułów wspólnych (sieć, bezpieczeństwo, storage, compute), 
które są wersjonowane i dystrybuowane przez rejestry modułów, co ułatwia standaryzację między środowiskami. 

Wykorzystuję zdalne przechowywanie stanu (np. AWS S3 Bucket), aby zapewniać spójność w zespołach. 
W CI/CD stosuję `terraform fmt/validate`, `terraform plan`, `tfsec` i `tflint`, aby automatycznie 
wymuszać zasady, jak tagowanie zasobów, szyfrowanie danych, minimalne uprawnienia IAM. 

Buduję warstwy (np. core, networking, security, services) oraz zarządzam zależnościami między nimi, tak by 
redukować drift i skracać czas zmian. Przy podejściu GitOps integruję narzędzia z Github Actions czy GitLab CI, 
uzyskując audytowalne, zatwierdzane przez PR wdrożenia. 

Dodatkowo stosuję elaborate workspaces dla wielokontowych i wieloregionowych środowisk, a także integruję 
z narzędziami kosztowymi i compliance. 

Dbam o pisanie kodu czytelnego (locals, variables, for_each), parametryzację pod różne skale oraz dokumentację automatyczną. 
W praktyce oznacza to przewidywalne, bezpieczne i szybkie iteracje nad infrastrukturą, minimalizujące ręczne błędy 
i ułatwiające onboardowanie.


