My Netlify deployment failed because npm run build stopped due to ESLint warnings being treated as errors when CI=true.
I want you to fix everything properly so the site builds successfully.

Here’s the full list of issues from the Netlify logs:

src/components/CarAlbum.js:

'lightNavy' is assigned a value but never used

React Hook useEffect has a missing dependency: 'images.length'

src/components/ContactForm.js:

'useEffect' is defined but never used

'handleSubmit' is assigned a value but never used

src/components/Footer.js:

'secondaryGreen' is assigned a value but never used

Your tasks:

Fix or remove all unused imports and variables listed above.

Add the missing dependency (images.length) to the useEffect dependency array in CarAlbum.js.

Verify all components follow ESLint rules so there are no warnings left.

Create a .env file at the root of the project and add this line:

CI=false


This ensures Netlify doesn’t treat warnings as errors during the build.

Make sure .env is included in .gitignore if it isn’t already.

Run npm run build locally to confirm the site builds successfully before pushing changes.

Commit the fixes with the message:

Fix: cleaned up ESLint warnings and disabled CI flag for Netlify build


Don’t touch or rename anything unrelated to these warnings. Just fix the above issues so the build passes cleanly on Netlify.