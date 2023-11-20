const expect = require('chai').expect;
const humanFileSize = require(".");

const test_expect_table = 
[

    //B
    ['129 B', [129]],
    ['129 B', [129, false]],
    
    //KB
    ['1.1 KB', [1104]],
    ['67.2 KB', [67229]],

    //KiB
    ['1.1 KiB', [1104, false]],
    ['65.7 KiB', [67229, false]]
    
];

describe('Testing humanFileSize function" ', () => {
    test_expect_table.forEach((expect_table) => {
        let expect_str = expect_table[0];
    
        let arguments = expect_table[1];
    
        it('Should Return ' + expect_str, () => {
            expect(humanFileSize(...arguments)).to.equal(expect_str);
        });
        
    });
	
});