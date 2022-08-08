// import { connectToDatabase } from '../../utils/mongodb';
// import Employee from "../../models/Employee";

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */

// export async function EmployeeHandler(req, res) {
// 	const { db } = await connectToDatabase();

// 	const data = await db.collection("Employees").find({}).toArray();
		
// 	res.json(data);
// }

// export async function addEmployee(req, res) {
// 	try {
// 		await connectToDatabase();

// 		const Employee = await Employee.create(req.body);

// 		res.json({ Employee });
// 	} catch (error) {
// 		res.json({ error });
// 	}
// }

export default function handler(req, res) {
	res.status(200).json({
		employees: [
			{
				firstName: "Hiruzen",
				lastName: "Sarutobi",
				phoneNumber: "(520) 890 2703",
				email: "HiruzenSarutobi@test.com",
				role: "Admin",
			},
			{
				firstName: "Kakashi",
				lastName: "Hatake",
				phoneNumber: "(520) 064 7840",
				email: "KakashiHatake@test.com",
				role: "Project Manager",
			},
			{
				firstName: "Naruto",
				lastName: "Uzumaki",
				phoneNumber: "(520) 299 0875",
				email: "NarutoUzumaki@test.com",
				role: "Employee",
			},
			{
				firstName: "Sasuke",
				lastName: "Uchiha",
				phoneNumber: "(520) 618 0059",
				email: "SasukeUchiha@test.com",
				role: "Employee",
			},
			{
				firstName: "Sakura",
				lastName: "Haruno",
				phoneNumber: "(520) 102 4080",
				email: "SakuraHaruno@test.com",
				role: "Employee",
			},
			{
				firstName: "Asuma",
				lastName: "Sarutobi",
				phoneNumber: "(520) 174 5068",
				email: "AsumaSarutobi@test.com",
				role: "Project Manager",
			},
			{
				firstName: "Shikamaru",
				lastName: "Nara",
				phoneNumber: "(520) 719 0683",
				email: "ShikamaruNara@test.com",
				role: "Employee",
			},
			{
				firstName: "Ino",
				lastName: "Yamanaka",
				phoneNumber: "(520) 607 0171",
				email: "InoYamanaka@test.com",
				role: "Employee",
			},
			{
				firstName: "Choji",
				lastName: "Akimichi",
				phoneNumber: "(520) 316 1299",
				email: "ChojiAkimichi@test.com",
				role: "Employee",
			},
		],
	});
}
