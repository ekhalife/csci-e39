const config = {
	env: process.env.ENV || `development`,
	studentId: process.env.STUDENT_ID,
	backend: process.env.BACKEND || `localhost:${process.env.PORT}`,
	port: process.env.PORT || 3000,
	db: process.env.DATABASE_URL,
}

export default config
