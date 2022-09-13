import {Composition} from 'remotion';
import { iParhaiLogo } from './iParhaiLogo';
import { Text } from './iParhaiLogo/Text/Text';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="iParhaiLogo"
				component={iParhaiLogo}
				durationInFrames={150}
				fps={10}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to iParhai',
					titleColor: '#FFC300',
				}}
			/>

			{/* <Composition
				id="GreetText"
				component={Text}
				durationInFrames={200}
				fps={20}
				width={1920}
				height={1080}
			/> */}
		</>
	);
};
