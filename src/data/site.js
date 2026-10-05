// All personal copy lives here. Edit this file to update the site's content.

export const profile = {
  name: 'Obaloluwa Adeleke',
  firstName: 'Obaloluwa',
  role: 'AI Automation Specialist',
  location: 'Lagos, Nigeria',
  email: 'ade.enoch01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/obaloluwa-adeleke-065a721b4',
  github: 'https://github.com/obaloluwaadeleke',
  availability: 'Open to full-time remote / hybrid roles and freelance builds',
  photo: '/images/obaloluwa.webp',
  photoFallback: '/images/obaloluwa.jpg',
}

export const mailto = (subject = 'Automation project') =>
  `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`

export const stats = [
  { value: '10 yrs', label: 'turning client requirements into delivered projects' },
  { value: '4', label: 'automation platforms: Make, n8n, Zapier, Power Automate' },
  { value: '5', label: 'AI model APIs integrated: OpenAI, Claude, OpenRouter, DeepSeek, SiliconFlow' },
]

export const services = [
  {
    title: 'AI document & data processing',
    body: 'Classify, summarise and extract from emails, files and forms, then return clean structured JSON your other tools can use.',
    tags: ['Classification', 'Summarisation', 'Extraction'],
  },
  {
    title: 'Lead capture & routing',
    body: 'Capture enquiries, tag them by service or value, and route each one to the right person or follow-up sequence automatically.',
    tags: ['Airtable', 'CRM', 'Follow-ups'],
  },
  {
    title: 'Approval workflows & internal tools',
    body: 'Submission forms, threshold rules and approval queues, so managers decide and the workflow handles the admin.',
    tags: ['Thresholds', 'Queues', 'Audit trail'],
  },
  {
    title: 'Integrations & API glue',
    body: 'Connect apps that don’t talk to each other through REST APIs and webhooks, with authentication and data mapping set up correctly.',
    tags: ['REST', 'Webhooks', 'OAuth2'],
  },
  {
    title: 'Workflow rescue',
    body: 'An existing automation is failing, duplicating or quietly dropping data. I trace the requests, fix the mapping and add the checks it was missing.',
    tags: ['Debugging', 'Validation', 'Monitoring'],
  },
]

export const process = [
  {
    step: '01',
    title: 'Map',
    body: 'We walk through the process as it runs today, covering inputs, decisions, owners and edge cases, before any tool is chosen.',
  },
  {
    step: '02',
    title: 'Build',
    body: 'I build the workflow in Make, n8n or Zapier, with AI steps only where they beat plain logic.',
  },
  {
    step: '03',
    title: 'Break it on purpose',
    body: 'I test it with bad input, missing fields, API errors and duplicates. Each failure path gets a fallback or a human-review step.',
  },
  {
    step: '04',
    title: 'Hand over',
    body: 'You get written documentation of the logic, credentials, dependencies and what to do when something alerts.',
  },
]

export const skills = [
  { group: 'Automation', items: ['Make', 'n8n', 'Zapier', 'Power Automate'] },
  { group: 'AI models', items: ['OpenAI', 'Claude', 'OpenRouter', 'DeepSeek', 'SiliconFlow'] },
  { group: 'APIs & data', items: ['REST APIs', 'Webhooks', 'OAuth2', 'JSON', 'Airtable', 'Google Drive'] },
  { group: 'Reliability', items: ['Error handling', 'Validation', 'Fallback logic', 'Monitoring', 'Documentation'] },
  { group: 'Platforms', items: ['Google Workspace', 'Microsoft 365', 'WordPress'] },
  { group: 'Build tools', items: ['Lovable', 'Claude', 'GitHub'] },
]
