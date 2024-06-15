const Blogs = () => {
  return (
    <div>
      <h1 className="text-center text-lg text-white font-bold">
        Welcome to Blog Page
      </h1>
      <h3 className="text-lg text-white font-semibold">
        What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </h3>
      <p>
        An access token and a refresh token are commonly used in authentication
        and authorization systems. Here is an explanation of each and how they
        work: <br />
        Access Token: An access token is a credential that is used to access
        protected resources on behalf of a user. It is typically a string of
        characters that represents the users authorization to access certain
        APIs, services, or endpoints. Access tokens have an expiration time and
        are usually short-lived. <br />
        When a user logs in or authenticates with a system, they are issued an
        access token. This token is then sent with each request to the server,
        allowing the server to verify the usersidentity and permissions. The
        server checks the validity and permissions associated with the access
        token before granting access to the requested resources. <br />
        Refresh Token: A refresh token is a long-lived credential that is used
        to obtain a new access token when the current access token expires. It
        is usually associated with a shorter-lived access token. The refresh
        token is securely stored on the client-side and is sent to the server to
        obtain a new access token when needed. When an access token expires, the
        client can make a request to the server using the refresh token. If the
        refresh token is valid and not expired, the server issues a new access
        token to the client. This process helps to maintain continuous access
        for the user without requiring them to log in again. <br />
        Regarding storage on the client-side, it is crucial to follow secure
        practices: Access Tokenz: Access tokens are typically stored in memory
        or in browser storage mechanisms such as localStorage or sessionStorage.
        They should be stored securely and protected against cross-site
        scripting (XSS) attacks. It is important not to expose access tokens to
        unauthorized parties. <br />
        Refresh Tokenz: Refresh tokens are sensitive and long-lived, so they
        should be stored securely. The recommended approach is to store them as
        HttpOnly cookies, which cannot be accessed by JavaScript. This helps
        mitigate the risk of cross-site scripting attacks. <br />
        It is important to note that security practices and token storage can
        vary depending on the specific authentication and authorization system
        being used, so it isalways recommended to follow the best practices and
        guidelines provided by the authentication system or framework one is
        using.
      </p>
      <h2 className="text-lg text-white font-semibold">
        What is the comparison between SQL and NoSQL?
      </h2>
      <p>
        SQL databases are vertically scalable, while NoSQL databases are
        horizontally scalable. SQL databases are table-based, while NoSQL
        databases are document, key-value, graph, or wide-column stores. SQL
        databases are better for multi-row transactions, while NoSQL is better
        for unstructured data like documents or JSON
      </p>

      <h2 className="text-lg text-white font-semibold">
        What is express js? What is Nest JS?
      </h2>
      <p>
        NestJS is a framework for developing modern server-side applications in
        Node. js. It is built on top of Express, a popular server framework for
        Node. js, and provides a robust set of features for building efficient,
        scalable, and enterprise-grade applications.
      </p>

      <h2 className="text-lg text-white font-semibold">
        What is MongoDB aggregate and how does it work ?
      </h2>
      <p>
        {" "}
        Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline
      </p>
    </div>
  );
};

export default Blogs;
