import React from 'react'
import './App.scss'
import { MainPage } from './components/pages/main-page/Main-page'
import { Layout } from './components/layout/Layout'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/pages/task-page/Task-page'
import { NotFoundPage } from './components/pages/not-found/Not-found-page'

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<MainPage />} />
					<Route path="/task/:id" element={<TaskPage />} />
				</Route>
				<Route path="/404" element={<NotFoundPage />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</>
	)
}

export default App
