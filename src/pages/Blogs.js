import React from 'react';

const Blogs = () => {
    return (
        <div className="my-28">
            <h1 className="text-4xl text-center text-primary font-semivold">Blogs</h1>

            <div className="flex justify-center">
                <div className="w-4/5">
                    <div className="my-12">
                        <h4 className="text-2xl my-6 font-semibold text-gray-600">1. How will you improve the paeformance of your react application?</h4>
                        <p>We can follow some steps..like, optimazing dependency. Optimizing codes as much as possible. The more codes the more heavier the site gets. we should focus on optimizing our codes. And we should avoid inline function inside of a render function. we should avoid using index as keys whhile mapping. we should use css animations instead of js animations for better performance of a site.</p>
                    </div>

                    <div className="my-12">
                        <h4 className="text-2xl my-6 font-semibold text-gray-600">2. What are the different ways to manage state in a React application?</h4>
                        <p>
                            There are 4types of states that we need to manage properly on a react app. Local, Global, Server and URL state. We can manage localstate by using useState in our very react component. when we need to share data from one component to another by prop drilling here we can use context api. But using context api is not a solution to deal with global state rather it is a way to avoid props drilling. what we can do to manage global state we can use third party solution.
                            To manage serverstate we can use react query. what it does is it keeps a track of all data and cache those for us.
                            And url state is easy to manage we basically can handle it by using custom hooks that gives us the information about history, location etc.
                        </p>
                    </div>

                    <div className="my-12">
                        <h4 className="text-2xl my-6 font-semibold text-gray-600">33. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
                        <p>For that first we need to know what does a useState do. It basically declares a state variable and preserve the value between function calls. Normally variables disappear when the function exists but using useState means we are preserving the variable inside of it and we can use it whenever we want. And it preserved by React itself.</p>
                    </div>


                    <div className="my-12">
                        <h4 className="text-2xl my-6 font-semibold text-gray-600">4. What is a unit test? Why should write unit tests?</h4>
                        <p>Unit test is a kind of test that a programmer runs a piece of code if its working fine or not for testing purpose. We should write unit tests to get the problem inside a code faster. The earlier the problem we identify the fewer time it will take to sove the errors. If we do unit test earlier it will cost less problem than later and we can make changes quickly. We can reuse the code to a new roject.</p>
                    </div>

                    <div className="my-12">
                        <h4 className="text-2xl my-6 font-semibold text-gray-600">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                        <p>To find a product from an array by its name we can use fiilter() method. We can pass a condition while looping on that array like... if this property.name and then using includes, returns the result. but To apply this on a search field first we need to ensure that searched letters are in uppercase or lowercase. We can make it easier by using toUppercase() or toLowercase() method in the condition. Then we will get our result.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;