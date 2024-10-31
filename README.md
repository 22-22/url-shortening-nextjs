1. SETUP

A. NEXTJS: npx create-next-app@latest (eslint and tailwind included)
B. added prettier (installed the dependency and tailwind plugin, created .prettierrc - basics from the docs + tw, created .prettierignore)
C. added husky
D. created public folder for images

QUESTIONS:

1. What's the best way to submit a form with NextJS app router? What's the best option for a state management nowadays?
   (for such a small app like this one and for bigger ones)?
2. How to prevent a form height from jumping when an error message occurs (that an input in empty)?
3. is it a good practice to hide elements on mobile view like this: className="hidden sm:block"?

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

FORMDATA === looks like it makes sense to use it for a more complicated inputs than just one text field
with TS:
const dformdata = new FormData(event.currentTarget);
data.get("url");
also looks like it can be used instead of useState (avoid constant rerenders)

encodeURI
const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// Expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

ISSUES:

couldn't add a "required" html attribute to react custom validation
because it was showing an error (a red border around an input) when it was empty
even if it was on initial render, before the user started typing something.
