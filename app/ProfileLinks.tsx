const email = "veerabhdrahaibatpure@gmail.com";

const profiles = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/haibatpure-virbhadra-61658524a/", id: "linkedin", label: "Let’s connect", external: true },
  { name: "Email", href: `mailto:${email}`, id: "email", label: "Write to me", external: false },
  { name: "Experience", href: "#experience", id: "experience", label: "Nearly 2 years", external: false },
];

function ProfileIcon({ id }: { id: string }) {
  if (id === "linkedin") {
    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm6 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.7v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6H9.4V9Z" /></svg>;
  }
  if (id === "email") {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>;
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></svg>;
}

export default function ProfileLinks() {
  return (
    <nav className="profile-links" aria-label="Find me online">
      <p className="profile-heading">Find me online <span aria-hidden="true" /></p>
      <div className="profile-grid">
      {profiles.map((profile) => (
        <a
          key={profile.name}
          className={`profile-card profile-${profile.id}`}
          href={profile.href}
          {...(profile.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          <span className="profile-icon"><ProfileIcon id={profile.id} /></span>
          <span className="profile-arrow" aria-hidden="true">{profile.external ? "↗" : "→"}</span>
          <span className="profile-name">{profile.name}</span>
          <span className="profile-description">{profile.label}</span>
          {profile.external && <span className="contact-status"> (opens in a new tab)</span>}
        </a>
      ))}
      </div>
    </nav>
  );
}
