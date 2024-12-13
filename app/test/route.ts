import mysql from 'mysql2/promise'

export async function GET() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'mywordpress'
        })

        const [rows] = await connection.execute('SELECT * FROM wp_posts WHERE post_status = "publish" LIMIT 10');

        return Response.json(rows);

        await connection.end();
    } catch (error) {
        console.error('Database connection error:', error);
        return Response.json({message: "Internal server error", error})
    }

}
