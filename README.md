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
1. Follow Helix tutorial to get set up https://www.hlx.live/developer/tutorial, then come back to follow the steps below.

## Reload, Publish, and Edit

Once you've set up your site following the Helix developer tutorial. Here are some additional content to get you familiarized with Helix Sidekick. 

 1. Your Helix Sidekick is set up with your Google Drive and connected to your github repository, you're ready to go.  
 2. You'll start off by choosing your project. <img width="1440" alt="Screen Shot 2022-06-16 at 4 32 20 PM" src="https://user-images.githubusercontent.com/50930123/174194824-2568eac5-8ee3-4af5-8af7-4e880cf58130.png">
 3. The drop down provides two options for authors and three options for developers. The only difference between the two is that in development mode the changes are instant. Preview shows you what the site looks like with your current changes, and switching to live shows you what everyone else can view. ![Screen Shot 2022-06-16 at 5 05 16 PM](https://user-images.githubusercontent.com/50930123/174197338-efcfdf48-7432-4907-9791-84610c8c14f0.png)![Screen Shot 2022-06-16 at 5 05 33 PM](https://user-images.githubusercontent.com/50930123/174197353-0f667caf-0b00-4ca3-a944-172b8fded791.png)
 4. The 'Edit' button allows the author to go inside Google Docs sheet to edit the content as desired. ![edit](https://user-images.githubusercontent.com/50930123/174198647-2b4823c8-3643-485a-a417-5d91140a1881.gif)
 5. Click Preview. ![preview](https://user-images.githubusercontent.com/50930123/174196270-bc58b11e-8609-4f7b-9d23-670065fe65fe.gif)
 6. When adding new content please note that although Google Docs is synced up with your website, refreshing the page won't update with the newly added content on the page. Helix Sidekick will need to be reloaded for the new content to be displayed. ![Reload](https://user-images.githubusercontent.com/50930123/174196818-6ed89eeb-6de8-41be-8e8b-3c6f5b259903.gif)
 7. When there is no production envrionment available live will be a button that appears and will replace your production environment until you have one ready. Here you can see all the changes to the website that everyone would be able to see. ![live](https://user-images.githubusercontent.com/50930123/174198907-b8a4a14b-87d1-4c3f-ba9a-5c3214ef6115.gif)
 8. Updating the live/production site only takes one click. ![updating-live](https://user-images.githubusercontent.com/50930123/174199203-8dbfab91-cac6-4b42-a94e-06e7d4fcd03f.gif)



## Free Structured Components & Table Components 

There are two ways to build a components on Helix, one is through tables, where you can add content inside table rows and columns and have them outputted as such, and the other is through free form structure, in which the author puts down the content in a particular order along with some other data to form the components. Both of them have their own individual strengths and drawbacks and are used in particular circumstances.


## Building a Component

### Table Components
We'll start off with table components because they are much easier to understand. These components should be put down by the author if there are multiple sections to them, such as the cards component below. It helps both the author and the developer identify rows and columns so they can style, arrange, and display content accordingly. Down below is a step-by-step instructional guide to set up a basic table component. 


#### Create a table.
Insert table with as many rows and columns as needed and merge entirety of the first row.

![create-a-table](https://user-images.githubusercontent.com/50930123/173040294-eb548449-bce4-4a25-8384-e93180d12229.gif)


#### Name the table and add the content inside.

It's important to know that the first row of the table will be the name of the compoent. Any tables with more than one column for the heading will have to be merged into one cell for the table title.


![add-content](https://user-images.githubusercontent.com/50930123/173041119-9033a5c8-9fc9-494f-9d86-bd3f22686717.gif)


### Create a divider to separate components and sections.
Insert Horizontal Line

![divider](https://user-images.githubusercontent.com/50930123/173042807-1f44d4a1-ee42-4d13-95b8-ce6e931a72cb.gif)


### Structuring the component

1. Create your component folder within the block directory.
2. Within your component folder add two files [component].css and [component].js
3. Start coding.

<img width="920" alt="Screen Shot 2022-06-10 at 5 02 23 AM" src="https://user-images.githubusercontent.com/50930123/173060332-9bf82c46-b428-4f83-97d6-376f05d36aab.png">


#### Create a structure.

1. By using the boiler plates code, it nests your component in a wrapper

   a. [component]-container

   b. [component]-wrapper

   c. [component]


2. Although the boiler plate has given a good start, to avoid styling by specificity use JS to created nested divs and apply classNames.


3. Create an exported function, 'decorate', with one parameter, 'block', this will be the portion where we can attach class names to nested divs. Helix will take care of calling this function when it's authored onto a page so there's no need to import it anywhere.


4. Understanding the tables HTML is vital to easy development. The basic structure follows:

<img width="869" alt="helix-table-structure" src="https://user-images.githubusercontent.com/50930123/173056367-ea045215-8d76-4f5c-aef7-5d3292eeb555.png">


5. The block parameter will give the [component] level div as listed above.


6. Create a new div element and give it a class name, in this case it will be the 'cards-row' so we can line up the cards much easier.


7. Next for each row of the table the card will concatenate the innerHTML of the block's children.


8. For the image we want to separate it from the rest of the content, so we need to do another for loop to get the content and place them inside its own block of code.


9. Delete additional html elements that are providing space (not necessary).


10. Apply class names as needed to the nested elements.


<img width="920" alt="create-a-block" src="https://user-images.githubusercontent.com/50930123/173134276-ebe0756f-74fb-422c-a9e0-91a5124589ed.png">


11. Finished now start styling the components with the @apply directive from Tailwind.


### Author

<img width="626" alt="Screen Shot 2022-06-10 at 3 07 13 AM" src="https://user-images.githubusercontent.com/50930123/173043034-4e36aa37-ba9c-4e35-998a-1310aeb58b5c.png">


### Published

<img width="1440" alt="Screen Shot 2022-06-10 at 11 39 17 AM" src="https://user-images.githubusercontent.com/50930123/173129721-9c8b2155-49ca-4988-9d78-0f57c0486786.png">


### Creating a variation

1. Create a table underneath your component.

![create-a-table-variation](https://user-images.githubusercontent.com/50930123/173140693-6841ed0c-165b-4025-b74b-c7ccc89edc5e.gif)


2. Add 'Section Metadata' to the head of the table.


3. Add 'Style' to the first column and the variation you'd like on the right.

![create-a-variation](https://user-images.githubusercontent.com/50930123/173139206-419a171f-6da7-478e-9520-4af9914461aa.gif)


4. Variation type will be added to the outer most layer to your component, style as needed.


<img width="850" alt="variation" src="https://user-images.githubusercontent.com/50930123/173138636-7458c12a-7ee1-472b-9512-30782fa85673.png">


![card-variation-black](https://user-images.githubusercontent.com/50930123/173141314-4639959a-0182-4b7b-9989-b7dc43f44333.gif)
