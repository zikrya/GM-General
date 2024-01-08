import React from 'react';
// Import your logo image if it's locally stored
// import logoImage from 'path-to-your-image.jpg';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                {/* Logo Image - replace src with your image path */}
                <div className="flex justify-center">
                    <img src="/logo.png" alt="Logo" width="658" height="430" />
                    {/* If image is locally stored, use: <img src={logoImage} alt="Logo" width="658" height="430" /> */}
                </div>

                <div className="mt-6 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
                    <p className="text-gray-600">
                        {/* Your about text goes here */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
