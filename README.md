![Prevew](./src/assets/modularPriceCards.PNG)

# Jump2Digital 2022 | Frontend ⚛

This is a response to the [challenge](https://nuwe.io/dev/challenges/jump2digital2022-frontend) required to participate in the [Jump2Digital](https://barcelonadigitaltalent.com/jump2digital-hackathon) hackathon 2022 edition. The goal is to build a modular price-card component starting from this [Figma](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW?node-id=4:194) design. The end result can be visualized [here ](https://jump2-digital.vercel.app/).

**Quality test**

[![CodeFactor](https://www.codefactor.io/repository/github/alexcumplido/jump2digital/badge)](https://www.codefactor.io/repository/github/alexcumplido/jump2digital)

## Requirements 🎯

1. Build a modular-card price component
2. Implement a dialog asking for an email
3. View the optimal layout depending on the device
4. Deploy the project

Extra improvements allowed:

5. Implement animations
6. Modify the design system
7. Use [Codefactor](https://www.codefactor.io/) or [Sonarsource](https://www.sonarsource.com/)

## Usage 📝

As a build tool I used [Vite](https://vitejs.dev/) because of its fast configuration and also development environment from the ground up is a great oportunity to learn about what dependencies and scripts the project will require.

Project structure is organized in component folders, each one includes the .jsx and .css files. The styles folder contains global css like custom variables, a reset stylesheet and utility classes. A data.js file contains all the dara required to be rendered by the components so hardcoding any of it is avoided as much as possible.

The modal component is implemented using [React portals](https://reactjs.org/docs/portals.html). Portals let you render a children into a DOM node outside of the DOM hierarchy from its parent component.

## Components 🧬

- Button
- Input
- List
- Form
- Card
- Cardsection
- Modal

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/jump2Digital.git
```

```shell
    # Install dependencies
    npm install
    yarn install
```

```shell
    # Run project
    npm run dev
    yarn dev
```

## Stack ⚒️

- HTML5
- CSS3
- JavaScript
- React
- Vite

## Visuals 👀

![Demo view](./src/assets/jump2Digital.gif)

## Contributing 🙌 ⚙️

1. Fork the repo
2. Create a new branch
3. Implement changes
4. Commit and subit a pull request with a description

## Contact info 📫

Alexandre Cumplido Bou

[Linkedin](https://www.linkedin.com/in/alexandrecb/)

[Portfolio](https://alexcumplido.github.io/portfolio/)

## Acknowledgements 🙏

[Josh Comeau custom CSS reset](https://www.joshwcomeau.com/css/custom-css-reset/)

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
