import React from 'react'

const Error = () => {

  return (
    <section className="bg-white dark:bg-gray-900 h-screen w-screen ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to Block
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          where technology, innovation, and talent meets.
        </p>
        <div className="text-center flex items-center justify-center">
          <dotlottie-player
            src="https://lottie.host/3769d8cb-538a-423a-9eff-a41adcece868/pLcZWEgEUn.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
        <div className="flex flex-col text-3xl space-y-4 sm:flex-row sm:justify-center sm:space-y-0 text-white">
          you have reached a page which is currently under development or is not
          found.
        </div>
      </div>
    </section>

  )
}

export default Error