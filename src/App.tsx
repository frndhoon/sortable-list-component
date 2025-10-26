import { useState, useRef, type DragEvent } from 'react';

import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, ScrollArea } from '@/components/ui';

type Skill = {
	key: string;
	value: string;
};

// claude dummy data
const ALL_SKILLS: Skill[] = [
	{ key: '1', value: 'JavaScript' },
	{ key: '2', value: 'TypeScript' },
	{ key: '3', value: 'React' },
	{ key: '4', value: 'Vue' },
	{ key: '5', value: 'Angular' },
	{ key: '6', value: 'Node.js' },
	{ key: '7', value: 'Python' },
	{ key: '8', value: 'Java' },
	{ key: '9', value: 'C++' },
	{ key: '10', value: 'Go' },
	{ key: '11', value: 'Rust' },
	{ key: '12', value: 'Swift' },
	{ key: '13', value: 'Kotlin' },
	{ key: '14', value: 'PHP' },
	{ key: '15', value: 'Ruby' },
	{ key: '16', value: 'C#' },
	{ key: '17', value: 'SQL' },
	{ key: '18', value: 'MongoDB' },
	{ key: '19', value: 'Docker' },
	{ key: '20', value: 'Kubernetes' },
];

const App = () => {
	const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
	const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
	const draggedIndexRef = useRef<number | null>(null);

	const availableSkills = ALL_SKILLS.filter(skill => !selectedSkills.find(selected => selected.key === skill.key));
	const suggestedSkills = availableSkills.slice(0, 10);

	const MAX_SKILLS = 5;

	const addSkill = (skillId: string) => {
		const skill = ALL_SKILLS.find(skill => skill.key === skillId);
		if (skill && selectedSkills.length < MAX_SKILLS) {
			setSelectedSkills(prevSkills => [...prevSkills, skill]);
		}
	};
	const removeSkill = (skillId: string) => {
		setSelectedSkills(selectedSkills.filter(skill => skill.key !== skillId));
	};

	const handleDragStart = (index: number) => {
		draggedIndexRef.current = index;
		setDraggedIndex(index);
	};
	const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
		e.preventDefault();
		if (draggedIndexRef.current === index || draggedIndexRef.current === null) return;

		const draggedSkill = selectedSkills[draggedIndexRef.current];
		const withoutDraggedSkills = selectedSkills.filter((_item, index) => index !== draggedIndexRef.current);

		setSelectedSkills([...withoutDraggedSkills.slice(0, index), draggedSkill, ...withoutDraggedSkills.slice(index)]);
		draggedIndexRef.current = index;
	};
	const handleDragEnd = () => {
		draggedIndexRef.current = null;
		setDraggedIndex(null);
	};

	return (
		// 전체 화면 레이아웃
		<div className="h-screen w-full overflow-x-auto overflow-y-auto bg-gray-400">
			{/* 세로, 가로 중앙 정렬 (items-center, justify-center 시 overflow-x/y-auto 왼쪽/위쪽 시작점이 보이지 않음) */}
			<div className="flex h-full w-full flex-col">
				{/* 페이지 컨테이너 (중앙 정렬 및 최소 너비 지정) */}
				<div className="mx-auto my-auto flex min-w-[71.7rem] flex-col items-center gap-y-[1rem]">
					<h1 className="text-40 font-semibold text-blue-200">Select your top 5 tech skills</h1>

					<div className="flex h-[49.885rem] w-full flex-row gap-x-[6.4rem] rounded-[1.6rem] bg-white p-[6.4rem]">
						<div className="flex w-[39.2rem] flex-col gap-y-[1.8rem]">
							{Array.from({ length: MAX_SKILLS }).map((_item, index) => {
								const skill = selectedSkills[index];
								const isDisabled = index > 0 && !selectedSkills[index - 1];

								return skill ? (
									<div
										key={skill.key}
										draggable
										onDragStart={() => handleDragStart(index)}
										onDragOver={e => handleDragOver(e, index)}
										onDragEnd={handleDragEnd}
										className={cn(
											'flex h-[6.2rem] cursor-move items-center justify-between rounded-[0.8rem] border border-blue-200 bg-blue-200 p-[1.6rem]',
											draggedIndex === index ? 'opacity-50' : 'opacity-100',
										)}
									>
										<span className="text-18 font-medium text-white">
											{index + 1}. {skill.value}
										</span>

										<button onClick={() => removeSkill(skill.key)} className="text-white hover:text-gray-300">
											<XIcon className="h-[2rem] w-[2rem]" />
										</button>
									</div>
								) : (
									<Select key={`select-${index}`} onValueChange={addSkill} disabled={isDisabled}>
										<SelectTrigger
											className={cn(
												'text-18 [&_span]:text-18 h-[5.9rem] w-full rounded-[0.8rem] border border-gray-300 bg-gray-100 p-[1.6rem] text-blue-100 shadow-none',
												isDisabled && 'cursor-not-allowed opacity-50',
											)}
										>
											<SelectValue placeholder={index + 1 + '. Add Skill'} />
										</SelectTrigger>
										<SelectContent className="text-18 h-[12.7rem] rounded-[0.8rem] bg-gray-100">
											{availableSkills.map(skill => (
												<SelectItem
													key={skill.key}
													value={skill.key}
													className="text-18 !text-blue-100 hover:bg-gray-300 focus:bg-gray-300"
												>
													{skill.value}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								);
							})}
						</div>

						<div className="flex w-[13.3rem] flex-col gap-y-[1.6rem]">
							<h2 className="text-16 font-semibold text-blue-200">Suggested Skills</h2>

							<ScrollArea className="h-[19rem]" type="always">
								<div className="text-16 mr-[0.5rem] flex flex-col gap-y-[0.6rem]">
									{suggestedSkills.map(skill => (
										<button
											key={skill.key}
											onClick={() => addSkill(skill.key)}
											disabled={selectedSkills.length >= MAX_SKILLS}
											className={cn(
												'w-full rounded-[0.8rem] px-[0.5rem] py-[0.1rem] text-left font-medium text-blue-100 hover:bg-gray-100',
												selectedSkills.length >= MAX_SKILLS ? 'cursor-not-allowed opacity-50' : 'cursor-pointer opacity-100',
											)}
										>
											+ {skill.value}
										</button>
									))}
								</div>
							</ScrollArea>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
