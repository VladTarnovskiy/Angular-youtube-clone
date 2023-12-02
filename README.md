# YouTube-clone

- App deploy: https://vladtarnovskiy.github.io/Angular-youtube-clone/

## Application structure

- Main page
- Detailed information page
- Favorite page
- Admin page
- Login page
- 404 pages

  ```
    app
    ├── core
    │   ├── components
    │   ├── pages
    │   ├── services
    │   ├── guards
    ├── shared
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pipes
    ├── youtube
    │   ├── components
    │   ├── directives
    │   ├── models
    │   ├── pages
    │   ├── pipes
    │   ├── services
    ├── auth
    │   ├── components
    │   ├── models
    │   ├── pages
    │   ├── services
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.ts
    ├── app.component.spec.ts
    ├── app.module.ts
  ```

## Dev stack

1. TypeScript
2. Angular
3. NgRx
4. RxJS
5. Tailwind
6. Jest (for testing)

#### Main page:

1. When the user enters data into the search input (with debounce), they are displayed below in the form of cards: first come
   custom cards (created on the Admin page), then basic ones (YouTube API).
2. When you click on the filter button, fields for sorting and filtering cards appear.
3. Each card contains information about the video (views, likes, dislikes, comments, video title).
4. When clicking on the “more” button, the user goes to the Details page.
5. By clicking on the heart icon, the user can add/remove cards to the Favorite page.
6. There is pagination.

#### Detailed information page:

1. Contains more detailed information about the video.
2. Views, likes, dislikes, comments, video title, creation date and video description.
3. Clicking the back button takes the user back to the original page.
4. By clicking on the heart icon, the user can add/remove cards to the Favorite page.

#### Favorite page:

1. Contains cards that the user has added to favorites.
2. By clicking on the heart icon, the user can remove the card from favorites.

#### Admin page

1. Contains a form for creating a custom card.
2. Validation:
   - title
     - required (message: "Please enter a title")
     - min length: 3 (message: "The title is too short")
     - max length: 20 (message: "The title is too long")
   - description
     - optional
     - max length: 255 (message: "The description is too long")
   - link to the image cover
     - required (message: "Please enter a link to the image")
   - link to the video
     - required (message: "Please enter a link to the video")
   - creation date
     - required (message: "Please enter a creation date")
     - an entered date will not be in the future (message: "The date is invalid")
   - "Tags" sub-form:
     - initially a single "Tag" input is present
     - click "Add tag" button to add an extra input
     - each tag input will be required
     - form can have up to five "Tag" inputs
   - "Reset" button
     - when clicked all inputs will be reset to their initial values and the "Tags" sub-form will return to having only a single (empty) input
   - The application prevent user from submitting the form if at least one of the described validation rules didn't pass
   - If the user has entered invalid data into an input, its border will be colored in red
   - To indicate which rule fails, an appropriate message under an invalid input field will be displayed.
3. After creating a map, it appears on the Main page at the beginning of the list.

#### Login page

1. Contains a login form.
2. Validation:

- implement login form
  - add validation rules for input fields:
    - login
      - required (message: "Please enter a login email")
      - valid email (message: "The login email is invalid")
    - password
      - required (message: "Please enter a password")
      - has a custom validator that will check how strong a password is. the following checks will be applied (message: "Your password isn't strong enough" + recommendations below):
        - at least 8 characters
        - a mixture of both uppercase and lowercase letters
        - a mixture of letters and numbers
        - inclusion of at least one special character, e.g., ! @ # ?

3. After entering the data, the user is directed to the main page.

#### 404 page

1. Contains a message that the page was not found.

```

```
