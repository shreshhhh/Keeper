import React from "react";



function Footer() {
    const x = new Date().getFullYear();
    return(
        <footer>
        <p>
            Copyright © { x};
        </p>
        </footer>
    );
    
}
export default Footer; 