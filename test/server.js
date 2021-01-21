const { expect } = require('chai');
const request = require('request');

describe('Math:', () => {

    describe('Validate response of Add API', () => {
        it("Return status 200", () => {
            request("http://127.0.0.1:3500/math/add/3/5", (err, res, body) => {
                expect(res.statusCode).to.eql(200);
                expect(JSON.parse(body).data).to.eql(8);
            })
        })

        it("Should be return 8", () => {
            request("http://127.0.0.1:3500/math/add/3/5", (err, res, body) => {
                expect(JSON.parse(body).data).to.eql(8);
            })
        })
    })

})
