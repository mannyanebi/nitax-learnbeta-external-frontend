type IFaq = {
  id: number;
  question: string;
  answer: string;
};

const faqs: IFaq[] = [
  {
    id: 1,
    question: "I have a voucher and would like to redeem it.",
    answer: `If you would like to redeem your voucher, you first need to sign up by clicking on “Sign Up.”
  Once you have successfully registered, log on to our site. Enter your voucher code in the text box at the top of the page where it says “Have a voucher/Enter a voucher”. Click the “Activate" button to activate it.`,
  },
  {
    id: 2,
    question: "I have forgotten my password. How do I reset it?",
    answer: `Click on “Log in” and proceed by clicking on "Forgot your password". Enter your email address and click "Submit". An email from hello@learnbeta.ng will be sent to you where you will click on “Change my password” to change your password. Please ensure you check your junk and spam folder if you do not receive the email in your inbox.`,
  },
  {
    id: 3,
    question:
      "Can we download the study materials and save it to our computers so we can print it?",
    answer: `Documents such as mock examinations, summaries and tutorials and the animated lessons (the videos) need to be viewed from your account and cannot be downloaded or printed.`,
  },
  {
    id: 4,
    question: "How can I register an account with Learnbeta?",
    answer: `Please go to www.learnbetang.com and click on the "Sign up" tab. Please fill in all the relevant information and click the "Sign Up" button to complete your registration. Please make sure your password is 8 characters long.`,
  },
  {
    id: 5,
    question: "When does the voucher expire?",
    answer: `<p>The voucher expires after 1 year if it is not used. If you redeem your voucher, then you will have access to the content your voucher entitles you to.</p>
    <p>Examples of subscriptions:</p>
    <ul>
      <li>12 months access to your grades</li>
      <li>12 months access to a subject of your choice</li>
      <li>Discount off a purchase of your choice</li>
      <li>The MTN voucher gives you 12 months access to everything in the "School Library". The expiry date for the voucher, once you redeem it, is visible on your LearnbetaNG account under "Subscription"</li>
    </ul>
    `,
  },
  {
    id: 6,
    question: "Does the voucher cost me money to use?",
    answer: `<p>The voucher does not cost you money to use. After the voucher expires you will have to subscribe through credit card.</p>
    <p>Please note we only offer products per grade or per subject through a monthly subscription.</p>`,
  },
  {
    id: 7,
    question: "I would like to find out the costs involved?",
    answer: `<p>The cost is currently N5,000 per school month with all subjects or N2,000 per subject within a school per month.</p>
    <p>Please note all subscriptions are purchased online and are accessed through your LearnbetaNG account through "My Dashboard".</p>`,
  },
  {
    id: 8,
    question: "What are the payment methods available?",
    answer: `We offer credit card or Visa/Master card as a payment option.`,
  },
];

export default faqs;
