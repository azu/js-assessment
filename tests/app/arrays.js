define([ 'use!underscore' ], function(_){
    describe("arrays", function(){
        var a, b, fn;

        beforeEach(function(){
            a = [ 1, 2, 3, 4 ];

            b = {
                foo : 'bar',
                baz : 'bim'
            };

            fn = function(ary, num){
            };
        });

        it("you should be able to determine the location of an item in an array", function(){
            fn = function(ary, num){
                if (_(ary).isArray() && _(num).isNumber()){
                    return ary.indexOf(num);
                }
            }
            expect(fn(a, 3)).to.be(2);
        });

        it("you should be able to add the values of an array", function(){
            fn = function(ary){
                var sum = _.reduce(ary, function(memo, num){
                    return memo + num;
                }, 0);
                return sum;
            };
            expect(fn(a)).to.be(10);
        });

        it("you should be able to remove an item from an array", function(){
            fn = function(ary, num){
                ary.splice(ary.indexOf(num), 1);
                return ary;
            };
            var result = fn(a, 2);
            expect(result).to.have.length(3);
            expect(result.join(' ')).to.be('1 3 4');
        });

        it("you should be able to add an item to the end of an array", function(){
            fn = function(ary, num){
                ary.push(num);
                return ary;
            };
            var result = fn(a, 10);
            expect(result).to.have.length(5);
            expect(result[result.length - 1]).to.be(10);
        });

        it("you should be able to create an array from two arrays", function(){
            fn = function(firstAry, lastAry){
                firstAry = firstAry.concat(lastAry);
                return firstAry;
            };
            var c = [ 'a', 'b', 'c' ],
                    result = fn(a, c);

            expect(result).to.have.length(7);
            expect(result.join(' ')).to.be('1 2 3 4 a b c');
        });

        it("you should be able to add an item anywhere in an array", function(){
            fn = function(ary, item, num){
                ary.splice(num, 0, item);
                return ary;
            };
            var result = fn(a, 'z', 2);

            expect(result).to.have.length(5);
            expect(result.join(' ')).to.be('1 2 z 3 4');
        });
    });
});
