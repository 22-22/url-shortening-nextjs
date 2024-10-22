1. SETUP

A. NEXTJS: npx create-next-app@latest (eslint and tailwind included)
B. added prettier (installed the dependency and tailwind plugin, created .prettierrc - basics from the docs + tw, created .prettierignore)
C. added husky
D. created public folder for images

QUESTIONS:

1. How many components are recommended to have in the header section?

WHAT I LEARNED:

NEXTJS:

-   IMAGE:
    To use a local image, import your .jpg, .png, or .webp image files.
    Next.js will automatically determine the intrisic width and height of your image based on the imported file.

import Image from 'next/image'
import profilePic from './me.png' ===> BUT WHERE TO PUT STATIC IMAGES???
<Image
src={profilePic}
alt="Picture of the author"
/>

-   ERRORS:
    Error: Event handlers cannot be passed to Client Component props.

  <li className=... onClick={function onClick} children=...>
                            ^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component.

STYLES:
BACKGROUND-IMAGE
bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-indigo-950

relative -mb-16 ===> to move a section down above the next section.

aria-labelledby="statistics"
