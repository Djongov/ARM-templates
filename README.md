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
## Deploy a full ILB ASEv2 Environment - No ASP, little custommization
This template will deploy a VNET, VM, Private DNS Zone and an App Service Environment V2 (appserviceenvironment.net). The only thing you need to do after that is just start using your ASE by deploying an App Service plan and Web Apps afterwards. The template also uses a minimal ammount of customization and the template takes care of the naming for most resrouces. Good for Lab deployments. If you need more customization use one of my other templates.<br>
- VNET with a name ILB-ASE-VNET<br>
2 Subnets called "ILB-ASE-SUBNET" with prefix 10.0.0.0.24 and another subnet called "VM-SUBNET" with prefix 10.0.1.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image.<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389 and 80<br>
- Public static IP for the VM so you can remotely connect ot it<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br>
- Virtual network link in the Private DNS Zone to the VNET<br>
- Two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>

What you need to do after this deployment is basically just start using the ASE:<br>

- Create an App Service Plan (Isolated) by selecting the ASE as the plan's location<br>
- Create a Web App</br></br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fcomplete-asev2-deployment.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>
This is a diagram of what will be deployed<br>
<img src="https://www.azuretechguy.com/images/new_ase/ase-deployment-diagram-no-asp.png"></img><br>
## Deploy a full ILB ASEv2 Environment - No ASP
This template will deploy a VNET, VM, Private DNS Zone, an App Service Environment V2 (appserviceenvironment.net), App Service Plan and a Web app. This means that this represents the entire solution. This version is fully customized which means that it will ask you to name your resouces. Good for production environments.<br>
Here is what is being deployed by the template:
- VNET with Address space of 10.0.0.0/16<br>
- 2 Subnets. 1 that will host the VM with prefix 10.0.0.0/24 and another one with prefix 10.0.1.0/24 that will host the ASE<br>
- Virtual Machine to access the ASE<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389<br>
- Public static IP for the VM so you can remotely connect ot it<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br>
- Virtual network link in the Private DNS Zone to the VNET<br>
- Two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- App Service Plan in Isolated tier directly deployed into the ASE<br>
- A Web App hosted in this App Service Plan<br><br>
So you essentially get a completely configured and production ready App Service Environment.<br>
Here is a diagram of the deployment:<br>
<img src="https://www.azuretechguy.com/images/new_ase/ase-deployment-diagram.png"></img>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fcomplete-asev2-deployment.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>

