import { SearchIcon } from "lucide-react";
import Header from "./_components/header";
import { Button } from "./_components/ui/button";
import { Input } from "./_components/ui/input";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="p-5">
				<h2 className="font-xl font-bold">Olá, Cliente!</h2>
				<p>Segunda-feira, 05 de agosto</p>

				<div className="flex items-center gap-2 mt-6">
					<Input placeholder="Pesquisar..." />
					<Button>
						<SearchIcon />
					</Button>
				</div>

				<div className="relative mt-6 w-full h-37.5">
					<Image
						src="/Banner01.png"
						fill
						className="object-cover rounded-xl"
						alt="Banner"
					/>
				</div>
			</div>
		</div>
	);
}
