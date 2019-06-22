import React from "react";

const Layout = ({layoutType}) => {
    // console.log(layoutType);
    let mainLayouts = layoutType.split('/').map((layout) => {
        let thenum = (layout.match(/\d/g)) ? (layout.match(/\d/g)) : (1) ;
        console.log("Number Part is", Number.parseInt(thenum));
        return(
        <div className={`layout ${layout}`} key={Math.random()}>

            </div>
        )
    });
    // console.log(mainLayouts);
    return (
        <div className="Layout-Wrapper">
            {mainLayouts}
        </div>
    )
};

export default Layout;
