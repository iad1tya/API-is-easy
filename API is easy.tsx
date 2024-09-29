// It's the first version of code, no changes will be made here from now... changes will be automatically reflected on the site
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function APIMasteryCourse() {
  const [activeModule, setActiveModule] = useState("module1")

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">🚀 API is easy</h1>
        <nav>
          <Tabs value={activeModule} onValueChange={setActiveModule}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="module1">Module 1</TabsTrigger>
              <TabsTrigger value="module2">Module 2</TabsTrigger>
              <TabsTrigger value="module3">Module 3</TabsTrigger>
              <TabsTrigger value="module4">Module 4</TabsTrigger>
              <TabsTrigger value="module5">Module 5</TabsTrigger>
              <TabsTrigger value="module6">Module 6</TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      </header>

      <main>
        <TabsContent value="module1">
          <Card>
            <CardHeader>
              <CardTitle>📚 Module 1: Introduction to APIs</CardTitle>
              <CardDescription>Learn the fundamentals of APIs and their importance in modern software development.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson1.1">
                  <AccordionTrigger>Lesson 1.1: What is an API?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">An <strong>Application Programming Interface (API)</strong> is a set of rules and protocols that allows different software applications to communicate with each other. APIs define the methods and data formats that applications can use to request and exchange information.</p>
                    <img src="/placeholder.svg?height=300&width=600" alt="API Diagram" className="w-full mb-4 rounded-md" />
                    <h4 className="text-xl font-semibold mb-2">Types of APIs</h4>
                    <ul className="list-disc list-inside mb-4">
                      <li>🌐 <strong>REST APIs</strong>: Use standard HTTP methods and are stateless. They often return data in JSON format.</li>
                      <li>📦 <strong>SOAP APIs</strong>: Protocol-based and rely on XML for message formatting. They are more rigid and require a strict contract (WSDL).</li>
                      <li>📊 <strong>GraphQL APIs</strong>: A newer alternative that allows clients to request only the data they need.</li>
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">Real-world Examples of APIs</h4>
                    <ul className="list-disc list-inside">
                      <li>📱 <strong>Social Media</strong>: Facebook and Twitter APIs</li>
                      <li>💳 <strong>Payment Gateways</strong>: Stripe and PayPal APIs</li>
                      <li>🌤️ <strong>Weather Services</strong>: OpenWeather API</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson1.2">
                  <AccordionTrigger>Lesson 1.2: How APIs Work</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Request and Response Cycle</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Request</strong>: A client application sends a request to the API server.</li>
                      <li><strong>Processing</strong>: The server processes the request and interacts with the database or other services as needed.</li>
                      <li><strong>Response</strong>: The server sends back a response to the client, often in JSON or XML format.</li>
                    </ol>
                    <img src="/placeholder.svg?height=300&width=600" alt="API Request-Response Cycle" className="w-full mb-4 rounded-md" />
                    <h4 className="text-xl font-semibold mb-2">Understanding Endpoints</h4>
                    <p className="mb-4">An <strong>endpoint</strong> is a specific URL where an API can be accessed. Each endpoint corresponds to a specific resource or action within the API.</p>
                    <h4 className="text-xl font-semibold mb-2">HTTP Methods</h4>
                    <ul className="list-disc list-inside">
                      <li><strong>GET</strong>: Retrieve data from a server.</li>
                      <li><strong>POST</strong>: Send data to a server to create a resource.</li>
                      <li><strong>PUT</strong>: Update an existing resource.</li>
                      <li><strong>DELETE</strong>: Remove a resource from the server.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson1.3">
                  <AccordionTrigger>Lesson 1.3: JSON and XML</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">JSON (JavaScript Object Notation)</h4>
                    <p className="mb-4">A lightweight data interchange format that is easy to read and write for humans and machines. It uses key-value pairs and is commonly used in REST APIs.</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com"
}`}
                    </pre>
                    <h4 className="text-xl font-semibold mb-2">XML (eXtensible Markup Language)</h4>
                    <p className="mb-4">A markup language that defines rules for encoding documents. It is more verbose than JSON and is often used in SOAP APIs.</p>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`<person>
  <name>John Doe</name>
  <age>30</age>
  <email>john.doe@example.com</email>
</person>`}
                    </pre>
                    <h4 className="text-xl font-semibold mb-2">Differences and When to Use Each</h4>
                    <ul className="list-disc list-inside">
                      <li><strong>JSON</strong> is preferred for web applications due to its simplicity and smaller size.</li>
                      <li><strong>XML</strong> is used in applications requiring a strict schema and complex data structures.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="module2">
          <Card>
            <CardHeader>
              <CardTitle>🛠️ Module 2: Getting Started with Postman</CardTitle>
              <CardDescription>Learn how to use Postman to interact with and test APIs effectively.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson2.1">
                  <AccordionTrigger>Lesson 2.1: Introduction to Postman</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4"><strong>Postman</strong> is a popular API client that simplifies the process of developing and testing APIs. It provides a user-friendly interface for making requests and viewing responses.</p>
                    <img src="/placeholder.svg?height=300&width=600" alt="Postman Interface" className="w-full mb-4 rounded-md" />
                    <h4 className="text-xl font-semibold mb-2">Installing Postman</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li>Visit the <a href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Postman website</a>.</li>
                      <li>Download and install the version compatible with your operating system.</li>
                      <li>Launch Postman and create a free account to sync your collections and settings.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Setting Up Your Workspace</h4>
                    <ul className="list-disc list-inside">
                      <li>Create a new workspace by clicking on "Workspaces" in the top left corner.</li>
                      <li>Name your workspace and invite collaborators if needed.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson2.2">
                  <AccordionTrigger>Lesson 2.2: Making Your First API Request</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Creating a New Request</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li>Click on the "New" button and select "Request."</li>
                      <li>Name your request and save it in a collection.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Understanding the Postman Interface</h4>
                    <ul className="list-disc list-inside mb-4">
                      <li><strong>Request Type</strong>: Choose the HTTP method (GET, POST, etc.) from the dropdown.</li>
                      <li><strong>URL Field</strong>: Enter the API endpoint you want to access.</li>
                      <li><strong>Params, Headers, Body</strong>: Use these tabs to add parameters, headers, or request body data.</li>
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">Sending a GET Request</h4>
                    <ol className="list-decimal list-inside">
                      <li>Select the GET method.</li>
                      <li>Enter a sample URL (e.g., <code>https://jsonplaceholder.typicode.com/posts</code>).</li>
                      <li>Click the "Send" button.</li>
                      <li>View the response in the lower panel, which will show the status code, response time, and data returned.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson2.3">
                  <AccordionTrigger>Lesson 2.3: Using Environment Variables</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">What are Environment Variables?</h4>
                    <p className="mb-4"><strong>Environment variables</strong> are key-value pairs that can be used to store information across multiple requests, such as API keys or base URLs.</p>
                    <h4 className="text-xl font-semibold mb-2">Creating and Using Variables in Postman</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li>Click on the "Manage Environments" icon (gear icon).</li>
                      <li>Create a new environment and add variables like <code>baseUrl</code>.</li>
                      <li>Use variables in your requests by referencing them as <code>{'{{baseUrl}}'}</code>.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Managing Environments</h4>
                    <p>Easily switch between environments (e.g., Development, Testing, Production) by selecting them from the dropdown in the top right corner.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="module3">
          <Card>
            <CardHeader>
              <CardTitle>🔍 Module 3: Advanced API Requests</CardTitle>
              <CardDescription>Dive deeper into API interactions and learn about authentication and collections.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson3.1">
                  <AccordionTrigger>Lesson 3.1: Working with Different HTTP Methods</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Making POST Requests</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Select POST</strong>: Choose POST from the dropdown list of HTTP methods.</li>
                      <li><strong>Enter the URL</strong>: Input the API endpoint (e.g., <code>https://jsonplaceholder.typicode.com/posts</code>).</li>
                      <li><strong>Set Headers</strong>: Add any necessary headers (e.g., <code>Content-Type: application/json</code>).</li>
                      <li><strong>Body</strong>: Click on the "Body" tab, select "raw" and choose JSON from the dropdown. Input your JSON data.</li>
                      <li><strong>Send Request</strong>: Click "Send" to submit your data.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Making PUT Requests</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Select PUT</strong>: Choose PUT from the dropdown.</li>
                      <li><strong>Enter the URL</strong>: Input the specific endpoint for the resource you want to update.</li>
                      <li><strong>Body</strong>: Input the updated data in the body.</li>
                      <li><strong>Send Request</strong>: Click "Send" to update the resource.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Making DELETE Requests</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Select DELETE</strong>: Choose DELETE from the dropdown.</li>
                      <li><strong>Enter the URL</strong>: Input the endpoint for the resource you want to delete.</li>
                      <li><strong>Send Request</strong>: Click "Send" to delete the resource.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson3.2">
                  <AccordionTrigger>Lesson 3.2: Authentication in APIs</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Understanding API Authentication</h4>
                    <p className="mb-4">APIs often require authentication to secure access and protect sensitive data. Common authentication methods include:</p>
                    <ul className="list-disc list-inside mb-4">
                      <li><strong>Basic Authentication</strong>: A simple method that sends username and password encoded in Base64.</li>
                      <li><strong>API Keys</strong>: Unique identifiers passed in requests to authenticate users.</li>
                      <li><strong>OAuth 2.0</strong>: A more complex framework that allows third-party applications to access user data without sharing credentials.</li>
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">Implementing Basic Auth in Postman</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Select Basic Auth</strong>: In the "Authorization" tab of your request, choose "Basic Auth".</li>
                      <li><strong>Enter Credentials</strong>: Input your username and password.</li>
                      <li><strong>Send Request</strong>: Click "Send" to authenticate and access protected resources.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Using API Keys</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Add Header</strong>: In the "Headers" tab, add a new key-value pair:
                        <ul className="list-disc list-inside ml-8">
                          <li>Key: <code>Authorization</code></li>
                          <li>Value: <code>Bearer YOUR_API_KEY</code></li>
                        </ul>
                      </li>
                      <li><strong>Send Request</strong>: This header will be included in your request to authenticate with the API.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Implementing OAuth 2.0</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Authorization Tab</strong>: In the "Authorization" tab, select "OAuth 2.0".</li>
                      <li><strong>Get New Access Token</strong>: Fill in the required fields (client ID, client secret, token URL).</li>
                      <li><strong>Request Token</strong>: Click "Request Token" to retrieve your access token.</li>
                      <li><strong>Use Token</strong>: Once obtained, select it to include in your requests.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson3.3">
                  <AccordionTrigger>Lesson 3.3: Using Postman Collections</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">What are Collections?</h4>
                    <p className="mb-4"><strong>Collections</strong> in Postman are groups of API requests organized in a folder structure, allowing for easy management and sharing.</p>
                    <h4 className="text-xl font-semibold mb-2">Creating and Organizing Collections</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Create a Collection</strong>: Click on the "New" button and select "Collection".</li>
                      <li><strong>Name Your Collection</strong>: Provide a descriptive name and add any documentation.</li>
                      <li><strong>Add Requests</strong>: You can add existing requests or create new ones directly within the collection.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Running Collections using the Collection Runner</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Open Collection Runner</strong>: Click on the "Runner" button at the top left of the Postman interface.</li>
                      <li><strong>Select a Collection</strong>: Choose the collection you want to run.</li>
                      <li><strong>Set Iterations</strong>: Specify how many times you want to run the requests (useful for testing).</li>
                      <li><strong>Run</strong>: Click "Run" to execute the collection. You can review the results and responses for each request.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="module4">
          <Card>
            <CardHeader>
              <CardTitle>🧪 Module 4: Testing and Automation</CardTitle>
              <CardDescription>Learn how to write tests for your APIs and automate the testing process.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson4.1">
                  <AccordionTrigger>Lesson 4.1: Writing Tests in Postman</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Introduction to Testing APIs</h4>
                    <p className="mb-4">Testing APIs is crucial to ensure they behave as expected. Postman allows you to write tests using JavaScript.</p>
                    <h4 className="text-xl font-semibold mb-2">Writing Tests Using JavaScript</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Tests Tab</strong>: Go to the "Tests" tab of your request.</li>
                      <li><strong>Example Test</strong>: Write a simple test to check the status code:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});`}
                    </pre>
                    <h4 className="text-xl font-semibold mb-2">Common Assertions in Postman</h4>
                    <ul className="list-disc list-inside mb-4">
                      <li>Check response time:</li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});`}
                    </pre>
                    <ul className="list-disc list-inside mb-4">
                      <li>Validate response body:</li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
{`pm.test("Response has title", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('title');
});`}
                    </pre>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson4.2">
                  <AccordionTrigger>Lesson 4.2: Automating API Tests</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Using the Postman CLI (Newman)</h4>
                    <p className="mb-4"><strong>Newman</strong> is a command-line collection runner for Postman. It allows you to run collections from the terminal.</p>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Install Newman</strong>:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`npm install -g newman`}
                    </pre>
                    <ol start="2" className="list-decimal list-inside mb-4">
                      <li><strong>Run a Collection</strong>: Use the command:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`newman run your-collection.json`}
                    </pre>
                    <h4 className="text-xl font-semibold mb-2">Running Automated Tests in CI/CD Pipelines</h4>
                    <ol className="list-decimal list-inside">
                      <li>Integrate Newman in your CI/CD pipeline (e.g., Jenkins, GitHub Actions).</li>
                      <li>Set it to run tests automatically whenever you push changes or create pull requests.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson4.3">
                  <AccordionTrigger>Lesson 4.3: Mock Servers</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">What is a Mock Server?</h4>
                    <p className="mb-4">A <strong>mock server</strong> simulates the behavior of a real API by providing a way to test how your application interacts with an API without needing the actual server.</p>
                    <h4 className="text-xl font-semibold mb-2">Creating and Using Mock Servers in Postman</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Create a Mock Server</strong>: Click on "New" and select "Mock Server".</li>
                      <li><strong>Select Collection</strong>: Choose a collection to mock.</li>
                      <li><strong>Set Up</strong>: Configure the mock server settings (e.g., name, URL).</li>
                      <li><strong>Use Mock URL</strong>: Postman will provide a mock URL. Use this URL in your requests to simulate responses.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Testing Without a Live API</h4>
                    <ul className="list-disc list-inside">
                      <li>Mock servers allow front-end developers to continue working without dependency on the back-end.</li>
                      <li>You can predefine responses for specific requests, ensuring consistent testing.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="module5">
          <Card>
            <CardHeader>
              <CardTitle>📝 Module 5: API Documentation and Best Practices</CardTitle>
              <CardDescription>Learn how to document your APIs effectively and follow industry best practices.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson5.1">
                  <AccordionTrigger>Lesson 5.1: Documenting Your API</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Importance of API Documentation</h4>
                    <p className="mb-4">Good API documentation is crucial for developers to understand how to use your API. It serves as a guide for:</p>
                    <ul className="list-disc list-inside mb-4">
                      <li><strong>Integration</strong>: Helps other developers integrate their applications with yours.</li>
                      <li><strong>Maintenance</strong>: Facilitates easier updates and troubleshooting.</li>
                      <li><strong>Adoption</strong>: High-quality documentation encourages more developers to use your API.</li>
                    </ul>
                    <h4 className="text-xl font-semibold mb-2">Tools for API Documentation</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Swagger/OpenAPI</strong>: A popular framework for API documentation that allows you to describe your API in a structured format (YAML or JSON).</li>
                      <li><strong>Postman</strong>: Postman also offers automatic documentation generation from collections.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Generating Documentation from Postman</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Select a Collection</strong>: Go to your collection in Postman.</li>
                      <li><strong>View Documentation</strong>: Click on the "View in web" button to generate a public link.</li>
                      <li><strong>Customize Documentation</strong>: You can add descriptions, examples, and additional details to enhance clarity.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Example Documentation Structure</h4>
                    <ul className="list-disc list-inside">
                      <li><strong>Overview</strong>: General information about the API.</li>
                      <li><strong>Authentication</strong>: Instructions on how to authenticate.</li>
                      <li><strong>Endpoints</strong>: List of available endpoints with descriptions, parameters, and examples.</li>
                      <li><strong>Error Codes</strong>: Common error responses with explanations.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson5.2">
                  <AccordionTrigger>Lesson 5.2: API Versioning</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Understanding API Versioning</h4>
                    <p className="mb-4">As your API evolves, versioning is essential to maintain compatibility with existing clients while introducing new features.</p>
                    <h4 className="text-xl font-semibold mb-2">Strategies for Versioning APIs</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>URI Versioning</strong>: Include the version number in the endpoint URL (e.g., <code>/v1/users</code>).</li>
                      <li><strong>Query Parameter Versioning</strong>: Use a query parameter to specify the version (e.g., <code>/users?version=1</code>).</li>
                      <li><strong>Header Versioning</strong>: Include the version in the request header (e.g., <code>Accept: application/vnd.yourapi.v1+json</code>).</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">How to Implement Versioning in Postman</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Create Separate Collections</strong>: Maintain separate collections for each version of your API.</li>
                      <li><strong>Document Changes</strong>: Clearly document the differences between versions in your API documentation.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson5.3">
                  <AccordionTrigger>Lesson 5.3: Best Practices in API Design</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">RESTful Principles</h4>
                    <p className="mb-4">Follow REST principles to ensure your API is intuitive and scalable:</p>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Use Nouns for Resources</strong>: Use nouns (e.g., <code>/users</code>) instead of verbs (e.g., <code>/getUsers</code>).</li>
                      <li><strong>Stateless Interactions</strong>: Each request should contain all the information needed to process it.</li>
                      <li><strong>HTTP Methods</strong>: Use the correct HTTP methods according to the action (GET for retrieval, POST for creation, etc.).</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Security Considerations</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Authentication</strong>: Use OAuth 2.0 for secure access management.</li>
                      <li><strong>Rate Limiting</strong>: Implement rate limiting to prevent abuse and ensure fair usage.</li>
                      <li><strong>Input Validation</strong>: Validate all inputs to prevent security vulnerabilities such as SQL injection.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Rate Limiting and Caching Strategies</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Rate Limiting</strong>: Limit the number of requests a client can make in a given time period to protect resources.</li>
                      <li><strong>Caching</strong>: Use caching strategies (e.g., HTTP caching headers) to reduce load on your server and improve response times.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="module6">
          <Card>
            <CardHeader>
              <CardTitle>🏗️ Module 6: Real-world API Projects</CardTitle>
              <CardDescription>Apply your knowledge by working on practical API projects and integrations.</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="lesson6.1">
                  <AccordionTrigger>Lesson 6.1: Building a Simple API</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Setting Up a Simple REST API with Node.js</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Initialize Project</strong>: Create a new directory and initialize a Node.js project:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`mkdir my-api
cd my-api
npm init -y`}
                    </pre>
                    <ol start="2" className="list-decimal list-inside mb-4">
                      <li><strong>Install Express</strong>: Install Express to simplify API creation:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`npm install express`}
                    </pre>
                    <ol start="3" className="list-decimal list-inside mb-4">
                      <li><strong>Create Basic Server</strong>:</li>
                    </ol>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
});

app.listen(PORT, () => {
  console.log(\`Server is running on http://localhost:\${PORT}\`);
});`}
                    </pre>
                    <ol start="4" className="list-decimal list-inside">
                      <li><strong>Test Your API</strong>: Use Postman to send a GET request to <code>http://localhost:3000/api/users</code> and view the response.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson6.2">
                  <AccordionTrigger>Lesson 6.2: Integrating Third-party APIs</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Using Public APIs</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Explore APIs</strong>: Websites like <a href="https://rapidapi.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">RapidAPI</a> provide a collection of public APIs.</li>
                      <li><strong>Integrate with Your Application</strong>: Make requests to third-party APIs (e.g., GitHub API for user data).</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Practical Example of Integration</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Make a GET Request to GitHub API</strong>:</li>
                    </ol>
                    <ul className="list-disc list-inside mb-4">
                      <li>Endpoint: <code>https://api.github.com/users/{'{username}'}</code></li>
                      <li>Example:</li>
                    </ul>
                    <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
{`app.get('/api/github/:username', async (req, res) => {
  const username = req.params.username;
  const response = await fetch(\`https://api.github.com/users/\${username}\`);
  const data = await response.json();
  res.json(data);
});`}
                    </pre>
                    <ol start="2" className="list-decimal list-inside">
                      <li><strong>Test with Postman</strong>: Use Postman to call your endpoint and retrieve GitHub user data.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="lesson6.3">
                  <AccordionTrigger>Lesson 6.3: Capstone Project</AccordionTrigger>
                  <AccordionContent>
                    <h4 className="text-xl font-semibold mb-2">Create a Small Project Integrating Multiple APIs</h4>
                    <ol className="list-decimal list-inside mb-4">
                      <li><strong>Project Idea</strong>: Build a simple application that aggregates data from multiple APIs (e.g., a weather app that pulls data from a weather API and a news API).</li>
                      <li><strong>Define Requirements</strong>: Outline what features you want to implement and which APIs you will use.</li>
                      <li><strong>Implementation</strong>: Develop the application, ensuring to test each API integration thoroughly.</li>
                    </ol>
                    <h4 className="text-xl font-semibold mb-2">Presenting the Project</h4>
                    <ol className="list-decimal list-inside">
                      <li><strong>Documentation</strong>: Create clear documentation for your project.</li>
                      <li><strong>Demo</strong>: Prepare a demo showcasing how the application works and how it integrates different APIs.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </main>

      <footer className="mt-8 text-center">
        <p>&copy; 2023 API is easy. All rights reserved.</p>
        <div className="flex justify-center items-center mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="mx-2">
            <img src="/placeholder.svg?height=30&width=30" alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
      </footer>
    </div>
  )
}
