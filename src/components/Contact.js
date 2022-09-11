import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <section id="contact" className="relative">
        <GitHubIcon onClick={() => window.open('https://github.com/untjala', '_blank')}/> 
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/jala-unterreiner-05171b246/', '_blank')}/>
    </section>
  );
}
