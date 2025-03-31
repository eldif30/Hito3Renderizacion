import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Obtener el path absoluto del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta a la carpeta src
const srcPath = path.join(__dirname, "src/components/");

// Leer todos los archivos en ./src
const files = await fs.readdir(srcPath);

// Filtrar solo los .jsx
const jsxFiles = files.filter((file) => file.endsWith(".jsx"));

for (const jsxFile of jsxFiles) {
  const baseName = path.basename(jsxFile, ".jsx");
  const folderPath = path.join(srcPath, baseName);

  try {
    // Crear la carpeta si no existe
    await fs.mkdir(folderPath, { recursive: true });

    // Mover y renombrar el archivo .jsx a index.jsx
    await fs.rename(
      path.join(srcPath, jsxFile),
      path.join(folderPath, "index.jsx")
    );

    // Si hay un .css con el mismo nombre, muévelo también
    const cssFile = `${baseName}.css`;
    if (files.includes(cssFile)) {
      await fs.rename(
        path.join(srcPath, cssFile),
        path.join(folderPath, cssFile)
      );
    }

    console.log(
      `✅ Movidos: ${jsxFile} y ${cssFile} (si existe) a /${baseName}`
    );
  } catch (err) {
    console.error(`❌ Error procesando ${jsxFile}:`, err);
  }
}
