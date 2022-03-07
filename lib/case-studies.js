import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const caseStudiesDir = path.join(process.cwd(), 'case-studies')

export function getAllCaseStudyIds() {
  const fileNames = fs.readdirSync(caseStudiesDir)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getCaseStudyData(id) {
  const fullPath = path.join(caseStudiesDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}
