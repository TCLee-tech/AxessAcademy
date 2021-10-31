#!groovy

node('linux && ansible') {

  properties([
      parameters([
          string(defaultValue: '', description: 'This is the Upstream app name of package to deploy.', name: 'APP_NAME'),
          string(defaultValue: 'develop', description: 'This is the Upstream app branch of package to deploy.', name: 'job_branch_name'),
      ]),
  ])
  
  APP_NAME = "topgun_referencerepostructure"
  job_branch_name = "master"

  def jdkHome
  def mvnHome

  def gitShortCommitID = null

  // Get the source code
  stage('Source') {
  //  git branch: '${job_branch_name}', credentialsId: 'vx-pipeline-readonly', url: 'https://bitbucket.global.standardchartered.com/scm/TOPGUN/${APP_NAME}.git'
//	gitShortCommitID = gitCommitShortHash()
	checkout scm
  notifyStash()
  }

  // Prepare the build environment
  stage('Build Environment') {
    jdkHome = installTool "jdk1.8.0_141"
    mvnHome = installTool "apache-maven-3.3.9"
  }

  // Compile the Code
  stage('Build'){
    
    withEnv(["JAVA_HOME=${jdkHome}", "MAVEN_HOME=${mvnHome}", "PATH+MAVEN=${mvnHome}/bin"]) {
      artifactoryMaven {
        goals = '-X clean compile'
		deploy_artifacts = true
	}
    }
  }

  // Run unit test
  stage('Unit Test') {
    withEnv(["JAVA_HOME=${jdkHome}", "MAVEN_HOME=${mvnHome}", "PATH+MAVEN=${mvnHome}/bin"]) {
      artifactoryMaven {
        goals = '-X clean test'
        deploy_artifacts = false
      }
    }
    junit('**/target/surefire-reports/TEST-*.xml')
  }

  // Run SonarQube Analysis
  sonarQube {
    version = "${sonarqube_pretag}-${gitShortCommitID}"
    code_sources = 'src/'
    binary_location = 'target/'
  }

  // Package the binary and upload to binary repository
  stage('Package & Upload to Artifactory') {
    catchError {
      withEnv(["JAVA_HOME=${jdkHome}", "MAVEN_HOME=${mvnHome}", "PATH+MAVEN=${mvnHome}/bin"]) {
        artifactoryMaven {
          goals = '-X clean install'
        }
      }
    }
    
  }

}

