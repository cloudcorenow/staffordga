# Project memory

## Product intent & audience

- Vite + React website with customer-facing features (previously included live chat support).
- Site is subject to state regulatory compliance constraints.

## Brand personality & voice

- Production-quality, polished presentation; no further voice details inferred yet.

## Visual design & UX direction

- Stack: Vite, React (JSX), Tailwind CSS, Lucide React icons.
- No external UI theme or icon packages beyond Lucide React unless explicitly requested.

## Decisions, constraints & rationale

- JivoChat widget removed from `index.html` (site-wide script) because it was no longer compliant with state regulations.
- No residual JivoChat references remain; build verified successful.
- Third-party integrations must be evaluated for state compliance before addition.

## Open questions & assumptions

- Which specific state regulations triggered JivoChat non-compliance (privacy, data residency, consent)?
- Is a replacement chat/support solution needed, or is live chat being dropped entirely?
- Are other third-party scripts/embeds on the site that need a compliance audit?
- What is the website's target audience and primary purpose (not yet fully described)?