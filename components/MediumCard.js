import Image from 'next/image'
export default function MediumCard({ img, title }) {
	return (
		<div className='cursor-pointer hover:scale-105 transform transition durati300 ease-out '>
			<div className="relative h-80 w-80 ">
				<Image src={img} layout="fill" className="rounded-xl" />
			</div>
			<div>
				<h2 className="font-bold text-xl">{title}</h2>
			</div>
		</div>
	)
}
