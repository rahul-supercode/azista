"use client";

import Image from "next/image";
import { useId } from "react";

import close from "@/assets/icons/close.svg";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

import styles from "../css/DatasheetDialog.module.css";

/** Figma: Form (2977:15758). */
export default function DatasheetDialog({ ref, product }) {
  const titleId = useId();

  function closeDialog() {
    ref.current?.close();
  }

  function onClick(event) {
    if (event.target === event.currentTarget) closeDialog();
  }

  function onSubmit(event) {
    event.preventDefault();
    // TODO: send the form data to the CRM.
    if (product?.datasheet) {
      const link = document.createElement("a");
      link.href = product.datasheet;
      link.download = "";
      link.click();
    }
    event.currentTarget.reset();
    closeDialog();
  }

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClick={onClick}
      className={styles.dialog}
    >
      <div className={styles.panel}>
        <button type="button" onClick={closeDialog} className={styles.close}>
          <span className="sr-only">Close</span>
          <Image src={close} alt="" />
        </button>
        <h2 id={titleId} className="sr-only">
          {product ? `Download the ${product.name} datasheet` : "Datasheet"}
        </h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <div className={styles.fields}>
            <TextField
              label="Full Name"
              name="name"
              autoComplete="name"
              required
            />
            <TextField
              label="Company Name"
              name="company"
              autoComplete="organization"
              required
            />
            <TextField
              label="Work Email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Role"
              name="role"
              autoComplete="organization-title"
              required
            />
            <TextField
              label="Contact Number"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </div>
          <Button variant="download" type="submit" className={styles.submit}>
            Download Datasheet
          </Button>
        </form>
      </div>
    </dialog>
  );
}
