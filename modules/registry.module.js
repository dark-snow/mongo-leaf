const registry = [

];

register = (name, model) => {
    registry.push({
        name,
        model
    });
}



module.exports.register = register;