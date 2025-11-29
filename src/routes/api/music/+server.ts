export async function GET({ platform }) {
    if (!platform?.env?.MelodyCacheDB) {
        throw new Error('No D1 binding found');
    }

    const results = await platform.env.MelodyCacheDB.prepare(
        "SELECT u.username, m.title, m.platform FROM users u JOIN music_links m ON u.id = m.user_id;"
    ).run();

    return Response.json(results);
}