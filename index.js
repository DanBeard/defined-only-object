function DefinedOnlyObject(obj) {
        return new Proxy(obj, {

            get: function(target, name) {
                var result = target[name];
                if(result === undefined) throw name + " is not a property of this object and would return undefined";
                else return result;
            }
        });
};

module.exports = DefinedOnlyObject

