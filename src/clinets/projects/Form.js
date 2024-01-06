import React, { useState } from 'react'
import Navbar from '../../components/partials/Navbar';

//page is not working right now
const Form = () => {
  const [data, setData] = useState([{ fname: "", amount: "", description: "", deadline: "" }])

  const handleClick = () => {
    setData([...data, { fname: "", lname: "" }])
  }

  const handleChange = (e, i) => {
    const { name, value } = e.target
    const onChangeVal = [...data]
    onChangeVal[i][name] = value
    setData(onChangeVal)
  }

  const handleDelete = (i) => {
    const deleteVal = [...data]
    deleteVal.splice(i, 1)
    setData(deleteVal)
  }

  return (
    <>
      <Navbar></Navbar>
      <div id="main" className="flex mt-20">
        <div className="flex w-full">
          {/* Sidebar */}
          <div
            id="side"
            className="bg-gray-800 text-white w-1/5 space-y-3 flex-shrink-0 "
          >
            <a
              href="/dashboard"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">Dashboard</button>
            </a>
            <a
              href="/projects"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">Projects</button>
            </a>
            <a
              href="/ai"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">AI Chat</button>
            </a>
            <a
              href="/market"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">Marketplace</button>
            </a>
            <a
              href="/wallet"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">Wallet</button>
            </a>
            <a
              href="/signout"
              className="w-full text-2xl py-2 rounded-md block hover:bg-gray-700 transition"
            >
              <button className="w-full h-full">Signout</button>
            </a>
          </div>
          {/* form  ka component yahan se hoga */}
          <div className="w-4/5 p-2 bg-gray-600">
            <section className="bg-white  dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-small text-gray-900 dark:text-white">
                  Add a new Project
                </h2>
                <form action="#">
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="_name"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Project Name
                      </label>
                      <input
                        type="text"
                        name="_name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Type Project name"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="brand"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Enter Project budget
                      </label>
                      <input
                        type="number"
                        name="_projectAmount"
                        id="brand"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder=" Enter Budget"
                        required=""
                      />
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="_clientFees"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Enter your Stake
                      </label>
                      <input
                        type="number"
                        name="_clientFees"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$USD"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="_freelancerStake"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Minium FreeLancer Stake
                      </label>
                      <input
                        type="number"
                        name="_freelancerStake"
                        id="item-weight"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="$USD"
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="_projectType"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="_projectType"
                        name="_projectType"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select category</option>
                        <option value="App_Development">App Development</option>
                        <option value="Web_Development">Web Development</option>
                        <option value="Graphic_Design">Graphic Design</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="_numArbiters"
                        className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                      >
                        Number of Arbiters
                      </label>
                      <input
                        type="number"
                        name="_numArbiters"
                        id="item-weight"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="choose stakeholders"
                        required=""
                      />
                    </div>
                    <div>
                      <div className="relative max-w-sm">
                        <input
                          datepicker=""
                          type="date"
                          htmlFor="_completionTime"
                          name="_completionTime"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Select date"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="_projectCompletionModel"
                          className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                        >
                          Choose Project Model
                        </label>
                        <select
                          id="_projectCompletionModel"
                          name="_projectCompletionModel"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        >
                          <option selected="">Select Model</option>
                          <option value="Agile">Agile Development</option>
                          <option value="Fixed">Fixed Requirements</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="_projectDescription"
                          className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                        >
                          Description
                        </label>
                        <textarea
                          id="_projectDescription"
                          rows={8}
                          className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Your description here"
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={handleClick}
                        className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-small text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">Add</button>
                      {data.map((val, i) => (
                        <div key={i}>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`_fname_${i}`}
                              className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                            >
                              First Name
                            </label>
                            <input
                              type="text"
                              name={`_fname_${i}`}
                              id={`fname_${i}`}
                              value={val.fname}
                              onChange={(e) => handleChange(e, i)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Type First Name"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`_amount_${i}`}
                              className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                            >
                              Amount
                            </label>
                            <input
                              type="text"
                              name={`_amount_${i}`}
                              id={`amount_${i}`}
                              value={val.amount}
                              onChange={(e) => handleChange(e, i)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Type Amount"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`_description_${i}`}
                              className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                            >
                              Description
                            </label>
                            <input
                              type="text"
                              name={`_description_${i}`}
                              id={`description_${i}`}
                              value={val.description}
                              onChange={(e) => handleChange(e, i)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Type Description"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label
                              htmlFor={`_deadline_${i}`}
                              className="block mb-2 text-lg font-small text-gray-900 dark:text-white"
                            >
                              Deadline
                            </label>
                            <input
                              type="text"
                              name={`_deadline_${i}`}
                              id={`deadline_${i}`}
                              value={val.deadline}
                              onChange={(e) => handleChange(e, i)}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                              placeholder="Type Deadline"
                            />
                          </div>
                          <button type="button" onClick={() => handleDelete(i)}
                            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-small text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-lg font-small text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    >
                      Add Project
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Form