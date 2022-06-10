# Helix and Tailwind
A project to teach how to create, build, and customize components with Helix using Tailwind and JavaScript.

## Environments
- Preview: https://main--helix-tailwind--sharjeelsiqbal.hlx.page/
- Live: https://main--helix-tailwind--sharjeelsiqbal.hlx.live/

## Installation

```sh
npm i
```

## Tests

```sh
npm tst
```

## Local development

1. Create a new repository based on the `helix-project-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [helix-bot](https://github.com/apps/helix-bot) to the repository
1. Install the [Helix CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/helix-cli`
1. Start Helix Pages Proxy: `hlx up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## Building a Component

### Create a table.
Insert table with as many rows and columns as needed and merge entirety of the first row.

![create-a-table](https://user-images.githubusercontent.com/50930123/173040294-eb548449-bce4-4a25-8384-e93180d12229.gif)


### Name the table and add the content inside.

It's important to know that the first row of the table will be the name of the compoent. Any tables with more than one column for the heading will have to be merged into one cell for the table title.


![add-content](https://user-images.githubusercontent.com/50930123/173041119-9033a5c8-9fc9-494f-9d86-bd3f22686717.gif)


### Create a divider to seperate components and sections.
Insert Horizontal Line

![divider](https://user-images.githubusercontent.com/50930123/173042807-1f44d4a1-ee42-4d13-95b8-ce6e931a72cb.gif)


## Structuring the component

1. Create your component folder within the block directory. 
2. Within your component folder add two files [component].css and [component].js
3. Start coding.

<img width="920" alt="Screen Shot 2022-06-10 at 5 02 23 AM" src="https://user-images.githubusercontent.com/50930123/173060332-9bf82c46-b428-4f83-97d6-376f05d36aab.png">


### Create a structure.

1. By using the boiler plates code, it nests your component within 3 divs
   a. [component]-container
   b. [component]-wrapper
   c. [component]


2. Although the boiler plate has given a good start, to avoid styling by speicifity use JS to created nested divs and apply classNames.


3. Create an exported function, 'decorate', with one parameter, 'block', this will be the portion where we can attach class names to nested divs. Helix will take care of calling this function when it's authored onto a page so there's no need to import it anywhere.


4. Understanding the tables HTML is vital to easy development. The basic structure follows: 

<img width="869" alt="helix-table-structure" src="https://user-images.githubusercontent.com/50930123/173056367-ea045215-8d76-4f5c-aef7-5d3292eeb555.png">


5. The block parameter will give the [component] level div as listed above. 


6. Create a new div element and give it a class name, in this case it will be the 'cards-row' so we can line up the cards much easier.


7. Next for each row of the table the card will concatenate the innerHTML of the block's children. 

8. For the image we want to seperate it from the rest of the content, so we need to do another for loop to get the content and place them inside its own block of code. 

9. Delete additional html elements that are providing space (not necessary).

10. Apply class names as needed to the nested elements. 


<img width="920" alt="create-a-block" src="https://user-images.githubusercontent.com/50930123/173134276-ebe0756f-74fb-422c-a9e0-91a5124589ed.png">





10. Finished now start styling your components with the @apply directive from Tailwind.

### Author

<img width="626" alt="Screen Shot 2022-06-10 at 3 07 13 AM" src="https://user-images.githubusercontent.com/50930123/173043034-4e36aa37-ba9c-4e35-998a-1310aeb58b5c.png">
   
### Published

<img width="1440" alt="Screen Shot 2022-06-10 at 11 39 17 AM" src="https://user-images.githubusercontent.com/50930123/173129721-9c8b2155-49ca-4988-9d78-0f57c0486786.png">






