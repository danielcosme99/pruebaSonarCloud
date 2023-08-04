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
                script {
                    def scannerHome = tool 'SonarQubeScanner' // Asegúrate de tener configurado el SonarQubeScanner en la sección de "Global Tool Configuration"
                    //sh "${scannerHome}/bin/sonar-scanner"
                }
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
