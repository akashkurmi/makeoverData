import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Find the path to your JSON file
  const jsonDirectory = path.join(process.cwd(), 'data.json');
  // Read the file
  const fileContents = fs.readFileSync(jsonDirectory, 'utf8');
  // Parse and return the data
  const data = JSON.parse(fileContents);

  res.status(200).json(data);
}