import React from 'react';

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
          <div className='grid items-center w-4/5 grid-cols-2 gap-10 mx-auto'>
            <div>
              <h1 className='mb-4 text-2xl font-extrabold'>
                Oops! The page you're looking for is unavailable.
              </h1>
              <p className='mb-5 text-xl'>
                You might have the wrong address, or the page may have moved.
              </p>
            </div>
            <div>
              <div className='w-full h-full'>
                <img
                  src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?t=st=1649037941~exp=1649038541~hmac=f28b148fb7874534486ee44c7f8de51d8eb8e9b798d6646f84bc03d225a31294&w=740'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
      )
};

export default NotFound;