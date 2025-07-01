import TikTokIcon from '@/assets/icons/tiktok-icon.svg';
import FacebookIcon from '@/assets/icons/facebook-icon.svg';
import GooleIcon from '@/assets/icons/google-icon.svg';
import type { ReactNode } from 'react';

export const socailMediaIcons: Record<string, ReactNode> = {
	tiktok: <TikTokIcon />,
	facebook: <FacebookIcon />,
	google: <GooleIcon />,
};
