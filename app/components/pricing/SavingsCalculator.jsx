"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

const apps = [
  ["Slack", "slack.svg", 9], ["Teams", "teams.svg", 8], ["Google Drive", "drive.svg", 12], ["Salesforce", "salesforce.svg", 25],
  ["HubSpot", "hubspot.svg", 18], ["OpenAI", "openai.svg", 20], ["Jira", "jira.svg", 8], ["Loom", "loom.svg", 15],
  ["Notion", "notion.svg", 10], ["Monday", "monday.svg", 12], ["Trello", "trello.svg", 5], ["Asana", "asana.svg", 11],
  ["Smartsheet", "smartsheet.svg", 9], ["Airtable", "airtable.svg", 20], ["Linear", "linear.svg", 10], ["Wrike", "wrike.svg", 10],
  ["Miro", "miro.svg", 8], ["SharePoint", "sharepoint.svg", 5], ["Confluence", "confluence.svg", 6], ["ClickUp", "clickup.svg", 12],
];

export default function SavingsCalculator() {
  const [selected, setSelected] = useState(["Slack", "Teams"]);
  const [people, setPeople] = useState(1);
  const chosen = useMemo(() => apps.filter(([name]) => selected.includes(name)), [selected]);
  const appAnnual = chosen.reduce((sum, app) => sum + app[2] * 12 * people, 0);
  const clickupAnnual = 144 * people;
  const savings = Math.max(0, appAnnual - clickupAnnual);

  const toggle = (name) => setSelected(current => current.includes(name) ? current.filter(item => item !== name) : [...current, name]);

  return <section className="savings-section">
    <div className="pricing-container">
      <div className="savings-eyebrow">[ SAVE WITH CLICKUP ]</div>
      <h2>Save time. Save money.<br/>Kill busy work.</h2>
      <div className="savings-calculator">
        <div className="savings-apps">
          <h3>Your apps today</h3><p>Which apps do you use?</p>
          <div className="app-logo-grid">{apps.map(([name, logo]) => <button type="button" className={selected.includes(name) ? "selected" : ""} aria-pressed={selected.includes(name)} aria-label={name} title={name} onClick={() => toggle(name)} key={name}><Image src={`/pricing/apps/${logo}`} alt="" width={38} height={38}/>{selected.includes(name) && <span><Check size={11}/></span>}</button>)}</div>
          <div className="people-control"><div><span>People at your company</span><b>{people} {people === 1 ? "person" : "people"}</b></div><input type="range" min="1" max="100" value={people} onChange={event => setPeople(Number(event.target.value))}/></div>
          <div className="savings-mark"><i/><Image src="/pricing/apps/clickup.svg" alt="ClickUp" width={44} height={44}/><i/></div>
        </div>
        <div className="replace-card">
          <h3>Apps to replace</h3>
          <div className="replace-list">{chosen.length ? chosen.map(([name,, price]) => <div key={name}><span>{name}</span><b>${price} / user</b></div>) : <div><span>Select apps to compare</span><b>—</b></div>}</div>
          <div className="replace-total"><span>Total</span><b>${appAnnual.toLocaleString()} /year</b></div>
          <div className="clickup-cost">CLICKUP FOR {people} {people === 1 ? "USER" : "USERS"} = ${clickupAnnual.toLocaleString()} / YEAR</div>
          <div className="saving-result"><div><span>Cost savings</span><strong>${savings.toLocaleString()}</strong></div><p>ClickUp can save a {people} person company ${savings.toLocaleString()} per year compared to the non-enterprise price of your apps.</p></div>
          <Link href="/signup">Start saving with ClickUp today</Link>
          <p className="quote-link">Get an official quote to share <Link href="/demo">with your team</Link></p>
        </div>
      </div>
    </div>
  </section>;
}
