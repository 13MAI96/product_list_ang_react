# Tecnical test 23/10/25

## Assumptions and definitions

### About the data obtained from the api
There is one request to obtain the list each time a user navigate to the home screen. With this data, any filter is applied locally, updating the items displayed but without changing the original list. 

### Use of libraries
No advanced store management is required, so no libraries were implemented for this funcionality.
As for style libraries, the project requirements do not require complex styles, so I considered implementing them directly with CSS.

### Designs and functionalities
No specific designs were defined, so I implemented designs according my criteria with the aim of providing a good visual presentation.
A button was added on product page to navigate to the home screen, adding navigability and usefulness to this project.

Tooltips to cacth errors?
Spinners for loading?

### Components
Reusable components were created only for cases where reuse was required, such as CARD and STAR. These components have their own defined styles and receive specific data depending on the circumstances and requirements.




# Test
## Purpose:

Build a small product list with searchbar and a demonstrate React and JavaScript/TypeScript fundamentals.

Time
~60 minutes

### Tech

_React (with or without TypeScript)_

Optional: Tailwind or Material UI (or plain CSS)

### What to build

1. Render a list of products from this service: https://fakestoreapi.com/products at "/products".
2. Search by product name.
3. Create a detail page with a description and an image at "/products/:id".

### Submission

Share a StackBlitz/CodeSandbox link or a public GitHub repo with brief notes (what you implemented and trade‑offs).

### Notes

1. You may use Google/AI, but be ready to explain your code and choices.
2. API Docs if you need it: https://fakestoreapi.com/docs
