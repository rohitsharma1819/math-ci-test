//echo \"Error: no test specified\" && exit 1
const { expect } = require('chai');
const newChat = require("../chat");

describe("Chat:", function () {

    describe("save()", function () {
        it("Chat should be save", function () {
            expect(newChat.save("Hi")).to.eql(true);
            // assert.strictEqual(newChat.save("Hi"), true)
        })
    })
})

// describe('Math: ', function () {
//     let App = new Math();
//     describe('Add()', function () {
//         it('should be return 5', function () {
//             assert.strictEqual(App.Add(3, 2), 5);
//         });
//     });

//     describe('Sub()', function () {
//         it('should be return 5', function () {
//             assert.strictEqual(App.Sub(13, 8), 5);
//         });
//     });



// });

