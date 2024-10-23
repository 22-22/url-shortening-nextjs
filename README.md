1. SETUP

A. NEXTJS: npx create-next-app@latest (eslint and tailwind included)
B. added prettier (installed the dependency and tailwind plugin, created .prettierrc - basics from the docs + tw, created .prettierignore)
C. added husky
D. created public folder for images

QUESTIONS:

1. semantic html tags in footer elements?
2. is it a good practice to hide elements on mobile view like this: className="hidden sm:block"?

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

icon in a circle ===>

<div className="relative -mt-10 mb-10 w-20 h-20 rounded-full bg-indigo-950">
    <Image className="absolute top-4 left-4" src={fullyCustomIcon} alt="fully customizable icon" />
</div>

aria-labelledby="statistics"

<h2 className="sr-only">Footer</h2>

TODO: change svg fill on hover
