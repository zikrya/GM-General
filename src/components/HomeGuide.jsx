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
      image: 'plumbing.jpeg',
    },
  ]

const HomeGuide = () => {
    let [tabOrientation, setTabOrientation] = useState('horizontal')
    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

        function onMediaQueryChange({ matches }) {
          setTabOrientation(matches ? 'vertical' : 'horizontal')
        }

        onMediaQueryChange(lgMediaQuery)
        lgMediaQuery.addEventListener('change', onMediaQueryChange)

        return () => {
          lgMediaQuery.removeEventListener('change', onMediaQueryChange)
        }
      }, [])

      return (
        <section
          id="features"
          data-testid="features"
          aria-label="Features for running your books"
          className="relative overflow-hidden back-col pb-28 pt-10 sm:py-20">
          {/*container*/}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            {/*header*/}
            <Tab.Group
              as="div"
              className="mt-16 grid grid-cols-1 items-center gap-y-4 pt-10 sm:gap-y-8 md:mt-20 lg:grid-cols-12 lg:pt-0"
              vertical={tabOrientation === 'vertical'}
            >
              {({ selectedIndex }) => (
                <>
                  <div className="flex flex-col gap-y-4 -mx-4 pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                  <Tab.List className="flex flex-col gap-y-4">
  {features.map((feature, featureIndex) => (
    <div
      key={feature.title}
      className={
        `group relative rounded-lg px-4 py-2 transition duration-300 ease-in-out lg:rounded-l-xl lg:rounded-r-none lg:p-6 ` +
        (selectedIndex === featureIndex
          ? 'bg-blue-100 shadow-lg lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
          : 'hover:bg-white/10 lg:hover:bg-white/5')
      }>
      <h3 className="flex items-center">
        {/* Icon or Image (Placeholder) */}
        <span className="inline-block mr-2 text-blue-600">
          <i className="fas fa-check"></i> {/* Placeholder for an icon */}
        </span>

        <Tab
          className={
            `text-lg font-semibold cursor-pointer ui-not-focus-visible:outline-none ` +
            (selectedIndex === featureIndex
              ? 'text-blue-600 lg:text-blue-600'
              : 'text-blue-600 hover:text-white lg:text-blue-600')}
        >
          {feature.title}
        </Tab>
      </h3>
      {/* Optional subtitle */}
      <p className="text-sm text-gray-500">{feature.subtitle}</p>
    </div>
  ))}
</Tab.List>

                  </div>
                  <Tab.Panels className="lg:col-span-7">
                    {features.map((feature) => (
                      <Tab.Panel key={feature.title} unmount={false}>
                        <div className="relative sm:px-6 lg:hidden">
                          <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                          <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                            {feature.description}
                          </p>
                        </div>
                        <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                          <img
                            className="w-full"
                            src={feature.image}
                            alt=""
                            sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                          />
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </>
              )}
            </Tab.Group>
          </div>
        </section>
      )

}

export default HomeGuide