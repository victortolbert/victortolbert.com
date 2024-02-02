# Microsoft Azure

:u-icon{name="i-logos-microsoft-azure" class="h-11 w-auto float-right pl-8 mb-16"}

Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft. It offers access, management, and the development of applications and services through global data centers.


## Azure CLI Workflow

```bash
az account list
az account set --subscription 'my-subscription-name'
az group create --location westus --name MyRG
az vm create -n myVM -g MyRG --image UbuntuLTS --generate-ssh-keys
az group delete -n MyRGx

docker run -it mcr.microsoft.com/azure-cli
docker run -it -v ${HOME}/.ssh:/root/.ssh mcr.microsoft.com/azure-cli

docker pull mcr.microsoft.com/azure-cli
docker rmi mcr.microsoft.com/azure-cli
```
