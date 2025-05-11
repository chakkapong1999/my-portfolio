pipeline {
    agent any

    environment {
        REGISTRY_URL = 'registry.devonly.dev'
        IMAGE_NAME = 'my-portfolio'
        IMAGE_TAG = 'latest'
        FULL_IMAGE = "${REGISTRY_URL}/${IMAGE_NAME}:${IMAGE_TAG}"

        SSH_CREDENTIALS_ID = 'vm-ssh-credentials'
        VM_HOST = 'root@172.17.0.1'
        NVD_API_KEY = 'nvd.api.key'
    }

	tools {
        dockerTool 'Docker Latest'
        nodejs 'Node v21.1.0'
    }

    stages {
        stage('Clone from GitHub') {
            steps {
                git url: 'https://github.com/chakkapong1999/my-portfolio.git', branch: 'develop'
            }
        }

        stage ('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }

        stage ('Scan & Analysis') {
            steps {
                withSonarQubeEnv("SonarQube") {
                    sh '''
                        npx sonar-scanner \
                        -Dsonar.projectKey=my-portfolio \
                        -Dsonar.sources=src \
                        -Dsonar.host.url=$SONAR_HOST_URL \
                        -Dsonar.token=$SONAR_AUTH_TOKEN
                    '''
                }
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${FULL_IMAGE} .'
                    sh 'docker push ${FULL_IMAGE}'
                }
            }
        }

        stage('Deploy to VM') {
            steps {
                sshagent (credentials: ["${SSH_CREDENTIALS_ID}"]) {
                    sh """
                        ssh ${VM_HOST}
                        docker pull ${FULL_IMAGE}
                        docker stop ${IMAGE_NAME} || true
                        docker rm ${IMAGE_NAME} || true
                        docker run -d --name ${IMAGE_NAME} -p 30001:30001 ${FULL_IMAGE}
                        docker image prune -f
                    """
                }
            }
        }
    }

    post { 
        always { 
            cleanWs()
        }
    }	
}
