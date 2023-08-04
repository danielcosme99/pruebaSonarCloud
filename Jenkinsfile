pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                slackSend(color: '#BADA55', message: 'Start Buil¿')
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
        success {
            slackSend(
                message: "Build deployed successfully - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
            )
            slackSend(color: '#BADA55', message: 'GAAAAAAAA')
        }
        failure {
            slackSend(
                failOnError: true,
                message: "Build failed  - ${env.JOB_NAME} ${env.BUILD_NUMBER} (<${env.BUILD_URL}|Open>)"
            )
        }
    }
}
