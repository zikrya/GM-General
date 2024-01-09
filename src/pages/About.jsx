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
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About GM General Contracting</h2>
                    <p className="text-gray-600">
                    Welcome to GM General Contracting, where your home and business construction needs meet enduring craftsmanship and exceptional quality. Nestled in the heart of Brooklyn, NY, our company stands as a testament to the power of hard work, dedication, and a deep understanding of the art of building and renovation.
                    </p>
                    <br />
                    <p className="text-gray-600">
                    At the helm of GM General Contracting is Mansoor, a visionary with a hands-on approach and a keen eye for detail. Mansoor’s leadership is rooted in a passion for transforming spaces and a commitment to bringing clients' visions to life. His expertise and personalized approach have become the cornerstone of our company’s reputation in Brooklyn and beyond.
                    </p>
                    <br />
                    <p className="text-gray-600">
                    Our team at GM General Contracting specializes in a wide range of services, ensuring that we are your go-to source for any contracting need. From the robust and reliable workmanship required for roofing projects to the precision and care necessary for intricate interior and kitchen construction, our skilled professionals have it all covered. Our expertise doesn't end there – we're equally adept at handling exterior construction and plumbing services, ensuring a comprehensive solution for your residential or commercial projects.
                    </p>
                    <br />
                    <p className="text-gray-600">
                    What sets us apart is our dedication to quality and our belief in building relationships as sturdy as our constructions. We take pride in our ability to adapt to the unique needs of each project while maintaining the highest standards of quality and efficiency.
                    </p>
                    <br />
                    <p className="text-gray-600">
                    At GM General Contracting, your project isn't just a job for us – it's a canvas where we bring your vision to life. Join hands with us, and let’s build something extraordinary together!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
