"use client";

import { Suspense, useState } from "react";

import Button from "@/components/ui/Button";
import SelectField from "@/components/ui/SelectField";
import TextField from "@/components/ui/TextField";

import styles from "../css/ContactForm.module.css";
import { enquiryTypes } from "../data/contact";
import MissionMessage from "./MissionMessage";

const messageProps = {
  variant: "boxed",
  multiline: true,
  label: "Message",
  name: "message",
  className: styles.message,
};

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    // TODO: send the form data to the CRM.
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      onChange={() => setSent(false)}
      aria-label="Contact Azista"
      className={styles.form}
    >
      <div className={styles.fields}>
        <TextField
          variant="boxed"
          label="Full Name"
          name="name"
          autoComplete="name"
          required
        />
        <TextField
          variant="boxed"
          label="Contact number"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
        />
        <TextField
          variant="boxed"
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          variant="boxed"
          label="Designation"
          name="designation"
          autoComplete="organization-title"
          required
        />
        <TextField
          variant="boxed"
          label="Company/Organization"
          name="company"
          autoComplete="organization"
          required
        />
        <SelectField
          label="Enquiry type"
          name="enquiryType"
          options={enquiryTypes}
        />
        {/* Reading the URL renders the field on the client; the fallback
            keeps it in the prerendered HTML. */}
        <Suspense fallback={<TextField {...messageProps} />}>
          <MissionMessage {...messageProps} />
        </Suspense>
      </div>
      <div className={styles.actions}>
        <Button variant="framed" type="submit">
          Submit
        </Button>
        <p role="status" className="text-1">
          {sent ? "Thank you. We’ll be in touch shortly." : ""}
        </p>
      </div>
    </form>
  );
}
