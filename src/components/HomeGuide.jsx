'use client'
import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import { Tab } from '@headlessui/react'
const features = [
    {
      title: 'Roofing',
      image: '/roofing.jpeg',
    },
    {
      title: 'Exterior Construction',
      image: '/exterior.jpeg',
    },
    {
      title: 'Interior Construction',
      image: '/interior.jpeg',
    },
    {
      title: 'Plumbing',
      image: '/plumbing.jpeg',
    },
    {
        title: 'Culinary Architecture',
        image: '/kitchen.jpg',
      },
  ]

  const HomeGuide = () => {
    const [tabOrientation, setTabOrientation] = useState('horizontal');

    useEffect(() => {
        const lgMediaQuery = window.matchMedia('(min-width: 1024px)');
        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal');
        }
        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener('change', onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return (
        <section
            id="features"
            data-testid="features"
            aria-label="Features for running your books"
            className="relative overflow-hidden back-col pb-28 pt-10 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <Tab.Group
                    as="div"
                    className="mt-16 grid grid-cols-1 items-center gap-y-5 pt-10 sm:gap-y-8 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === 'vertical'}>
                    {({ selectedIndex }) => (
                        <>
                            <div className="lg:col-span-5 flex flex-col gap-y-5">
                                <Tab.List className="flex flex-col gap-y-4">
                                    {features.map((feature, featureIndex) => (
                                        <Tab key={feature.title}>
                                            <div className={`group relative rounded-lg px-4 py-3 transition duration-300 ease-in-out lg:rounded-l-xl lg:rounded-r-none lg:p-6
                                                            ${selectedIndex === featureIndex
                                                            ? 'bg-blue-100 shadow-lg'
                                                            : 'hover:bg-blue-50 cursor-pointer'}`}>
                                                <h3 className="text-xl font-semibold text-gray-800">
                                                    {feature.title}
                                                </h3>
                                            </div>
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7 mt-6 lg:mt-0">
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} className="focus:outline-none">
                                        <div className="w-full overflow-hidden rounded-xl bg-white shadow-lg">
                                            <img
                                                className="w-full h-auto"
                                                src={feature.image}
                                                alt={feature.title}
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                            <div className="p-4">
                                                <p className="text-lg text-gray-700">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
            </div>
        </section>
    );
};

export default HomeGuide;