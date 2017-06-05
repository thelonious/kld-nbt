function printTag(tag, indent = 0) {
    printIndent(indent);

    if (tag.name !== null) {
        print(tag.name + ": ");
    }

    switch (tag.id) {
        case 0:
            println("end");
            break;
        case 1:
            println("byte, " + tag.byteValue);
            break;
        case 2:
            println("short, " + tag.shortValue);
            break;
        case 3:
            println("int, " + tag.intValue);
            break;
        case 4:
            println("long, " + tag.longValue);
            break;
        case 5:
            println("float, " + tag.floatValue);
            break;
        case 6:
            println("double, " + tag.doubleValue);
            break;
        case 7:
            printByteArrayTag(tag, indent);
            break;
        case 8:
            println('"' + tag.stringValue + '"');
            break;
        case 9:
            printListTag(tag, indent);
            break;
        case 10:
            printCompoundTag(tag, indent);
            break;
        case 11:
            printIntArrayTag(tag, indent);
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

function printByteArrayTag(tag, indent) {
    println(`[${tag.byteValues.length} elements]`)
}

function printListTag(tag, indent) {
    println(`list, ${tag.elements.length} elements`);

    tag.elements.forEach(element => printTag(element, indent + 1));
}

function printCompoundTag(tag, indent) {
    println(`compound, ${tag.elements.length} elements`);

    tag.elements.forEach(element => printTag(element, indent + 1));
}

function printIntArrayTag(tag) {
    println(`[${tag.intValues.length} elements]`)
}

module.exports = printTag;
