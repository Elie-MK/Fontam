import React from 'react'
import ContactAdress from './ContactAdress'
import { Helmet } from 'react-helmet'

export default function Contact() {
  return (
    <div>
      <Helmet>
        <meta name="title" content="Fondation Taylor Muanza"/>
        <meta name="description" content="Laissez-nous un message ."/>

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://fontam.org/contact"/>
        <meta property="og:title" content="Fondation Taylor Muanza"/>
        <meta property="og:description" content="Laissez-nous un message."/>
        <meta property="og:image" content="fontam_rdc.png"/>

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://fontam.org/contact"/>
        <meta property="twitter:title" content="Fondation Taylor Muanza"/>
        <meta property="twitter:description" content="Laissez-nous un message"/>
        <meta property="twitter:image" content="fontam_rdc.png"/>
      </Helmet>
      <ContactAdress />
    </div>
  )
}
