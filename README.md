# 🚀 DevOps Full-Stack Demo Project

[![AWS](https://img.shields.io/badge/AWS-EKS-blue)](https://aws.amazon.com/eks/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI/CD-orange)](https://www.jenkins.io/)
[![Docker](https://img.shields.io/badge/Docker-Container-blue)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Cluster-blueviolet)](https://kubernetes.io/)
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-v16-blue)](https://www.postgresql.org/)
[![Grafana](https://img.shields.io/badge/Grafana-Monitoring-orange)](https://grafana.com/)
[![Prometheus](https://img.shields.io/badge/Prometheus-Monitoring-red)](https://prometheus.io/)

---

## 🔹 Project Overview

The main objectives of this project:

1. **Set up EKS Cluster**  
   - AWS Region: `ap-southeast-1`  
   - 2 worker nodes for application deployment  

2. **Database Setup with StatefulSet**  
   - PostgreSQL version 16  
   - High availability and persistent storage  
   - Managed via Kubernetes **StatefulSet**  
   - Database credentials managed with **Secrets**  
   - Configuration managed with **ConfigMaps**

3. **Sample Node.js Application Deployment**  
   - Deployed using a **Deployment** resource  
   - Configured to use environment variables for DB connection  
   - Uses **Secrets** and **ConfigMaps** for secure configuration

4. **Jenkins CI/CD Pipeline**  
   - Installed on EC2  
   - Plugins installed: **NodeJS**, **Docker**, **AWS Credentials**  
   - Tools installed: `docker`, `kubectl`, `awscli`, `git`  
   - Declarative pipeline script configured to:  
     - Clone the Node.js app  
     - Install dependencies (`npm install`)  
     - Build Docker image  
     - Push Docker image to **Docker Hub**  
     - Deploy app to EKS cluster via `kubectl apply`  

5. **Ingress, Monitoring & Visualization**  
   - **NGINX Ingress Controller** installed via Helm  
   - **Prometheus** installed for monitoring cluster metrics  
   - **Grafana** installed for dashboards  
   - Sample Grafana dashboard created using Prometheus metrics  

---

## 🔹 Project Architecture
[Jenkins EC2]
|
|-- CI/CD Pipeline
|
v
[Docker Hub] ---> [EKS Cluster]
|
|-- Node.js App Deployment
|-- PostgreSQL StatefulSet
|
|-- NGINX Ingress
|-- Prometheus Monitoring
|-- Grafana Dashboards

---

## 🔹 Steps Performed

1. Created EKS cluster in AWS with 2 worker nodes.  
2. Developed Kubernetes YAMLs for:  
   - PostgreSQL StatefulSet, Service, Secret, ConfigMap  
   - Node.js Deployment & Service  
   - Ingress configuration  
3. Installed Jenkins on EC2, added required plugins and tools.  
4. Wrote declarative Jenkins pipeline to build, push, and deploy the app.  
5. Installed NGINX Ingress, Prometheus, and Grafana using Helm.  
6. Configured Grafana dashboards to visualize metrics collected by Prometheus.  

---

## 🔹 Tools & Technologies Used

| Category              | Tools / Versions                       |
|-----------------------|----------------------------------------|
| Cloud / Orchestration | AWS EKS, EC2                           |
| CI/CD                 | Jenkins                                |
| Containerization      | Docker                                 |
| Monitoring            | Prometheus, Grafana                     |
| Ingress Controller    | NGINX Ingress                          |
| DB                    | PostgreSQL 16                           |
| App                   | Node.js                                 |
| Others                | kubectl, Helm, AWS CLI, Git, NodeJS/NPM|

---

## 🔹 Next Steps (Optional)

- Implement horizontal scaling for Node.js app  
- Add persistent storage monitoring for PostgreSQL  
- Configure alerts in Prometheus/Grafana  
- Automate full pipeline including Helm chart deployment  

---

## 🔹 Author

**Shaik Mohammad Shoaib**  
DevOps Engineer | AWS | Kubernetes | Jenkins | Docker | CI/CD | Monitoring
