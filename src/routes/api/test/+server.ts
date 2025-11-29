export async function GET({ platform }) {
	if (!platform?.env?.TestingDB) {
		throw new Error('No D1 binding found');
	}

	const results = await platform.env.TestingDB.prepare(
		"SELECT * FROM Customers"
	).run();

  return Response.json(results);
}
