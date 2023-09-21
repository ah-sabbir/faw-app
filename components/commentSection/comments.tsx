import Link from 'next/link'
import React from 'react'

const CommenstSection = () => {
  return (
    <>
        <section className="antialiased mx-auto max-w-screen-sm">
            <div className="w-full flex flex-col my-9">
                <div className=' flex flex-row items-center justify-between'>
                    <h2 className=" text-left">The Conversation </h2>
                    <p className="text-center">7 Comments</p>
                </div>
                <div className="w-full border-collapse border-b my-3"></div>
                <p>Start a discussion, not a fire. Post with kindness.</p>
            </div>


            <div className='w-full flex items-center justify-between'>
                <h3><p className='text-md uppercase'>Guest</p></h3>
                <div className='flex'>
                    <Link href="#" className='mx-2'><p className='text-sm uppercase'>log in</p></Link>
                    <Link href="#" className='mx-2'><p className='text-sm uppercase'>Sign up</p></Link>
                </div>
            </div>

            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea id="comment" 
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..." required>
                </textarea>
                <button>send</button>
            </div>


            <h3 className="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

            <div className="space-y-4">

                <div className="flex">
                <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                    </p>
                    <div className="mt-4 flex items-center">
                    <div className="flex -space-x-2 mr-2">
                        <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                        <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""/>
                    </div>
                    <div className="text-sm text-gray-500 font-semibold">
                        5 Replies
                    </div>
                    </div>
                </div>
                </div>

                <div className="flex">
                <div className="flex-shrink-0 mr-3">
                    <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                </div>
                <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                    <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua.
                    </p>
                    
                    <h4 className="my-5 uppercase tracking-wide text-gray-400 font-bold text-xs">Replies</h4>

                    <div className="space-y-4">
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                        <p className="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                        </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex-shrink-0 mr-3">
                        <img className="mt-3 rounded-full w-6 h-6 sm:w-8 sm:h-8" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""/>
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <strong>Sarah</strong> <span className="text-xs text-gray-400">3:34 PM</span>
                        <p className="text-xs sm:text-sm">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}



export default CommenstSection
