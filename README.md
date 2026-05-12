======= What Parcel are Dowing =======

-- Dev Build
-- Local Server
-- Hmr = Hot module Replishment
-- File watching Algorithm - written in C++
-- Caching - Faster Builds
-- Image Optimaization
-- Minification
-- Bundling
-- Compress
-- Consistent Hashing ********** ?
-- Code Spliting
-- Defferential Bundling - Suport Older Browsers
-- Diagnostic
-- Error Handling
-- Tree Shaking - removed unused code
-- Deferent dev and prod Bundles


// import { jsx } from "react/jsx-runtime";

        // Header
        // logo
        //  menu-items
        //  cta button
        // Boday
        //  search bar
        //  Resturent Container
        //  Resturent Card
        // Footer
        //  copyright
        //  link 
        //  address
        //  contact

        // react.createelement = ReactElements-js objects = HTML Element (render)
        // jsx => Babel is transpaile it to      React.create => ReactElement-Js Object => HTMLElement(render)


=============  Two Type of Export / Import   =====================

-Default Export/Import
export default Component;
Import Component from "path";


-Name Export/Import
export const Component;
Import {Component} from "path";


==============  what is .map()  ==============
- .map() is a javaScript method that use to loop throught an arry and crate ui elements for each items



 <!-- return(
                <div className="body">
                    <div className="filter">
                        <button className="filter-btn" 
                        onMouseEnter ={()=>{console.log("Button is working")}}
                        >Top Reated Restaurants</button>
                    </div>
                    <div className="res-container">
                        {
                        ListOfResturent.map(resturent=>
                             (<ResturentCard key={resturent.card.card.info.id}
                                 resData={resturent}/>))
                        }                    
                    </div>
                </div>
            )
        }; -->


 ==============   React Hooks   =======(Normal Utilithy functions)======
 - Usestate () = supper powerfull state variables in React
 - Useeffact () 


=========== Reconsulation algarithom (React fiber)

# 2 type of routing in web app

- Clint Side Routing
- Server Side Routing