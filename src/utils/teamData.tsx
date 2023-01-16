import { FaCode, FaGithub, FaInstagramSquare, FaTwitter, FaLinkedin, FaBlog } from 'react-icons/fa';

import type { TeamCardProps } from '@components/TeamCard';

export const seniorData: TeamCardProps[] = [
	{
		username: 'Madiha Siddique',
		avatar: '/senior/madiha.jpg',
		socialMedia: [
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/MadihahaSid',
				tooltip: 'MadihahaSid',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/madiha-siddique-96000b1b7/',
				tooltip: 'Madiha Siddique',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/madihasid._/',
				tooltip: 'Madiha Siddique',
			},
		],
		badges: [
			{
				color: 'violet',
				text: 'Chairperson',
				icon: 'https://cdn.discordapp.com/role-icons/877076975188082688/e0e4f634c5a4b1b8a3141a48d90e552c.webp',
			},
		],
	},
	{
		username: 'Haseeb Khan',
		avatar: '/senior/has.webp',
		socialMedia: [
			{
				icon: <FaTwitter size={20} />,
				link: 'https://twitter.com/HaseebKhanYT',
				tooltip: 'Haseeb Khan',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/haseebkhanyt',
				tooltip: 'haseebkhanyt',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/0haseeb1/',
				tooltip: 'Haseeb Khan',
			},
		],
		badges: [
			{
				color: 'grape',
				text: 'Vice Chairperson',
				icon: 'https://cdn.discordapp.com/role-icons/877076975188082688/e0e4f634c5a4b1b8a3141a48d90e552c.webp',
			},
		],
	},
	{
		username: 'Syed Abdul Rahman',
		avatar: 'https://avatars.githubusercontent.com/u/69213593',
		socialMedia: [
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/legendhimself',
				tooltip: 'Syed Abdul Rahman',
			},
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-abdul-rahman-a87207201/',
				tooltip: 'Syed Abdul Rahman',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/s_a__rahman786/',
				tooltip: 'Syed Abdul Rahman',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech Captain',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maleha Ansari',
		avatar: '/senior/maleha.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/maleha-ansari-035bc/',
				tooltip: 'Maleha Ansari',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/maleha_07/',
				tooltip: 'Maleha Ansari',
			},
		],
		badges: [
			{
				color: 'yellow',
				text: 'Secretary',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maheen',
		avatar: '/senior/maheen.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syeda-maheen/',
				tooltip: 'Syeda Maheen',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/maaheeenx/',
				tooltip: 'Syeda Maheen',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Treasurer',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Maryum Urooj',
		avatar: '/senior/urooj.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/maryum-urooj-ahmed-9b463a214/',
				tooltip: 'Maryum Urooj',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/perksofbeingmaryum/',
				tooltip: 'Maryum Urooj',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Internal Affairs',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Rafey Ahmed',
		avatar:
			'https://media-exp1.licdn.com/dms/image/C4D03AQGGKhJ0qWGEyw/profile-displayphoto-shrink_400_400/0/1655557395072?e=1674691200&v=beta&t=w2foniAsWYoVINi7wmF11ByjVkbN9HzsZCB1Qsqfre0',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/syed-rafey-ahmed-2b958b195/',
				tooltip: 'Syed Rafey Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/rafeyahmed_/',
				tooltip: 'Syed Rafey Ahmed',
			},
		],
		badges: [
			{
				color: 'greem',
				text: 'Advisor',
				icon: <FaCode size={15} />,
			},
		],
	},
];

export const leadData: TeamCardProps[] = [
	{
		username: 'Mariyam Arshia',
		avatar: '/Junior/arshiya.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mariyam-arshia-0b4621209/?originalSubdomain=in',
				tooltip: 'Mariyam Arshia',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: ' https://www.instagram.com/mariyammm__78/',
				tooltip: 'Mariyam Arshia',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Adeeb Abdul Taher',
		avatar: '/Junior/adeeb.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/adeeb-abdultaher-696229194',
				tooltip: 'Adeeb Abdul Taher',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/adeebabdultaher?igshid=YmMyMTA2M2Y=',
				tooltip: 'Adeeb Abdul Taher',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Masood Ahmed',
		avatar: '/Junior/masood.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/masood-ahmed-mohiuddin',
				tooltip: 'Masood Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/masoodahmed.gm/',
				tooltip: 'Masood Ahmed',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Quazi Affan Ahmed',
		avatar: '/Junior/affan.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/quazi-affan-ahmad-15b6a221b',
				tooltip: 'Affan Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Affan Ahmed',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Yasir Hussain',
		avatar: '/Junior/yasir.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/yasir-hussain-763200215',
				tooltip: 'Yasir Hussain',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/yasir_.hussain_/',
				tooltip: 'Yasir Hussain',
			},
		],
		badges: [
			{
				color: 'grape',
				text: 'Marketing',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Anum Rida',
		avatar: '/Junior/anum.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',

				tooltip: 'Anum Rida',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Anum Rida',
			},
		],
		badges: [
			{
				color: 'pink',
				text: 'Media',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Hadi',
		avatar: '/Junior/hadi.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',

				tooltip: 'Abdul Hadi',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Abdul Hadi',
			},
		],
		badges: [
			{
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Juwairia Baig',
		avatar: '/Junior/baig.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/juwairia-baig-730609201',
				tooltip: 'Juwairia Baig',
			},
			{
				icon: <FaBlog size={20} />,
				link: 'https://juwairiabaig.wordpress.com/author/juwairiabaig',
				tooltip: 'Juwairia Baig Blog',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/juwairia_baig/',
				tooltip: 'Juwairia Baig',
			},
		],
		badges: [
			{
				color: 'green',
				text: 'Documentation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aaqeb Ahmed',
		avatar: '/Junior/aaqeb2.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aaqeb Ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Aaqeb Ahmed',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech ',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Abdul Basith',
		avatar: '/Junior/me.jpg',
		socialMedia: [
			{
				icon: <FaGithub size={20} />,
				link: 'https://github.com/Abdulbasith0792',
				tooltip: 'Abdul Basith',
			},

			{
				icon: <FaLinkedin size={20} />,
				link: 'www.linkedin.com/in/abdulbasith1733',
				tooltip: 'Abdul Basith',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/_abdulbasith07._/',
				tooltip: 'AB',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Asrar Ahmed',
		avatar: '/Junior/asrar.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mohd-asrar-ahmed-738b5922b/',
				tooltip: 'Asrar ahmed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Asrar Ahmed',
			},
		],
		badges: [
			{
				color: 'orange',
				text: 'Tech',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Uzma Begum',
		avatar: '/Junior/uzma1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/uzma-begum-293206201',

				tooltip: 'Uzma Begum',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/you.begum?igshid=YmMyMTA2M2Y=',

				tooltip: 'Uzma Begum',
			},
		],
		badges: [
			{
				color: 'violet',
				text: 'Design',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Zain',
		avatar: '/Junior/zain.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'zain',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Syed Zain',
			},
		],
		badges: [
			{
				color: 'indigo',
				text: 'Content Creation',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Waqas Faraz',
		avatar: '/Junior/far.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/waqas-faraz-b622891b8',
				tooltip: 'Waqas Faraz',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/waqasfaraz2?igshid=Njc5ZjliZWU=',
				tooltip: 'Waqas Faraz',
			},
		],
		badges: [
			{
				color: 'cyan',
				text: 'Social Media',
				icon: <FaCode size={15} />,
			},
		],
	},
];

export const coreTeamData: TeamCardProps[] = [
	{
		username: 'Madiha Wahed',
		avatar: '/core/hr1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/madiha-wahed-6b5872201',
				tooltip: 'Madhiha Wahed',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/madiha_wahed?igshid=Zjc2ZTc4Nzk=',
				tooltip: 'Madhiha Wahed',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Syed Farooq',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Syed Farooq',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Syed Farooq',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Sk Kazna Sultana',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/shaik-kazna-0650a424a',
				tooltip: 'Kazna Sultana',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Kazna Sultana',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Touseef Banu',
		avatar: '/core/hr2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Touseef Banu',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Touseef Banu',
			},
		],
		badges: [
			{
				color: 'red',
				text: 'Human Resources',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Mujataba Uddin',
		avatar: '/core/mujtaba.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/mujtaba-uddin-6941a1246',
				tooltip: 'Mujtaba Uddin',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://instagram.com/mujtabauddin_?igshid=YmMyMTA2M2Y=',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Aziz Ur Rahman',
		avatar: '/core/log1.jpeg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Yusra Asif Gavandi',
		avatar: '/core/log2.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Yusra Asif',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'Yusra Asif',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Mohammad Yaseen',
		avatar: '/core/log3.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/yaseen-mohammed-5a4ba925b',
				tooltip: 'Yaseen',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.instagram.com/i.yaseen.07/',
				tooltip: 'Yaseen',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'Waasi Uddin',
		avatar: '/core/log4.jpg',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.linkedin.com/in/waasiuddin-siddiqui-4bb1ab260',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Logistics',
				icon: <FaCode size={15} />,
			},
		],
	},
];

export const helperData: TeamCardProps[] = [
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Test',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Test',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Test',
				icon: <FaCode size={15} />,
			},
		],
	},
	{
		username: 'TEST PROFILE',
		avatar: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
		socialMedia: [
			{
				icon: <FaLinkedin size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
			{
				icon: <FaInstagramSquare size={20} />,
				link: 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png',
				tooltip: 'test data',
			},
		],
		badges: [
			{
				color: 'blue',
				text: 'Test',
				icon: <FaCode size={15} />,
			},
		],
	},
];
