module.exports = {
	Tag: require('./lib/tags/Tag'),
	EndTag: require('./lib/tags/EndTag'),
	ByteTag: require('./lib/tags/ByteTag'),
	ShortTag: require('./lib/tags/ShortTag'),
	IntTag: require('./lib/tags/IntTag'),
	LongTag: require('./lib/tags/LongTag'),
	FloatTag: require('./lib/tags/FloatTag'),
	DoubleTag: require('./lib/tags/DoubleTag'),
	ByteArrayTag: require('./lib/tags/ByteArrayTag'),
	StringTag: require('./lib/tags/StringTag'),
	ListTag: require('./lib/tags/ListTag'),
	CompoundTag: require('./lib/tags/CompoundTag'),
	IntArrayTag: require('./lib/tags/IntArrayTag'),
	ReadBuffer: require('./lib/ReadBuffer'),

	loadNBTFile: require('./lib/loadNBTFile'),
	printTag: require('./lib/printTag')
};
