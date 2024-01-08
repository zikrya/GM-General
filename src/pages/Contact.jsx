import React from 'react';

const Contact = () => {
    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    Contact Us
                </h2>
                <div className="text-center">
                    <p className="text-lg text-gray-600 mb-4">
                        Have questions? We're here to help!
                    </p>
                    <div className="text-blue-600">
                        <p className="mb-2 border-b border-gray-300 pb-2">
                            Email: <a href="mailto:Gmgcontracting@aol.com">Gmgcontracting@aol.com</a>
                        </p>
                        <p className="border-b border-gray-300 pb-2">
                            Phone: <a href="tel:+16467732421">+1 646-773-2421</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
