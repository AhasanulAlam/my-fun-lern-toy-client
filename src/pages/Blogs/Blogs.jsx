
const Blogs = () => {
    return (
        <>
            <div className='my-container'>
                <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                    <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                            <span className='relative inline-block'>
                                <svg
                                    viewBox='0 0 52 24'
                                    fill='currentColor'
                                    className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                                >
                                    <defs>
                                        <pattern
                                            id='70326c9b-4a0f-429b-9c76-792941e326d5'
                                            x='0'
                                            y='0'
                                            width='.135'
                                            height='.30'
                                        >
                                            <circle cx='1' cy='1' r='.7' />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                                        width='52'
                                        height='24'
                                    />
                                </svg>
                                <span className='relative'>Q</span>
                            </span>
                            uestions & Answers
                        </h2>
                    </div>
                </div>

                <div className='max-w-screen-xl sm:mx-auto' >
                    <div className='grid grid-cols-1 gap-16 row-gap-8'>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                                </p>
                                <p className='text-gray-700'>
                                    <span className='font-bold'>Tokens </span>
                                    are pieces of data that carry just enough information to facilitate the process of determining a user`s identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process. Common identity frameworks and protocols use token-based strategies to secure access to applications and resources. For example, we can use OAuth 2.0 for authorization and OIDC for authentication. It is one of the most popular authorization frameworks out there. It is designed to allow an application to access resources hosted by other servers on behalf of a user. OAuth 2.0 uses Access Tokens and Refresh Tokens.
                                    <br />
                                    <br />
                                    <span className='font-bold'>Access token </span>
                                    When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.
                                    <br />
                                    <br />
                                    OAuth 2.0 does not define a format for access tokens. At Auth0, for example, access tokens issued for the Management API and access tokens issued for any custom API that you have registered with Auth0 follow the JSON Web Token (JWT) standard. Their basic structure conforms to the typical JWT structure, and they contain standard JWT claims asserted about the token itself.
                                    <br />
                                    <br />
                                    <span className='font-bold'>Refresh token </span>
                                    As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
                                    <br />
                                    <br />
                                    When combined, OAuth 2.0 and OIDC bring to life an array of authorization and authentication flows. Each flow has its own set of benefits and caveats that define the best scenarios and architecture where we should use access and refresh tokens.
                                </p>

                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    2. Compare SQL and NoSQL databases?
                                </p>
                                <div className='text-gray-700'>
                                    <span className='font-bold'>SQL </span> is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views.
                                    <br /><br />
                                    <span className='font-bold'>NoSQL </span> stands for Not only SQL. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. NoSQL systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. This makes them ideal for use in applications
                                    <br /><br />
                                    <h2 className='my-2 text-xl font-medium'>The main differences between SQL and NoSQL are:</h2>
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            {/* head */}
                                            <thead>
                                                <tr className="text-center">
                                                    <th>SQL</th>
                                                    <th>NoSQL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* row 1 */}
                                                <tr>
                                                    <td>Databases are relational</td>
                                                    <td>Databases are non-relational</td>
                                                </tr>
                                                {/* row 2 */}
                                                <tr>
                                                    <td>Databases use structured query language (SQL) and have a predefined schema.</td>
                                                    <td>Databases have dynamic schemas for unstructured data.</td>
                                                </tr>
                                                {/* row 3 */}
                                                <tr>
                                                    <td>Databases are vertically scalable.</td>
                                                    <td>Databases are horizontally scalable.</td>
                                                </tr>
                                                {/* row 4 */}
                                                <tr>
                                                    <td>Databases are table-based.</td>
                                                    <td>Databases are document, key-value, graph, or wide-column stores.</td>
                                                </tr>
                                                {/* row 5 */}
                                                <tr>
                                                    <td>Databases are better for multi-row transactions.</td>
                                                    <td>Databases are better for unstructured data like documents or JSON.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    3. What is express js? What is Nest JS?
                                </p>
                                <div className='text-gray-700'>
                                    <span className='font-bold'>NestJS </span>is a progressive Node.js framework for building efficient, scalable, and reliable server-side applications. It is built on top of Express.js and provides a more structured way of building applications with TypeScript. NestJS uses a modular architecture, making it easy to maintain and scale applications as they grow.
                                    <br />
                                    <br />
                                    <span className='font-bold'>ExpressJS </span> is a minimal and flexible Node.js framework that provides a robust set of features for building web and mobile applications. It is a lightweight and unopinionated framework that allows developers to create applications with their preferred tools and libraries. Express is popular among developers due to its simplicity and ease of use.
                                    <br />
                                </div>
                            </div>
                            <div>
                                <p className='mb-4 text-xl font-medium'>
                                    4. What is MongoDB aggregate and how does it work?
                                </p>
                                <div className='text-gray-700'>
                                    When you start working with MongoDB, you will typically use the find() command for a wide range of queries. However, as soon as your queries get more advanced, you will need to know more about MongoDB aggregation.
                                    <br />
                                    <br />
                                    Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                                    <br /><br />
                                    <h2 className='my-2 text-xl font-medium'>How does the MongoDB aggregation pipeline work:</h2>
                                    <br />
                                    <img src="https://studio3t.com/wp-content/uploads/2018/10/Mongodb.png" alt="" />
                                    <br /><br />
                                    The input of the pipeline can be a single collection, where others can be merged later down the pipeline.
                                    The pipeline then performs successive transformations on the data until our goal is achieved.
                                    This way, we can break down a complex query into easier stages, in each of which we complete a different operation on the data. So, by the end of the query pipeline, we will have achieved all that we wanted.
                                    This approach allows us to check whether our query is functioning properly at every stage by examining both its input and the output. The output of each stage will be the input of the next.
                                    There is no limit to the number of stages used in the query, or how we combine them.
                                    To achieve optimum query performance there are a number of best practices to take into account. We will come to those later in the article.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;