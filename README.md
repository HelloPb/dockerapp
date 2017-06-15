# dockerapp

gcloud config set project dockerappshow
gcloud config set compute/zone us-central1-b
PROJECT_ID="$(gcloud config get-value project)"

gcloud container clusters create hello-cluster --num-nodes=3
hello-cluster  us-central1-b  1.6.4           35.188.126.107  n1-standard-1  1.6.4         3          RUNNING


gcloud compute instances list
kubectl get service


