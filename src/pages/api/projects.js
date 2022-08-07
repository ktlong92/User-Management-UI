// import { connectToDatabase } from "../../utils/mongodb";

// export default async function handler(req, res) {
// 	const { db } = await connectToDatabase();

// 	const data = await db.collection("projects").find({}).toArray();

// 	res.json(data);
// }

export default function handler(req, res) {
	res.status(200).json({
		projects: [
			{
				id: "1",
				title: "Project 1",
				description: "Description of project 1",
				employees:
					"Kakashi Hatake, Naruto Uzamaki, Sasuke Uchiha, Sakura Haruno",
			},
			{
				id: "2",
				title: "Project 2",
				description: "Description of project 1",
				employees:
					"Kakashi Hatake, Naruto Uzamaki, Sasuke Uchiha, Sakura Haruno",
			},
			{
				id: "3",
				title: "Project 3",
				description: "Description of project 1",
				employees:
					"Kakashi Hatake, Naruto Uzamaki, Sasuke Uchiha, Sakura Haruno",
			},
			{
				id: "4",
				title: "Project 4",
				description: "Description of project 1",
				employees:
					"Asuma Sarutobi, Shikamaru Nara, Ino Yamanaka, Choji Akimichi",
			},
			{
				id: "5",
				title: "Project 5",
				description: "Description of project 1",
				employees:
					"Asuma Sarutobi, Shikamaru Nara, Ino Yamanaka, Choji Akimichi",
			},
			{
				id: "6",
				title: "Project 6",
				description: "Description of project 1",
				employees:
					"Asuma Sarutobi, Shikamaru Nara, Ino Yamanaka, Choji Akimichi",
			},
		],
	});
}