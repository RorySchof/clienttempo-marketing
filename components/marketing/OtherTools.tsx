import { listingCopy, listingNotes, openHouse, showingNotes } from "@/lib/demo-data";
import { BulletBlock, Fields, Insight } from "./ui";

type EmailContent = {
  greeting: string;
  lead: string;
  bridge?: string;
  closing?: string;
  signoff: string;
  snapshotTitle: string;
  snapshot: { label: string; value: string }[];
};

function EmailBody({
  greeting,
  lead,
  bridge,
  closing,
  signoff,
  snapshotTitle,
  snapshot,
}: EmailContent) {
  return (
    <>
      <p className="letter-body">{greeting}</p>
      <p className="letter-body email-gap">{lead}</p>
      {bridge ? <p className="letter-body email-gap">{bridge}</p> : null}
      <div className="snapshot-embed">
        <p className="snapshot-title">{snapshotTitle}</p>
        <Fields rows={snapshot} />
      </div>
      {closing ? <p className="letter-body email-gap">{closing}</p> : null}
      <p className="letter-body email-gap">{signoff}</p>
    </>
  );
}

export function OtherTools() {
  return (
    <>
      <section className="section tool-section">
        <div className="shell">
          <article className="tool-block">
            <div>
              <p className="eyebrow">Showing Notes</p>
              <h3>Turn showing notes into useful follow-up.</h3>
              <p>
                Turn rough notes from one showing or several into a polished
                client email, ready for you to review and send.
              </p>
            </div>
            <div className="tool-visual">
              <div className="plain-panel">
                <p className="panel-label">Showing notes</p>
                <p className="rough-notes">{showingNotes.rough}</p>
              </div>
              <p className="becomes">becomes</p>
              <article className="doc-card">
                <div className="window-scroll">
                  <header className="doc-bar">
                    <h3 className="doc-bar-title">Internal Summary</h3>
                    <span className="doc-tag">Not sent to client</span>
                  </header>
                  <div className="doc-body">
                    <Fields
                      rows={[{ label: "Client sentiment", value: showingNotes.sentiment }]}
                    />
                    <Insight title="Coach's Insight" text={showingNotes.coaching} />
                    <BulletBlock title="Action Items" items={showingNotes.actionItems} />
                    <BulletBlock title="Follow-ups" items={showingNotes.followUps} />
                  </div>
                  <header className="doc-bar">
                    <h3 className="doc-bar-title">Client email</h3>
                    <span className="doc-tag">You review before sending</span>
                  </header>
                  <div className="doc-body">
                    <EmailBody
                      greeting={showingNotes.greeting}
                      lead={showingNotes.lead}
                      bridge={showingNotes.bridge}
                      signoff={showingNotes.signoff}
                      snapshotTitle="Showing Snapshot"
                      snapshot={showingNotes.snapshot}
                    />
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="section tool-section section-muted">
        <div className="shell">
          <article className="tool-block">
            <div>
              <p className="eyebrow">Open House Notes</p>
              <h3>Turn an open house into a useful seller update.</h3>
              <p>
                Turn rough visitor notes into a clear, polished seller report
                that captures the feedback, patterns, and takeaways from the
                day.
              </p>
            </div>
            <div className="tool-visual">
              <div className="plain-panel">
                <p className="panel-label">Visitor notes</p>
                <p className="rough-notes">{openHouse.rough}</p>
              </div>
              <p className="becomes">becomes</p>
              <article className="doc-card">
                <div className="window-scroll">
                  <header className="doc-bar">
                    <h3 className="doc-bar-title">Seller report</h3>
                    <span className="doc-tag">You review before sending</span>
                  </header>
                  <div className="doc-body">
                    <EmailBody
                      greeting={openHouse.greeting}
                      lead={openHouse.lead}
                      closing={openHouse.closing}
                      signoff={openHouse.signoff}
                      snapshotTitle="Open House Snapshot"
                      snapshot={openHouse.snapshot}
                    />
                  </div>
                  <header className="doc-bar">
                    <h3 className="doc-bar-title">Internal Summary</h3>
                    <span className="doc-tag">Not sent to seller</span>
                  </header>
                  <div className="doc-body">
                    <Fields
                      rows={[{ label: "Interest level", value: openHouse.interestLevel }]}
                    />
                    <Insight title="Coach's Insight" text={openHouse.coaching} />
                    <BulletBlock title="Action Items" items={openHouse.actionItems} />
                  </div>
                </div>
              </article>
            </div>
          </article>
        </div>
      </section>

      <section className="section tool-section">
        <div className="shell">
          <article className="tool-block">
            <div>
              <p className="eyebrow">Listing Generator</p>
              <h3>Turn property notes into polished listing copy.</h3>
              <p>
                Paste your property notes and ClientTempo turns the facts into
                a polished listing description.
              </p>
            </div>
            <div className="tool-visual">
              <div className="listing-flow">
                <div className="plain-panel">
                  <p className="panel-label">Property notes</p>
                  <p>{listingNotes}</p>
                </div>
                <p className="becomes">becomes</p>
                <div className="plain-panel plain-panel-result">
                  <p className="panel-label">Listing description</p>
                  <p>{listingCopy}</p>
                </div>
                <ul className="verb-row" aria-label="What you can do with the description">
                  <li>Edit</li>
                  <li>Copy</li>
                  <li>Regenerate</li>
                  <li>Save</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
