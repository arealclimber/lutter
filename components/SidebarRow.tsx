import React, { SVGProps } from 'react';

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

function SidebarRow({ Icon, title }: Props) {
	return (
		<>
			{/* <img src={Icon} */}
			<Icon color="#A5C4F3" />

			<p>{title}</p>
		</>
	);
}

export default SidebarRow;
