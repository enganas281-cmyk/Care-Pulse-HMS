const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

fs.readdirSync(pagesDir).forEach(file => {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the mockData import
    const mockDataRegex = /import\s+\{\s*([^}]+)\s*\}\s+from\s+['"]\.\.\/data\/mockData\.js['"];?/;
    const match = content.match(mockDataRegex);

    if (match) {
      const vars = match[1].split(',').map(v => v.trim());
      
      // Remove the import
      content = content.replace(mockDataRegex, `import useFetch from "../utils/useFetch.js";`);

      // Find the main component function (assuming export default function Name() { )
      const componentRegex = /export\s+default\s+function\s+([A-Za-z0-9_]+)\s*\([^)]*\)\s*\{/;
      const compMatch = content.match(componentRegex);

      if (compMatch) {
        let fetchStatements = '';
        vars.forEach(v => {
          // Special cases to map variable names to endpoints
          let endpoint = v.toLowerCase();
          if (v === 'labTests') endpoint = 'labtests';
          if (v === 'medicalRecords') endpoint = 'medicalrecords';
          if (v === 'reportSeries') endpoint = 'reportseries'; // We might not have this in backend, but let's map it
          if (v === 'stats') endpoint = 'stats'; // We don't have this, maybe it fails, we'll see
          if (v === 'activityLogs') endpoint = 'activitylogs';
          if (v === 'alerts') endpoint = 'notifications'; // mock is alerts, backend is notifications?

          fetchStatements += `  const { data: ${v}, loading: loading${v} } = useFetch('/${endpoint}');\n`;
        });
        
        const loadingCheck = `  if (${vars.map(v => `loading${v}`).join(' || ')}) return <div className="p-8 text-slate-500">Loading data...</div>;\n`;

        const replaceStr = compMatch[0] + '\n' + fetchStatements + loadingCheck;
        content = content.replace(compMatch[0], replaceStr);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Refactored ${file}`);
      }
    }
  }
});
