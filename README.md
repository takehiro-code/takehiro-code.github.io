# Personal Portfolio

This repository contains the source codes of my personal portfolio. The repository is built on top of Dorota1997/react-frontend-dev-portfolio repository. The website is developed with React.

## Instruction

1. Install Node.js installer from https://nodejs.org/en/download/. Node.js comes with npm.

2. Once npm runs, cd to your repo folder. Run `npm install` to install all the modules listed in the `dependencies` and `devDependencies` in the `package.json`. All the modules will be installed to `node_modules` folder.

3. Specify `name` as a repository name and `homepage` in the `package.json`. By default, homepage will be `https://<username>.github.io` or simply single dot `.`. To run on a different repository, set `homepage` as `https://<username>.github.io/<repository_name>`. Adjust `name` in `package-lock.json` accordingly.

4. Run `npm start` to run the local server for testing, and make sure it runs okay.

5. Modify the contents, e.g., `public/*.json` for text.

6. Run `npm run deploy` to reflect the changes, pushing to `gh-pages` branch, which will reflect the website.

7. Go to GitHub > Settings > Pages, make sure source is set to gh-pages branch.   

## Reference

[1]	D. Gil, Dorota1997/react-frontend-dev-portfolio. 2021. Accessed: Nov. 05, 2021. [Online]. Available: https://github.com/Dorota1997/react-frontend-dev-portfolio