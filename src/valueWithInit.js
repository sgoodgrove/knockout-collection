// https://stackoverflow.com/a/12135780/356386
ko.bindingHandlers.valueWithInit = {
    init: function(element, valueAccessor, allBindingsAccessor, data, context) {
        var property = valueAccessor(),
            value = element.value;

        //create the observable, if it doesn't exist
        if (!ko.isObservable(property) && !ko.isWriteableObservable(data[property])) {
            data[property] = ko.observable();
            property = data[property];
        }


        property(value);

        ko.applyBindingsToNode(element, { value: property }, context);
    }
};
