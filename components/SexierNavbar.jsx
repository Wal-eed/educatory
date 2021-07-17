import React from 'react';
import {
	chakra,
	HStack,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Box,
	Flex,
	IconButton,
	useColorModeValue,
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	useColorMode,
	SimpleGrid,
	Stack,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Logo } from '@choc-ui/logo';
import { AiFillEye } from 'react-icons/ai';
import { GiOpenBook } from 'react-icons/gi';
import { SiAudiomack } from 'react-icons/si';
import RouterLink from 'next/link';

export default function Header(props) {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const ref = React.useRef();
	const [y, setY] = React.useState(0);
	const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

	const { scrollY } = useViewportScroll();
	React.useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);
	const cl = useColorModeValue('gray.800', 'white');
	const mobileNav = useDisclosure();

	const Section = (props) => {
		const ic = useColorModeValue('brand.600', 'brand.50');
		const hbg = useColorModeValue('gray.50', 'brand.400');
		const tcl = useColorModeValue('gray.900', 'gray.50');
		const dcl = useColorModeValue('gray.500', 'gray.50');
		return (
			<Link m={-3} p={3} display="flex" alignItems="start" rounded="lg" _hover={{ bg: hbg }}>
				<chakra.svg
					flexShrink={0}
					h={6}
					w={6}
					color={ic}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					aria-hidden="true"
				>
					{props.icon}
				</chakra.svg>
				<Box ml={4}>
					<chakra.p fontSize="sm" fontWeight="700" color={tcl}>
						{props.title}
					</chakra.p>
					<chakra.p mt={1} fontSize="sm" color={dcl}>
						{props.children}
					</chakra.p>
				</Box>
			</Link>
		);
	};

	const Features = (props) => {
		const hbg = useColorModeValue('gray.50', 'brand.400');
		const hbgh = useColorModeValue('gray.100', 'brand.500');
		const tcl = useColorModeValue('gray.900', 'gray.50');
		return (
			<React.Fragment>
				<SimpleGrid
					columns={props.h ? { base: 1, md: 3, lg: 5 } : 1}
					pos="relative"
					gap={{ base: 6, sm: 8 }}
					px={5}
					py={6}
					p={{ sm: 8 }}
				>
					<Section title="Visual" icon={<AiFillEye />}>
						See a more visual-based learning exercise.
					</Section>

					<Section title="Textual" icon={<GiOpenBook />}>
						Dive into a rigorous textbook-like learning environment.
					</Section>

					<Section title="Audio" icon={<SiAudiomack />}>
						Listen to a guided audio lesson.
					</Section>
				</SimpleGrid>
			</React.Fragment>
		);
	};

	const MobileNavContent = (
		<VStack
			pos="absolute"
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? 'flex' : 'none'}
			flexDirection="column"
			p={2}
			pb={4}
			m={2}
			bg={bg}
			spacing={3}
			rounded="sm"
			shadow="sm"
		>
			<CloseButton aria-label="Close menu" justifySelf="self-start" onClick={mobileNav.onClose} />
			<Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
				Dashboard
			</Button>
			<Button w="full" variant="solid" colorScheme="brand" leftIcon={<AiOutlineInbox />}>
				Inbox
			</Button>
			<Button w="full" variant="ghost" leftIcon={<BsFillCameraVideoFill />}>
				Videos
			</Button>
		</VStack>
	);
	return (
		<React.Fragment>
			<chakra.header
				ref={ref}
				shadow={y > height ? 'sm' : undefined}
				transition="box-shadow 0.2s"
				bg={bg}
				borderTop="6px solid"
				borderTopColor="brand.400"
				w="full"
				overflowY="hidden"
				borderBottomWidth={2}
				borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
			>
				<chakra.div h="4.5rem" mx="auto" maxW="1200px">
					<Flex w="full" h="full" px="6" alignItems="center" justifyContent="space-between">
						<Flex align="flex-start">
							<RouterLink href="/">
								<HStack>
									<Logo />
									<div>
										<RouterLink href="/">
											<Button
												bg={bg}
												color="gray.500"
												display="inline-flex"
												alignItems="center"
												fontSize="md"
												_hover={{ color: cl }}
												_focus={{ boxShadow: 'none' }}
											>
												Educatory
											</Button>
										</RouterLink>
									</div>
								</HStack>
							</RouterLink>
						</Flex>
						<Flex>
							<HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
								<RouterLink href="/stats">
									<Button
										bg={bg}
										color="gray.500"
										display="inline-flex"
										alignItems="center"
										fontSize="md"
										_hover={{ color: cl }}
										_focus={{ boxShadow: 'none' }}
									>
										Dashboard
									</Button>
								</RouterLink>
								<Popover>
									<PopoverTrigger>
										<Button
											bg={bg}
											color="gray.500"
											display="inline-flex"
											alignItems="center"
											fontSize="md"
											_hover={{ color: cl }}
											_focus={{ boxShadow: 'none' }}
											rightIcon={<IoIosArrowDown />}
										>
											Lesson Mode
										</Button>
									</PopoverTrigger>
									<PopoverContent w="100vw" maxW="md" _focus={{ boxShadow: 'md' }}>
										<Features />
									</PopoverContent>
								</Popover>
							</HStack>
						</Flex>
						<Flex justify="flex-end" align="center" color="gray.400">
							{/* <HStack spacing="5" display={{ base: 'none', md: 'flex' }}>
								<Button colorScheme="brand" variant="ghost" size="sm">
									Sign in
								</Button>
								<Button colorScheme="brand" variant="solid" size="sm">
									Sign up
								</Button>
							</HStack> */}
							<IconButton
								size="md"
								fontSize="lg"
								aria-label={`Switch to ${text} mode`}
								variant="ghost"
								color="current"
								ml={{ base: '0', md: '3' }}
								onClick={toggleMode}
								icon={<SwitchIcon />}
							/>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label="Open menu"
								fontSize="20px"
								color={useColorModeValue('gray.800', 'inherit')}
								variant="ghost"
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
					</Flex>
					{MobileNavContent}
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
}
