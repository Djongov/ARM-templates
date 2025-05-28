const fs = require('fs');
const yaml = require('js-yaml');

const templatesFile = yaml.load(fs.readFileSync(__dirname + '/templates.yml', 'utf8'));

const templates = templatesFile.templates;  // <-- important!

let readme = '# Azure ARM Templates\n\n';

templates.forEach(({title, description, file}, i) => {
  const baseUrl = `https://raw.githubusercontent.com/Djongov/ARM-templates/master/${file}`;

  readme += `## ${title}\n\n`;
  readme += `${description}\n\n`;
  readme += `[![Deploy to Azure](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazure.svg?sanitize=true)](https://portal.azure.com/#create/Microsoft.Template/uri/${encodeURIComponent(baseUrl)})\n\n`;
  readme += `[![Visualize](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/visualizebutton.svg?sanitize=true)](http://armviz.io/#/?load=${encodeURIComponent(baseUrl)})\n\n`;
  readme += `**Or copy this URL and paste it in the Azure portal:**\n\n`;
  readme += '```plaintext\n';
  readme += `https://portal.azure.com/#create/Microsoft.Template/uri/${encodeURIComponent(baseUrl)}\n`;
  readme += '```\n\n';
  if (i < templates.length - 1) {
    readme += '---\n\n';
  }
});

fs.writeFileSync('README.md', readme, 'utf8');
