1. Install npm?

Yes, required for npm install in Jenkins pipeline.

Must have Node.js + npm, recommended Node 18 LTS.

2. Where to install Node/npm?

Option A: Install directly on Jenkins server (EC2).

Option B: Use Jenkins NodeJS Plugin (cleaner & recommended).

3. Jenkinsfile Tools Block

Missing in current Jenkinsfile → must add:

tools {
    nodejs "node18"
}

4. Recommended Node.js Version

Node.js 18 LTS → stable & secure.

Avoid Node 12, 14, 16 (EOL/outdated).

5. Jenkins NodeJS Plugin Steps

Manage Jenkins → Plugins → Install NodeJS Plugin

Manage Jenkins → Global Tool Configuration → NodeJS → Add Node 18 LTS

Check Install automatically + provide Node & npm binaries

Use tools { nodejs "node18" } in Jenkinsfile

6. Pipeline Stages

Code Cloning → git repo

Install Dependencies → npm install

Build Docker Image → docker build & tag

Push Docker Image → docker push

App Deploy → update EKS config, kubectl apply manifests
