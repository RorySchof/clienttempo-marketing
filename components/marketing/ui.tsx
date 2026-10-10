import type { ReactNode } from "react";

export function DocumentCard({
  title,
  tag,
  className,
  children,
}: {
  title: string;
  tag?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article className={className ? `doc-card ${className}` : "doc-card"}>
      <header className="doc-bar">
        <h3 className="doc-bar-title">{title}</h3>
        {tag ? <span className="doc-tag">{tag}</span> : null}
      </header>
      <div className="doc-body">{children}</div>
    </article>
  );
}

export function Fields({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <dl className="fields">
      {rows.map((row) => (
        <div key={row.label}>
          <dt>{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BulletBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="bullets">
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Insight({
  title,
  items,
  text,
}: {
  title: string;
  items?: string[];
  text?: string;
}) {
  return (
    <aside className="insight">
      <h4>{title}</h4>
      {text ? <p>{text}</p> : null}
      {items ? (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
