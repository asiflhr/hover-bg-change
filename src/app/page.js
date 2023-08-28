'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Image1 from './assets/images/NextJS1.png'
import Image2 from './assets/images/NextJS2.png'
import Image3 from './assets/images/NextJS3.png'
import Image4 from './assets/images/NextJS4.png'

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState('#fffbfa')
  const [imageAsset, setImageAsset] = useState(null)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className='relative flex place-items-center'>
        {imageAsset && (
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
            src={imageAsset}
            alt='Next.js Logo'
            width={'50%'}
            height={'50%'}
            priority
          />
        )}
      </div>

      <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          onMouseEnter={() => {
            setBackgroundColor('#d90368')
            setImageAsset(Image1)
          }}
          onMouseLeave={() => {
            setBackgroundColor('#fffbfa')
            setImageAsset(null)
          }}
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          onMouseEnter={() => {
            setBackgroundColor('#e5d352')
            setImageAsset(Image2)
          }}
          onMouseLeave={() => {
            setBackgroundColor('#fffbfa')
            setImageAsset(null)
          }}
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          onMouseEnter={() => {
            setBackgroundColor('#ed254e')
            setImageAsset(Image3)
          }}
          onMouseLeave={() => {
            setBackgroundColor('#fffbfa')
            setImageAsset(null)
          }}
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          onMouseEnter={() => {
            setBackgroundColor('#911B83')
            setImageAsset(Image4)
          }}
          onMouseLeave={() => {
            setBackgroundColor('#fffbfa')
            setImageAsset(null)
          }}
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
