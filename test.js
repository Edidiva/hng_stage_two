//1. create User
//Test if Response status code is 201
pm.test("Response status code is 201", function () {
    pm.response.to.have.status(201);
});


//Test if Name is a non-empty string
pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});

//Test if response returns required feild
pm.test("Response has required fields - name and id", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist.and.to.be.a('string');
    pm.expect(responseData.id).to.exist.and.to.be.a('string');
});

//Test if Response time is less than 500ms
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

//2. Get User
//Test if Response status code is 200
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

//Test if Response returns Person object
pm.test("Response should have the required fields - name and id", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist.and.to.be.a('string');
    pm.expect(responseData.id).to.exist.and.to.be.a('string');
});

//Test if Name is a non-empty string
pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.name).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});

//Test if Name is a non-empty string
pm.test("The id should be a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.id).to.exist.and.to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//3. Update User
//test if Response status code is 200
pm.test("Response status code is 200", function () {
    pm.response.to.have.status(200);
});

//to test if the response contains an object
pm.test("Response has the required fields - name and id", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.name).to.exist.and.to.be.a('string');
    pm.expect(responseData.id).to.exist.and.to.be.a('string');
});

//to test that Name is a non-empty string
pm.test("Name is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData.name).to.be.a('string').and.to.have.lengthOf.at.least(1, "Name should not be empty");
});

//to test that Id is a non-empty string
pm.test("Id is a non-empty string", function () {
    const responseData = pm.response.json();

    pm.expect(responseData).to.be.an('object');
    pm.expect(responseData.id).to.be.a('string').and.to.have.lengthOf.at.least(1, "Value should not be empty");
});

//to test Response time is less than 200ms
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

//4. Delete User
//Test Response status code is 200
pm.test("Response status code is 200", function () {
    pm.expect(pm.response.code).to.equal(200);
});


//to check if the user has been deleted
pm.test("Verify that the requested resource has been deleted", function () {
    pm.expect(pm.response.code).to.equal(200);
    pm.expect(pm.response.text()).to.equal("");
});

//to test if response time is les than 500ms
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

//to test the requested resource is no longer accessible
pm.test("The requested resource is no longer accessible", function () {
    pm.expect(pm.response.code).to.equal(404);
});

