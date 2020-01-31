let names = ['Mary', 'John', 'Mike', 'Paul', 'Anna', 'Chris'];
let ages = [34, 56, 12, 22, 24, 54];

module.exports = () => {
	const data = { users: [] };
	for (let i = 0; i < 10; i++) {
		let randomName = names[Math.floor(Math.random() * names.length)];
		let randomAges = ages[Math.floor(Math.random() * ages.length)];
		data.users.push({ id: i, name: `${randomName}`, age: `${randomAges}` });
	}
	return data;
};
