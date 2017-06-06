let Tag = require('./tags/Tag');

function printTag(tag, indent = 0) {
    printIndent(indent);

    if (tag.name !== null) {
        print(tag.name + ": ");
    }

    switch (tag.id) {
        case Tag.END_TAG:
            println("end");
            break;
        case Tag.BYTE_TAG:
            println("byte, " + tag.byteValue);
            break;
        case Tag.SHORT_TAG:
            println("short, " + tag.shortValue);
            break;
        case Tag.INT_TAG:
            println("int, " + tag.intValue);
            break;
        case Tag.LONG_TAG:
            println("long, " + tag.longValue);
            break;
        case Tag.FLOAT_TAG:
            println("float, " + tag.floatValue);
            break;
        case Tag.DOUBLE_TAG:
            println("double, " + tag.doubleValue);
            break;
        case Tag.BYTE_ARRAY_TAG:
            println(`[${tag.byteValues.length} elements]`);
            break;
        case Tag.STRING_TAG:
            // TODO: escape embedded double quotes
            println('"' + tag.stringValue + '"');
            break;
        case Tag.LIST_TAG:
            printListTag(tag, indent);
            break;
        case Tag.COMPOUND_TAG:
            printCompoundTag(tag, indent);
            break;
        case Tag.INT_ARRAY_TAG:
            println(`[${tag.intValues.length} elements]`);
            break;
        default:
            println("unknown tag id: ", tag.id);
            return;
    }
}

function print(text) {
    process.stdout.write(text);
}

function println(text) {
    print(text + "\n");
}

function printIndent(indent) {
    for (var i = 0; i < indent; i++) {
        print("  ");
    }
}

function printListTag(tag, indent) {
    println(`list, ${tag.elements.length} elements`);

    tag.elements.forEach(element => printTag(element, indent + 1));
}

function printCompoundTag(tag, indent) {
    println(`compound, ${tag.elements.length} elements`);

    tag.elements.forEach(element => printTag(element, indent + 1));
}


module.exports = printTag;
