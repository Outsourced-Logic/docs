import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import Link from 'next/link'; // Use Next.js Link instead of react-router-dom

const config: DocsThemeConfig = {
  head: (
    <>
     <link rel="icon" type="image/png" href=".\icon-1012.png"></link>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="MultiOn Documentation" />
      <meta property="og:description" content="MultiOn Documentation" />
     
    </>
    
    ),

  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – MultiOn'
      }
    }
    else{
      return {
        titleTemplate: 'MultiOn Documentation'
      }
    }
  },
 
  logo: <span><img style={{display:"inline"}} src=".\icon-48.png" /> MULTION AI</span>,
  project: {
    link: 'https://github.com/MULTI-ON/docs',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/MULTI-ON/docs',
  footer: {
    text: 'MULTION Docs',
  },
}

export default config
