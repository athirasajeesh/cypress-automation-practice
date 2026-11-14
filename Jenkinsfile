pipeline {
  agent any

  stages {
    stage('Cypress') {
      steps {
        dir('cypress-automation-practice') {
          bat '''
            @echo off
            set "PATH=C:\\ProgramData\\nodejs-v22.23.5-win-x64;%PATH%"
            set "CYPRESS_CACHE_FOLDER=C:\\ProgramData\\cypress-cache"
            echo Node:
            node -v
            call npm ci
            if errorlevel 1 exit /b %ERRORLEVEL%
            call npx cypress run
            exit /b %ERRORLEVEL%
          '''
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress-automation-practice/cypress/reports/**,cypress-automation-practice/cypress/screenshots/**', allowEmptyArchive: true
    }
  }
}
