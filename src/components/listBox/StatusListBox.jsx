import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const status = [
	{ id: 1, name: "Open", unavailable: false },
	{ id: 2, name: "In-Progress", unavailable: false },
	{ id: 3, name: "Resolved", unavailable: false },
];

export default function StatusListBox() {
	const [selectedStatus, setSelectedStatus] = useState(status[0]);

	return (
		<Listbox value={selectedStatus} onChange={setSelectedStatus}>
			<div className='relative mt-1'>
				<Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
					<span className='block truncate'>{selectedStatus.name}</span>
					<span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
						<SelectorIcon
							className='h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave='transition ease-in duration-100'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
						{status.map((status) => (
							<Listbox.Option
								key={status.id}
								className={({ active }) =>
									`relative cursor-default select-none py-2 pl-1 pr-4 ${
										active ? "bg-amber-100 text-amber-900" : "text-gray-900"
									}`
								}
								value={status}>
								{({ selectedStatus }) => (
									<>
										<span
											className={`block truncate ${
												selectedStatus ? "font-medium" : "font-normal"
											}`}>
											{status.name}
										</span>
										{selectedStatus ? (
											<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
												<CheckIcon className='h-5 w-5' aria-hidden='true' />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
