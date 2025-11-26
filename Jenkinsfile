pipeline {
    agent any
    
    tools {
        nodejs "node18"
    }

    environment {
        IMAGE_NAME   = "msshoaib2255457/nodejenkinstest"
        IMAGE_TAG    = "v${BUILD_NUMBER}"
        AWS_REGION   = "ap-southeast-1"
        CLUSTER_NAME = "testcluster"
    }

    stages {

        stage('Code Cloning') {
            steps {
                git credentialsId: '5344fe9e-333a-4e01-844b-fc56f14330fd', url: 'https://github.com/mohammadshoaib8/nodeapp-testrepo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh """
                    cd app
                    npm install
                    
                """
            }
        }

        stage('Build Docker Image') {
            steps {
                sh """
                    cd app
                    docker build -t $IMAGE_NAME:$IMAGE_TAG .
                    docker tag $IMAGE_NAME:$IMAGE_TAG $IMAGE_NAME:latest
                """
            }
        }

        stage('Docker Image Push') {
            steps {
                withDockerRegistry(credentialsId: 'dockerhub', url: 'https://index.docker.io/v1/') {
                    sh """
                        docker push $IMAGE_NAME:$IMAGE_TAG
                        docker push $IMAGE_NAME:latest
                    """
                }
            }
        }

        stage('App Deploy') {
            steps {
                withAWS(credentials: 'aws-creds', region: "${AWS_REGION}") {
                    sh """
                        aws eks update-kubeconfig --region $AWS_REGION --name $CLUSTER_NAME
                       # update only the image in existing deployment
                        kubectl apply -f k8s/
                        kubectl set image deployment/demo-node demo-node=$IMAGE_NAME:$IMAGE_TAG --record || true
                        
                    """
                }
            }
        }
    }
}
