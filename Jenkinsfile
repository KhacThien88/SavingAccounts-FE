def remote=[:]
remote.name = 'vkt'
remote.host = '192.168.23.138'
remote.allowAnyHosts = true

def vm1=[:]
vm1.name = 'vm1'
vm1.allowAnyHosts = true

def vm2=[:]
vm2.name = 'vm2'
vm2.allowAnyHosts = true

pipeline {
  environment {
    PROVIDER_TF = credentials('provider-azure')
    dockerimagename = "ktei8htop15122004/savingaccountfe"
    dockerImage = ""
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

  // agent {
  //   kubernetes {
  //     yaml '''
  //     apiVersion: v1
  //     kind: Pod
  //     spec:
  //       serviceAccountName: jenkins-admin
  //       dnsConfig:
  //         nameservers:
  //           - 8.8.8.8
  //       containers:
  //       - name: docker
  //         image: docker:latest
  //         imagePullSecrets:
  //           - name: regcred
  //         command:
  //           - cat
  //         tty: true
  //         securityContext:
  //           privileged: true
  //         volumeMounts:
  //           - mountPath: /var/run/docker.sock
  //             name: docker-sock
  //       - name: kubectl
  //         image: bitnami/kubectl:latest
  //         imagePullSecrets:
  //           - name: regcred
  //         command:
  //           - cat
  //         securityContext:
  //           runAsUser: 0
  //         tty: true
  //       volumes:
  //         - name: docker-sock
  //           hostPath:
  //             path: /var/run/docker.sock
  //     '''
  //   }
  // }
  agent any
  stages {
    stage('Check Agent') {
            steps {
                script {
                    echo "Running on agent: ${env.NODE_NAME}"
                }
            }
        }
    stage('Unit Test') {
      when {
        expression {
          return env.BRANCH_NAME != 'master';
        }
      }
      steps {
        sh 'echo Unit Test Frontend'
      }
    }

    stage('Build image') {
      steps {    
          script {
            sh 'docker pull node:latest'
            sh 'docker pull nginx:stable-alpine'
            sh 'docker build --network=host -t ktei8htop15122004/savingaccountfe .'
          }
      }
    }

    stage('Pushing Image') {
      steps {
          script {
            sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            sh 'docker tag ktei8htop15122004/savingaccountfe ktei8htop15122004/savingaccountfe'
            sh 'docker push ktei8htop15122004/savingaccountfe:latest'
          }
      }
    }
    
//     stage('Create Deployment YAML') {
//     steps {
//         writeFile file: '/home/jenkins/agent/workspace/Pipeline-SavingAccountFE_main/deployment-react.yaml', text: '''apiVersion: apps/v1
// kind: Deployment
// metadata:
//   name: react-app-deployment
//   labels:
//     app: react-app
// spec:
//   replicas: 1
//   selector:
//     matchLabels:
//       app: react-app
//   template:
//     metadata:
//       labels:
//         app: react-app
//     spec:
//       containers:
//       - name: savingaccountfe
//         image: ktei8htop15122004/savingaccountfe:latest
//         ports:
//         - containerPort: 81
//         resources:
//           requests:
//             memory: "128Mi"
//             cpu: "250m"
//           limits:
//             memory: "512Mi"
//             cpu: "500m"'''
//     }
// }

//     stage('Create Service YAML') {
//     steps {
//         writeFile file: '/home/jenkins/agent/workspace/Pipeline-SavingAccountFE_main/service-react.yaml', text: '''apiVersion: v1
// kind: Service
// metadata:
//   name: react-app-svc
// spec:
//   type: NodePort
//   selector:
//     app: react-app
//   ports:
//     - name: http
//       port: 80
//       targetPort: 80
//       nodePort: 32100'''
//     }
// }

//     stage('Deploying App to Kubernetes') {
//       steps {
//         container('kubectl') {
//           withCredentials([file(credentialsId: 'kube-config-admin', variable: 'TMPKUBECONFIG')]) {
//             sh "cat \$TMPKUBECONFIG"
//             sh "cp \$TMPKUBECONFIG ~/.kube/config"
//             sh "ls -l \$TMPKUBECONFIG"
//             sh "pwd"
//             sh "kubectl apply -f deployment-react.yaml"
//             sh "kubectl apply -f service-react.yaml"
//           }
//         }
//       }
//     }
}
}

