let Tag = require('./tags/Tag');

function jsonifyTag(tag, context = {}) {
    switch (tag.id) {
        case Tag.END_TAG:
            if (tag.name !== null && tag.name !== undefined) {
                console.error("end tag has name. This will not be emitted");
            }
            break;
        case Tag.BYTE_TAG:
            context[tag.name] = tag.byteValue;
            break;
        case Tag.SHORT_TAG:
            context[tag.name] = tag.shortValue;
            break;
        case Tag.INT_TAG:
            context[tag.name] = tag.intValue;
            break;
        case Tag.LONG_TAG:
            context[tag.name] = tag.longValue;
            break;
        case Tag.FLOAT_TAG:
            context[tag.name] = tag.floatValue;
            break;
        case Tag.DOUBLE_TAG:
            context[tag.name] = tag.doubleValue;
            break;
        case Tag.BYTE_ARRAY_TAG:
            context[tag.name] = tag.byteValues;
            break;
        case Tag.STRING_TAG:
            context[tag.name] = tag.stringValue;
            break;
        case Tag.LIST_TAG:
            let items = tag.elements.map(element => jsonifyTag(element));

            context[tag.name] = items.map(item => {
                let keys = Object.keys(item);

                if (keys.length == 1 && keys[0] === "null") {
                    return item.null;
                }
                else {
                    return item;
                }
            });
            break;
        case Tag.COMPOUND_TAG:
            if (tag.name === null) {
                tag.elements.forEach(element => {
                    jsonifyTag(element, context);
                });
            }
            else {
                let obj = {};

                tag.elements.forEach(element => jsonifyTag(element, obj));
                context[tag.name] = obj;
            }
            break;
        case Tag.INT_ARRAY_TAG:
            context[tag.name] = tag.intValues;
            break;
        default:
            println("unknown tag id: ", tag.id);
            return;
    }

    return context;
}


module.exports = jsonifyTag;
