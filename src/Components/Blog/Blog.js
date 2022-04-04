import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto my-12'>
            <h1 className='text-lg font-semibold'>1. What is custom API?</h1>
            <p>Ans: Context API is a React API that can solve a lot of problems that modern applications face related to how they are passing state to their components. Context API can be used to share data with multiple components, without passing data through props manually. For a more in-depth definition, it provides a way for us to make particular data available to all components throughout the component tree. Context API makes it easier to have our global and app-wide data available to all components, making it easier and more accessible. A good example would be a UI library that needs to function independently from the applications using it but still needs a better way of sharing data than passing everything through props. In a UI library, the tree-based scoping is very useful because, we can override the components in just a part of the application.</p>
            <h1 className='text-lg font-semibold mt-4'>2. What is Symantic Tag?</h1>
            <p>Ans: The word semantic is anything related to meaning. An HTML semantic element is an element with some type of meaning. Such as, FORM, NAV, MAIN, ARTICLE. These elements are semantic because they define some specific portion of the webpage. Tags like 'MAIN' state the main content of a webpage while a tag FORM defines a form. Use of semantic tags allow us better accessibility to our sites. This accessibility comes in the form of assistive technologies like search engines having the ability to better understand the content of your website. Semantic Tags also have the benefits of allowing developers to write more consistent code.</p>
        </div>
    );
};

export default Blog;