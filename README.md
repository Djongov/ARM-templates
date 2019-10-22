# Azure ARM Templates
## Deploy Private DNS Zone
This template will depoy a simple Private DNS Zone<br><br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fprivatednszone.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>
## ILB App Service Environment v2 - Deploy the basic requirements + a VM to test it
This template will get you ready to deploy an ILB ASE v2 (appserviceenvironment.net) and start practicing/using it. The template will deploy you a VNET and a VM so you can later access the ILB ASE websites. In details the following will be deployed:<br>
- VNET with a name ILB-ASE-VNET<br>
2 Subnets called "ILB-ASE-SUBNET" with prefix 10.0.0.0.24 and another subnet called "VM-SUBNET" with prefix 10.0.1.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389 and 80<br>
- Public static IP for the VM so you can remotely connect ot it<br><br>
The steps you need to take after this deployment are the following:<br><br>
- Either create a Private DNS Zone for your ASE domain (asename.appserviceenvironment.net) with a link to the VNET or Install DNS Server on the VM and create a zone there. Set the VNET Dns Servers as custom and to point to the VM's private IP<br>
- Create two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- Create an App Service Plan (Isolated) by selecting the ASE as the plan's location<br>
- Create a Web App</br></br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-base-resources-lab.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a></br>
## Deploy a full ILB ASEv2 Environment lab
This template will deploy a VNET, VM, Private DNS Zone and an App Service Environment V2 (appserviceenvironment.net). The only thing you need to do after that is configure your Private DNS Zone and deploy App Serivce Plan to get you going.<br>
- VNET with a name ILB-ASE-VNET<br>
2 Subnets called "ILB-ASE-SUBNET" with prefix 10.0.0.0.24 and another subnet called "VM-SUBNET" with prefix 10.0.1.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image.<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389 and 80<br>
- Public static IP for the VM so you can remotely connect ot it<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br><br>
- Create a Virtual network link in the Private DNS Zone to the VNET
- Create two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>

What you need to do after this deployment is basically just start using the ASE:<br><br>

- Create an App Service Plan (Isolated) by selecting the ASE as the plan's location<br>
- Create a Web App</br></br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fcomplete-asev2-deployment.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>
