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
    . we can nest folders
  }
}
