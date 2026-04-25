import { useState } from "react";
import { contactSettings } from "../content/siteContent";

function InquiryForm({ brandName = "The Automotive Group" }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !phone || !message) {
      setStatus("invalid");
      return;
    }

    const subject = encodeURIComponent(`Enquiry: ${brandName}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        `Message for ${brandName}:`,
        message,
      ].join("\n"),
    );

    if (contactSettings.deliveryMode === "mailto") {
      window.location.href = `mailto:${contactSettings.inbox}?subject=${subject}&body=${body}`;
    }

    event.currentTarget.reset();
    setStatus("submitted");
  }

  return (
    <form className="glass-panel p-6 sm:p-8 lg:p-10" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-stone-400">
            Name
          </span>
          <input
            className="contact-input"
            type="text"
            name="name"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-stone-400">
            Email
          </span>
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-stone-400">
            Phone
          </span>
          <input
            className="contact-input"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            autoComplete="tel"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-stone-400">
            Message
          </span>
          <textarea
            className="contact-input min-h-40 resize-y"
            name="message"
            placeholder={`Tell us a little about your interest in ${brandName}.`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <button className="button-primary" type="submit">
          Begin a Conversation
        </button>
        <a
          className="text-xs uppercase tracking-[0.34em] text-stone-400 transition hover:text-stone-200"
          href={`mailto:${contactSettings.inbox}`}
        >
          {contactSettings.inbox}
        </a>
      </div>

      {status === "invalid" ? (
        <p className="mt-4 text-sm text-amber-200">
          Please complete all four fields before sending your enquiry.
        </p>
      ) : null}

      {status === "submitted" ? (
        <p className="mt-4 text-sm text-stone-300">
          Your message has been prepared for the configured inbox.
        </p>
      ) : null}
    </form>
  );
}

export default InquiryForm;
