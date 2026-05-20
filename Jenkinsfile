pipeline {

    agent any

    environment {
        IMAGE_NAME = "docker-jenkins-lab"
    }

    stages {

        stage('Checkout Code') {
            steps {
                // FIX: Explicitly added the 'main' branch and your actual GitHub username
                git branch: 'main', url: 'https://github.com/rmsingh1479-cmd/docker-jenkins-lab.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Correct for Windows Jenkins agents
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Show Docker Images') {
            steps {
                bat 'docker images'
            }
        }
    }

    post {
        success {
            echo 'Docker image built successfully'
        }
        failure {
            echo 'Docker image build failed'
        }
    }