export function getAllProjects() {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const projectsDir = path.join(process.cwd(), 'content/projects')
  const files = fs.readdirSync(projectsDir)
  return files
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(projectsDir, filename), 'utf8')
      const { data } = matter(raw)
      return { slug, ...data }
    })
}

export async function getProjectBySlug(slug) {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')
  const { remark } = require('remark')
  const html = require('remark-html')

  const projectsDir = path.join(process.cwd(), 'content/projects')
  const raw = fs.readFileSync(path.join(projectsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  const processed = await remark().use(html, { sanitize: false }).process(content)
  return { slug, ...data, contentHtml: processed.toString() }
}
