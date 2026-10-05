import { profile } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <ul className="flex gap-5">
          <li><a className="hover:text-fg" href={`mailto:${profile.email}`}>Email</a></li>
          <li><a className="hover:text-fg" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-fg" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}
