# Tweeter Project

Tweeter is a simple, single-page Twitter clone built with HTML, CSS, JS, jQuery and AJAX on the client-side, and Node and Express on the server-side.

This project was developed as part of Lighthouse Labs' Web Development Bootcamp program, and it is focused mainly on practicing front-end skills.

For every tweet that is made, the server will create a random user to attach to it.

## Final Product

### Layout for screens with 1024px of width and beyond
!["Layout for large screens"](https://github.com/danilogondim/tweeter/blob/master/docs/1024px-of-width-and-over.png?raw=true)
### Layout for screens with less than 1024px and more than 700px of width
!["Layout for medium screens"](https://github.com/danilogondim/tweeter/blob/master/docs/between-700px-and-1024px-of-width.png?raw=true)
### Layout for screens with 700px of width and less
!["Layout for small screens"](https://github.com/danilogondim/tweeter/blob/master/docs/700px-of-width-and-less.png?raw=true)
### Tweet box
!["Tweet box"](https://github.com/danilogondim/tweeter/blob/master/docs/tweet-box.png?raw=true)
### Hovering effect
!["hovering effect"](https://github.com/danilogondim/tweeter/blob/master/docs/hover-effect.gif?raw=true)
### Compose button (it hides or shows the tweet form)
!["Compose button"](https://github.com/danilogondim/tweeter/blob/master/docs/compose-button-w-behaviour.gif?raw=true)
### Scroll button (it appears when scrolling and it is used as a shortcut to focus the tweet form)
!["Scroll button"](https://github.com/danilogondim/tweeter/blob/master/docs/scroll-button.gif?raw=true)
### Customized time counter
!["Customized time counter"](https://github.com/danilogondim/tweeter/blob/master/docs/customized%20time%20counter.png?raw=true)
### Error messages - empty tweet and tweet exceeds the character limit
!["Error message - limit exceeded"](https://github.com/danilogondim/tweeter/blob/master/docs/error-messages.gif?raw=true)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- nodemon