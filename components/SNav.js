import Link from "next/link";
import {
	CollectionIcon,
	HomeIcon,
	UserIcon,

} from "@heroicons/react/outline";
export const SNav = () => (
	<>
		<nav className="pl-20 p-4 bg-primaire" style={{position: 'fixed', width: '100%', top: 0}}>
			<div className="text-white mr-6 ml-10"
				 style={{
					 display: 'flex',
					 justifyContent: 'space-between',
				 }}>

				<div>
					<Link href="/">
						<a className="font-semibold text-xl" style={{color: '#fff'}}>
							Kodago
						</a>
					</Link>
				</div>
				<div>

					<input
						name="nom"
						type="text"
						required
						placeholder="Recherche..."
						className="h-10 border-2 px-4"
						style={{width: 500}}
					/>
				</div>
				<div>
					<UserIcon className="h-8 mb-1 border group-hover:animate-bounce ml-3" style={{color:'white', borderRadius:50, padding:7}}/>
				</div>
			</div>
		</nav>

	<div className="fixed min-h-screen flex">

	{/*	sidebar*/}
		<div className="flex justify-center bg-blue-500 text-blue-100 w-20 space-y-6 py-7 px-2" style={{backgroundColor: '#108ab1'}}>
			<nav className="justify-center" style={{color:'#fff', fontSize: 14}}>
				<a href="#" className="grid justify-center block py-3 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
					<HomeIcon className="h-5 mb-1 group-hover:animate-bounce ml-3" />
					Accueil
				</a>

				<a href="#" className="grid justify-center block py-3 mt-7 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
					<UserIcon className="h-5 mb-1 group-hover:animate-bounce ml-5" />
					Inscription
				</a>

				<a href="#" className="grid justify-center block py-3 mt-7 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
					<CollectionIcon className="h-5 mb-1 group-hover:animate-bounce ml-4" />
					Scolarité
				</a>
			</nav>
		</div>
	</div>
	</>
);
