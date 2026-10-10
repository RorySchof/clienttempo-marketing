import {
  actionItems,
  clientEmail,
  coachInsight,
  draftReply,
  followUps,
  replySummary,
} from "@/lib/demo-data";
import { BulletBlock, DocumentCard, Fields, Insight } from "./ui";

const flow = [
  { step: "1", name: "Forward", detail: "From your inbox" },
  { step: "2", name: "Understand", detail: "Key details and context" },
  { step: "3", name: "Coach", detail: "Insight into what matters" },
  { step: "4", name: "Reply", detail: "A polished draft you review" },
];

export function RealtorReplyDemo() {
  return (
    <section className="section section-muted" id="realtor-reply">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Realtor Reply</p>
          <h2>Forward an email from your normal inbox.</h2>
          <p>
            With just a few clicks, ClientTempo pulls out the key details,
            gives you a coach&apos;s insight into what matters, highlights
            what needs your attention, and prepares a polished draft reply
            you can review before sending.
          </p>
        </header>

        <ol className="flow">
          {flow.map((item) => (
            <li key={item.step}>
              <span className="flow-step">{item.step}</span>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ol>

        <div className="reply-layout">
          <DocumentCard className="doc-scroll" title="Client email" tag="Forward">
            <dl className="letter-meta">
              <div>
                <dt>From</dt>
                <dd>{clientEmail.from}</dd>
              </div>
              <div>
                <dt>To</dt>
                <dd>{clientEmail.to}</dd>
              </div>
              <div>
                <dt>Subject</dt>
                <dd>{clientEmail.subject}</dd>
              </div>
            </dl>
            <p className="letter-body">{clientEmail.body}</p>
          </DocumentCard>

          <DocumentCard className="doc-scroll" title="Internal Summary" tag="Not sent to client">
            <p className="doc-kicker">Understand</p>
            <h4 className="block-title">Client Summary</h4>
            <Fields
              rows={[
                { label: "Client Status", value: replySummary.status },
                { label: "Decision Factors", value: replySummary.factors },
                { label: "Momentum Signal", value: replySummary.momentum },
              ]}
            />
            <Insight title="Coach's Insight" items={coachInsight} />
            <p className="doc-kicker">Act</p>
            <BulletBlock title="Action Items" items={actionItems} />
            <BulletBlock title="Follow-ups" items={followUps} />
          </DocumentCard>

          <div className="draft">
            <DocumentCard title="Draft Reply" tag="You review before sending">
              <p className="letter-body">{draftReply}</p>
              <p className="draft-note">
                This is the client-facing draft. The summary above stays with
                you. Copy it, edit it, and send it yourself.
              </p>
            </DocumentCard>
          </div>
        </div>
      </div>
    </section>
  );
}
