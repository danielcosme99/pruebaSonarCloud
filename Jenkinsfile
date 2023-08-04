pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                slackSend(color: '#BADA55', message: 'Start Buil')
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'//sonarqube
                bat 'D:\\Aplicaciones\\SonarQube\\sonar-scanner-5.0.0.2966-windows\\bin\\sonar-scanner.bat'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                //sh 'exit 1'// para que arroje mensaje de failure quitarlo para mensaje de success
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
