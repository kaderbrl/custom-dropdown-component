# <h1 align="center">React - Custom Dropdown Component 💦</h1>

<p align="center">A custom dynamic dropdown component built using ReactJS and Typescript.</p>

<div align="center">
    <img  src="/public/dropdown.png" alt="Custom Dropdown Component with React" title="Custom Dropdown Component" />
</div>

## 💎 Features

- Built with React + Vite + Typescript.
- [`react-icons`](https://react-icons.github.io/react-icons/) library was used.
- [`classNames`](https://jedwatson.github.io/classnames/) were used for conditional joins.
- [`tailwind.css`](https://tailwindcss.com/docs/guides/vite) was used for styles.
- It is used by getting dynamic data.
- Data can be with or without images.
- It can be used in different positions.
- Different styles can be given.

## 💻 Live Demo

Check the live demo here 👉 [Demo](https://custom-dropdown-component-kaderbrl.vercel.app/) 

## 📋 Instructions

First clone this repository.

```shell
git clone https://github.com/kaderbrl/custom-dropdown-component.git
```

Install dependencies. Make sure you already have [`node.js`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

```shell
$ npm install # or yarn
```

Run it.

```shell
$ npm run dev
```

## 📭 API
The required props are `id` and `data`.

| 	Prop	 | 	Type	 | 	Default	 | 	Description	 | 
| 	-----	 | 	-----	 | 	-----	 | -----	|
| 	id	| 	`string`	| 		 | The unique identifier for the dropdown.	 | 
| 	title	| 	`string`	| 	'Select'	 | The dropdown's title.	 | 
| 	data	| 	`DropdownItem[]`	| 		 | The dropdown items.	 | 
| 	position	| 	`string`	| 	'bottom-left'	 | The position of the dropdown when opened.	 | 
| 	hasImage	| 	`boolean`	| 	false	 | Whether the items in the dropdown show images associated with them.	 | 
| 	style	| 	`string`	| 		 | The styling of the component. (color, background, border, etc.)	 | 
| 	selectedId	| 	`string`	| 		 | The id of the item that will appear in the dropdown instead of the title prop.	 | 
| 	onSelect	| 	`(id: string) => void`	| 		 | A callback function invoked when an item is selected.	 | 

## 🔑 Usage

```js
const handleSelect = (id: string) => {
  console.log(`Selected item with id ${id}`);
};

<Dropdown
  id='person'
  title='Select Person'
  data={data}
  hasImage
  onSelect={handleSelect}
/>
```

## ⚔️ Customizable  Positions
<div align="center">
    <img  src="/public/dropdown-position.png" alt="Customizable Positions" title="Customizable Positions" />
</div>

## 🎨 Customizable Styles
<div align="center">
    <img  src="/public/dropdown-styles.png" alt="Customizable Styles" title="Customizable Styles" />
</div>

## Languages and Tools

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="30" alt="react logo"  />
  <img width="5" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" alt="html5 logo"  />
  <img width="5" />
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" height="35" alt="tailwindcss logo"  />
</div>
