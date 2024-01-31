# Folder structure{
  - At the root level we can see 4 folders (next,node_modules,public,src) and 10 files
  1. package.json contains project dependencies and scripts
}
# Flow of controll{
  1. npm run dev => the execution is transfered to layout.tsx, now the RootLayout component is rendered
  2. when we navigate to localhost:3000 , the children props (page.tsx) , it is the Home component which will be rendered in the browser
  3. the app folder is responsible for the routing feature of our application
}
# React Server Components (RSC){
  1. This architecture introduces a new way of creating react components , splitting them into two types
  - Server components{
    . In Next.js , all components are server components by default
    . They have the ability to run tasks like reading files or fetching data from a database
    . However , they don't have the ability to use hooks or handle user interactions
  }
  - Clients components{
    . To create a client component, It's necessary to add "use client" at the top of the component file
    . Client components can't perform tasks like reading files, but they have the ability to use hooks and manage interactions
  }
### React Server Components and routing{
  . we user server components that await certain actions to finalize before rendering content on the screen
}
}
# Routing{
  . Next.js has a file-system based on routing mechanism
  . URL paths that users can access in the browser are defined by files and folders in your codebase
  ## Routing conventions{
    . All routes must be placed inside the app folder
    . Every file that corresponds to a route must be named page.js or page.tsx
    . Each folder corresponds to a path segment in the browser URL
    # next js automatically creates layout.tsx to render the page.tsx component    
  }
  ## Nested routes{
    . we nest folders
  }
  ## dynamic routes{
    . Every page in the app router receives route parameters as a prop
  }
  ## nested dynamic routes
  ## Catch-all segments{
    
  }
  ## Private folders{
    . A private folder indicates that it is a private implementation detail and should not be considered by the routing system
    . This means that this folder and all its subfolder are excluded from routing
    . To create a private folder , simply prefix the folder name with an underscore
    # usage{
      . seperating UI logic from routing logic
      . for consistency organizing internal files across a project
      . sorting and grouping files in code editors
      . avoiding potential naming conflicts with future Next.js file conventions
    }
    . If you want to include an underscore in URL segments, you can prefix the folder name with "%5F" , which is the URL-encoded form of an underscore
  }
  ## Route groups{
    . Allows us to logically group our routes and project files without affecting the URL path structure
    . Authentication routes
    . Primary use is to organize the project in a manner that doesn't affect the URL
  }
  ## Layouts{
    - a page is a UI that is unique to a route
    - a layout is a UI that is shared between multiple pages in the app
    - We can define a layout by default exporting a react component from a layout.js or layout.tsx file
    - That component should accept a children prop that will be populated with a child page during rendering
  }
  # Route Group Layout{
    . To selectively apply a layout to certain segments while leaving others unchanged
    . Routes outside of the group do not share the layout
  }
  # Routing metadata{
    . Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users
    . Next.js introduced the Metadata API which allows you to define metadata for each page
    . Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed

    - Configuring Metadata{
      . Export a static metadata object
      . Export a dynamic generateMetadata function

      # Metadata rules[
        . Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it applies to all pages in that layout
        . If defined in a page, it applies only to that page

        . Metadata is read in order, from the root level down to the final page

        . When there's metadata in multiple places for the same route, they get combined but page metadata will replace layout metadata if they have the same properties
      ]
    }
  }
}