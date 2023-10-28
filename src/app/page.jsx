"use client"
import Image from 'next/image'
import { useState } from 'react'

const imgs = [
	{
		id: 1,
		img: 'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 2,
		img: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 3,
		img: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 4,
		img: 'https://images.pexels.com/photos/4091975/pexels-photo-4091975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	}
]

export default function Home() {
	const [currentSlide, setCurrentSlide] = useState(0)
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<div className="flex gap-5 flex-col">
				<div className="relative w-full h-[300px] bg-red-300">
					<Image fill src={imgs[currentSlide].img} />
				</div>
				<div className="flex gap-5">
					{imgs.map(img => (
						<Image
							onClick={() => setCurrentSlide(img.id - 1)}
							key={img.id}
							className={`object-cover cursor-pointer hover:scale-125 hover:opacity-50 transition ${currentSlide + 1 === img.id ? "scale-75" : ""}`}
							width={100}
							height={150}
							src={img.img}
						/>
					))}
				</div>
			</div>
		</main>
	)
}
