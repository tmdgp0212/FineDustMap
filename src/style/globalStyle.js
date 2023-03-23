import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
	//https://flatuicolors.com/palette/cn
	--light-gray: #f1f2f6;
	--gray: #ced6e0;
	--blue: #5352ed;
	--vivid-blue: #3742fa;
	--light-blue: #70a1ff;
	--green: #2ed573;
	--yellow: #ffa502;
	--orange: #ff6348;
	--red: #ff4757;
}


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
	color: #222;
	line-height: 1.4;
	background-color: #5352ed;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a, a:hover, a:active, a:link, a:visited {
	color: inherit;
	text-decoration: none;
}
`;

export default GlobalStyle;
