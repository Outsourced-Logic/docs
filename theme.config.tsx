import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const logo = (
  <svg height="32" viewBox="0 0 594 591" fill="none" display="inline-block" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M383.123 552.415C458.468 526.944 481.207 391.222 433.526 250.184C385.846 109.146 299.198 11.0371 210.768 40.9324C126.527 69.4119 112.997 201.387 160.677 342.426C208.358 483.464 307.778 577.887 383.123 552.415ZM373.462 497.931C425.955 480.185 437.683 373.46 399.415 260.264C361.147 147.067 296.686 66.6073 235.077 87.4353C176.386 107.277 171.053 211.332 209.321 324.528C247.59 437.725 320.969 515.677 373.462 497.931Z" fill="url(#paint0_linear_321_7189)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M545.614 190.124C511.515 118.271 374.067 111.543 239.564 175.373C105.061 239.203 17.7465 336.718 57.7673 421.05C95.8928 501.388 228.545 499.408 363.048 435.578C497.551 371.748 579.713 261.978 545.614 190.124ZM492.635 206.094C468.878 156.034 361.514 156.853 253.563 208.083C145.612 259.313 73.2331 332.731 101.116 391.485C127.678 447.456 231.643 440.598 339.594 389.368C447.545 338.138 516.392 256.155 492.635 206.094Z" fill="url(#paint1_linear_321_7189)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M155.8 325.689L196.485 283.265C196.485 283.265 192.681 268.67 189.453 249.371C184.738 222.385 183.095 197.152 184.704 174.978C184.784 171.916 184.866 170.16 184.866 170.16L133.934 170.703C130.941 216.313 138.45 270.002 155.8 325.689Z" fill="url(#paint2_linear_321_7189)"/>
<defs>
<linearGradient id="paint0_linear_321_7189" x1="182.591" y1="417.548" x2="461.763" y2="319.134" gradientUnits="userSpaceOnUse">
<stop stop-color="#D7539E"/>
<stop offset="0.6875" stop-color="#FA9891"/>
<stop offset="1" stop-color="#F2F625"/>
</linearGradient>
<linearGradient id="paint1_linear_321_7189" x1="65.8662" y1="442.254" x2="507.491" y2="358.282" gradientUnits="userSpaceOnUse">
<stop stop-color="#9895C2"/>
<stop offset="0.457245" stop-color="#E74274"/>
<stop offset="1" stop-color="#F6ED2D"/>
</linearGradient>
<linearGradient id="paint2_linear_321_7189" x1="183.67" y1="417.129" x2="458.311" y2="318.235" gradientUnits="userSpaceOnUse">
<stop stop-color="#D7539E"/>
<stop offset="0.6875" stop-color="#FA9891"/>
<stop offset="1" stop-color="#F2F625"/>
</linearGradient>
</defs>
</svg>)

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
 
  logo: <span>{logo} MULTION AI</span>,
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
