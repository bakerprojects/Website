import React, { useState } from 'react';

function TopicsPage() {
    return (
        <>
    

        <h2>Web Dev Concepts</h2>
        <nav class="local">
            <ul>
              <li><a href="#servers">Web Servers</a></li>
              <li><a href="#design">Frontend Design</a></li>
              <li><a href="#images">Optimizing Images</a></li>
              <li><a href="#favicons">Favicons</a></li>
              <li><a href="#css">Cascading Stylesheets</a></li>
              <li><a href="#forms">Forms</a></li>
              <li><a href="#express">Express</a></li>
              <li><a href="#javascript">JavaScript</a></li>
            </ul>
        </nav>
        <article id="servers">
            <h3>Web Servers</h3>
            <p>
            When it comes to websites, <strong>index</strong> is typically used as the default homepage. If a user connects
             to a website, this will often be the first page that is visited. The index is essential to 
             having navigable website, as it also serves as the access point to other pages and information. 
             For a file server, index can be used to keep track of all the files hosted on the server and 
             metadata associated with them. This is essential for keeping track of data as well as finding 
             it in an efficient manner.        
            </p>
            <p>
        
            Browser inspectors can provide detailed information about network requests to a website. There are several
             main request methods (GET or POST), GET is used to request data while POST is used to send data to a server.
             The GET method is provided for the index page of a website. The webpage status provides codes (200, 300, 400, etc.)
              that can tell you whether there is an error with the webpage and what type of error, such as page not found
              or a redirect. Dates that the page was last modified, cache details, and raw response data can also be viewed.
              When viewing a file on the web server versus a local computer, details such as response time and how the headers
              will be used can be viewed.
            </p>
            <p>
        
        The status code 200 indicates that the file was loaded without issue. A <strong>favicon</strong> is a small image that is
         displayed next to the title of a webpage, it can be viewed in the tabs of a web browser. Favicons are 
         automatically looked for by a web browser, even if it isn’t specified in the page’s html code. If there 
         is an error with the main.css and main.js files, favicon.ico is still loaded because it is independent of 
         those other two files.
            </p>
            <p>
      
            The <strong>scheme</strong> of the URL is "https". This is the protocol identification, and also means 
            that data to and from the webpage will be encrypted. The <strong>subdomain</strong> is "web.engr" and this
            is an optional feature that serves as a way for organization a website into different categories, such as 
            "engr" for the college of engineering. The <strong>host domain</strong> is the part of the URL "oregonstate.edu"
            and this is the main website that is being communicated with. "~bakerc7/a1-bakerc7" is the <strong>Resource Path</strong>
            of the URL. This is the location of the exact resource that is being accessed when that page is visited. In this case,
            the file a1-bakerc7 is being accessed.

            </p>
            </article>
            <article id="design">
                <h3>Frontend Design</h3>
            <p>
             
                <strong>Frontend design</strong> is essentially the part of the website that an intended user interacts with. 
                It is composed of a graphical user design as well as a user interface that is interacted with. Frontend design
                should allow a pleasing and efficient experience for a user to navigate and interact with a website for its 
                intended purpose. It should be efficient as well to avoid unnecessary wait times that could cause user dissatisfaction. 
                One more important aspect of frontend design is adaptability. A webpage should adapt to the variety of screen sizes 
                from the variety of devices used by the public.
            </p>
            
                
            <dl>
               
                <dt><strong>Effective</strong></dt>    
                <dd>A webpage must be effective at allowing the user to accomplish their intended purpose. The results should be without error. </dd>
                <dt><strong>Efficient</strong></dt>
                <dd>Efficiency is important to avoid wasting user time. A webpage should accomplish the goal of the user in as few as steps as possible. Excessive steps and wait times can lead to  user frustration and potentially the goal of the user not being accomplished. </dd>
                <dt><strong>Easy to Navigate</strong></dt>
                <dd>The design should be intuitive enough to the point that a new user can easily navigate to their intended information. Returning users should have no difficulty in accomplishing their reason for visiting the site.</dd>
                <dt><strong>Error-free</strong></dt>
                <dd>User error should be learned from and then avoided. Users should have no issues to accomplish their intended purpose of visiting the site. Common mistakes can be learned from user experience and used to avoid them from being repeated.</dd>
                <dt><strong>Enjoyable or Engaging</strong></dt>
                <dd>The webpage design and layout should fit the needs of the intended users. It’s important to establish a website in such a way that users will return and have a pleasant experience. The “E”s of usability are all important for helping to make this happen.</dd>
            </dl>         
            
            <p>
              
                    <strong>Page Layout Tags</strong> are an important tool in HTML for the organization of a webpage. The tag <strong>header</strong> can include things such as a name, title, publisher, and slogans. When transitioning from different pages, the header should remain the same to 
                    show the user that the same website is being visited. The <strong>nav</strong> element is used to take a user from one page to the next. Common navigational elements a user will see are menus, search bars, tools, and informational links to other pages. The <strong>main</strong> element 
                    is the primary one on a webpage and holds all the main content that is to be displayed to the user. The <strong>section</strong> element tag is used for grouping content on a page together. A section can be subgrouped with numbered child headings such as h1. 
                    An <strong>article</strong> element is used within a section as a further way to organize and subgroup content within a webpage. The <strong>aside</strong> element is used for a sidebar on an article for related content, <strong>figure</strong> is similar but is used with media instead of 
                    only text. When there are extended quotations, <strong>blockquote</strong> can be used and also helps text to visually stand out from that of text in paragraphs. The <strong>footer</strong> is located below /main and holds information such as contact and copyright information 
                    as well as links to other pages. A placeholder element <strong>div</strong> is used for dynamic content or content that wouldn’t fall under the category of other elements.
            </p>
            <ol>
               
                <li>The anchor element "<strong>a</strong>" is used to create hyperlinks between one page to another. The actual path is specified with <strong>href</strong>, while the text between "a" is used to describe the linked content.</li>
                <li>For <strong>external content</strong>, a URL is specified with href. An <strong>absolute path</strong> URL is needed for linking external pages. When linking to <strong>internal content</strong>, an ID attribute can be used. 
                    The linked page will have a corresponding ID associated with it.</li>
                <li>Links to internal pages are often stored in the <strong>nav</strong> section of html. It generally contains link that reference pages within the context of the website.</li>
                <li>To link from <strong>page-to-page content</strong> within a website, only a <strong>relative URL</strong> is needed. A relative URLs path points to a location that is relative to the file that is being accessed. 
                    For example, if the file being accessed by the relative URL is in the same directory, only the name of that file is needed to access it. </li>
                </ol>
            </article>
            <article  id="images">
                <h3>Optimizing Images</h3>
            <p>
                
                Images should have a <strong>descriptive file name</strong>. The purpose of this is to help search engine optimization which will allow search engines to find relevant images and even direct users to a website. 
                <strong>Small file size</strong> is an important aspect of images, mainly to improve loading times for users. Higher resolution images can be reserved for users with higher resolution screens. Images should fit the 
                <strong>exact dimensions</strong> of a webpage, this will have a significant impact on load times. Another important aspect of images to consider is <strong>file format</strong>. Images are commonly stored as .JPG, 
                while .GIF and .PNG is used for line-art, logos, and icons. 24-bit .PNG is reserved for graphics with true transparency.  Multiple image sizes are needed to be available for the user. Screens can vary between 72 to 300+ ppi. 
                <strong>Reduced resolution</strong> is essential for serving the less pixel dense screens. <strong>Color modes</strong> of images are RGB for .PNG, .JPG, .SVG, and .WebP. Indexed is mainly for .GIF. Color mode is how 
                images can be displayed consistently across multiple devices.  
            </p>
            <p>
               
                For photos, <strong>.JPG</strong> and <strong>.WebP</strong> are typically the optimal file formats. .JPG can represent millions of colors, support high resolution, and show a high level of detail. This file format supports 
                a high level of compression but loses some image detail. .WebP is similar to .JPG, they can be compressed to small file sizes and are capable of supporting transparent backgrounds. For line art, .PNG, .SVG, and .GIF are the 
                best choice for file formats. .PNG files have true transparency and can be placed over any variety of background without affecting the image itself. This file type can also handle a decent level of compression for reducing the 
                file size. .SVG images can be two-dimensional, interactive, or animated. This file type supports a high level of detail when compared to other image files. It can be especially useful for images with small text that should 
                remain readable. Finally, .GIF files are typically used for animation and line-art graphics as well. They support 8-bit transparency. The background is a single matte color produced from anti-alias. Short videos can be 
                converted to a .GIF format. 
            </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
            <p>
                
                <strong>Favicons</strong> are used by browsers and devices to allow a user to quickly identify the website on a browser tab. They are typically saved as .ICO, .GIF, .PNG, and .SVG files. They include various sizes so that they can be shown across multiple devices. 
                Favicons are essential to having quick user recognition of a webpage and improve the overall user experience. Websites that feature favicons help provide a native app like experience.
            </p>
            </article>
            <article id="css">
                <h3>Cascading Stylesheets</h3>
                <p>
                    
                    CSS is capable of overriding the style of HTML, allowing you to set a universal style for a website. This not only keeps a website with a consistent style, but also allows for a lot less code writing, since one style sheet can be used over many website pages. 
                    It allows for many more customizations of a webpage, such as for fonts and colors. CSS will also function across an array of devices, so it has excellent compatibility. Overall, this can make the user experience much more pleasing. CSS is a beneficial way of
                    improving user experience, development speed, and compatibility.
                </p>
                <p>
                    
                    The five ways to incorporate styles to a webpage are external CSS rules, embedded within a tag, inline within an element, using JavaScript template literals, and regular JavaScript. External CSS rules involve using an external file with a .CSS extension. 
                    This method provides a specific style to all pages of a website that links to the single stylesheet. The four other methods are used for one-off style changes, because they only affect one section of a webpage, instead of the entire page or website.
                </p>
            </article>
            <article  id="forms">
                <h3>Forms</h3>
            <p>
                
                The first major goal of accessible forms is providing clear instructions. This is necessary to get the information you want from the individual filling out the form as well as assisting users without vision. The second is to let users know why you want the 
                information on the form and the required fields. This is important to avoid user hesitation and helps to ensure that you get all the necessary information. The third goal is to set the first field to autofocus, this is out of convenience for the user, so they 
                can immediately type into the field without using their mouse. The fourth goal is to ensure each form control can be filled in using the keyboard. This is for users who cannot or don’t have access to a mouse. The fifth option is to add tab indexing to 
                complex forms. This is because order is important, and it should be intuitive for the user to know the order in which a form should be filled. Finally, validation messages need to be screen readable. It’s important to remember that built-in HTML browser messages 
                are not screen readable.
            </p>
            <p>
                
                The major tags for a contact form are form, fieldset, legend, label, input, button, and select with options. Forms are designed to collect input from the user. It includes two major attributes, action and method. Action decides where the request from the form 
                is sent to. Once the form is submitted, it will go to the specified URL. Method specifies the HTTP method used in the HTTP request and is typically GET or POST. Fieldset and legend separate sections of the form. The fieldset creates a border around everything 
                inside the tag, and the legend creates a text to prompt the user for input or give additional information. Label is used to help the user identify the purpose of each input. Input has an attribute type=”” which can be used to change how it’s displayed. It’s 
                also necessary to include a name=”” attribute so that the server can track data that is associated with each input. Select with options provides the user with a drop-down list of choices. This also has a name attribute when using select.  The button element 
                requires some sort of input such as a mouse click or finger touch and performs an action such as submitting the form.
            </p>
            <p>
                
                There are several important form style recommendations that can greatly improve usability. This intersects with the major tags listed above. These days, many website forms are filled out on a cellphone screen, and a website should accommodate that by making 
                inputs, selects, and buttons capable of being selected with a finger touch. It’s also important to leave enough space between those to reduce user confusion. Additional features that help the user find where they left off can improve usability as well. Autofocus 
                is very common, this will automatically apply the cursor in the first field that needs to be filled out. Asterisks and status fields can help ensure a user knows which fields must be completed.
            </p>
            </article>
            <article  id="express">
                <h3>Express</h3>
                <p>
                    
                    Node applications are written in JavaScript and node itself is a cross-platform and open-source runtime environment for developing server-side and networking applications. Node.js also provides access to a large library of JavaScript modules, which can 
                    significantly reduce the development time and effort of web applications. Packages can be extremely useful in the way that the code has already been prepared and written for a specific purpose. To manage and install the vast number of packages that come 
                    with Node, npm is used. All the packages are stored on npm, an online repository that also functions as a command-line utility to install the packages from the online repository. Express is a framework for developing web applications using Node. It 
                    simplifies the web development process by providing an API for common application tasks. Express is used to get, post and delete data as well as to configure ports and routes. Additionally, it enables developers to serve static files, create templates 
                    to generate dynamic responses based on data, and implement middleware for handling requests made with the data route. 
                </p>
            </article>
            <article  id="javascript">
                <h3>JavaScript</h3>
                <p>
                   
                    Values in JavaScript can be of several different types: number, Boolean value, string, symbol, object, or undefined and null.  Numbers can either be integers or floating-point. Boolean values must be either true or false and are commonly used for conditional 
                    statements. Strings are used to represent text and must be encased in quotes. Symbols are used as unique identifiers for objects, and they are also immutable. Objects are capable of storing key-value pairs, consisting of a key and its value. When a variable 
                    is never initialized with a value, it receives an undefined data type. Null is for when there is an absence of any value. 
                </p>
                <p>
                    
                    In JavaScript, objects are a set of name-value pairs. The names associated with these pairs are also known as properties of objects. Properties of objects can be created, updated, read, and deleted. These actions are referred to as CRUD. Arrays are objects that
                     have property names as strings and not numbers. JavaScript Object Notation, or JSON, is used to exchange data between applications. This format is not exclusive to JavaScript, as many programming languages are able to use it. Even though objects are represented 
                     differently in different programming languages, JSON remains independent and can be used to map and create objects in programs to strings.
                </p>
                <p>
                    
                    Conditionals can be used in JavaScript for all value types. All non-Boolean values are automatically converted to Boolean in this case. However, it is best to write code that will produce a Boolean value rather than rely on the automatic conversion. While loops in 
                    JavaScript are like that of other languages, if a statement evaluates to true, then the loop continues until it evaluates as false. The for loop behaves in a similar fashion and will continue to execute while the loop condition evaluates as true. Loops are essential 
                    for programming, as they allow iterating through data in an efficient manner. 
                </p>
                <p>
               
                    Objects must have an identity, state, and behavior. In JavaScript, an object is a set of name-value pairs, with the names of the pairs being referred to as properties which can be added, read, and modified. Object-oriented programming is a paradigm for organizing code 
                    into self-contained objects that can be used over and over. It consists of several important aspects such as objects, classes, methods, and attributes. In OOP, classes can inherit properties from other classes, allowing for more simplicity and reuse of code. Attributes 
                    and methods can be bundled together into a single unit, a class. Altogether, object-oriented programming makes coding more modular, organized, and efficient.
                </p>
                <p>
                   
                    Functional programming involves creating functions that can be assigned to variables, receive other functions as arguments, and define functions that return functions. A function that receives another function as an argument is called a higher-order function.
                     JavaScript provides many of these built-in. Anonymous functions are the type that return another function. Overall, functional programming uses computation to evaluate mathematical functions without changing state or mutating data. Functions are treated as first-class,
                      meaning they can act like any other data value and be used as such. 
                </p>
            </article>
            </>
            );
        }
        export default TopicsPage;           