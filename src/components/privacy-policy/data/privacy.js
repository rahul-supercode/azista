export const lastUpdated = "October 06, 2026";

/** Intro paragraph with an inline link. */
export const intro = {
  before: "These Azista Industries Terms and Conditions apply to the website ",
  linkText: "www.azistaindustries.com",
  href: "https://www.azistaindustries.com",
  after:
    ' and all other online properties (the "Site") operated by AZISTA INDUSTRIES PVT LTD. Please read these Terms carefully.',
};

/**
 * Block types:
 *  - "p"    : paragraph            { text }
 *  - "list" : lettered list        { items: [{ label, text }] }
 *  - "sub"  : sub-section          { title, text }
 */
export const sections = [
  {
    title: "Consent",
    blocks: [
      {
        type: "p",
        text: "The use of this Site entails your agreement to these Terms, as well as any other terms, guidelines, or rules applicable to any portion of this Site without limitation or qualification.",
      },
      {
        type: "p",
        text: "A user who is not in compliance with these terms and conditions is not allowed to use the website or its services.",
      },
      {
        type: "p",
        text: "To ask any questions about the Terms, please contact ecommerce@azistaindustries.com",
      },
      {
        type: "p",
        text: "Our Site helps you browse and purchase Azista's products. We run our website based on the below terms for the safety and benefit of our users.",
      },
    ],
  },
  {
    title: "Privacy",
    blocks: [
      {
        type: "p",
        text: "Our Privacy Policy explains how we collect and use your personal information. Please refer to this document for more information. The Privacy Policy is hereby incorporated into these Terms by reference.",
      },
    ],
  },
  {
    title: "Electronic communication",
    blocks: [
      {
        type: "p",
        text: "By visiting the Site or sending us e-mails, you are communicating with us electronically. Furthermore, when you place an order on the website as a guest or when registering, you agree to accept the terms of service. This implies that you consent to receive communications electronically from us. You will receive communications from us by email or by posting notices to this Site. The electronic delivery of all agreements, notices, disclosures and other communications that we provide to you satisfies any legal requirement that such communications be in writing.",
      },
    ],
  },
  {
    title: "Eligibility",
    blocks: [
      {
        type: "p",
        text: "The Site is not intended for use by those under the age of 12.",
      },
      {
        type: "p",
        text: 'The following statement shall apply if you use the Site on behalf of a company, entity, or organization (collectively "Organization"):',
      },
      {
        type: "list",
        items: [
          {
            label: "(a)",
            text: "You are the authorized representative of that Organization",
          },
          {
            label: "(b)",
            text: "You have the authority to bind that Organization to these Terms; and",
          },
          {
            label: "(c)",
            text: "The Organization has consented to these terms.",
          },
        ],
      },
    ],
  },
  {
    title: "Copyright",
    blocks: [
      {
        type: "p",
        text: 'All content on this Site, including images, illustrations, designs, icons, photographs, video clips, written materials, and other materials (collectively, "Materials", as defined below), is the property of Azista Industries Pt Ltd or its licensors, partners, or affiliates, and is protected by Indian and international copyright laws. Azista Industries Pvt Ltd owns and controls the compilation of this Site and is protected by both Indian and international intellectual property laws. A violation of any copyright laws and trademark laws, as well as privacy, publicity, and/or communication laws and regulations, is strictly prohibited. Please note that you can only use the materials or content on this Site with our express prior written authorization.',
      },
      {
        type: "p",
        text: "To inquire about obtaining authorization to use the materials or content on this Site, please contact us at ecommerce@azistaindustries.com",
      },
      {
        type: "sub",
        title: "Trademark",
        text: 'The trademarks, service marks, trade names, and other content appearing on this Site (collectively, "Marks") belong to Azista Industries Pvt Ltd or their respective owners. It is forbidden for you to display or reproduce the Marks without the prior written consent of Azista Industries Pvt Ltd, and it is forbidden for you to delete or otherwise modify any trademark notices from any content offered or received through the Site.',
      },
    ],
  },
  {
    title: "Limited license",
    blocks: [
      {
        type: "p",
        text: "We grant you a limited license to use the Site for personal use only. Consequently, this grant does not allow you to do any of the following:",
      },
      {
        type: "list",
        items: [
          {
            label: "(a)",
            text: "resell or make any commercial use of this Site or any of the contents of this Site;",
          },
          {
            label: "(b)",
            text: "modify, adapt, translate, reverse engineer, decompile, disassemble, or convert into human-readable form any of the contents of this Site not intended to be so read. This includes using or directly viewing the underlying HTML or other code from this Site except as interpreted and displayed in a web browser.",
          },
          {
            label: "(c)",
            text: "Copy, imitate, mirror, reproduce, distribute, publish, download, display, perform, post or transmit any of the contents of this Site (including any Marks) in any form or by any means, including, but not limited to, electronic, mechanical, photocopying, recording or otherwise.",
          },
          {
            label: "(d)",
            text: "Use any data mining, bots, spiders, automated tools, or similar data gathering and extraction methods on the contents of the Site or to collect any information from the Site or any other user of the Site.",
          },
        ],
      },
    ],
  },
];
