import { realGpt } from "@/lib/demo-data";

export function RealGPT() {
  return (
    <section className="section realgpt-band">
      <div className="shell realgpt-layout">
        <div>
          <p className="eyebrow">RealGPT</p>
          <h2>An AI thought partner for the work that doesn&apos;t fit in a box.</h2>
          <p className="realgpt-copy">
            Not every question fits into a tool. Ask about a property, a
            client situation, a listing, a marketing idea, a negotiation, or
            whatever you&apos;re working through.
          </p>
          <p className="realgpt-copy">
            RealGPT helps you explore ideas, understand options, and think
            through your next move.
          </p>
          <p className="realgpt-copy">
            The latest AI technology, built into your everyday workflow.
          </p>
        </div>
        <div>
          <div className="chat chat-feature">
            <p className="chat-label">You</p>
            <div className="bubble bubble-user">{realGpt.question}</div>
            <p className="chat-label">RealGPT</p>
            <div className="bubble bubble-assistant">{realGpt.answer}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
