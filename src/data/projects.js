// Each project becomes a card on the home page and a case study at /work/:slug.
// `flow` drives the workflow diagram. Node kinds: trigger | ai | logic | data | action.
// A node with `branches` renders as a decision with labelled outcomes.

export const projects = [
  {
    slug: 'expense-iq',
    title: 'ExpenseIQ',
    kicker: 'AI expense categorisation & approval',
    summary:
      'An expense system for Naira spending. Staff file a claim in minutes, AI categorises and checks it, and larger claims go to a manager queue automatically.',
    image: '/images/expenseiq-app.webp',
    status: 'Live',
    links: {
      live: 'https://expense-categorisation-iq.lovable.app',
      code: 'https://github.com/obaloluwaadeleke/expense-categorisation-iq',
    },
    stack: ['Make', 'Airtable', 'AI model APIs', 'Webhooks', 'JSON', 'Lovable'],
    flow: [
      { kind: 'trigger', label: 'Expense submitted', note: 'Vendor, amount, purpose, receipt' },
      { kind: 'action', label: 'Make webhook', note: 'Receives JSON payload' },
      { kind: 'ai', label: 'AI categorise', note: 'Category + review notes' },
      { kind: 'logic', label: 'Validate output', note: 'Reject malformed responses' },
      { kind: 'data', label: 'Airtable record', note: 'Reference number issued' },
      { kind: 'logic', label: 'Amount check', branches: ['≥ ₦100k → manager queue', '< ₦100k → standard review'] },
    ],
    problem:
      'Expense claims in small businesses usually arrive as receipts in chat threads and spreadsheets nobody keeps up to date. Managers can’t see what was spent or why, and large claims get approved without a proper look.',
    built: [
      'An AI-assisted categorisation workflow in Make that receives each claim, sends it to an AI model and writes a structured record to Airtable.',
      'A live front end built with Lovable: employees file without logging in and get an instant reference number, while managers sign in to an approval queue.',
      'Threshold routing: claims of ₦100,000 and above are routed to manager approval automatically, with approve, decline or clarify actions.',
      'A manager view with the full record, AI notes, spend totals and approval rates in one place.',
    ],
    reliability: [
      'Fixed malformed HTTP requests by tightening the JSON payload structure between the app and Make.',
      'Added a guard for undefined AI message content, so an empty model response cannot become a blank record.',
      'Resolved content-type mismatches between the webhook and the AI API so requests are parsed the same way every time.',
    ],
    outcome:
      'Every claim is captured, categorised and traceable from one place, and anything above the threshold always reaches a human before it is approved.',
  },
  {
    slug: 'n8n-document-drive',
    title: 'AI Document Filing',
    kicker: 'n8n · summarise, convert, file to Google Drive',
    summary:
      'An n8n workflow that fetches content, summarises it with AI, converts it to a file and files it in the right Google Drive folder, creating the folder if it doesn’t exist yet.',
    image: null,
    status: 'Built & tested',
    links: {},
    stack: ['n8n', 'HTTP Request', 'AI summarisation', 'Google Drive', 'OAuth2', 'Binary data'],
    flow: [
      { kind: 'trigger', label: 'HTTP Request', note: 'Fetch source content' },
      { kind: 'ai', label: 'AI summarise', note: 'Condense to key points' },
      { kind: 'action', label: 'Convert to file', note: 'Binary output' },
      { kind: 'data', label: 'Search Drive', note: 'Look up target folder' },
      { kind: 'logic', label: 'Folder exists?', branches: ['Yes → use folder ID', 'No → create folder'] },
      { kind: 'logic', label: 'Merge', note: 'Rejoin both paths' },
      { kind: 'action', label: 'Upload to Drive', note: 'Dynamic folder ID' },
    ],
    problem:
      'Teams spend time reading long documents, writing summaries and filing them by hand. The files end up in duplicate folders with inconsistent names.',
    built: [
      'An n8n pipeline joining HTTP Request, AI summarisation, file conversion, Google Drive folder search, conditional routing, Merge and upload.',
      'Google OAuth2 credentials and Drive operations, using dynamic folder IDs so each file goes to the correct destination.',
      'Written documentation of the workflow logic, API usage, data movement and troubleshooting decisions.',
    ],
    reliability: [
      'A folder-existence check before upload, so repeated runs never create duplicate folders.',
      'A Merge node that brings the existing-folder and new-folder paths back into one upload step, so the logic isn’t duplicated.',
      'Binary data is handled explicitly between conversion and upload, so files arrive intact rather than as empty or corrupted uploads.',
    ],
    outcome:
      'Documents arrive summarised and filed in a consistent folder structure, with no manual sorting and no duplicate folders.',
  },
  {
    slug: 'lead-routing',
    title: 'Lead Capture & Routing',
    kicker: 'Make · Airtable · AI-assisted triage',
    summary:
      'Lead workflows that capture prospects into Airtable, categorise them by service, and trigger the right follow-up for each category.',
    image: null,
    status: 'Workflow design',
    links: {},
    stack: ['Make', 'Airtable', 'AI model APIs', 'Routers', 'Email'],
    flow: [
      { kind: 'trigger', label: 'New enquiry', note: 'Form or inbound message' },
      { kind: 'data', label: 'Airtable lead', note: 'Structured record' },
      { kind: 'ai', label: 'AI categorise', note: 'Service + intent' },
      { kind: 'logic', label: 'Route by service', branches: ['Service A → its owner', 'Service B → its owner', 'Unclear → human review'] },
      { kind: 'action', label: 'Follow-up', note: 'Notify + respond' },
    ],
    problem:
      'Enquiries arrive from several channels and sit unanswered until someone sorts them. The right specialist hears about a lead late, if at all.',
    built: [
      'Airtable lead records with routing logic that sorts prospects by service category.',
      'Make scenarios for lead capture, AI-assisted categorisation and business follow-up across connected apps.',
      'Downstream actions triggered per category, so each lead reaches the right person with its context attached.',
    ],
    reliability: [
      'A catch-all review route, so leads the AI can’t classify confidently go to a person instead of being dropped.',
      'Structured fields in Airtable keep every lead’s source, category and status traceable.',
    ],
    outcome:
      'Every enquiry is recorded and categorised, and reaches the right person without anyone sorting the inbox by hand.',
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
