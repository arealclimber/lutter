import React, { SVGProps } from 'react';

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

function SidebarRow({ Icon, title }: Props) {
	return (
		<>
			{/* <img src={Icon} */}
			<Icon />

			<p>{title}</p>
		</>
	);
}

export default SidebarRow;
