![Prevew](./src/assets/modularPriceCards.PNG)

# Jump2Digital 2022 | Frontend ⚛

This is a response to the [challenge](https://nuwe.io/dev/challenges/jump2digital2022-frontend) required to participate in the [Jump2Digital](https://barcelonadigitaltalent.com/jump2digital-hackathon) hackathon 2022 edition. The main objective is to build a modular price-card. The end result can be visualized [here ](https://jump2-digital.vercel.app/).

**Quality test**

[![CodeFactor](https://www.codefactor.io/repository/github/alexcumplido/jump2digital/badge)](https://www.codefactor.io/repository/github/alexcumplido/jump2digital)

## Requirements 🎯

Starting from this [Figma](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW?node-id=4:194):

1. Build a modular-card price
2. Add a dialog asking for an email
3. View optimal layout depending on the device
4. Deploy the project

Extra improvements allowed:

5. Implement animations
6. Modify the design system
7. Use [Codefactor](https://www.codefactor.io/) or [Sonarsource](https://www.sonarsource.com/)

## Usage 📝

I used [Vite](https://vitejs.dev/) as a build tool and created a functional development environment from the ground up instead of using a tool such as create-react-app because this way I get the change to understand under the hood the process of including any third-party library, even React itself, or dependency and creating the corresponding script.

The folder structure is organized in component folders, one folder for each component including the .jsx and .css files. I created a data.js file that contains all the data required to render so I avoided as much as possible harcoding any of it and instead passing data via props.

## Installation ⚙️

Clone this repository into a newly created directory

```shell
    # Clone repo
    $ git clone git@github.com:alexcumplido/jump2Digital.git
```

```shell
    # Install dependencies
    npm install
```

```shell
    # Run project
    npm run dev
```

## Stack ⚒️

- HTML5
- CSS3
- JavaScript
- React
- Vite

## Visuals 👀

![Demo view](./src/assets/jump2Digital.gif)

## Contact info 📫

Alexandre Cumplido Bou

[Linkedin](https://www.linkedin.com/in/alexandrecb/)

[Portfolio](https://alexcumplido.github.io/portfolio/)

## Acknowledgements 🙌

[Brian Holt eslint configuration](https://github.com/btholt/citr-v8-project/blob/main/03-jsx/.eslintrc.json)

## License 📃

[MIT License](https://opensource.org/licenses/MIT)
