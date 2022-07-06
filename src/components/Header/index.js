import React from "react";

function Header() {
    return (
        <div className="flex flex-row justify-between items-center bg-white border-b mx-4 p-4">
            <div>Logo</div>
            <div className="flex flex-row">
                <div className="px-2">
                    <a href="/">Home</a>
                </div>
                <div className="px-2">
                    <a href="/about">About</a>
                </div>
                <div className="px-2">Contact</div>
                <div className="px-2">Blog</div>
                <div className="px-2">Log In</div>
                <div className="px-2">Sign Up</div>
            </div>
        </div>
    )
}

export default Header;