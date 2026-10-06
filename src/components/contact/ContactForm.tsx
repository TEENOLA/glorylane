import { useState, type FormEvent } from "react";
import { CtaPill } from "../ui/Buttons";

const CLASS_OPTIONS = ["JSS1", "JSS2", "JSS3", "SSS1", "SSS2", "SSS3"];

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [classOfInterest, setClassOfInterest] = useState(CLASS_OPTIONS[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // Demo form only — no backend is wired up yet.
    console.log({ fullName, phone, email, classOfInterest, message });
  }

  return (
    <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="f-name" className="block text-sm font-semibold text-ink-soft mb-1.5">
          Full name
        </label>
        <input
          id="f-name"
          type="text"
          placeholder="Your name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className="w-full px-3 py-2.5 border border-rule rounded-sm text-sm bg-white text-ink"
        />
      </div>
      <div>
        <label htmlFor="f-phone" className="block text-sm font-semibold text-ink-soft mb-1.5">
          Phone
        </label>
        <input
          id="f-phone"
          type="tel"
          placeholder="080..."
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="w-full px-3 py-2.5 border border-rule rounded-sm text-sm bg-white text-ink"
        />
      </div>
      <div>
        <label htmlFor="f-email" className="block text-sm font-semibold text-ink-soft mb-1.5">
          Email
        </label>
        <input
          id="f-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full px-3 py-2.5 border border-rule rounded-sm text-sm bg-white text-ink"
        />
      </div>
      <div>
        <label htmlFor="f-class" className="block text-sm font-semibold text-ink-soft mb-1.5">
          Class of interest
        </label>
        <select
          id="f-class"
          value={classOfInterest}
          onChange={(event) => setClassOfInterest(event.target.value)}
          className="w-full px-3 py-2.5 border border-rule rounded-sm text-sm bg-white text-ink"
        >
          {CLASS_OPTIONS.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="f-msg" className="block text-sm font-semibold text-ink-soft mb-1.5">
          Message
        </label>
        <textarea
          id="f-msg"
          placeholder="Tell us a bit about your enquiry"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full px-3 py-2.5 border border-rule rounded-sm text-sm bg-white text-ink min-h-[90px] resize-y"
        />
      </div>
      <CtaPill type="submit" className="self-start">
        Send Enquiry
      </CtaPill>
      <p className="text-xs text-ink-soft mt-1.5">This is a demo form on a portfolio site — it isn't wired to send email.</p>
    </form>
  );
}
