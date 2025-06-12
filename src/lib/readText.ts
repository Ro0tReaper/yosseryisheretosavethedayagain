import fs from 'fs'
import path from 'path'

export function getTextFileContent(fileName: string): string {
  const fullPath = path.join(process.cwd(), 'src', 'pages', 'summaries', fileName)
  const content = fs.readFileSync(fullPath, 'utf8')
  return content
}
