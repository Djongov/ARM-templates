# Azure ARM Templates
## Deploy Private DNS Zone
This template will depoy a simple Private DNS Zone<br><br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fprivatednszone.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>
## Deploy the basic resources needed for an ILB App Service Environment v2
This template will get you ready to deploy an ILB ASE v2 (appserviceenvironment.net) and start practicing/using it. The template will deploy you a VNET and a VM so you can later access the ILB ASE websitesthe following resouces. In details the following will be deployed:<br>
- VNET with a name ILB-ASE-VNET<br>
-- 2 Subnets called "ILB-ASE-SUBNET" with prefix 10.0.0.0.24 and another subnet called "VM-SUBNET" with prefix 10.0.1.0/24<br>
- VM with the size of Standard_B4ms with 127 GB Standard HDD disk<br> and Windows Server 2019 image<br>
- NIC for the VM<br>
- NSG for the VM allowing ports 3389 and 80<br>
- Public static IP for the VM so you can remotely connect ot it<br>
<a href="https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FDjongov%2FARM-templates%2Fmaster%2Fase-base-resources-lab.json" target="_blank"><img src="https://azuredeploy.net/deploybutton.png"/>
</a><br>
