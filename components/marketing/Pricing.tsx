import { links } from "@/lib/site";

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "/month",
    featured: false,
    text: "Try all five tools and see how ClientTempo fits into your workflow.",
  },
  {
    name: "Pro",
    price: "$10",
    cadence: "/month",
    featured: true,
    text: "For the busy realtor.",
  },
  {
    name: "Pro Plus",
    price: "$20",
    cadence: "/month",
    featured: false,
    text: "For the heavy user.",
  },
];

export function Pricing() {
  return (
    <section className="section section-muted" id="pricing">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow">Pricing</p>
          <h2>Start free. Upgrade as you need.</h2>
          <p>
            Try ClientTempo free, then choose the plan that fits your
            workload.
          </p>
        </header>
        <div className="plans">
          {plans.map((plan) => (
            <article
              className={plan.featured ? "plan plan-featured" : "plan"}
              key={plan.name}
            >
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">
                {plan.price}
                <span>{plan.cadence}</span>
              </p>
              <p>{plan.text}</p>
            </article>
          ))}
        </div>
        <a className="btn btn-primary" href={links.signUp}>
          Start Free
        </a>
      </div>
    </section>
  );
}
