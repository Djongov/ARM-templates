# Azure ARM Templates
## Deploy Private DNS Zone
This template will depoy a simple Private DNS Zone<br><br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fprivatednszone.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a><br>
# Deploy Joomla Web App with MySQL in App
The template will deploy an [App service](https://docs.microsoft.com/azure/app-service/) Web App (Windows) in a new or existing App Service Plan (Windows) with [MySQL in App](https://github.com/projectkudu/kudu/wiki/MySQL-in-app/) enabled.<br>
If you want to deploy in existing App Service Plan instead of a new one, just type the name of your existing App Service Plan and match the SKU<br>
The template will also pull all the necessary Joomla files into the root directory. Note that pulling those files from the source repository might take up to 30 minutes.<br>
Use this article to get you started on using MySQL-in-App feature with your Joomla, if you plan on using the local MySQL for your Joomla installation.<br>
https://github.com/projectkudu/kudu/wiki/MySQL-in-app
<br><br><a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fjoomla-webapp-mysqlinapp.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a><br>
## ILB App Service Environment v2 Lab - Deploy the basic requirements for an ASEv2 + a VM to test it (will not deploy ASE)
This template will get you ready to deploy an ILB ASE v2 (appserviceenvironment.net) and start practicing/using it. The template will deploy you a VNET and a VM so you can later access the ILB ASE websites. This is good if you want to deploy and configure the ASE yourself and deploy the App Serivce Plan and Web Apps on your own. In details the following will be deployed:<br>
- VNET with a name ILB-ASE-VNET<br>
2 Subnets called "ILB-ASE-SUBNET" with prefix 10.0.0.0.24 and another subnet called "VM-SUBNET" with prefix 10.0.1.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389 and 80<br>
- Public static IP for the VM so you can remotely connect ot it<br><br>
The steps you need to take after this deployment are the following:<br><br>
- Create an ILB App Service Environment v2<br>
- Either create a Private DNS Zone for your ASE domain (asename.appserviceenvironment.net) with a link to the VNET or Install DNS Server on the VM and create a zone there. Set the VNET Dns Servers as custom and to point to the VM's private IP<br>
- Create two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- Create an App Service Plan (Isolated) by selecting the ASE as the plan's location<br>
- Create a Web App</br></br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-base-resources-lab.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a></br>
## Deploy a full ILB ASEv2 Environment - Little customization
This is a premium grade template that will deploy a VNET, VM, Private DNS Zone, ILB App Service Environment V2 (appserviceenvironment.net), App Service Plan (Windows) and a Web App. The template also uses a minimal ammount of customization and the template takes care of the naming for most resrouces. Good for Lab deployments. If you need more customization use the other template.<br>
- VNET with a name ILB-ASE-VNET and Address space of 10.0.0.0/16<br>
- 2 Subnets called "VM-Subnet" with prefix 10.0.1.0/24 and another subnet called "ASE-SUBNET" with prefix 10.0.0.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image.<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389<br>
- Public dynamic IP for the VM so you can remotely connect to it<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br>
- Virtual network link in the Private DNS Zone to the VNET<br>
- Two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- An App Service Plan (Windows) called "ILB-ASE-ASP" in isolated 1 tier (I1) wiht 1 worker<br>
- A Web App called webapp-test<br><br>
This basically deploys the entire solution with minimal customization. In the end you will have a completely working and configured ILB ASEv2 environment.<br>
This is a diagram of what will be deployed:<br>
<img src="https://www.azuretechguy.com/images/App_Service/new_ase/ase-deployment-diagram-no-asp.png"></img><br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-no-customization.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a><br>
## Deploy a full ILB ASEv2 Environment - Full customization
This is a premium grade template that will deploy a VNET, VM, Private DNS Zone, ILB App Service Environment V2 (appserviceenvironment.net), App Service Plan (Windows) and a Web app. This represents the entire solution. This version is fully customized which means that it will ask you to name your resouces. Good for production environments.<br>
Here is what is being deployed by the template:
- VNET with Address space of 10.0.0.0/16<br>
- 2 Subnets. 1 that will host the VM with prefix 10.0.1.0/24 and another one with prefix 10.0.0.0/24 that will host the ASE<br>
- Virtual Machine to access the ASE<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389<br>
- Public static IP for the VM so you can remotely connect to it<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br>
- Virtual network link in the Private DNS Zone to the VNET<br>
- Two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- App Service Plan (Windows) in Isolated tier directly deployed into the ASE<br>
- A Web App hosted in this App Service Plan<br><br>
This basically deploys the entire solution with your own customization. In the end you will have a completely working and configured ILB ASEv2 environment. The only thing that you don't have control over is the address space of the VNET. If you want to change it, feel free to edit it out in the template, just don't forget to change the address space on the A records in the Private DNS Zone too.<br>
This is a diagram of what will be deployed:<br>
<img src="https://www.azuretechguy.com/images/App_Service/new_ase/ase-deployment-diagram.png"></img>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-customized.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a><br>
## Deploy a full ILB ASEv2 Environment - No VM
This is a premium grade template that will deploy a VNET, ILB ASE, Private DNS Zone with needed records, App Service Plan (Windows) and a Web App. Customizable names for all of these resources. The only thing that's not customizable is the VNET address range. If you want to change it, edit it in the template. <br>Here is what is being deployed by the template:<br>
- VNET with Address space of 10.0.0.0/16<br>
- 1 Subnet with prefix 10.0.0.0/24 that will host the ASE<br>
- ILB ASE V2 (appserviceenvironment.net)<br>
- Private DNS Zone covering the asename.appserviceenvironment.net domain<br>
- Virtual network link in the Private DNS Zone to the VNET<br>
- Two A records in that zone. One wildcard (*) pointing to the ILB Address and another wildcard for the scm (in the format of *.scm), again pointing to the ILB Address<br>
- App Service Plan (Windows) in Isolated tier directly deployed into the ASE<br>
- A Web App hosted in this App Service Plan<br><br>
This template is good if you don't need a VM to be deployed. Suitable for production environments.
<img src="https://www.azuretechguy.com/images/App_Service/new_ase/ase-deployment-diagram-no-vm.png"></img>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-no-VM.json" target="_blank"><img src="https://camo.githubusercontent.com/bad3d579584bd4996af60a96735a0fdcb9f402933c139cc6c4c4a4577576411f/68747470733a2f2f616b612e6d732f6465706c6f79746f617a757265627574746f6e"/>
</a><br>
