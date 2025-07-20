import ContactForm from "@/Components/ContactPage/ContactForm";
import PersonalInfo from "@/Components/ContactPage/PersonalInfo";
import React from "react";
export const metadata = {
  title: "Contact with Sabbir Ahmed",
  description: "",
};
function page() {
  return (
    <div className="p-5 md:p-0">
      <PersonalInfo />
      <ContactForm />
    </div>
  );
}

export default page;
