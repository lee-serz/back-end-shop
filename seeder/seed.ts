// import { faker } from '@faker-js/faker'
// import { PrismaClient, Product } from '@prisma/client'
// import * as dotenv from 'dotenv'

// dotenv.config()
// const prisma = new PrismaClient()

// const createProducts = async (quantity: number) => {
// 	const products: Product[] = []

// 	const product = await prisma.product.create({
// 		data: {
// 			name: 'Стул элегантный',
// 			slug: 'stul-elegantni',
// 			description: 'Отличный стул - для отличных посиделок!',
// 			price: 3199,
// 			images: 'https://i.ibb.co/qfpTpny/Photo.jpg',
// 			reviews: {
// 				create: [
// 					{
// 						rating: faker.number.int({ min: 1, max: 5 }),
// 						text: faker.lorem.paragraph(),
// 						user: {
// 							connect: {
// 								id: 2
// 							}
// 						}
// 					},
// 					{
// 						rating: faker.number.int({ min: 1, max: 5 }),
// 						text: faker.lorem.paragraph(),
// 						user: {
// 							connect: {
// 								id: 1
// 							}
// 						}
// 					}
// 				]
// 			}
// 		}
// 	})
// 	products.push(product)
// }

// async function main() {
// 	console.log('Start seeding ...')
// 	await createProducts(1)
// }

// main()
// 	.catch(e => console.error(e))
// 	.finally(async () => {
// 		await prisma.$disconnect()
// 	})
